import { citations, crawlerEvents, visibilityModels, visibilitySignals } from './data.mjs';

let cache = {
  version: null,
  snapshot: null
};

function weightedAverage(values) {
  if (values.length === 0) {
    return 0;
  }

  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

export function computeVisibilitySnapshot(signals = visibilitySignals) {
  const citationScore = weightedAverage(citations.filter((row) => row.brand === 'Profound').map((row) => row.visibilityScore));
  const crawlerScore = Math.round((crawlerEvents.filter((event) => event.status === 'healthy').length / crawlerEvents.length) * 100);
  const latestScore = signals.history.at(-1)?.score ?? 0;
  const positiveShare = citations.filter((row) => row.brand === 'Profound' && row.sentiment === 'positive').length / citations.filter((row) => row.brand === 'Profound').length;

  const score = Math.round(
    citationScore * signals.weights.citations +
      latestScore * signals.weights.freshness +
      crawlerScore * signals.weights.crawlerCoverage +
      positiveShare * 100 * signals.weights.sentiment
  );

  return {
    score,
    citationScore,
    crawlerScore,
    positiveShare: Math.round(positiveShare * 100),
    history: signals.history
  };
}

export function getVisibilitySnapshot({ forceRefresh = false } = {}) {
  if (!cache.snapshot || forceRefresh || cache.version !== visibilitySignals.version) {
    cache = {
      version: visibilitySignals.version,
      snapshot: computeVisibilitySnapshot(visibilitySignals)
    };
  }

  return cache.snapshot;
}

export function getModelCoverage() {
  return visibilityModels.map((model) => ({ ...model }));
}

export function getVisibilityWeights() {
  return {
    version: visibilitySignals.version,
    weights: { ...visibilitySignals.weights }
  };
}

export function updateSignalWeight(name, value) {
  if (!Object.hasOwn(visibilitySignals.weights, name)) {
    throw new Error(`Unknown signal weight: ${name}`);
  }

  visibilitySignals.weights[name] = value;
  visibilitySignals.version += 1;
  return visibilitySignals.version;
}

export function resetVisibilityCache() {
  cache = {
    version: null,
    snapshot: null
  };
}
