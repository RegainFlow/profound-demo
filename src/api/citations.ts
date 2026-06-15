import { getJson } from './client';
import type { Citation, CitationChange } from './types';

export function getCitations() {
  return getJson<Citation[]>('/api/citations');
}

export function getCitationChanges() {
  return getJson<CitationChange[]>('/api/citations/changes');
}

export function citationCsvUrl() {
  return '/api/citations.csv';
}
