---
name: repro-test
description: Turn a bug report into the smallest failing test before implementation.
owner: quality-lead
---

# Repro Test

Use this skill when a bug fix risks drifting into broad cleanup or when the failure mode can be made executable.

## Procedure

1. Restate the failure as one observable behavior.
2. Identify the smallest module that owns the behavior.
3. Write a failing test before implementation.
4. Confirm the test fails for the right reason.
5. Implement the smallest fix.
6. Re-run the focused test, then the relevant gate.

## Output

Return:

- Test file and assertion.
- Initial failure message.
- Fix summary.
- Verification commands.

## Workshop Anchor

For the visibility-cache lesson, the repro is: changing signal weights must invalidate the visibility score cache.
