# Acceptance 03: Architecture Rule

Expected outcome:

- Raw `fetch()` is allowed only in `frontend/src/api/client.ts`.
- Boundary lint catches frontend API bypasses.
- Semgrep contains the matching no-raw-fetch rule.
- The existing frontend bypass is fixed through `frontend/src/api/`.
- `exercises/03/artifacts/` mirrors the boundary and Semgrep artifacts added by this lesson.

Verification:

```powershell
npm run lint
npm run scan
```
