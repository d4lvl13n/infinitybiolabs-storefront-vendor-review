# Infinity BioLabs Storefront

Production storefront for Infinity BioLabs, built on Saleor with Next.js App
Router, TypeScript, Tailwind CSS, and a custom checkout/payment integration.

This repository is a code review snapshot for technical scoping and vendor
estimation. It contains the storefront application, integration code, tests, and
sanitized setup notes. Runtime secrets, deployment state, and production data are
not included.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS with CSS custom properties
- Saleor GraphQL API with generated types
- Vercel deployment target
- Playwright and Vitest test coverage

## Main Areas

- Channel-scoped catalog routes under `src/app/[channel]`
- Product listing and product detail pages
- Cart drawer and checkout flow
- Saleor auth, account, address, and order views
- SellAbroad payment-container checkout integration
- Klaviyo newsletter and server-side order events
- Affiliate application, approval, voucher, commission, and webhook flows
- COA lookup, catalog feeds, PubMed search, and contact/newsletter APIs

## Commands

```bash
pnpm install
pnpm run generate
pnpm run generate:checkout
pnpm lint
pnpm exec tsc --noEmit
pnpm test:run
pnpm run build
```

`pnpm run generate` and `pnpm run generate:checkout` require access to the
configured Saleor GraphQL schema. Production builds can continue with committed
generated artifacts when the schema endpoint is unavailable locally.

## Environment

Start from `.env.example` and provide project-specific values for:

- `NEXT_PUBLIC_SALEOR_API_URL`
- `NEXT_PUBLIC_DEFAULT_CHANNEL`
- `NEXT_PUBLIC_STOREFRONT_URL`
- `SALEOR_APP_TOKEN`
- `SALEOR_WEBHOOK_SECRET`
- `DATABASE_URL`
- payment, email, Klaviyo, and feed-related keys as needed

No real secrets are committed in this snapshot.

## Testing

Unit and integration tests:

```bash
pnpm test:run
```

End-to-end smoke tests:

```bash
E2E_BASE_URL=https://www.infinitybiolabs.com pnpm test:e2e
```

The guest checkout smoke runs without credentials. Signed-in checkout and
registration flows require the environment variables documented in
`e2e/README.md`.

## Notes For Review

- Generated GraphQL files are committed intentionally so CI/builds can run with
  a known schema snapshot.
- Cart and checkout mutations are live Saleor calls and intentionally bypass
  display caching.
- Affiliate commission and refund/cancel handling is server-side and idempotent.
- Rate limiting supports durable Postgres-backed storage when `DATABASE_URL` is
  available.
- Vendor review notes are in `VENDOR_REVIEW.md`.
