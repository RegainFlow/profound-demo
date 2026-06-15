import type { Campaign } from '../../api';
import { HumanReviewBadge } from '../../components';
import { Card } from '../../design-system';

type CampaignDetailProps = {
  campaign: Campaign;
};

export function CampaignDetail({ campaign }: CampaignDetailProps) {
  return (
    <Card className="campaign-detail">
      <div className="section-heading compact">
        <p className="eyebrow">Selected Campaign</p>
        <h2>{campaign.name}</h2>
      </div>
      <dl className="detail-list">
        <div>
          <dt>Audience</dt>
          <dd>{campaign.audience}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>{campaign.owner}</dd>
        </div>
        <div>
          <dt>Report tone</dt>
          <dd>{campaign.reportTone}</dd>
        </div>
        <div>
          <dt>Review route</dt>
          <dd>
            <HumanReviewBadge riskTier={campaign.riskTier} />
          </dd>
        </div>
      </dl>
    </Card>
  );
}
