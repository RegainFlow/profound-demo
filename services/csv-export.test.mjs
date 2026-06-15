import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { citationsToCsv, escapeCsv } from './csv-export.mjs';

describe('citation CSV export', () => {
  it('includes the fields reviewers expect for citation export', () => {
    const csv = citationsToCsv([
      {
        brand: 'Profound',
        engine: 'ChatGPT',
        answerUrl: 'https://answers.example/a',
        citationUrl: 'https://www.tryprofound.com/',
        visibilityScore: 94,
        sentiment: 'positive',
        capturedAt: '2026-06-15T08:20:00-04:00'
      }
    ]);

    assert.equal(csv.split('\n')[0], 'brand,engine,answerUrl,citationUrl,visibilityScore,sentiment,capturedAt');
    assert.match(csv, /Profound,ChatGPT,https:\/\/answers\.example\/a/);
  });

  it('escapes commas and quotes', () => {
    assert.equal(escapeCsv('Profound, "AI Search"'), '"Profound, ""AI Search"""');
  });
});
