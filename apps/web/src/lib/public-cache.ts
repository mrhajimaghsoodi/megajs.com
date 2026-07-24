/** Shared ISR defaults for public storefront fetches (WP Rocket–aligned). */
export const PUBLIC_REVALIDATE = 120;

export type PublicCacheTag =
  | 'catalog'
  | 'articles'
  | 'pages'
  | 'terms'
  | 'courses'
  | 'sitemap';

export function publicFetchInit(
  tags: PublicCacheTag[],
  revalidate: number = PUBLIC_REVALIDATE,
): RequestInit {
  return {
    next: { revalidate, tags },
  };
}
