# Workshop Runbook

Open this for demo sequencing, checkpoint intent, and what belongs outside the product app.

## Demo Spine

1. `demo-1-foundation`: add AGENTS routing and compact agent docs.
2. `demo-2-tests`: improve decorative tests into behavioral tests.
3. `demo-3-architecture-rule`: promote the API-boundary policy into lint and Semgrep.
4. `demo-4-feedback-to-rule`: promote repeated review feedback into deterministic scans.
5. `demo-5-json-preview-pr-gate`: add JSON report preview, browser proof, and human defer.
6. `demo-6-hooks`: wire earned checks into a Codex lifecycle hook.
7. `demo-7-flywheel`: mine a session log and decide whether evidence earns a rule, skill, doc, or nothing.

## Repo Boundary

- Linear tickets and Codex app automations are live workshop context, not source files.
- The product ticket is JSON report preview; the harness tickets improve policy, tests, scans, PR gates, hooks, and flywheel capture around it.
- Do not add internal workflow telemetry to the customer-facing dashboard.
- Keep the Profound story focused on autonomous engineers, Linear as coordination spine, and explicit human gates.

## Checkpoint Artifacts

- Use `exercises/` for acceptance criteria and lesson payloads.
- Treat exercise artifacts as checkpoint mirrors, not a second source of truth.
- Before handoff, run the narrow check first, then `npm run gate`.
