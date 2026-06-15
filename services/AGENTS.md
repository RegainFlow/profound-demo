---
owner: platform-lead
canon: true
---

# Services Instructions

- Open `.agents/docs/api-contract.md` for data-shape, export, and report payload changes.
- Service modules own business rules and synthetic integration data.
- Keep functions pure where possible so Codex can test behavior without standing up the server.
- Cache only when the invalidation rule is visible in the same module.
- Never put network calls directly in frontend components; add a typed function in `frontend/src/api/` instead.
