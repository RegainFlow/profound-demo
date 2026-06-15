---
owner: workshop-facilitator
canon: true
---

# Profound Workshop Repo Instructions

This repository is a Codex workshop kit, not a production Profound system. Preserve the synthetic-data boundary unless the user explicitly asks to connect real systems.

## Context Routing

Read this file first, then open the narrow doc that matches the task:

- Product/API work: `docs/api-contract.md`
- Frontend or visual work: `docs/brand-rules.md`
- Test changes: `docs/testing-philosophy.md`
- Review or risk routing: `docs/review-policy.md`
- PR shape and branch-stack work: `docs/pr-conventions.md`
- Demo delivery and checkpoint intent: `docs/workshop-runbook.md` and `exercises/`

## Working Rules

- Keep changes small enough for a reviewer to understand in one pass.
- Add or update a focused test whenever behavior changes.
- Prefer deterministic checks over repeated natural-language reminders.
- Keep customer-facing UI changes routed to explicit human review.
- Treat real Linear tickets, Codex app automations, and session logs as intent/history, not source of truth about current code.
- Treat `AGENTS.md`, `docs/`, tests, and code as canonical for this demo.

## Verification

Run the narrowest relevant command first, then `npm run gate` before declaring the demo ready.

Useful commands:

```powershell
npm test
npm run lint
npm run e2e
npm start
```

## Workshop Priorities

- Show Codex acting inside the harness in every demo beat.
- Keep the story Profound-specific: autonomous engineers, Linear as coordination spine, no heavyweight PRDs, explicit human gates for design and customer-facing work.
- Leave behind portable patterns, not a mandate to adopt one tool.
