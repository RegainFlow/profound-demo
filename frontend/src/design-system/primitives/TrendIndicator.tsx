import { tokens } from '../tokens';

type TrendIndicatorProps = {
  value: number;
};

export function TrendIndicator({ value }: TrendIndicatorProps) {
  const direction = value >= 0 ? 'up' : 'down';
  const label = value >= 0 ? `+${value}` : String(value);

  return (
    <span
      className={`trend trend-${direction}`}
      data-brand-color={tokens.colors.brand.primary}
      aria-label={`${label} trend`}
    >
      <span aria-hidden="true">{value >= 0 ? '▲' : '▼'}</span>
      {label}
    </span>
  );
}
