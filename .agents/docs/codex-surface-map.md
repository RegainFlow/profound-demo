# Codex Surface Map

Open this when deciding where workshop context or automation should live.

| Surface | Use It For | Keep Out Of |
| --- | --- | --- |
| Local CLI/IDE | Planning, implementation, tests, diff inspection | Long-lived workflow telemetry |
| AGENTS.md | Routing agents to the narrow local context they need | Detailed procedures and background reading |
| `.agents/docs/` | Codebase-native operating docs agents should open while working | Broad process essays |
| `.agents/skills/` | Repeated judgment workflows with a clear trigger and output | One-off reminders |
| `tools/lint/` | Deterministic review feedback that can be mechanically checked | Subjective design judgment |
| GitHub PR review | First-pass review, risk notes, missing tests | Final approval for human-mandatory work |
| Linear | Prepared ticket intent and status coordination | Source of truth for current code behavior |
| Codex app automations | Digests, stale review monitors, context cleanup | Product dashboard panels |
| Browser/E2E | Visible regression proof | Replacing human design review |

Prefer durable repo rules only when they reduce repeated review pain. Otherwise leave the context in the originating system.
