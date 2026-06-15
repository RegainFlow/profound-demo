# Acceptance 04: Feedback Becomes A Rule

Expected outcome:

- A local lint rule catches raw frontend fetch outside `frontend/src/api/client.ts`.
- `.semgrep/` contains starter rules that mirror the local gate.
- The feedback-to-rule template explains how to promote future comments.
- `exercises/04/artifacts/` mirrors the rule artifacts added by this lesson.

Verification:

```powershell
npm run lint
```
