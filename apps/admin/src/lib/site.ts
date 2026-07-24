/** Public site base URL including locale, matching admin-shell “View site”. */
export function publicSiteBase(locale: string) {
  const root = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return `${root.replace(/\/$/, '')}/${locale === 'en' ? 'en' : 'fa'}`;
}

export function publicSiteUrl(locale: string, path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${publicSiteBase(locale)}${p}`;
}

export function termArchivePath(taxonomy: string, slug: string) {
  if (taxonomy === 'post_category') return `/articles/category/${slug}`;
  if (taxonomy === 'post_tag') return `/articles/tag/${slug}`;
  if (taxonomy === 'product_category') return `/learn/category/${slug}`;
  if (taxonomy === 'product_tag') return `/learn?tag=${encodeURIComponent(slug)}`;
  if (taxonomy === 'tunnel_category') return `/tunnel/${slug}`;
  if (taxonomy === 'tunnel_tag') return `/tunnel?tag=${encodeURIComponent(slug)}`;
  return `/`;
}
