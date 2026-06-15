import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getVisibilitySnapshot } from './visibility-service';

describe('weak workshop smoke test', () => {
  it('returns a numeric visibility score', () => {
    const snapshot = getVisibilitySnapshot({ forceRefresh: true });

    assert.equal(typeof snapshot.score, 'number');
  });
});
