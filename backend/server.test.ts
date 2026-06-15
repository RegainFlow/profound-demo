import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { startServer } from './server';
import type { RunningServer } from './server';

type JsonRecord = Record<string, unknown>;

async function withServer(testFn: (running: RunningServer) => Promise<void>): Promise<void> {
  const running = await startServer({ port: 0 });
  try {
    await testFn(running);
  } finally {
    await new Promise((resolve) => running.server.close(resolve));
  }
}

describe('workshop server', () => {
  it('serves the visibility API', async () => {
    await withServer(async ({ url }) => {
      const response = await fetch(`${url}/api/visibility/scores`);
      const payload = await responseJsonRecord(response);

      assert.equal(response.status, 200);
      assert.equal(typeof payload.score, 'number');
      assert.ok(Array.isArray(payload.history));
      assert.ok(payload.history.length >= 1);
    });
  });

  it('serves model coverage and visibility weights', async () => {
    await withServer(async ({ url }) => {
      const [modelsResponse, weightsResponse] = await Promise.all([
        fetch(`${url}/api/visibility/models`),
        fetch(`${url}/api/visibility/weights`)
      ]);
      const models = await responseJsonArray(modelsResponse);
      const weights = await responseJsonRecord(weightsResponse);

      assert.equal(modelsResponse.status, 200);
      assert.equal(weightsResponse.status, 200);
      assert.ok(models.some((model) => isJsonRecord(model) && model.model === 'ChatGPT'));
      assert.equal(typeof weights.version, 'number');
    });
  });

  it('exports citation CSV with explicit fields', async () => {
    await withServer(async ({ url }) => {
      const response = await fetch(`${url}/api/citations.csv`);
      const text = await response.text();

      assert.equal(response.status, 200);
      assert.match(text.split('\n')[0] ?? '', /brand,engine,answerUrl,citationUrl,visibilityScore,sentiment,capturedAt/);
      assert.match(text, /Profound/);
    });
  });

  it('serves citation changes, crawler hits, and campaign exports', async () => {
    await withServer(async ({ url }) => {
      const [changesResponse, crawlersResponse, campaignResponse] = await Promise.all([
        fetch(`${url}/api/citations/changes`),
        fetch(`${url}/api/crawlers/hits`),
        fetch(`${url}/api/campaigns/customer-report/export?format=json`)
      ]);

      const changes = await responseJsonArray(changesResponse);
      const crawlers = await responseJsonArray(crawlersResponse);
      const campaign = await responseJsonRecord(campaignResponse);
      const campaignRecord = isJsonRecord(campaign.campaign) ? campaign.campaign : {};

      assert.equal(changesResponse.status, 200);
      assert.equal(crawlersResponse.status, 200);
      assert.equal(campaignResponse.status, 200);
      assert.ok(changes.length >= 1);
      assert.ok(crawlers.length >= 1);
      assert.equal(campaignRecord.riskTier, 'human-mandatory');
    });
  });

});

async function responseJsonRecord(response: Response): Promise<JsonRecord> {
  const payload: unknown = await response.json();
  assert.ok(isJsonRecord(payload));
  return payload;
}

async function responseJsonArray(response: Response): Promise<unknown[]> {
  const payload: unknown = await response.json();
  assert.ok(Array.isArray(payload));
  return payload;
}

function isJsonRecord(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
