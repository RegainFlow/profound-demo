import type { Citation, CitationChange } from '../../api';
import { CitationTimeline, ExportButton } from '../../components';
import { Badge, Card, Table } from '../../design-system';
import { CompetitorPanel } from './CompetitorPanel';

type CitationsPageProps = {
  changes: CitationChange[];
  citations: Citation[];
  csvUrl: string;
};

export function CitationsPage({ changes, citations, csvUrl }: CitationsPageProps) {
  return (
    <section className="page-section" aria-labelledby="citations-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Citations</p>
          <h2 id="citations-title">Cited pages and competitors</h2>
        </div>
        <ExportButton href={csvUrl} label="Export CSV" testId="csv-export" />
      </div>

      <div className="split-layout">
        <Card>
          <Table
            columns={[
              { header: 'Brand', render: (row) => row.brand },
              { header: 'Engine', render: (row) => row.engine },
              { header: 'Score', render: (row) => row.visibilityScore },
              {
                header: 'Sentiment',
                render: (row) => <Badge tone={row.sentiment === 'positive' ? 'success' : 'info'}>{row.sentiment}</Badge>
              }
            ]}
            getKey={(row) => `${row.brand}-${row.engine}-${row.capturedAt}`}
            rows={citations}
          />
        </Card>
        <CompetitorPanel citations={citations} />
      </div>

      <CitationTimeline changes={changes} />
    </section>
  );
}
