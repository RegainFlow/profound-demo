# Acceptance 03: Architecture Rule

Expected outcome:

- Raw `fetch()` is allowed only in `frontend/src/api/client.ts`.
- `package.json` defines `lint:boundaries`, `lint`, and `scan`.
- Boundary lint catches frontend API bypasses.
- Semgrep contains the matching no-raw-fetch rule.
- The existing frontend bypass is fixed through `frontend/src/api/`.
- `exercises/03/artifacts/` mirrors the boundary, Semgrep, scan-runner, and API-contract artifacts, `artifacts/patches/` captures the diff, and `artifacts/full-files/` contains complete red/green replacement files.

Verification:

```powershell
npm run lint
npm run scan
```

Expected demo sequence:

```powershell
# After red harness only: expected failure
npm run lint

# After green raw-fetch fix: expected pass
npm run lint
npm run scan
npm test
npm run build
```
