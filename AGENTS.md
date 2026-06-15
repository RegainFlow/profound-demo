---
owner: workshop-facilitator
canon: true
---

# Profound Workshop Repo Instructions

This repository is a Codex workshop kit, not a production Profound system. Preserve the synthetic-data boundary unless the user explicitly asks to connect real systems.

## Context Routing

Read this file first, then open the narrow doc that matches the task:

- Backend/API or data-shape work: `backend/AGENTS.md`, `services/AGENTS.md`, `.agents/docs/api-contract.md`
- Frontend, visual, or report-preview work: `frontend/AGENTS.md`, `.agents/docs/brand-rules.md`
- Test or deterministic-rule changes: `.agents/docs/testing-philosophy.md`
- Review, risk, or human-gate routing: `.agents/docs/review-policy.md`
- PR shape or merge readiness: `.agents/docs/pr-conventions.md`, `.agents/docs/merge-gate.md`
- Demo delivery and checkpoint intent: `.agents/docs/workshop-runbook.md`, `.agents/docs/codex-surface-map.md`, and `exercises/`

## Working Rules

- Keep changes small enough for a reviewer to understand in one pass.
- Add or update a focused test whenever behavior changes.
- Prefer deterministic checks over repeated natural-language reminders.
- Keep customer-facing UI changes routed to explicit human review.
- Treat real Linear tickets, Codex app automations, and session logs as intent/history, not source of truth about current code.
- Treat `AGENTS.md`, `.agents/docs/`, tests, and code as canonical for this demo.

## Verification

Run the narrowest relevant command first, then `npm run gate` before declaring the demo ready.

Useful commands:

```powershell
npm run typecheck
npm run lint:static
npm run lint:boundaries
npm run test:backend
npm run test:services
npm run build:web
npm run e2e
npm test
npm run lint
npm run check
npm start
```

## Workshop Priorities

- Show Codex acting inside the harness in every demo beat.
- Keep the story Profound-specific: autonomous engineers, Linear as coordination spine, no heavyweight PRDs, explicit human gates for design and customer-facing work.
- Leave behind portable patterns, not a mandate to adopt one tool.
