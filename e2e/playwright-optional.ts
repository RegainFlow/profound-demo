import { startServer } from '../backend/server';

type BrowserPage = {
  goto: (url: string) => Promise<unknown>;
  waitForSelector: (selector: string) => Promise<unknown>;
  getByTestId: (testId: string) => { click: () => Promise<unknown> };
};

type Browser = {
  newPage: (options: { viewport: { width: number; height: number } }) => Promise<BrowserPage>;
  close: () => Promise<unknown>;
};

type Playwright = {
  chromium: {
    launch: () => Promise<Browser>;
  };
};

type VisibilityResponse = {
  score: number;
};

const running = await startServer({ port: 0 });

try {
  const playwright = await loadPlaywright();
  if (playwright) {
    await runBrowserCheck(playwright, running.url);
  } else {
    await runHttpFallback(running.url);
  }
} finally {
  await new Promise((resolve) => running.server.close(resolve));
}

async function loadPlaywright(): Promise<Playwright | null> {
  try {
    const dynamicImport = new Function('specifier', 'return import(specifier)') as (specifier: string) => Promise<unknown>;
    const candidate = await dynamicImport('playwright');
    return isPlaywright(candidate) ? candidate : null;
  } catch {
    return null;
  }
}

async function runBrowserCheck(playwright: Playwright, url: string): Promise<void> {
  const browser = await playwright.chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(url);
    await page.waitForSelector('[data-testid="csv-export"]');
    await page.getByTestId('csv-export').click();
  } finally {
    await browser.close();
  }

  console.log('Playwright E2E check passed');
}

async function runHttpFallback(url: string): Promise<void> {
  const [html, visibility, csv] = await Promise.all([
    fetch(url).then((response) => response.text()),
    fetch(`${url}/api/visibility/scores`).then((response) => response.json() as Promise<unknown>),
    fetch(`${url}/api/citations.csv`).then((response) => response.text())
  ]);

  assertIncludes(html, 'AI Visibility Console');
  assertIncludes(html, '/assets/');
  assertIncludes(csv, 'brand,engine,answerUrl,citationUrl,visibilityScore,sentiment,capturedAt');

  if (!isVisibilityResponse(visibility)) {
    throw new Error('Visibility API did not return a numeric score');
  }

  console.log('HTTP E2E fallback passed; install Playwright for browser screenshots');
}

function assertIncludes(text: string, expected: string): void {
  if (!text.includes(expected)) {
    throw new Error(`Expected response to include: ${expected}`);
  }
}

function isPlaywright(value: unknown): value is Playwright {
  if (!isRecord(value) || !isRecord(value.chromium)) {
    return false;
  }

  return typeof value.chromium.launch === 'function';
}

function isVisibilityResponse(value: unknown): value is VisibilityResponse {
  return isRecord(value) && typeof value.score === 'number';
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
