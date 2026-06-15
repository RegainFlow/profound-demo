# API Contract

`frontend/src/api/` is the frontend contract boundary.

- Raw `fetch()` belongs only in `frontend/src/api/client.ts`.
- Feature code imports typed functions from `frontend/src/api/`, not backend services.
- Backend routes stay synthetic and workshop-safe.
- Preserve compatibility aliases only when they help a checkpoint branch or demo beat.
