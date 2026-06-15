# Profound Codex Workshop

This repo is a runnable, synthetic workshop kit for showing Profound's engineering team how Codex can help build an agent-native development harness without mandating a single workflow.

The demo thesis: **harness engineering keeps autonomous engineers moving fast without turning PR review, alignment, and context into the bottleneck.**

## Quickstart

```powershell
npm install
npm run build
npm test
npm run lint
npm run e2e
npm start
```

Then open `http://localhost:4173`.

The app is an AI Visibility Console with synthetic answer-engine visibility, citation, crawler, campaign, and customer-facing report data. It is intentionally small so the workshop focuses on the Codex harness rather than setup.

Linear tickets and PR/task digests are prepared in Linear/Codex directly for the workshop. They are not hardcoded into this repo, implemented as mock context servers, or rendered as dashboard panels.

## Workshop Flow

- `docs/workshop-runbook.md` is the 2-hour delivery script.
- `exercises/` contains demo-stage acceptance artifacts: known bug, known fix, harness lesson, changed artifacts, and commands.
- `docs/codex-surface-map.md` maps each demo to Codex surfaces.
- `docs/merge-gate.md` explains the five-layer gate.
- `docs/agent-native-codebase.md` explains AGENTS.md, skills, hooks, docs, and session mining.

## Local Verification

```powershell
npm run gate
```

The gate runs static policy checks, boundary checks, Node tests, and an E2E smoke check. If Playwright is installed, `npm run e2e` uses a real browser; otherwise it falls back to HTTP checks so the workshop is still runnable offline.

The repo is shaped like a small monorepo for the workshop: `frontend/` is the Vite React app, `backend/` serves the synthetic API and built app, and `services/` owns deterministic business rules/data. `frontend/src/api/` is the only frontend backend contract, and `frontend/src/design-system/` owns reusable brand primitives.

## Leave-Behind Kit

The `templates/` directory contains portable materials for Profound:

- `AGENTS.md.template`
- `skill.template.md`
- `merge-gate.yml`
- `review-risk-matrix.md`
- `rollout.md`
- `feedback-to-rule.md`
- `session-mining.md`

## Synthetic Data

All visibility metrics, brands, URLs, and people in this repo are synthetic workshop data. Do not connect it to real customer systems without replacing the synthetic data sources. Workshop tickets should live in Linear, not in this repo.
