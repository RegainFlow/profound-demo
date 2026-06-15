import { MetricCard, TrendIndicator } from '../design-system';

type ScoreCardProps = {
  label: string;
  score: number;
  trend: number;
};

export function ScoreCard({ label, score, trend }: ScoreCardProps) {
  return <MetricCard detail={<TrendIndicator value={trend} />} label={label} value={score} />;
}
