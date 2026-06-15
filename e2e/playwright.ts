import { chromium, type Browser, type Page } from 'playwright';

import { startServer } from '../backend/server';

type VisibilityResponse = {
  score: number;
};

const running = await startServer({ port: 0 });

try {
  await runBrowserCheck(running.url);
} finally {
  await new Promise((resolve) => running.server.close(resolve));
}

async function runBrowserCheck(url: string): Promise<void> {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await assertDashboardLoads(page, url);
    await assertApiBackedData(page, url);
    await assertJsonPreview(page);
    await assertCsvExportControl(page);
  } finally {
    await closeBrowser(browser);
  }

  console.log('Playwright E2E check passed');
}

async function assertDashboardLoads(page: Page, url: string): Promise<void> {
  await page.goto(url);
  await page.waitForSelector('text=AI Visibility Console');
  await page.waitForSelector('[data-testid="csv-export"]');
}

async function assertApiBackedData(page: Page, url: string): Promise<void> {
  const visibility = await page.evaluate(async (endpoint) => {
    const response = await fetch(endpoint);
    return response.json() as Promise<unknown>;
  }, `${url}/api/visibility/scores`);

  if (!isVisibilityResponse(visibility)) {
    throw new Error('Visibility API did not return a numeric score');
  }
}

async function assertCsvExportControl(page: Page): Promise<void> {
  await page.getByTestId('csv-export').click();
}

async function assertJsonPreview(page: Page): Promise<void> {
  const preview = page.getByTestId('json-preview');
  await preview.waitFor();
  const text = await preview.textContent();

  if (!text?.includes('"reportTone": "customer-facing"')) {
    throw new Error('JSON report preview did not render the customer-facing export payload');
  }
}

async function closeBrowser(browser: Browser): Promise<void> {
  await browser.close();
}

function isVisibilityResponse(value: unknown): value is VisibilityResponse {
  return isRecord(value) && typeof value.score === 'number';
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
