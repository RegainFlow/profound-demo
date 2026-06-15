---
owner: backend-lead
canon: true
---

# Backend Instructions

- Open `.agents/docs/api-contract.md` for route, response-shape, CSV, and report payload changes.
- Route handlers may call service modules; frontend files may not call services directly.
- Keep response shapes stable and documented by tests.
- CSV exports must include explicit headers and escape user-visible text.
- Any cache change needs a focused behavioral test that fails against stale data.
