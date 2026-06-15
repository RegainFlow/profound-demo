import type { VisibilitySnapshot } from '../../api';
import { Card } from '../../design-system';

type TrendSummaryProps = {
  history: VisibilitySnapshot['history'];
};

export function TrendSummary({ history }: TrendSummaryProps) {
  return (
    <Card className="trend-summary" aria-label="Visibility trend">
      {history.map((point) => (
        <div className="trend-point" key={point.day}>
          <meter max="100" min="0" value={point.score}>
            {point.score}
          </meter>
          <strong>{point.score}</strong>
          <span>{point.day}</span>
        </div>
      ))}
    </Card>
  );
}
