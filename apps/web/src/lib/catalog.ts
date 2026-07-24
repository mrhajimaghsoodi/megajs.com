import { API_BASE, type Locale } from '@/lib/utils';

export type CatalogCourse = {
  id?: string;
  slug: string;
  title: string;
  summary: string;
  status: string;
  accessTier: string;
  priceCents?: number | null;
};

export type CatalogTrack = {
  id?: string;
  slug: string;
  yearPlan: number;
  status: string;
  title: string;
  summary: string;
  courses: CatalogCourse[];
};

export type PublicArticle = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  publishedAt?: string;
  coverUrl?: string | null;
  bannerUrl?: string | null;
  permalink?: string;
};

export async function fetchTracks(locale: Locale): Promise<CatalogTrack[]> {
  try {
    const res = await fetch(`${API_BASE}/catalog/tracks?locale=${locale}`, {
      next: { revalidate: 300, tags: ['catalog'] },
    });
    if (!res.ok) return [];
    return (await res.json()) as CatalogTrack[];
  } catch {
    return [];
  }
}

export async function fetchArticles(locale: Locale, limit = 3): Promise<PublicArticle[]> {
  try {
    const res = await fetch(`${API_BASE}/public/articles?locale=${locale}`, {
      next: { revalidate: 300, tags: ['articles'] },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as PublicArticle[];
    return data.slice(0, limit);
  } catch {
    return [];
  }
}

export function flattenCourses(tracks: CatalogTrack[]): CatalogCourse[] {
  return tracks.flatMap((t) => t.courses);
}

export function formatPrice(
  locale: Locale,
  accessTier: string,
  priceCents?: number | null,
  freeLabel = 'Free',
) {
  if (accessTier === 'free' || !priceCents) return freeLabel;
  const amount = Math.round(priceCents / 100);
  try {
    return new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US', {
      style: 'currency',
      currency: locale === 'fa' ? 'IRR' : 'USD',
      maximumFractionDigits: 0,
    }).format(locale === 'fa' ? amount * 10 : amount);
  } catch {
    return `${amount}`;
  }
}
