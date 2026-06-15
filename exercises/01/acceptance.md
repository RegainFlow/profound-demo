# Acceptance 01: Foundation Context

Expected outcome:

- Root, frontend, backend, and service instructions are present and short.
- Agent operating docs live in `.agents/docs/`, including project layout and visibility scoring.
- Customer-facing and design changes are explicitly routed to human review.
- `exercises/01/artifacts/` mirrors the AGENTS and docs added by this lesson.
- A PR reviewer can identify premature rounding in `services/visibility-service.ts` from docs even if weak tests pass, when prompted to audit the scoring policy target.

Verification:

```powershell
npm test
npm run build
```

Demo prompt:

```text
Review this PR against the new visibility scoring policy. Inspect services/visibility-service.ts even if it is not changed in the diff.
```
