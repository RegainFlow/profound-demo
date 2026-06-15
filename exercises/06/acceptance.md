# Acceptance 06: Automations Stay Out Of Product UI

Expected outcome:

- The React app does not render Linear tasks, PR queues, or daily digest panels.
- No `automations/` folder or repo-owned digest script exists.
- No mock Linear/GitHub context server exists in the repo.
- The runbook frames these as Codex app automation exercises.
- `exercises/06/artifacts/` mirrors only supporting docs/templates, not native Codex app state.

Verification:

```powershell
npm test
```
