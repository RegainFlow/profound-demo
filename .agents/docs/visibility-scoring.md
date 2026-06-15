# Visibility Scoring Policy

Open this before changing score math, report bands, model coverage, or exports that include visibility values.

## Policy

- Preserve precision inside scoring and aggregation.
- Round only at display or export boundaries.
- Do not use `Math.round` around weighted intermediate expressions.
- Add a behavioral test for threshold or band-adjacent changes.
- Customer-facing interpretation of a score or band remains human-reviewed.
