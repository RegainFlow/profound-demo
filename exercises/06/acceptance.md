# Acceptance 06: Lifecycle Hook

Expected outcome:

- The React app does not render Linear tasks, PR queues, or daily digest panels.
- No `automations/` folder or repo-owned digest script exists.
- No mock Linear/GitHub context server exists in the repo.
- Hook docs explain that `npm run gate` is the comprehensive completion check.
- The hook artifact is present as a copyable Codex config example.
- Linear/PR digest automations are mentioned only as Codex app setup outside the repo.

Verification:

```powershell
npm test
npm run gate
```
