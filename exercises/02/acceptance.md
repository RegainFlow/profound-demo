# Acceptance 02: Scoped Ticket Loop

Expected outcome:

- The selected Linear ticket lives in Linear, not in this repo, and maps to one visible product behavior.
- The implementation touches the product surface and only the supporting API/service code it needs.
- A focused behavior test proves the change.
- `exercises/02/artifacts/` mirrors the scoped-loop guidance and test artifact for the lesson.

Verification:

```powershell
npm test
npm run e2e
```
