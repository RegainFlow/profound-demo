import { citations } from './data';
import type { Citation } from './types';

export const CITATION_CSV_FIELDS = [
  'brand',
  'engine',
  'answerUrl',
  'citationUrl',
  'visibilityScore',
  'sentiment',
  'capturedAt'
] as const satisfies readonly (keyof Citation)[];

export function escapeCsv(value: unknown): string {
  const text = String(value ?? '');
  if (!/[",\n\r]/.test(text)) {
    return text;
  }

  return `"${text.replaceAll('"', '""')}"`;
}

export function citationsToCsv(rows: readonly Citation[] = citations): string {
  const header = CITATION_CSV_FIELDS.join(',');
  const body = rows.map((row) => CITATION_CSV_FIELDS.map((field) => escapeCsv(row[field])).join(','));
  return [header, ...body].join('\n');
}
