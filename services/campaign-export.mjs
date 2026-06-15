import { campaigns } from './data.mjs';

export function campaignExportPayload(id, rows = campaigns) {
  const campaign = rows.find((row) => row.id === id);

  if (!campaign) {
    return null;
  }

  return {
    generatedAt: '2026-06-15T09:00:00-04:00',
    campaign: Object.fromEntries(campaign.exportFields.map((field) => [field, campaign[field]]))
  };
}

export function campaignExportText(id, rows = campaigns) {
  const payload = campaignExportPayload(id, rows);

  if (!payload) {
    return null;
  }

  return [
    `Campaign: ${payload.campaign.name}`,
    `Status: ${payload.campaign.status}`,
    `Visibility lift: ${payload.campaign.visibilityLift}`,
    `Cited pages: ${payload.campaign.citedPages}`,
    payload.campaign.riskTier ? `Risk tier: ${payload.campaign.riskTier}` : null,
    `Generated: ${payload.generatedAt}`
  ]
    .filter(Boolean)
    .join('\n');
}
