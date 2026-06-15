# Exercise 02: Better Behavioral Tests

Start from `demo-1-foundation`. The repo now has a scoring policy, but decorative tests still pass while premature rounding changes customer-facing truth.

Fix by adding a write-tests skill, adding behavioral tests, and updating `package.json` so `npm test` actually runs the new file.

Red step: apply the test harness changes only. `npm test` should fail against the demo-1 rounding code. If only the test file is copied and `package.json` is not updated, nothing meaningful happens because the test is not executed.

Green step: fix `services/visibility-service.ts` and `services/types.ts` so internal precision is preserved and only display/export values are rounded.

Use `artifacts/patches/` to teach the diff. Use `artifacts/full-files/` when you want participants to see or copy the complete files for each step.

Harness lesson: policies become durable when tests prove the behavior they describe.
