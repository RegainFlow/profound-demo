# Codex Hook Guidance

Open this when wiring project checks into Codex lifecycle hooks.

## Policy

- Hooks enforce earned checks; they do not replace PR review.
- Use `npm run gate` as the comprehensive completion check for this workshop repo.
- Keep scheduled digest and stale-review automation in Codex app, not this repository.
- If a hook blocks work, fix the failing check or explicitly document the human defer.
