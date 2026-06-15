# Profound Demo 3: Architecture Rule

This branch promotes the frontend API boundary into deterministic checks. Raw frontend `fetch()` is routed through `frontend/src/api/`, and the branch adds local lint plus Semgrep coverage.

## Verify

```powershell
npm run lint
npm run scan
npm test
npm run build
```
