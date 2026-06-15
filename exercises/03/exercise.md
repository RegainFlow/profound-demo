# Exercise 03: Architecture Rule

Start from `demo-2-tests`. The app now has useful scoring tests, but feature code can still bypass `frontend/src/api/` with raw `fetch()`.

Fix by adding deterministic boundary checks, runnable Semgrep coverage, and the `package.json` scripts that expose `npm run lint` and `npm run scan`.

Red step: apply the boundary harness while leaving the raw `fetch()` in `frontend/src/features/dashboard/DashboardPage.tsx`. `npm run lint` should fail.

Green step: remove the frontend API bypass so feature code no longer calls `fetch()` directly. Then rerun lint, scan, tests, and build.

Use `artifacts/patches/` to teach the diff. Use `artifacts/full-files/` when you want participants to see or copy the complete files for each step.

Harness lesson: if a rule is mechanically checkable, put it in the gate instead of spending agent context on it.
