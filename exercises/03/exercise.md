# Exercise 03: Architecture Rule

Start from `demo-2-tests`. The app now has useful scoring tests, but feature code can still bypass `frontend/src/api/` with raw `fetch()`.

Fix by adding deterministic boundary checks and runnable Semgrep coverage, then routing feature data access through the typed API client.

Harness lesson: if a rule is mechanically checkable, put it in the gate instead of spending agent context on it.
