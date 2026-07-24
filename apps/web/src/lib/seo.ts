import type { Metadata } from 'next';
import { resolveMediaUrl } from '@/lib/media-url';

/** Production-safe site origin for Next.js Metadata / sitemap / robots */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://megajs.com'
).replace(/\/$/, '');

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-mark.svg`;

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localePath(locale: string, path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (p === `/${locale}` || p.startsWith(`/${locale}/`)) return p;
  if (p === '/') return `/${locale}`;
  return `/${locale}${p}`;
}

type SeoLike = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  canonicalPath?: string | null;
  ogImageUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
  schemaJson?: string | null;
};

export type PageMetaInput = {
  locale: string;
  title: string;
  description?: string;
  /** Path without locale, e.g. `/about` or `` for home */
  path?: string;
  image?: string | null;
  noIndex?: boolean;
  noFollow?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string | null;
  modifiedTime?: string | null;
  tags?: string[];
};

/**
 * Next.js App Router metadata for marketing / listing pages.
 * Absolute canonical, hreflang, Open Graph, Twitter.
 */
export function pageMetadata(opts: PageMetaInput): Metadata {
  const path = opts.path ?? '';
  const canonicalRel = path === '' || path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const canonical = absoluteUrl(localePath(opts.locale, canonicalRel || '/'));
  const title = opts.title;
  const description = opts.description;
  const image = opts.image ? resolveMediaUrl(opts.image) : DEFAULT_OG_IMAGE;
  const robots: Metadata['robots'] = opts.noIndex
    ? {
        index: false,
        follow: !opts.noFollow,
        googleBot: { index: false, follow: !opts.noFollow },
      }
    : opts.noFollow
      ? { index: true, follow: false }
      : { index: true, follow: true };

  return {
    title:
      !opts.path || opts.path === '/' || opts.path === ''
        ? { absolute: title }
        : title,
    description,
    alternates: {
      canonical,
      languages: {
        fa: absoluteUrl(localePath('fa', canonicalRel || '/')),
        en: absoluteUrl(localePath('en', canonicalRel || '/')),
        'x-default': absoluteUrl(localePath('fa', canonicalRel || '/')),
      },
    },
    openGraph: {
      type: opts.type === 'article' ? 'article' : 'website',
      title,
      description,
      url: canonical,
      locale: opts.locale === 'fa' ? 'fa_IR' : 'en_US',
      alternateLocale: opts.locale === 'fa' ? ['en_US'] : ['fa_IR'],
      siteName: 'MEGA JS',
      images: [{ url: image, alt: title }],
      ...(opts.type === 'article'
        ? {
            publishedTime: opts.publishedTime || undefined,
            modifiedTime: opts.modifiedTime || undefined,
            tags: opts.tags,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots,
  };
}

/** Build Next.js Metadata from Rank Math / SeoMeta fields (Google + social). */
export function buildPublicMetadata(opts: {
  locale: string;
  fallbackTitle: string;
  fallbackDescription?: string;
  seo?: SeoLike | null;
  /** Path without locale, e.g. /parent/cat/post */
  defaultPath: string;
  ogImageFallback?: string | null;
  type?: 'website' | 'article';
  publishedTime?: string | null;
  modifiedTime?: string | null;
  tags?: string[];
}): Metadata {
  const rawCanonical = opts.seo?.canonicalPath?.trim() || opts.defaultPath;
  // Avoid /fa/en/... when CMS stores a locale-prefixed canonical
  const path = rawCanonical
    .replace(/^\/(fa|en)(?=\/|$)/, '')
    .replace(/^\/?/, '/');
  return pageMetadata({
    locale: opts.locale,
    title: opts.seo?.metaTitle?.trim() || opts.fallbackTitle,
    description:
      opts.seo?.metaDescription?.trim() || opts.fallbackDescription || undefined,
    path: path === '/' ? opts.defaultPath : path,
    image: opts.seo?.ogImageUrl || opts.ogImageFallback || DEFAULT_OG_IMAGE,
    noIndex: Boolean(opts.seo?.noIndex),
    noFollow: Boolean(opts.seo?.noFollow),
    type: opts.type,
    publishedTime: opts.publishedTime,
    modifiedTime: opts.modifiedTime,
    tags: opts.tags,
  });
}

export function jsonLdScript(data: unknown) {
  if (
    !data ||
    (typeof data === 'object' && data !== null && Object.keys(data as object).length === 0)
  ) {
    return null;
  }
  const raw = typeof data === 'string' ? data : JSON.stringify(data);
  if (!raw || raw === '{}') return null;
  return raw;
}

/** schema.org Organization — sitewide identity */
export function organizationJsonLd(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MEGA JS',
    url: absoluteUrl(localePath(locale, '/')),
    logo: absoluteUrl('/logo-mark.svg'),
    sameAs: [] as string[],
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
  };
}

/** schema.org WebSite + SearchAction (sitelinks search box eligible) */
export function websiteJsonLd(locale: string, opts?: { name?: string; description?: string }) {
  const home = absoluteUrl(localePath(locale, '/'));
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: opts?.name || 'MEGA JS',
    description: opts?.description,
    url: home,
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'MEGA JS',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo-mark.svg'),
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: absoluteUrl(localePath(locale, '/learn')) + '?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbJsonLd(
  locale: string,
  items: Array<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(localePath(locale, item.path)),
    })),
  };
}

export function courseJsonLd(opts: {
  locale: string;
  name: string;
  description?: string;
  path: string;
  image?: string | null;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(localePath(opts.locale, opts.path)),
    provider: {
      '@type': 'Organization',
      name: 'MEGA JS',
      sameAs: absoluteUrl(localePath(opts.locale, '/')),
    },
    image: opts.image ? resolveMediaUrl(opts.image) : absoluteUrl('/logo-mark.svg'),
    inLanguage: opts.locale === 'fa' ? 'fa-IR' : 'en-US',
  };
}
