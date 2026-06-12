# Vendor Review Guide

This snapshot is intended for technical scoping and implementation estimation.
It is not connected to production credentials or deployment infrastructure.

## What To Review

- `src/app/[channel]`: channel-scoped storefront pages
- `src/ui/components/pdp`: product detail, variant selection, add-to-cart
- `src/ui/components/cart`: cart drawer and cart server actions
- `src/checkout`: checkout application shell and steps
- `src/app/api`: API routes for affiliate, auth, feeds, contact, newsletter,
  COA lookup, revalidation, search, and tracking
- `src/lib`: GraphQL client, checkout helpers, analytics, affiliate storage,
  rate limiting, URL safety, and utility code
- `src/graphql` and `src/gql`: GraphQL operations and generated storefront types
- `src/checkout/graphql`: checkout-specific GraphQL operations and generated types

## Integrations

- Saleor: catalog, checkout, auth, orders, channels, vouchers
- SellAbroad: embedded payment-container flow
- Klaviyo: newsletter and server-side placed-order events
- Resend: transactional notifications
- Neon/Postgres: affiliate records and durable rate-limit storage
- Vercel: production deployment target
- NCBI PubMed: research-library lookup

## Expected Commands

```bash
pnpm install
pnpm lint
pnpm exec tsc --noEmit
pnpm test:run
pnpm run build
```

End-to-end smoke:

```bash
E2E_BASE_URL=https://www.infinitybiolabs.com pnpm test:e2e
```

## Known Boundaries

- Secrets and production environment values are not included.
- Production database contents are not included.
- Vendor access should be read-only.
- Payment completion should only be exercised against an approved staging PSP
  configuration.
