import type { CitationChange } from '../api';
import { Card, TrendIndicator } from '../design-system';

type CitationTimelineProps = {
  changes: CitationChange[];
};

export function CitationTimeline({ changes }: CitationTimelineProps) {
  return (
    <Card className="timeline">
      <div className="section-heading compact">
        <p className="eyebrow">Citation Changes</p>
        <h2>What moved this week</h2>
      </div>
      <div className="timeline-list">
        {changes.map((change) => (
          <div className="timeline-item" key={`${change.date}-${change.engine}-${change.brand}`}>
            <time>{change.date}</time>
            <strong>
              {change.brand} on {change.engine}
            </strong>
            <span>{change.driver}</span>
            <TrendIndicator value={change.currentScore - change.previousScore} />
          </div>
        ))}
      </div>
    </Card>
  );
}
