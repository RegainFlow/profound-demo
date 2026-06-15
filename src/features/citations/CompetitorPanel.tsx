import type { Citation } from '../../api';
import { Badge, Card } from '../../design-system';

type CompetitorPanelProps = {
  citations: Citation[];
};

export function CompetitorPanel({ citations }: CompetitorPanelProps) {
  const competitors = citations.filter((citation) => citation.brand !== 'Profound');

  return (
    <Card className="competitor-panel">
      <div className="section-heading compact">
        <p className="eyebrow">Competitors</p>
        <h2>Comparison mentions</h2>
      </div>
      {competitors.map((citation) => (
        <div className="compact-row" key={`${citation.brand}-${citation.engine}`}>
          <div>
            <strong>{citation.brand}</strong>
            <span>{citation.citationUrl}</span>
          </div>
          <Badge tone="info">{citation.engine}</Badge>
        </div>
      ))}
    </Card>
  );
}
