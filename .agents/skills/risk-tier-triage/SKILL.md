---
name: risk-tier-triage
description: Classify a diff into agent-gated, human-on-contract, or human-mandatory review.
owner: engineering-leads
---

# Risk Tier Triage

Use this skill before review routing.

## Tiers

- `agent-gated`: low blast radius, reversible, mechanically verifiable, small diff.
- `human-on-contract`: behavior or data contract changed; human checks intent and compatibility.
- `human-mandatory`: customer-facing design, public API, security, data loss, pricing, or irreversible migration.

## Axes

- Blast radius.
- Reversibility.
- Verifiability.
- Customer visibility.
- Diff size.

## Output

Return the tier, two evidence bullets, and the exact human review condition if applicable.
