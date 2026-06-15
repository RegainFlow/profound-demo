import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getVisibilitySnapshot, resetVisibilityCache, updateSignalWeight } from './visibility-service';

describe('visibility cache', () => {
  it('invalidates cached scores when signal weights change', () => {
    resetVisibilityCache();
    const before = getVisibilitySnapshot();
    updateSignalWeight('crawlerCoverage', 0.32);
    const after = getVisibilitySnapshot();

    assert.notEqual(after.score, before.score);
  });
});
