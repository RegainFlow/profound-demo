# Profound Demo 0: Bad State

This branch is the runnable starting point for the workshop. It intentionally has weak tests, no agent instructions, no deterministic lint/scan harness, and planted bugs that pass the available checks.

## Verify

```powershell
npm test
npm run build
```

Expected result: the weak checks pass even though the app still has known issues.
