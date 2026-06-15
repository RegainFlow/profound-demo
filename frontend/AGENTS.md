---
owner: frontend-lead
canon: true
---

# Frontend Instructions

- Open `.agents/docs/project-layout.md` before changing data access or report data flow.
- Open `.agents/docs/brand-rules.md` before visible UI, dashboard copy, report-preview, or design-system changes.
- Open `.agents/docs/api-contract.md` before changing `frontend/src/api/` contracts.
- Use Vite React TypeScript in `frontend/src/`.
- Fetch backend data only through `frontend/src/api/`; `fetch()` belongs in `frontend/src/api/client.ts`.
- Put reusable visual decisions in `frontend/src/design-system/` before feature code uses them.
- Customer-facing color, copy, and layout changes require explicit human review.
- Keep dashboard panels stable at mobile and desktop widths.
- Add browser or E2E coverage for visible regressions that unit tests cannot see.
