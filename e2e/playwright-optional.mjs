import { startServer } from '../backend/server.mjs';

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

async function loadPlaywright() {
  try {
    return await import('playwright');
  } catch {
    return null;
  }
}

async function runBrowserCheck(playwright, url) {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(url);
  await page.waitForSelector('[data-testid="csv-export"]');
  await page.getByTestId('csv-export').click();
  await browser.close();
  console.log('Playwright E2E check passed');
}

async function runHttpFallback(url) {
  const [html, visibility, csv] = await Promise.all([
    fetch(url).then((response) => response.text()),
    fetch(`${url}/api/visibility/scores`).then((response) => response.json()),
    fetch(`${url}/api/citations.csv`).then((response) => response.text())
  ]);

  assertIncludes(html, 'AI Visibility Console');
  assertIncludes(html, '/assets/');
  assertIncludes(csv, 'brand,engine,answerUrl,citationUrl,visibilityScore,sentiment,capturedAt');

  if (typeof visibility.score !== 'number') {
    throw new Error('Visibility API did not return a numeric score');
  }

  console.log('HTTP E2E fallback passed; install Playwright for browser screenshots');
}

function assertIncludes(text, expected) {
  if (!text.includes(expected)) {
    throw new Error(`Expected response to include: ${expected}`);
  }
}
