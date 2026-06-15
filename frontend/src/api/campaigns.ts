import { getJson } from './client';
import type { Campaign, CampaignExportPayload } from './types';

export function getCampaigns() {
  return getJson<Campaign[]>('/api/campaigns');
}

export function getCampaignExport(id: string) {
  return getJson<CampaignExportPayload>(exportCampaignJSON(id));
}

export function exportCampaignJSON(id: string) {
  return `/api/campaigns/${encodeURIComponent(id)}/export?format=json`;
}
