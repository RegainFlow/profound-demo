# Workshop Runbook

Open this for demo sequencing, checkpoint intent, and what belongs outside the product app.

## Demo Spine

1. `demo-1-foundation`: add AGENTS routing and compact agent docs.
2. `demo-2-loop`: turn a prepared Linear ticket into a scoped change with a focused test.
3. `demo-3-boundaries-and-tests`: show boundary checks and behavior tests catching weak harness gaps.
4. `demo-4-feedback-rule`: promote repeated review feedback into a deterministic rule.
5. `demo-5-merge-gate`: run the full gate and route customer-facing judgment to humans.
6. `demo-6-automations`: show Codex-native digest/review automation outside the repo.
7. `demo-7-flywheel`: mine a session log and decide whether evidence earns a rule, skill, doc, or nothing.

## Repo Boundary

- Linear tickets and Codex app automations are live workshop context, not source files.
- Do not add internal workflow telemetry to the customer-facing dashboard.
- Keep the Profound story focused on autonomous engineers, Linear as coordination spine, and explicit human gates.

## Checkpoint Artifacts

- Use `exercises/` for acceptance criteria and lesson payloads.
- Treat exercise artifacts as checkpoint mirrors, not a second source of truth.
- Before handoff, run the narrow check first, then `npm run gate`.
