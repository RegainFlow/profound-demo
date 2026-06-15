# Project Layout And Review Map

Open this before reviewing or changing backend services, score math, report data, or frontend data access.

## Intent

This repository is a synthetic Answer-Engine Visibility Console for a Codex workshop. It is not wired to real customer data, Linear, GitHub, or production Profound systems.

## Ownership Map

- `services/data.ts` owns synthetic source records.
- `services/visibility-service.ts` owns visibility aggregation, score math, report bands, and cache behavior.
- `backend/server.ts` exposes service data through HTTP routes.
- `frontend/src/api/` is the only frontend path to backend data.
- `frontend/src/features/` renders product surfaces and must not recompute business scoring.

## Review Focus

When a PR touches visibility scoring, inspect `services/visibility-service.ts` first. Review `weightedAverage`, `crawlerScore`, and the final `score` expression before trusting tests or snapshots.

The common demo bug is premature rounding inside scoring. `Math.round(...)` around weighted averages, intermediate crawler math, or the final internal score hides threshold behavior and should be challenged unless the value is being formatted for display or export.
