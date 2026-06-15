import type { ReactNode } from 'react';

import { Card } from './Card';

type MetricCardProps = {
  label: string;
  value: ReactNode;
  detail?: ReactNode;
};

export function MetricCard({ detail, label, value }: MetricCardProps) {
  return (
    <Card className="metric-card">
      <span className="metric-label">{label}</span>
      <strong>{value}</strong>
      {detail ? <span className="metric-detail">{detail}</span> : null}
    </Card>
  );
}
