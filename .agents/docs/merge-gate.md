# Merge Gate

Open this before declaring work ready or changing verification policy.

## Local Order

Run the narrowest relevant command first:

```powershell
npm run typecheck
npm run lint:static
npm run lint:boundaries
npm run test:backend
npm run test:services
npm run build:web
npm run e2e
```

Then run:

```powershell
npm run gate
# or
npm run check
```

## What The Gate Covers

- `npm run typecheck`: TypeScript contracts across backend, services, tools, and frontend.
- `npm run lint:static`: deterministic repository hygiene checks.
- `npm run lint:boundaries`: frontend API and design-system boundary checks.
- `npm test`: backend and service behavior via `test:backend` and `test:services`.
- `npm run build:web`: Vite production build.
- `npm run e2e`: browser proof when Playwright is available, HTTP smoke proof otherwise.
- `npm run check`: Basis-style alias for the full gate.

## Human Gates

A green gate does not approve customer-facing UI, brand/design intent, security, privacy, data-loss, or real-system integration changes.
