import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { startServer } from './server.mjs';

async function withServer(testFn) {
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
      const payload = await response.json();

      assert.equal(response.status, 200);
      assert.equal(typeof payload.score, 'number');
      assert.ok(payload.history.length >= 1);
    });
  });

  it('serves model coverage and visibility weights', async () => {
    await withServer(async ({ url }) => {
      const [modelsResponse, weightsResponse] = await Promise.all([
        fetch(`${url}/api/visibility/models`),
        fetch(`${url}/api/visibility/weights`)
      ]);
      const models = await modelsResponse.json();
      const weights = await weightsResponse.json();

      assert.equal(modelsResponse.status, 200);
      assert.equal(weightsResponse.status, 200);
      assert.ok(models.some((model) => model.model === 'ChatGPT'));
      assert.equal(typeof weights.version, 'number');
    });
  });

  it('exports citation CSV with explicit fields', async () => {
    await withServer(async ({ url }) => {
      const response = await fetch(`${url}/api/citations.csv`);
      const text = await response.text();

      assert.equal(response.status, 200);
      assert.match(text.split('\n')[0], /brand,engine,answerUrl,citationUrl,visibilityScore,sentiment,capturedAt/);
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

      const changes = await changesResponse.json();
      const crawlers = await crawlersResponse.json();
      const campaign = await campaignResponse.json();

      assert.equal(changesResponse.status, 200);
      assert.equal(crawlersResponse.status, 200);
      assert.equal(campaignResponse.status, 200);
      assert.ok(changes.length >= 1);
      assert.ok(crawlers.length >= 1);
      assert.equal(campaign.campaign.riskTier, 'human-mandatory');
    });
  });
});
