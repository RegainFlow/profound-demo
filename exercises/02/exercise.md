# Exercise 02: Better Behavioral Tests

Start from `demo-1-foundation`. The repo now has a scoring policy, but decorative tests still pass while premature rounding changes customer-facing truth.

Fix by adding a write-tests skill and behavioral tests that would have failed against the old rounding bug.

Harness lesson: policies become durable when tests prove the behavior they describe.
