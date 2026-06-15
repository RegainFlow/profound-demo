import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '..', '..');
const scannedRoots = ['backend', 'frontend', 'services', 'tools'];
const violations: string[] = [];

for (const root of scannedRoots) {
  for (const file of await listFiles(path.join(repoRoot, root))) {
    const relative = path.relative(repoRoot, file).replaceAll('\\', '/');
    const source = await readFile(file, 'utf8');

    if (source.includes('console.log(') && !relative.startsWith('backend/server.ts') && !relative.startsWith('tools/')) {
      violations.push(`${relative}: console.log is only allowed in runnable scripts`);
    }

    if (/Math\.random\s*\(/.test(source)) {
      violations.push(`${relative}: workshop data must be deterministic`);
    }

    const bannedMarkers = ['TO' + 'DO', 'FIX' + 'ME'];
    if (bannedMarkers.some((marker) => source.includes(marker))) {
      violations.push(`${relative}: remove presentation placeholder markers before presenting`);
    }
  }
}

if (violations.length > 0) {
  console.error(violations.join('\n'));
  process.exit(1);
}

console.log('static check passed');

async function listFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return listFiles(fullPath);
      }
      return fullPath;
    })
  );

  return files.flat().filter((file) => /\.(ts|tsx|mjs|js|html|css|md)$/.test(file));
}
