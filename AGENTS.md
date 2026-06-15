---
owner: workshop-facilitator
canon: true
---
## Context Routing

Read this file first, then open the narrow doc that matches the task:

- Backend/API or data-shape work: `backend/AGENTS.md`, `services/AGENTS.md`, `.agents/docs/api-contract.md`
- Frontend, visual, or report-preview work: `frontend/AGENTS.md`, `.agents/docs/brand-rules.md`
- Test or deterministic-rule changes: `.agents/docs/testing-philosophy.md`
- Visibility score, report band, or score export changes: `.agents/docs/visibility-scoring.md`
- Review, risk, or human-gate routing: `.agents/docs/review-policy.md`
- PR shape or merge readiness: `.agents/docs/pr-conventions.md`, `.agents/docs/merge-gate.md`
- Codex lifecycle hook changes: `.agents/docs/hooks.md`
- Demo delivery and checkpoint intent: `.agents/docs/workshop-runbook.md`, `.agents/docs/codex-surface-map.md`, and `exercises/`

## Working Rules

- Keep changes small enough for a reviewer to understand in one pass.
- Add or update a focused test whenever behavior changes.
- Prefer deterministic checks over repeated natural-language reminders.
- Preserve score precision internally; round visibility values only at display/export boundaries.
- Keep customer-facing UI changes routed to explicit human review.
- Treat real Linear tickets, Codex app automations, and session logs as intent/history, not source of truth about current code.
- Treat `AGENTS.md`, `.agents/docs/`, tests, and code as canonical for this demo.
