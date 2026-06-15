// Lesson artifact: enforce frontend API and design-system boundaries.
// Real implementation lives at tools/lint/check-boundaries.mjs.

const allowedFetchFile = 'frontend/src/api/client.ts';
const ruleSummary = [
  `fetch() is allowed only in ${allowedFetchFile}`,
  'frontend files must not import backend service modules',
  'feature/component UI must not use inline styles',
  'feature/component UI must not use raw color literals'
];

console.log(ruleSummary.join('\n'));
