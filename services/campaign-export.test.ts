import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { campaignExportPayload, campaignExportText } from './campaign-export';

describe('campaign export', () => {
  it('exports only the fields allowed for a campaign report', () => {
    const payload = campaignExportPayload('customer-report');

    assert.ok(payload);
    assert.equal(payload.campaign.name, 'Customer Report Preview');
    assert.equal(payload.campaign.riskTier, 'human-mandatory');
    assert.equal(payload.campaign.reportTone, 'customer-facing');
    assert.equal('owner' in payload.campaign, false);
  });

  it('returns null for unknown campaigns', () => {
    assert.equal(campaignExportText('missing'), null);
  });
});
