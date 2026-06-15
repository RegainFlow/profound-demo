import { useEffect, useState } from 'react';

import {
  citationCsvUrl,
  exportCampaignJSON,
  getCampaignExport,
  getCampaigns,
  getCitationChanges,
  getCitations,
  getCrawlerHits,
  getModelCoverage,
  getScores,
  type Campaign,
  type Citation,
  type CitationChange,
  type CrawlerHit,
  type ModelCoverage,
  type VisibilitySnapshot
} from './api';
import { CampaignsPage } from './features/campaigns/CampaignsPage';
import { CitationsPage } from './features/citations/CitationsPage';
import { CrawlersPage } from './features/crawlers/CrawlersPage';
import { DashboardPage } from './features/dashboard/DashboardPage';

type AppData = {
  campaigns: Campaign[];
  changes: CitationChange[];
  citations: Citation[];
  crawlers: CrawlerHit[];
  models: ModelCoverage[];
  visibility: VisibilitySnapshot;
};

export function App() {
  const [data, setData] = useState<AppData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const [visibility, models, citations, changes, crawlers, campaigns] = await Promise.all([
        getScores(),
        getModelCoverage(),
        getCitations(),
        getCitationChanges(),
        getCrawlerHits(),
        getCampaigns()
      ]);

      if (mounted) {
        setData({ campaigns, changes, citations, crawlers, models, visibility });
      }
    }

    load().catch((loadError: unknown) => {
      if (mounted) {
        setError(loadError instanceof Error ? loadError.message : 'Failed to load workshop data');
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return <main className="app-shell error-state">{error}</main>;
  }

  if (!data) {
    return <main className="app-shell loading-state">Loading Profound visibility console...</main>;
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Workshop Demo</p>
          <h1>Profound AI Visibility Console</h1>
        </div>
        <div className="status-strip" aria-label="system status">
          <span className="status-dot" />
          <span>Harness online</span>
        </div>
      </header>

      <DashboardPage models={data.models} visibility={data.visibility} />
      <CitationsPage changes={data.changes} citations={data.citations} csvUrl={citationCsvUrl()} />
      <CrawlersPage hits={data.crawlers} />
      <CampaignsPage campaigns={data.campaigns} exportPreview={getCampaignExport} exportUrl={exportCampaignJSON} />
    </main>
  );
}
