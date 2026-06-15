---
name: first-pass-review
description: Review a PR before human review, ordering findings by severity and routing customer-facing changes to explicit human review.
owner: engineering-leads
---

# First-Pass Review

Use this skill when reviewing a pull request before a human reviewer spends focused time on it.

## Review Policy

1. Start with blocking correctness, security, data-loss, and customer-impact findings.
2. Check whether the diff matches the Linear ticket or stated goal.
3. Flag missing behavior tests when behavior changed.
4. Flag broad diffs that mix unrelated cleanup with the requested change.
5. Route customer-facing UI, design, pricing, copy, or public API changes to human review.
6. Do not approve the PR as final; summarize what the human should inspect.

## Output

Return:

- Severity-ranked findings.
- Required human gate, if any.
- Test evidence seen.
- One-sentence reviewer summary.

## Profound Workshop Examples

- Citation export: human-on-contract, because export fields are a customer-visible data contract.
- Visibility cache invalidation: agent-gated if the focused repro test and gate pass.
- Chart palette or report preview: human-mandatory because it is customer-facing design.
