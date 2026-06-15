# Exercise 01: Build The Foundation

Start from `demo-0-bad-state`. Codex has no shared Profound-specific harness, so each run can miss repo intent and business rules that are not encoded in tests.

Fix by adding the AGENTS hierarchy and compact agent operating docs that tell Codex where ownership and visibility-scoring rules live.

The review target is the planted premature rounding bug in `services/visibility-service.ts`: AGENTS routing should lead Codex to the project layout and scoring policy even while weak tests still pass.

This exercise is not a failing-CI moment. It is the policy/audit moment: Codex needs to be asked to review the repo against the new visibility policy, including `services/visibility-service.ts` even if that file is unchanged in the PR.

Harness lesson: horizontal repo context beats per-engineer memory. Instructions and docs travel with the code and bind whichever agent an engineer chooses.
