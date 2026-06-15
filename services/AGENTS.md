---
owner: platform-lead
canon: true
---

# Services Instructions

- Open `.agents/docs/project-layout.md` and `.agents/docs/visibility-scoring.md` before changing visibility score math.
- Service modules own business rules and synthetic integration data.
- Keep functions pure where possible so Codex can test behavior without standing up the server.
- Cache only when the invalidation rule is visible in the same module.
- Never put network calls directly in frontend components; add a typed function in `frontend/src/api/` instead.
- Do not include rounding at the visibility services level
