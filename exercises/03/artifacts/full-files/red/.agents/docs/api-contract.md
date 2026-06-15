# API Boundary

Open this before changing backend routes, frontend API clients, service data shapes, CSV exports, or customer report payloads.

## Code Paths

- `backend/server.ts` owns HTTP routes and response status handling.
- `services/*.ts` owns synthetic data, business rules, CSV/report generation, and cache behavior.
- `frontend/src/api/` is the only frontend boundary for backend data.
- `frontend/src/api/client.ts` is the only frontend file that may call `fetch()`.

## Rules

- Keep the repo synthetic unless the user explicitly asks to connect real systems.
- Feature components import typed API helpers, not `services/` modules or raw URLs.
- Add compatibility aliases only when they support an exercise checkpoint or demo beat.
- CSV and report exports must keep explicit, tested fields and escaping.
- JSON report preview uses the existing campaign export payload and must be fetched through `frontend/src/api/`.
- Visibility score payloads may expose display values and precise internal values; round only at the display/export boundary.

## Checks

- API/route change: `npm test`
- Frontend contract change: `npm run build`
- Boundary concern: `npm run lint`
