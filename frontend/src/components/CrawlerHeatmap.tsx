import type { CrawlerHit } from '../api';
import { Badge, Card } from '../design-system';

type CrawlerHeatmapProps = {
  hits: CrawlerHit[];
};

export function CrawlerHeatmap({ hits }: CrawlerHeatmapProps) {
  return (
    <Card className="crawler-heatmap">
      <div className="section-heading compact">
        <p className="eyebrow">Crawler Hits</p>
        <h2>AI crawler coverage</h2>
      </div>
      <div className="crawler-grid">
        {hits.map((hit) => (
          <div className="crawler-cell" key={`${hit.crawler}-${hit.path}`}>
            <strong>{hit.crawler}</strong>
            <span>{hit.path}</span>
            <meter max="400" min="0" value={hit.requests}>
              {hit.requests}
            </meter>
            <Badge tone={hit.status === 'healthy' ? 'success' : 'warning'}>{hit.status}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
