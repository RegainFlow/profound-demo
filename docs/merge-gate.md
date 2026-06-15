# Merge Gate

The workshop gate is intentionally small but maps to production-grade layers.

## Layer 1 - Build

Command:

```powershell
npm run build
```

Why it exists:

- TypeScript catches invalid frontend contracts and component props.
- Vite proves the `frontend/` app can produce the `dist/` build served by `backend/server.mjs`.

## Layer 2 - Static And Lint

Command:

```powershell
npm run lint
```

Catches:

- Direct frontend `fetch` outside the API client.
- Frontend imports from services.
- Inline styles and raw colors in feature/component UI.
- Nondeterministic workshop data.
- TODO/FIXME before presentation.

## Layer 3 - Architecture Policy

The boundary check enforces this rule:

> Frontend files render data. Integration details live in `frontend/src/api/`, and visual decisions flow through `frontend/src/design-system/`.

This mirrors a real Semgrep/ESLint/import-boundary rule.

## Layer 4 - Behavior Tests

Command:

```powershell
npm test
```

Important tests:

- `services/csv-export.test.mjs` for citation export fields.
- `services/visibility-service.test.mjs` for cache invalidation behavior.
- `services/campaign-export.test.mjs` for customer-facing report fields.

## Layer 5 - Codex First-Pass Review

Use `.agents/skills/first-pass-review/SKILL.md` as the review policy.

Codex should:

- Order findings by severity.
- Flag missing tests and broad diffs.
- Route customer-facing design/UI changes to human review.
- Avoid approving its own work as final.

## Layer 6 - E2E Browser Proof

Command:

```powershell
npm run e2e
```

If Playwright is installed, the script drives Chromium. Otherwise it verifies the app and APIs over HTTP so the workshop remains runnable offline.

Automation and task digest setup is exercised through the Codex app and `exercises/06/`, not through repo scripts or product dashboard UI.

## Where It Runs

- Local/Codex: run the narrow command first while developing, then `npm run gate` before handing work back.
- Codex hook template: `templates/codex-config-hooks.toml` runs lint/tests after a task and `npm run gate` before handoff.
- GitHub: `.github/workflows/merge-gate.yml` runs `npm ci` and `npm run gate` on pull requests to `main` and manual dispatch.
