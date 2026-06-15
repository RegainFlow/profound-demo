import { campaigns } from './data';
import type { Campaign, CampaignExportPayload, CampaignExportValues } from './types';

const GENERATED_AT = '2026-06-15T09:00:00-04:00';

export function campaignExportPayload(id: string, rows: readonly Campaign[] = campaigns): CampaignExportPayload | null {
  const campaign = rows.find((row) => row.id === id);

  if (!campaign) {
    return null;
  }

  return {
    generatedAt: GENERATED_AT,
    campaign: pickCampaignExportFields(campaign)
  };
}

export function campaignExportText(id: string, rows: readonly Campaign[] = campaigns): string | null {
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

function pickCampaignExportFields(campaign: Campaign): Partial<CampaignExportValues> {
  const picked: Partial<CampaignExportValues> = {};

  for (const field of campaign.exportFields) {
    switch (field) {
      case 'name':
        picked.name = campaign.name;
        break;
      case 'status':
        picked.status = campaign.status;
        break;
      case 'visibilityLift':
        picked.visibilityLift = campaign.visibilityLift;
        break;
      case 'citedPages':
        picked.citedPages = campaign.citedPages;
        break;
      case 'riskTier':
        picked.riskTier = campaign.riskTier;
        break;
      case 'reportTone':
        picked.reportTone = campaign.reportTone;
        break;
    }
  }

  return picked;
}
