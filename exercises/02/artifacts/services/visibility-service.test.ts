import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { computeVisibilitySnapshot } from './visibility-service';

describe('visibility scoring precision', () => {
  it('preserves internal precision until the display boundary', () => {
    const snapshot = computeVisibilitySnapshot();

    assert.equal(snapshot.score, Math.round(snapshot.preciseScore));
    assert.notEqual(snapshot.preciseScore, snapshot.score);
    assert.equal(snapshot.citationScore, Math.round(snapshot.preciseCitationScore));
  });
});
