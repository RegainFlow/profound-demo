import { Badge } from '../design-system';

type HumanReviewBadgeProps = {
  riskTier: 'agent-gated' | 'human-on-contract' | 'human-mandatory';
};

export function HumanReviewBadge({ riskTier }: HumanReviewBadgeProps) {
  if (riskTier === 'human-mandatory') {
    return <Badge tone="danger">Human review</Badge>;
  }

  if (riskTier === 'human-on-contract') {
    return <Badge tone="warning">Contract review</Badge>;
  }

  return <Badge tone="success">Agent gated</Badge>;
}
