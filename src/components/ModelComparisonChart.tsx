import type { ModelCoverage } from '../api';
import { Card, TrendIndicator } from '../design-system';

type ModelComparisonChartProps = {
  models: ModelCoverage[];
};

export function ModelComparisonChart({ models }: ModelComparisonChartProps) {
  return (
    <Card className="model-chart">
      <div className="section-heading compact">
        <p className="eyebrow">Model Coverage</p>
        <h2>Answer-engine spread</h2>
      </div>
      <div className="model-list">
        {models.map((model) => (
          <div className="model-row" key={model.model}>
            <div>
              <strong>{model.model}</strong>
              <span>{model.coverage}% coverage</span>
            </div>
            <meter max="100" min="0" value={model.score}>
              {model.score}
            </meter>
            <TrendIndicator value={model.trend} />
          </div>
        ))}
      </div>
    </Card>
  );
}
