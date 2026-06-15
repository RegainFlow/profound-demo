# Feedback To Rule

Human feedback:

> Do not fetch answer-engine data in components. Use the data layer.

Codex prompt:

```text
Turn this repeated PR comment into a deterministic local check. Prefer the existing lint/check tooling. The rule should fail when frontend files other than `frontend/src/api/client.ts` call `fetch()` directly.
```

Expected artifact:

- A boundary check in `tools/lint/check-boundaries.mjs`.
- A frontend AGENTS.md instruction explaining the behavior.
- One violating example used only in tests or docs, not in app code.
