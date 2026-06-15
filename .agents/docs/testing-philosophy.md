# Testing

Open this before fixing bugs, changing behavior, updating boundaries, or touching cache/report/export logic.

## Test Map

- `backend/server.test.ts` covers HTTP routes and served API behavior.
- `services/*.test.ts` covers deterministic business rules, cache invalidation, CSV export, and campaign report payloads.
- `tools/lint/*.ts` covers architectural rules that should not rely on repeated review comments.
- `e2e/playwright.ts` covers visible app/API smoke proof.

## Rules

- Add a focused behavior test when behavior changes.
- Behavioral tests should fail against the old bug; avoid decorative assertions that only prove a response has data.
- Visibility scoring tests must protect precision and rounding boundaries.
- Prefer deterministic assertions over snapshots or broad smoke coverage.
- Use browser/E2E proof for visible regressions that unit tests cannot see.
- Decorative tests belong only in checkpoint artifacts that demonstrate the bad state.

## Checks

- Backend HTTP behavior: `npm run test:backend`
- Service behavior: `npm run test:services`
- Static policy: `npm run lint:static`
- Frontend boundary policy: `npm run lint:boundaries`
- Semgrep scan: `npm run scan`
- Install browser: `npm run e2e:install`
- Visible regression: `npm run e2e`
- Full behavior suite: `npm test`
