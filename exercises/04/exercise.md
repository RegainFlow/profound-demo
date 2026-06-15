# Exercise 04: Feedback To Rule

Start from `demo-3-architecture-rule`. A repeated PR comment such as "do not use raw fetch" or "do not round weighted scoring math early" gets re-explained in chat instead of becoming enforceable.

Fix by promoting repeated feedback into deterministic local and Semgrep rules.

Harness lesson: do not rely on memory for deterministic feedback. Turn repeated correction into rules, then let Codex fix from scan output.
