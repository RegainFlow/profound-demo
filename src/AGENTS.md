---
owner: frontend-lead
canon: true
---

# Frontend Instructions

- Use Vite React TypeScript in `src/`.
- Fetch backend data only through `src/api/`; `fetch()` belongs in `src/api/client.ts`.
- Put reusable visual decisions in `src/design-system/` before feature code uses them.
- Customer-facing color, copy, and layout changes require explicit human review.
- Keep dashboard panels stable at mobile and desktop widths.
- Add browser or E2E coverage for visible regressions that unit tests cannot see.
