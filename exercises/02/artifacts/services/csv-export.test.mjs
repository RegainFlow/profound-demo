import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { citationsToCsv } from './csv-export.mjs';

describe('citation CSV export', () => {
  it('includes the explicit review fields for citation export', () => {
    const csv = citationsToCsv([{ brand: 'Profound', engine: 'ChatGPT', answerUrl: 'a', citationUrl: 'c', visibilityScore: 94, sentiment: 'positive', capturedAt: '2026-06-15' }]);

    assert.equal(csv.split('\n')[0], 'brand,engine,answerUrl,citationUrl,visibilityScore,sentiment,capturedAt');
  });
});
