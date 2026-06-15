export type VisibilitySnapshot = {
  score: number;
  citationScore: number;
  crawlerScore: number;
  positiveShare: number;
  history: Array<{ day: string; score: number }>;
};

export type ModelCoverage = {
  model: string;
  score: number;
  coverage: number;
  trend: number;
  status: 'leading' | 'gaining' | 'stable' | 'watch';
};

export type Citation = {
  brand: string;
  engine: string;
  answerUrl: string;
  citationUrl: string;
  visibilityScore: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  mentionType: string;
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

export type CrawlerHit = {
  crawler: string;
  path: string;
  requests: number;
  lastSeen: string;
  status: 'healthy' | 'watch' | 'blocked';
};

export type Campaign = {
  id: string;
  name: string;
  owner: string;
  status: 'active' | 'watch' | 'review';
  riskTier: 'agent-gated' | 'human-on-contract' | 'human-mandatory';
  audience: string;
  visibilityLift: number;
  citedPages: number;
  reportTone: 'internal' | 'customer-facing';
  exportFields: string[];
};
