# Testing Philosophy

The workshop treats tests as executable intent for a no-PRD culture.

- Prefer focused behavior tests over implementation snapshots.
- Add a repro test before fixing a planted bug.
- Browser proof covers visible regressions that unit tests cannot see.
- Decorative tests are allowed only in `demo-0/bad-state`, where they demonstrate the failure mode.
