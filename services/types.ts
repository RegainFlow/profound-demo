export type Sentiment = 'positive' | 'neutral' | 'negative';
export type MentionType = 'direct' | 'comparison' | 'source-cited';
export type CrawlerStatus = 'healthy' | 'watch' | 'blocked';
export type CampaignStatus = 'active' | 'watch' | 'review';
export type RiskTier = 'agent-gated' | 'human-on-contract' | 'human-mandatory';
export type ReportTone = 'internal' | 'customer-facing';
export type ModelStatus = 'leading' | 'gaining' | 'stable' | 'watch';

export type Citation = {
  brand: string;
  engine: string;
  answerUrl: string;
  citationUrl: string;
  visibilityScore: number;
  sentiment: Sentiment;
  mentionType: MentionType;
  capturedAt: string;
};

export type CitationChange = {
  date: string;
  engine: string;
  brand: string;
  previousScore: number;
  currentScore: number;
  driver: string;
};

export type CrawlerEvent = {
  crawler: string;
  path: string;
  requests: number;
  lastSeen: string;
  status: CrawlerStatus;
};

export type CampaignExportField = 'name' | 'status' | 'visibilityLift' | 'citedPages' | 'riskTier' | 'reportTone';

export type Campaign = {
  id: string;
  name: string;
  owner: string;
  status: CampaignStatus;
  riskTier: RiskTier;
  audience: string;
  visibilityLift: number;
  citedPages: number;
  reportTone: ReportTone;
  exportFields: readonly CampaignExportField[];
};

export type VisibilityWeights = {
  citations: number;
  freshness: number;
  crawlerCoverage: number;
  sentiment: number;
};

export type VisibilitySignalName = keyof VisibilityWeights;

export type VisibilityHistoryPoint = {
  day: string;
  score: number;
};

export type VisibilitySignals = {
  version: number;
  weights: VisibilityWeights;
  history: readonly VisibilityHistoryPoint[];
};

export type ModelCoverage = {
  model: string;
  score: number;
  coverage: number;
  trend: number;
  status: ModelStatus;
};

export type VisibilitySnapshot = {
  score: number;
  citationScore: number;
  crawlerScore: number;
  positiveShare: number;
  history: readonly VisibilityHistoryPoint[];
};

export type VisibilityWeightsPayload = {
  version: number;
  weights: VisibilityWeights;
};

export type CampaignExportValues = Pick<Campaign, CampaignExportField>;

export type CampaignExportPayload = {
  generatedAt: string;
  campaign: Partial<CampaignExportValues>;
};
