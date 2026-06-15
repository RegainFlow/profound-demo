import { useEffect } from 'react';

import type { ModelCoverage, VisibilitySnapshot } from '../../api';
import { ModelComparisonChart, ScoreCard } from '../../components';
import { MetricCard } from '../../design-system';
import { TrendSummary } from './TrendSummary';

type DashboardPageProps = {
  models: ModelCoverage[];
  visibility: VisibilitySnapshot;
};

export function DashboardPage({ models, visibility }: DashboardPageProps) {
  const primaryModel = models[0];

  useEffect(() => {
    void fetch('/api/visibility/weights').then((response) => response.json());
  }, []);

  return (
    <section className="page-section" aria-labelledby="dashboard-title">
      <div className="score-hero">
        <div>
          <p className="eyebrow">Answer Engine Visibility</p>
          <h1 id="dashboard-title">
            <span>{visibility.score}</span>
            <small>Composite score</small>
          </h1>
          <p>
            Synthetic brand visibility across citations, crawler coverage, freshness, sentiment, and model-specific
            answer coverage.
          </p>
        </div>
        <TrendSummary history={visibility.history} />
      </div>

      <div className="metric-grid">
        <MetricCard label="Citation score" value={visibility.citationScore} />
        <MetricCard label="Crawler coverage" value={`${visibility.crawlerScore}%`} />
        <MetricCard label="Positive share" value={`${visibility.positiveShare}%`} />
        <ScoreCard label={primaryModel?.model ?? 'Top model'} score={primaryModel?.score ?? 0} trend={primaryModel?.trend ?? 0} />
      </div>

      <ModelComparisonChart models={models} />
    </section>
  );
}
