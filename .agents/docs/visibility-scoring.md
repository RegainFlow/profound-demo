# Visibility Scoring Policy

Open this before changing score math, report bands, model coverage, or exports that include visibility values.

## Policy

- Preserve precision inside scoring and aggregation.
- Round only at display or export boundaries.
- Do not use `Math.round` around weighted intermediate expressions.
- Add a behavioral test for threshold or band-adjacent changes.
- Customer-facing interpretation of a score or band remains human-reviewed.

## PR Review Cue

If `services/visibility-service.ts` includes `Math.round(...)` in `weightedAverage`, `crawlerScore`, or the final internal `score`, flag it. Internal score math should remain precise so tests and downstream report logic see threshold-adjacent behavior.
