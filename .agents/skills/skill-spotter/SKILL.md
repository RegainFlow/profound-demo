---
name: skill-spotter
description: Decide whether a repeated correction deserves a skill, deterministic rule, AGENTS.md instruction, or no durable artifact.
owner: agent-platform
---

# Skill Spotter

Use this skill after session mining or PR-review retrospectives.

## Decision Rules

- Choose a deterministic rule when the invariant is mechanically checkable.
- Choose AGENTS.md when the instruction is local and frequently needed in that directory.
- Choose a skill when the behavior is procedural and reused across directories.
- Choose docs when humans need background, not operational agent instructions.
- Choose no durable artifact when the correction is one-off or preference-only.

## Acceptance Bar

A candidate needs:

- Evidence of repeated pain.
- An owner.
- A maintenance trigger.
- A retirement condition.

## Output

Return one recommended artifact and one sentence explaining why the other artifact types were not chosen.
