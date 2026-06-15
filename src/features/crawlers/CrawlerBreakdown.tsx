import type { CrawlerHit } from '../../api';
import { Badge, Card } from '../../design-system';

type CrawlerBreakdownProps = {
  hits: CrawlerHit[];
};

export function CrawlerBreakdown({ hits }: CrawlerBreakdownProps) {
  return (
    <Card className="crawler-breakdown">
      <div className="section-heading compact">
        <p className="eyebrow">Coverage Detail</p>
        <h2>Last seen by page</h2>
      </div>
      {hits.map((hit) => (
        <div className="compact-row" key={`${hit.crawler}-${hit.path}`}>
          <div>
            <strong>{hit.path}</strong>
            <span>{hit.requests} requests, last seen {new Date(hit.lastSeen).toLocaleString()}</span>
          </div>
          <Badge tone={hit.status === 'healthy' ? 'success' : 'warning'}>{hit.crawler}</Badge>
        </div>
      ))}
    </Card>
  );
}
