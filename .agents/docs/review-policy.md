# Review Routing

Open this when classifying risk, preparing handoff notes, writing review findings, or deciding whether Codex can gate a change.

## Agent-Gated

- Deterministic rule changes with tests or lint coverage.
- Small internal refactors that preserve public behavior.
- Focused bug fixes with a behavioral regression test.
- Documentation routing updates that do not change product behavior.

## Human-On-Contract

- Public API or report payload changes.
- Dependency, build, or CI behavior changes.
- Cache behavior and invalidation changes.
- Generated reports or CSV formats used by customer-facing workflows.

## Human-Mandatory

- Customer-facing UI, brand/design intent, or dashboard copy.
- Security, privacy, data-loss, auth, or irreversible operations.
- Real customer/system integration work.

## Review Output

- Lead with severity-ordered findings and file/line references.
- Keep findings diff-scoped.
- Call out missing tests and human-review reasons explicitly.
