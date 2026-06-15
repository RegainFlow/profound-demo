# Merge Gate

The workshop gate is intentionally small but maps to production-grade layers.

## Layer 1 - Static And Lint

Command:

```powershell
npm run lint
```

Catches:

- Direct frontend `fetch` outside the data layer.
- Frontend imports from services.
- Inline styles and raw colors in feature/component UI.
- Nondeterministic workshop data.
- TODO/FIXME before presentation.

## Layer 2 - Architecture Policy

The boundary check enforces this rule:

> Frontend files render data. Integration details live in `src/api/`, and visual decisions flow through `src/design-system/`.

This mirrors a real Semgrep/ESLint/import-boundary rule.

## Layer 3 - Behavior Tests

Command:

```powershell
npm test
```

Important tests:

- `services/csv-export.test.mjs` for citation export fields.
- `services/visibility-service.test.mjs` for cache invalidation behavior.
- `services/campaign-export.test.mjs` for customer-facing report fields.

## Layer 4 - Codex First-Pass Review

Use `.agents/skills/first-pass-review/SKILL.md` as the review policy.

Codex should:

- Order findings by severity.
- Flag missing tests and broad diffs.
- Route customer-facing design/UI changes to human review.
- Avoid approving its own work as final.

## Layer 5 - E2E Browser Proof

Command:

```powershell
npm run e2e
```

If Playwright is installed, the script drives Chromium. Otherwise it verifies the app and APIs over HTTP so the workshop remains runnable offline.

Automation and task digest setup is exercised through the Codex app and `exercises/06/`, not through repo scripts or product dashboard UI.
