import { API_BASE, type Locale } from '@/lib/utils';

export type CatalogCourse = {
  id?: string;
  slug: string;
  title: string;
  summary: string;
  status: string;
  accessTier: string;
  priceCents?: number | null;
  salePriceCents?: number | null;
  coverUrl?: string | null;
  bannerUrl?: string | null;
  featured?: boolean;
  level?: string | null;
  estimatedMinutes?: number | null;
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
      next: { revalidate: 300, tags: ['catalog', 'courses'] },
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

/** Effective checkout price (sale when set and lower than regular). */
export function effectivePriceCents(course: {
  accessTier?: string;
  priceCents?: number | null;
  salePriceCents?: number | null;
}) {
  if (course.accessTier === 'free') return 0;
  const regular = course.priceCents ?? 0;
  const sale = course.salePriceCents;
  if (sale != null && sale > 0 && sale < regular) return sale;
  return regular;
}

export function formatMoney(locale: Locale, priceCents?: number | null) {
  if (!priceCents) return null;
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

export function formatPrice(
  locale: Locale,
  accessTier: string,
  priceCents?: number | null,
  freeLabel = 'Free',
  salePriceCents?: number | null,
) {
  if (accessTier === 'free' || (!priceCents && !salePriceCents)) return freeLabel;
  if (accessTier === 'subscription') return 'Pro';
  const effective = effectivePriceCents({ accessTier, priceCents, salePriceCents });
  return formatMoney(locale, effective) ?? freeLabel;
}

export function formatDuration(locale: Locale, minutes?: number | null) {
  if (!minutes || minutes <= 0) return null;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (locale === 'fa') {
    if (h && m) return `${h} ساعت و ${m} دقیقه`;
    if (h) return `${h} ساعت`;
    return `${m} دقیقه`;
  }
  if (h && m) return `${h}h ${m}m`;
  if (h) return `${h}h`;
  return `${m}m`;
}
