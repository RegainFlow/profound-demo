import { citations } from './data.mjs';

export const CITATION_CSV_FIELDS = [
  'brand',
  'engine',
  'answerUrl',
  'citationUrl',
  'visibilityScore',
  'sentiment',
  'capturedAt'
];

export function escapeCsv(value) {
  const text = String(value ?? '');
  if (!/[",\n\r]/.test(text)) {
    return text;
  }

  return `"${text.replaceAll('"', '""')}"`;
}

export function citationsToCsv(rows = citations) {
  const header = CITATION_CSV_FIELDS.join(',');
  const body = rows.map((row) => CITATION_CSV_FIELDS.map((field) => escapeCsv(row[field])).join(','));
  return [header, ...body].join('\n');
}
