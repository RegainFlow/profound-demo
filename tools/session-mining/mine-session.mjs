import { readFile } from 'node:fs/promises';
import path from 'node:path';

const sessionPath = path.resolve('tools', 'session-mining', 'session-log.md');
const session = await readFile(sessionPath, 'utf8');

const candidates = [
  {
    title: 'Block frontend fetches outside the data layer',
    type: 'deterministic rule',
    owner: 'frontend-lead',
    evidence: count(session, 'src/api') + count(session, 'API contract'),
    artifact: 'tools/lint/check-boundaries.mjs already enforces this pattern.'
  },
  {
    title: 'Route customer-facing chart color changes to human review',
    type: 'skill',
    owner: 'design-lead',
    evidence: count(session, 'human review') + count(session, 'design-sensitive'),
    artifact: '.agents/skills/first-pass-review/SKILL.md should carry the risk-tier rule.'
  },
  {
    title: 'Require repro tests for cache invalidation fixes',
    type: 'AGENTS.md instruction',
    owner: 'backend-lead',
    evidence: count(session, 'repro test') + count(session, 'cache invalidation'),
    artifact: 'backend/AGENTS.md already states this as backend canon.'
  }
].filter((candidate) => candidate.evidence > 0);

console.log('# Session Mining Candidates\n');
for (const candidate of candidates) {
  console.log(`- ${candidate.title}`);
  console.log(`  Type: ${candidate.type}`);
  console.log(`  Owner: ${candidate.owner}`);
  console.log(`  Evidence count: ${candidate.evidence}`);
  console.log(`  Artifact: ${candidate.artifact}`);
}

function count(source, phrase) {
  return source.toLowerCase().split(phrase.toLowerCase()).length - 1;
}
