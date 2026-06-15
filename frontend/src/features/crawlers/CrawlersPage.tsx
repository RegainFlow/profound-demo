import type { CrawlerHit } from '../../api';
import { CrawlerHeatmap } from '../../components';
import { CrawlerBreakdown } from './CrawlerBreakdown';

type CrawlersPageProps = {
  hits: CrawlerHit[];
};

export function CrawlersPage({ hits }: CrawlersPageProps) {
  return (
    <section className="page-section" aria-labelledby="crawlers-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Crawlers</p>
          <h2 id="crawlers-title">AI crawler activity</h2>
        </div>
      </div>
      <div className="split-layout">
        <CrawlerHeatmap hits={hits} />
        <CrawlerBreakdown hits={hits} />
      </div>
    </section>
  );
}
