---
name: write-tests
description: Improve weak tests into focused behavioral tests for Profound workshop changes.
---

# Write Tests

Use this skill when adding or repairing tests for a bug fix, API/export change, scoring change, or customer-facing workflow.

## Rules

- Start from the behavior that failed, not from the implementation detail.
- Prefer one focused regression test over broad snapshots.
- Assert the business boundary that matters: precision, allowed export fields, API shape, or human-review routing.
- Keep tests deterministic and synthetic; do not call real Linear, GitHub, or customer systems.
- For visibility scoring, prove internal precision is preserved and rounding only happens at display/export boundaries.

## Done

- The old broken behavior would fail the new test.
- The fixed behavior passes without weakening the assertion.
- The test name explains the regression risk in plain language.
