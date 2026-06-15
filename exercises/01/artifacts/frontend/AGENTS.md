---
owner: frontend-lead
canon: true
---

# Frontend Instructions

- Open `.agents/docs/project-layout.md` before changing data access or report data flow.
- Use Vite React TypeScript in `frontend/src/`.
- Fetch backend data only through `frontend/src/api/`; `fetch()` belongs in `frontend/src/api/client.ts`.
- Put reusable visual decisions in `frontend/src/design-system/` before feature code uses them.
- Customer-facing color, copy, and layout changes require explicit human review.
- Keep dashboard panels stable at mobile and desktop widths.
- Add browser or E2E coverage for visible regressions that unit tests cannot see.
