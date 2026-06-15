# Exercise 06: Codex App Automations

Start from `demo-5-merge-gate`. PR and task visibility can get mistaken for repo scope or product dashboard scope, mixing internal workflow telemetry into the customer-facing app.

Fix by keeping automations as Codex app native setup, not product UI panels and not repo scripts. Configure the digest and stale-review monitor in Codex using Linear/GitHub context.

Harness lesson: visibility should come from Codex app context and native automations, not from stuffing workflow operations into the product surface or codebase.
