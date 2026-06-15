# Workshop Exercises

Each numbered folder is a checkpoint in the branch-stack lesson.

Structure:

- `exercise.md` describes the known bug, known fix, and harness lesson.
- `acceptance.md` defines the exact outcome and verification commands.
- `artifacts/` mirrors the repo files introduced or changed during the lesson.
- `artifacts/patches/` captures complete red/green diffs when a lesson changes existing files such as `package.json` or source modules.

The `artifacts/` tree is intentionally allowed to contain paths such as `.agents/`,
`.agents/docs/`, `tools/`, and `templates/`. It is not a second source of
truth; it is the lesson payload showing what gets added to the real repo at that
checkpoint.

For live teaching, prefer the red/green rhythm:

- Apply the red harness first and run the command that should fail.
- Explain what the failure proves about the previous harness.
- Apply the green fix and rerun the same command before moving to the next branch.

Codex app automations are not mirrored as repo files. Linear digests and PR
monitors are live workshop context, while this repo carries the harness artifacts
that agents can inherit.

## Progression

| Exercise | Branch beat | Known bug | Known fix | Harness lesson |
| --- | --- | --- | --- | --- |
| `01` | `demo-1-foundation` | Codex has no shared Profound context. | Add AGENTS hierarchy and agent operating docs. | Policy can focus AI review before tests exist. |
| `02` | `demo-2-tests` | Decorative tests miss the scoring bug. | Add testing policy, wire the behavioral test into `npm test`, then fix scoring. | Better tests turn policy into proof. |
| `03` | `demo-3-architecture-rule` | Frontend bypasses the API layer. | Add boundary lint/scan scripts, show the failure, then fix raw fetch. | Mechanical architecture rules belong in deterministic checks. |
| `04` | `demo-4-feedback-to-rule` | Simple policies still consume reviewer attention. | Promote repeated comments into Semgrep/local scan rules. | Offload what does not need model context. |
| `05` | `demo-5-json-preview-pr-gate` | Product ticket needs browser proof and human defer. | Add JSON preview, PR gate, browser E2E, and review policy. | PR review combines AI checks with explicit human gates. |
| `06` | `demo-6-hooks` | Checks happen too late in the lifecycle. | Add Codex hook/config artifact for completion checks. | Hooks move earned quality checks closer to execution. |
| `07` | `demo-7-flywheel` | Teams create skills/docs from opinion instead of evidence. | Mine sessions and use skill-spotter to choose rule, skill, doc, or nothing. | The harness evolves from observed review pain. |
