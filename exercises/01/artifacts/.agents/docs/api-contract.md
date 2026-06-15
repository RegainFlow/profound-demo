# API Boundary

- `backend/server.ts` owns HTTP routes and response status handling.
- `services/*.ts` owns synthetic data, business rules, CSV/report generation, and cache behavior.
- `frontend/src/api/client.ts` is the only frontend file that may call `fetch()`.
- Feature code imports typed API helpers from `frontend/src/api/`.
- Backend data stays synthetic for the workshop.
