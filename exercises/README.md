# Workshop Exercises

Each numbered folder is a checkpoint in the branch-stack lesson.

Structure:

- `exercise.md` describes the known bug, known fix, and harness lesson.
- `acceptance.md` defines the exact outcome and verification commands.
- `artifacts/` mirrors the repo files introduced or changed during the lesson.

The `artifacts/` tree is intentionally allowed to contain paths such as `.agents/`,
`docs/`, `tools/`, and `templates/`. It is not a second source of
truth; it is the lesson payload showing what gets added to the real repo at that
checkpoint.

Codex app automations are not mirrored as repo files. Their exercises describe
the native automation setup and expected behavior instead.

## Progression

| Exercise | Branch beat | Known bug | Known fix | Harness lesson |
| --- | --- | --- | --- | --- |
| `01` | `demo-1-foundation` | Codex has no shared Profound context. | Add AGENTS hierarchy and canonical docs. | Repo-local context creates horizontal alignment without mandating one tool. |
| `02` | `demo-2-loop` | A ticket can turn into a broad vibe-coded diff. | Use ticket -> plan -> scoped change -> focused test. | The loop makes autonomous work reviewable. |
| `03` | `demo-3-boundaries-and-tests` | Decorative tests pass while API/design/cache bugs survive. | Add boundary checks, behavior tests, and cache invalidation. | Mechanically checkable feedback belongs in the gate. |
| `04` | `demo-4-feedback-rule` | Repeated review comments stay trapped in chat. | Promote feedback into local/Semgrep-style rules. | Durable rules retire repeated corrections. |
| `05` | `demo-5-merge-gate` | A green gate can still miss design intent. | Run full gate and defer customer-facing judgment to humans. | The human gate is the brand moat. |
| `06` | `demo-6-automations` | Internal workflow telemetry gets mistaken for product UI. | Configure Codex-native digest/review automations outside the repo. | Visibility comes from Codex app context, not dashboard clutter. |
| `07` | `demo-7-flywheel` | Teams create skills/docs from opinion instead of evidence. | Mine sessions and use skill-spotter to choose rule, skill, doc, or nothing. | The harness evolves from observed review pain. |
