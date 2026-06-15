# Acceptance 02: Better Behavioral Tests

Expected outcome:

- `write-tests` skill exists for improving weak tests into behavioral coverage.
- `package.json` runs `services/visibility-service.test.ts`.
- Visibility scoring tests prove precision is preserved until display/export boundaries.
- The premature rounding bug is fixed.
- `exercises/02/artifacts/` mirrors the skill and test artifacts, and `artifacts/patches/` captures the `package.json`, type, and service changes.

Verification:

```powershell
npm test
```

Expected demo sequence:

```powershell
# After red harness only: expected failure
npm test

# After green scoring fix: expected pass
npm test
```
