# Testing

Open this before fixing bugs, changing behavior, updating boundaries, or touching cache/report/export logic.

## Rules

- Add a focused behavior test when behavior changes.
- Behavioral tests should fail against the old bug; avoid decorative assertions that only prove a response has data.
- Visibility scoring tests must protect precision and rounding boundaries.
- Prefer deterministic assertions over snapshots or broad smoke coverage.
- Use browser/E2E proof for visible regressions that unit tests cannot see.
