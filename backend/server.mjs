import { createReadStream } from 'node:fs';
import { access, readFile } from 'node:fs/promises';
import { createServer as createHttpServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { campaignExportPayload, campaignExportText } from '../services/campaign-export.mjs';
import { campaigns, citationChanges, citations, crawlerEvents } from '../services/data.mjs';
import { citationsToCsv } from '../services/csv-export.mjs';
import { getModelCoverage, getVisibilitySnapshot, getVisibilityWeights } from '../services/visibility-service.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const distRoot = path.join(repoRoot, 'dist');

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml; charset=utf-8'],
  ['.csv', 'text/csv; charset=utf-8']
]);

function sendJson(response, payload, statusCode = 200) {
  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store'
  });
  response.end(JSON.stringify(payload, null, 2));
}

function sendText(response, text, contentType = 'text/plain; charset=utf-8', statusCode = 200) {
  response.writeHead(statusCode, {
    'content-type': contentType,
    'cache-control': 'no-store'
  });
  response.end(text);
}

async function sendStatic(request, response, pathname) {
  const root = await staticRoot();
  const safePath = pathname === '/' ? '/index.html' : pathname;
  const requested = path.normalize(safePath).replace(/^(\.\.[/\\])+/, '');
  const fullPath = path.join(root, requested);

  if (!fullPath.startsWith(root)) {
    sendText(response, 'Forbidden', 'text/plain; charset=utf-8', 403);
    return;
  }

  try {
    await access(fullPath);
  } catch {
    if (!path.extname(fullPath) && root === distRoot) {
      await sendStatic(request, response, '/index.html');
      return;
    }

    sendText(response, 'Not found', 'text/plain; charset=utf-8', 404);
    return;
  }

  const extension = path.extname(fullPath);
  response.writeHead(200, {
    'content-type': mimeTypes.get(extension) ?? 'application/octet-stream',
    'cache-control': 'no-store'
  });
  createReadStream(fullPath).pipe(response);
}

async function staticRoot() {
  return distRoot;
}

export function createRequestHandler() {
  return async function requestHandler(request, response) {
    const url = new URL(request.url, 'http://localhost');

    try {
      if (url.pathname === '/api/visibility' || url.pathname === '/api/visibility/scores') {
        sendJson(response, getVisibilitySnapshot());
        return;
      }

      if (url.pathname === '/api/visibility/models') {
        sendJson(response, getModelCoverage());
        return;
      }

      if (url.pathname === '/api/visibility/weights') {
        sendJson(response, getVisibilityWeights());
        return;
      }

      if (url.pathname === '/api/citations') {
        sendJson(response, citations);
        return;
      }

      if (url.pathname === '/api/citations/changes') {
        sendJson(response, citationChanges);
        return;
      }

      if (url.pathname === '/api/citations.csv') {
        sendText(response, citationsToCsv(), 'text/csv; charset=utf-8');
        return;
      }

      if (url.pathname === '/api/crawler-events' || url.pathname === '/api/crawlers/hits') {
        sendJson(response, crawlerEvents);
        return;
      }

      if (url.pathname === '/api/campaigns') {
        sendJson(response, campaigns);
        return;
      }

      const campaignExportMatch = url.pathname.match(/^\/api\/campaigns\/([^/]+)\/export$/);
      if (campaignExportMatch) {
        const id = campaignExportMatch[1];
        const format = url.searchParams.get('format') ?? 'json';
        const payload = format === 'txt' ? campaignExportText(id) : campaignExportPayload(id);

        if (!payload) {
          sendJson(response, { error: 'Campaign not found' }, 404);
          return;
        }

        if (format === 'txt') {
          sendText(response, payload, 'text/plain; charset=utf-8');
          return;
        }

        sendJson(response, payload);
        return;
      }

      if (url.pathname === '/api/workshop/run-of-show') {
        const runbook = await readFile(path.join(repoRoot, 'docs', 'workshop-runbook.md'), 'utf8');
        sendText(response, runbook, 'text/markdown; charset=utf-8');
        return;
      }

      await sendStatic(request, response, url.pathname);
    } catch (error) {
      sendJson(response, { error: error.message }, 500);
    }
  };
}

export async function startServer({ port = Number(process.env.PORT ?? 4173), host = '127.0.0.1', retries = 10 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const candidatePort = port === 0 ? 0 : port + attempt;

    try {
      return await listenOnPort({ port: candidatePort, host });
    } catch (error) {
      if (error.code !== 'EADDRINUSE' || port === 0 || attempt === retries) {
        throw error;
      }
    }
  }
}

function listenOnPort({ port, host }) {
  const server = createHttpServer(createRequestHandler());

  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, host, () => {
      server.off('error', reject);
      const address = server.address();
      const assignedPort = typeof address === 'object' && address ? address.port : port;
      resolve({ server, port: assignedPort, host, url: `http://${host}:${assignedPort}` });
    });
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const { url } = await startServer();
  console.log(`Profound Codex workshop demo running at ${url}`);
}
