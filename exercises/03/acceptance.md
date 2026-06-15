# Acceptance 03: Boundaries And Tests

Expected outcome:

- Raw `fetch()` is allowed only in `frontend/src/api/client.ts`.
- Feature/component UI uses design-system classes and primitives.
- Visibility score cache invalidates when signal weights change.
- `exercises/03/artifacts/` mirrors the boundary check and testing policy added by this lesson.

Verification:

```powershell
npm run lint
npm test
```
