import type { Campaign } from '../../api';
import { ExportButton, HumanReviewBadge } from '../../components';
import { Card, Table } from '../../design-system';
import { CampaignDetail } from './CampaignDetail';
import { ReportPreview } from './ReportPreview';

type CampaignsPageProps = {
  campaigns: Campaign[];
  exportUrl: (id: string) => string;
};

export function CampaignsPage({ campaigns, exportUrl }: CampaignsPageProps) {
  const customerFacing = campaigns.find((campaign) => campaign.reportTone === 'customer-facing') ?? campaigns[0];

  return (
    <section className="page-section" aria-labelledby="campaigns-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Campaigns</p>
          <h2 id="campaigns-title">Report workflow and human gate</h2>
        </div>
      </div>

      <div className="split-layout">
        <Card>
          <Table
            columns={[
              { header: 'Campaign', render: (row) => row.name },
              { header: 'Status', render: (row) => row.status },
              { header: 'Lift', render: (row) => `+${row.visibilityLift}` },
              { header: 'Review', render: (row) => <HumanReviewBadge riskTier={row.riskTier} /> },
              { header: 'Export', render: (row) => <ExportButton href={exportUrl(row.id)} label="JSON" /> }
            ]}
            getKey={(row) => row.id}
            rows={campaigns}
          />
        </Card>
        {customerFacing ? <CampaignDetail campaign={customerFacing} /> : null}
      </div>

      {customerFacing ? <ReportPreview campaign={customerFacing} /> : null}
    </section>
  );
}
