import { citations, crawlerEvents, visibilityModels, visibilitySignals } from './data';
import type {
  ModelCoverage,
  VisibilitySignalName,
  VisibilitySignals,
  VisibilitySnapshot,
  VisibilityWeightsPayload
} from './types';

type VisibilityCache = {
  version: number | null;
  snapshot: VisibilitySnapshot | null;
};

let cache: VisibilityCache = {
  version: null,
  snapshot: null
};

function weightedAverage(values: readonly number[]): number {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function displayNumber(value: number): number {
  return Math.round(value);
}

export function computeVisibilitySnapshot(signals: VisibilitySignals = visibilitySignals): VisibilitySnapshot {
  const profoundCitations = citations.filter((row) => row.brand === 'Profound');
  const citationScore = weightedAverage(profoundCitations.map((row) => row.visibilityScore));
  const crawlerScore = (crawlerEvents.filter((event) => event.status === 'healthy').length / crawlerEvents.length) * 100;
  const latestScore = signals.history.at(-1)?.score ?? 0;
  const positiveShare =
    profoundCitations.length === 0
      ? 0
      : profoundCitations.filter((row) => row.sentiment === 'positive').length / profoundCitations.length;

  const preciseScore =
    citationScore * signals.weights.citations +
    latestScore * signals.weights.freshness +
    crawlerScore * signals.weights.crawlerCoverage +
    positiveShare * 100 * signals.weights.sentiment;

  return {
    score: displayNumber(preciseScore),
    preciseScore,
    citationScore: displayNumber(citationScore),
    preciseCitationScore: citationScore,
    crawlerScore: displayNumber(crawlerScore),
    preciseCrawlerScore: crawlerScore,
    positiveShare: Math.round(positiveShare * 100),
    history: signals.history
  };
}

export function getVisibilitySnapshot({ forceRefresh = false }: { forceRefresh?: boolean } = {}): VisibilitySnapshot {
  if (!cache.snapshot || forceRefresh || cache.version !== visibilitySignals.version) {
    const snapshot = computeVisibilitySnapshot(visibilitySignals);
    cache = {
      version: visibilitySignals.version,
      snapshot
    };
    return snapshot;
  }

  return cache.snapshot;
}

export function getModelCoverage(): ModelCoverage[] {
  return visibilityModels.map((model) => ({ ...model }));
}

export function getVisibilityWeights(): VisibilityWeightsPayload {
  return {
    version: visibilitySignals.version,
    weights: { ...visibilitySignals.weights }
  };
}

export function updateSignalWeight(name: VisibilitySignalName, value: number): number {
  if (!Object.hasOwn(visibilitySignals.weights, name)) {
    throw new Error(`Unknown signal weight: ${name}`);
  }

  visibilitySignals.weights[name] = value;
  visibilitySignals.version += 1;
  return visibilitySignals.version;
}

export function resetVisibilityCache(): void {
  cache = {
    version: null,
    snapshot: null
  };
}
