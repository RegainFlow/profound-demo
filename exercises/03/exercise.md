# Exercise 03: Boundaries And Behavior Tests

Start from `demo-2-loop`. The app can pass decorative tests while feature code bypasses `src/api/`, uses one-off styling, or hides a stale visibility cache.

Fix by adding deterministic boundary checks and behavior tests, then fixing the raw fetch, inline style, and cache invalidation defects they expose.

Harness lesson: if a rule is mechanically checkable, put it in the gate. Tests are executable intent for a no-PRD engineering culture.
