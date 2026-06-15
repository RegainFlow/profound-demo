# Acceptance 04: Feedback Becomes A Rule

Expected outcome:

- A local lint rule catches raw frontend fetch outside `frontend/src/api/client.ts`.
- `.semgrep/` contains rules for raw fetch and premature visibility rounding.
- The feedback-to-rule template explains how to promote future comments.
- `exercises/04/artifacts/` mirrors the rule artifacts added by this lesson.

Verification:

```powershell
npm run scan
```
