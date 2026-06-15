---
owner: workshop-facilitator
canon: true
---

# Profound Demo 1 Instructions

This repository is a Codex workshop kit, not a production Profound system. Preserve the synthetic-data boundary unless the user explicitly asks to connect real systems.

## Context Routing

Read this file first, then open the narrow doc that matches the task:

- Repo layout or ownership questions: `.agents/docs/project-layout.md`
- Backend/API work: `backend/AGENTS.md`, `services/AGENTS.md`, `.agents/docs/api-contract.md`
- Frontend work: `frontend/AGENTS.md`
- Visibility score, report band, or score export changes: `.agents/docs/project-layout.md`, `.agents/docs/visibility-scoring.md`

## Working Rules

- Keep changes small enough for a reviewer to understand in one pass.
- Add or update a focused test whenever behavior changes.
- Prefer deterministic checks over repeated natural-language reminders.
- Preserve score precision internally; round visibility values only at display/export boundaries.
- Keep customer-facing UI changes routed to explicit human review.
- Treat real Linear tickets, Codex app automations, and session logs as intent/history, not source of truth about current code.
- Treat `AGENTS.md`, `.agents/docs/`, tests, and code as canonical for this demo.

## Verification

This branch still has weak verification.

Useful commands:

```powershell
npm test
npm run build
```
