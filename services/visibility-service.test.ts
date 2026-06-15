import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { computeVisibilitySnapshot, getVisibilitySnapshot, resetVisibilityCache, updateSignalWeight } from './visibility-service';

describe('visibility cache', () => {
  it('invalidates cached scores when signal weights change', () => {
    resetVisibilityCache();
    const before = getVisibilitySnapshot();

    updateSignalWeight('crawlerCoverage', 0.32);
    const after = getVisibilitySnapshot();

    assert.notEqual(after.score, before.score);
  });
});

describe('visibility scoring precision', () => {
  it('preserves internal precision until the display boundary', () => {
    const snapshot = computeVisibilitySnapshot();

    assert.equal(snapshot.score, Math.round(snapshot.preciseScore));
    assert.notEqual(snapshot.preciseScore, snapshot.score);
    assert.equal(snapshot.citationScore, Math.round(snapshot.preciseCitationScore));
  });
});
