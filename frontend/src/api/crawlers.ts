import { getJson } from './client';
import type { CrawlerHit } from './types';

export function getCrawlerHits() {
  return getJson<CrawlerHit[]>('/api/crawlers/hits');
}
