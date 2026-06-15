import type { Campaign } from '../../api';
import { HumanReviewBadge } from '../../components';
import { Card } from '../../design-system';

type ReportPreviewProps = {
  campaign: Campaign;
};

export function ReportPreview({ campaign }: ReportPreviewProps) {
  return (
    <Card className="report-preview">
      <div>
        <p className="eyebrow">Customer-Facing Preview</p>
        <h2>{campaign.name}</h2>
        <p>
          Visibility improved by {campaign.visibilityLift} points across {campaign.citedPages} cited pages. This copy is
          intentionally routed to human review before customer use.
        </p>
      </div>
      <div style={{ background: '#7c3aed', borderRadius: '999px', color: '#ffffff', padding: '8px 12px' }}>
        {campaign.riskTier}
      </div>
    </Card>
  );
}
