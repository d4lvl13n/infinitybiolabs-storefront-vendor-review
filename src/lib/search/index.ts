/**
 * Search Module
 *
 * Provides search functionality with a swappable provider architecture.
 * Currently uses Saleor's built-in search. To use Typesense, Algolia, or
 * Meilisearch, replace the implementation in saleorProvider.ts.
 *
 * Provider-specific examples can be added next to the active implementation.
 */

// Export types for use in implementations
export * from "./types";

// Export Saleor implementation (swap this for other providers)
export { searchProducts, suggestProducts } from "./saleor-provider";
