# Review Risk Matrix Template

| Change Type | Agent-Gated | Human-On-Contract | Human-Mandatory |
| --- | --- | --- | --- |
| Customer-facing UI/design |  |  | x |
| Public API contract |  |  | x |
| Internal refactor | x |  |  |
| Cache behavior |  | x |  |
| Generated copy/report |  | x |  |
| Dependency bump |  | x |  |
| Security-sensitive code |  |  | x |

Review routing axes:

- Blast radius.
- Reversibility.
- Verifiability.
- Customer visibility.
- Diff size.

Ratchet metrics:

- Override rate.
- Gate escapes.
- Reviewer minutes per PR.
- Defects after merge.
