# PR Shape

Open this before splitting work, preparing a PR, or deciding whether a diff is reviewer-sized.

## Rules

- Keep one concern per PR when possible.
- Split broad harness changes from planted-bug fixes.
- Include the narrow command output first, then the full gate result when ready.
- State human-review reasons directly instead of burying them in comments.
- Do not present Codex approval as final approval for human-mandatory work.

## Useful Split Lines

- API/service behavior separate from frontend presentation.
- Deterministic lint/test rule separate from the product fix it protects.
- Workshop narrative docs separate from executable code changes.
