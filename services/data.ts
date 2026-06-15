import type { Campaign, Citation, CitationChange, CrawlerEvent, ModelCoverage, VisibilitySignals } from './types';

export const citations: Citation[] = [
  {
    brand: 'Profound',
    engine: 'ChatGPT',
    answerUrl: 'https://answers.example/chatgpt/ai-search-platforms',
    citationUrl: 'https://www.tryprofound.com/',
    visibilityScore: 94,
    sentiment: 'positive',
    mentionType: 'direct',
    capturedAt: '2026-06-15T08:20:00-04:00'
  },
  {
    brand: 'Profound',
    engine: 'Perplexity',
    answerUrl: 'https://answers.example/perplexity/marketing-engineer',
    citationUrl: 'https://www.tryprofound.com/marketing-engineer',
    visibilityScore: 88,
    sentiment: 'positive',
    mentionType: 'direct',
    capturedAt: '2026-06-15T08:32:00-04:00'
  },
  {
    brand: 'Competitor A',
    engine: 'Gemini',
    answerUrl: 'https://answers.example/gemini/brand-visibility',
    citationUrl: 'https://example.com/competitor-a/research',
    visibilityScore: 63,
    sentiment: 'neutral',
    mentionType: 'comparison',
    capturedAt: '2026-06-15T08:41:00-04:00'
  },
  {
    brand: 'Profound',
    engine: 'Claude',
    answerUrl: 'https://answers.example/claude/ai-crawler-analytics',
    citationUrl: 'https://www.tryprofound.com/engineering/ai-crawler-analytics',
    visibilityScore: 82,
    sentiment: 'positive',
    mentionType: 'source-cited',
    capturedAt: '2026-06-15T08:58:00-04:00'
  }
];

export const citationChanges: CitationChange[] = [
  {
    date: '2026-06-09',
    engine: 'ChatGPT',
    brand: 'Profound',
    previousScore: 86,
    currentScore: 94,
    driver: 'New platform page cited in AI search answer'
  },
  {
    date: '2026-06-11',
    engine: 'Perplexity',
    brand: 'Profound',
    previousScore: 80,
    currentScore: 88,
    driver: 'Marketing Engineer page promoted to direct citation'
  },
  {
    date: '2026-06-13',
    engine: 'Gemini',
    brand: 'Competitor A',
    previousScore: 58,
    currentScore: 63,
    driver: 'Competitor research page entered comparison answer'
  }
];

export const crawlerEvents: CrawlerEvent[] = [
  {
    crawler: 'GPTBot',
    path: '/marketing-engineer',
    requests: 384,
    lastSeen: '2026-06-15T08:51:00-04:00',
    status: 'healthy'
  },
  {
    crawler: 'PerplexityBot',
    path: '/engineering/ai-crawler-analytics',
    requests: 141,
    lastSeen: '2026-06-15T08:43:00-04:00',
    status: 'healthy'
  },
  {
    crawler: 'ClaudeBot',
    path: '/platform',
    requests: 96,
    lastSeen: '2026-06-15T07:57:00-04:00',
    status: 'watch'
  }
];

export const campaigns: Campaign[] = [
  {
    id: 'launch-q3',
    name: 'Q3 Answer Visibility Launch',
    owner: 'Maya',
    status: 'active',
    riskTier: 'human-on-contract',
    audience: 'Revenue and brand leadership',
    visibilityLift: 12,
    citedPages: 8,
    reportTone: 'customer-facing',
    exportFields: ['name', 'status', 'visibilityLift', 'citedPages', 'riskTier']
  },
  {
    id: 'crawler-coverage',
    name: 'Crawler Coverage Recovery',
    owner: 'Leo',
    status: 'watch',
    riskTier: 'agent-gated',
    audience: 'Engineering',
    visibilityLift: 5,
    citedPages: 3,
    reportTone: 'internal',
    exportFields: ['name', 'status', 'visibilityLift', 'citedPages']
  },
  {
    id: 'customer-report',
    name: 'Customer Report Preview',
    owner: 'Design Lead',
    status: 'review',
    riskTier: 'human-mandatory',
    audience: 'Customer executive review',
    visibilityLift: 9,
    citedPages: 6,
    reportTone: 'customer-facing',
    exportFields: ['name', 'status', 'visibilityLift', 'citedPages', 'riskTier', 'reportTone']
  }
];

export const visibilitySignals: VisibilitySignals = {
  version: 3,
  weights: {
    citations: 0.45,
    freshness: 0.22,
    crawlerCoverage: 0.2,
    sentiment: 0.13
  },
  history: [
    { day: 'Mon', score: 72 },
    { day: 'Tue', score: 75 },
    { day: 'Wed', score: 77 },
    { day: 'Thu', score: 81 },
    { day: 'Fri', score: 84 },
    { day: 'Sat', score: 83 },
    { day: 'Sun', score: 87 }
  ]
};

export const visibilityModels: ModelCoverage[] = [
  {
    model: 'ChatGPT',
    score: 94,
    coverage: 91,
    trend: 8,
    status: 'leading'
  },
  {
    model: 'Perplexity',
    score: 88,
    coverage: 86,
    trend: 6,
    status: 'gaining'
  },
  {
    model: 'Claude',
    score: 82,
    coverage: 78,
    trend: 4,
    status: 'stable'
  },
  {
    model: 'Gemini',
    score: 74,
    coverage: 69,
    trend: -2,
    status: 'watch'
  }
];
