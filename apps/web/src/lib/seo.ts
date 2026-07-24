import type { Metadata } from 'next';
import { resolveMediaUrl } from '@/lib/media-url';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localePath(locale: string, path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (p === `/${locale}` || p.startsWith(`/${locale}/`)) return p;
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
  const title = opts.seo?.metaTitle?.trim() || opts.fallbackTitle;
  const description =
    opts.seo?.metaDescription?.trim() || opts.fallbackDescription || undefined;
  const canonicalRel = opts.seo?.canonicalPath?.trim() || opts.defaultPath;
  const canonical = absoluteUrl(localePath(opts.locale, canonicalRel));
  const ogImage = opts.seo?.ogImageUrl || opts.ogImageFallback || undefined;
  const robots: Metadata['robots'] = opts.seo?.noIndex
    ? {
        index: false,
        follow: !opts.seo?.noFollow,
        googleBot: {
          index: false,
          follow: !opts.seo?.noFollow,
        },
      }
    : opts.seo?.noFollow
      ? { index: true, follow: false }
      : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fa: absoluteUrl(localePath('fa', canonicalRel)),
        en: absoluteUrl(localePath('en', canonicalRel)),
      },
    },
    openGraph: {
      type: opts.type === 'article' ? 'article' : 'website',
      title,
      description,
      url: canonical,
      locale: opts.locale === 'fa' ? 'fa_IR' : 'en_US',
      siteName: 'MEGA JS',
      images: ogImage ? [{ url: resolveMediaUrl(ogImage) }] : undefined,
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
      images: ogImage ? [resolveMediaUrl(ogImage)] : undefined,
    },
    robots,
  };
}

export function jsonLdScript(data: unknown) {
  if (!data || (typeof data === 'object' && data !== null && Object.keys(data as object).length === 0)) {
    return null;
  }
  const raw =
    typeof data === 'string'
      ? data
      : JSON.stringify(data);
  if (!raw || raw === '{}') return null;
  return raw;
}
