# Merge Gate

Open this before declaring work ready or changing verification policy.

## Local Order

Run the narrowest relevant command first:

```powershell
npm test
npm run lint
npm run e2e
npm run build
```

Then run:

```powershell
npm run gate
```

## What The Gate Covers

- `npm run build`: TypeScript and Vite production build.
- `npm run lint`: static policy and frontend boundary checks.
- `npm test`: backend and service behavior.
- `npm run e2e`: browser proof when Playwright is available, HTTP smoke proof otherwise.

## Human Gates

A green gate does not approve customer-facing UI, brand/design intent, security, privacy, data-loss, or real-system integration changes.
