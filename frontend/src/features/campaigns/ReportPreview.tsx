import type { Campaign, CampaignExportPayload } from '../../api';
import { HumanReviewBadge } from '../../components';
import { Card } from '../../design-system';

type ReportPreviewProps = {
  campaign: Campaign;
  preview: CampaignExportPayload | null;
};

export function ReportPreview({ campaign, preview }: ReportPreviewProps) {
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
      <HumanReviewBadge riskTier={campaign.riskTier} />
      <pre aria-label="JSON report preview" className="json-preview" data-testid="json-preview">
        {preview ? JSON.stringify(preview, null, 2) : 'Loading JSON preview...'}
      </pre>
    </Card>
  );
}
