import { getJson } from './client';
import type { Campaign } from './types';

export function getCampaigns() {
  return getJson<Campaign[]>('/api/campaigns');
}

export function exportCampaignJSON(id: string) {
  return `/api/campaigns/${encodeURIComponent(id)}/export?format=json`;
}
