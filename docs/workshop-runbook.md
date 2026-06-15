# Workshop Runbook

This is the delivery guide. It points Codex to the narrow docs and exercise artifacts instead of embedding duplicated policy.

## Prep Outside This Repo

- Create the workshop Linear tickets in Linear.
- Configure Codex app automations in Codex, not as repo scripts.
- Confirm GitHub PR review and any approved connectors are available before the live run.

## Demo Spine

1. Start from `demo-0/bad-state`: runnable product app with planted bugs and weak harness.
2. `demo-1-foundation`: add AGENTS routing and canonical docs.
3. `demo-2-loop`: pull a real prepared Linear ticket, plan with Codex, scope the diff, and verify one product behavior.
4. `demo-3-boundaries-and-tests`: show deterministic boundaries and behavior tests catching what decorative tests missed.
5. `demo-4-feedback-rule`: turn repeated review feedback into a rule.
6. `demo-5-merge-gate`: run the full gate and route design/customer-facing judgment to humans.
7. `demo-6-automations`: show Codex-native digest/review automations outside the repo.
8. `demo-7-flywheel`: mine a session log and use skill-spotter to decide what becomes durable.

## Progressive Disclosure

- Product/API work: `docs/api-contract.md`
- Frontend/brand work: `frontend/AGENTS.md` and `docs/brand-rules.md`
- Tests: `docs/testing-philosophy.md`
- Review routing: `docs/review-policy.md`
- PR shape: `docs/pr-conventions.md`
- Acceptance artifacts: `exercises/`

## Verification

Run:

```powershell
npm run gate
```
