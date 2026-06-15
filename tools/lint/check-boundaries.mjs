import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '..', '..');
const frontendRoot = path.join(repoRoot, 'src');

const violations = [];

for (const file of await listFiles(frontendRoot)) {
  const relative = path.relative(repoRoot, file).replaceAll('\\', '/');
  const source = await readFile(file, 'utf8');

  if (/\bfetch\s*\(/.test(source) && relative !== 'src/api/client.ts') {
    violations.push(`${relative}: frontend files must call src/api/client.ts instead of fetch directly`);
  }

  if (source.includes('../services/') || source.includes('/services/')) {
    violations.push(`${relative}: frontend files must not import service modules`);
  }

  if (/style=\{\{/.test(source) && !relative.startsWith('src/design-system/')) {
    violations.push(`${relative}: feature and component UI must use design-system classes instead of inline styles`);
  }

  if (/#[0-9a-fA-F]{3,8}\b/.test(source) && !relative.startsWith('src/design-system/')) {
    violations.push(`${relative}: feature and component UI must use design tokens instead of raw color literals`);
  }

  if (/from ['"].*\/tokens['"]/.test(source) && !relative.startsWith('src/design-system/')) {
    violations.push(`${relative}: design tokens should be wrapped by design-system primitives for feature code`);
  }
}

if (violations.length > 0) {
  console.error(violations.join('\n'));
  process.exit(1);
}

console.log('boundary check passed');

async function listFiles(directory) {
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

  return files.flat().filter((file) => /\.(ts|tsx|js|jsx|html)$/.test(file));
}
