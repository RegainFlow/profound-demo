import { getJson } from './client';
import type { ModelCoverage, VisibilitySnapshot } from './types';

export function getScores() {
  return getJson<VisibilitySnapshot>('/api/visibility/scores');
}

export function getModelCoverage() {
  return getJson<ModelCoverage[]>('/api/visibility/models');
}
