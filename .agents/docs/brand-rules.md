# Frontend Boundary

Open this before changing visible UI, copy, layout, colors, dashboard panels, report previews, or design-system primitives.

## Code Paths

- `frontend/src/features/` owns product workflows.
- `frontend/src/components/` owns shared app components.
- `frontend/src/design-system/` owns reusable primitives and tokens.
- `frontend/src/styles.css` owns global layout and utility classes.

## Rules

- Feature code composes design-system primitives such as `Button`, `Card`, `Badge`, `Table`, and `MetricCard`.
- Reusable colors, spacing, radius, and primitive behavior belong in `frontend/src/design-system/`.
- Do not add raw color literals, inline styles, or one-off visual treatments in feature folders.
- Customer-facing layout, color, dashboard copy, and report-copy changes require explicit human review.

## Checks

- Visible behavior: `npm run e2e`
- Static UI boundary: `npm run lint`
- Type/component contract: `npm run build`
