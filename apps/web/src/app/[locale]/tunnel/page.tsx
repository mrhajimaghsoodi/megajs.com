import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MediaImage } from '@/components/media-image';
import { getDictionary } from '@/i18n/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

async function fetchCategories(locale: string) {
  try {
    const res = await fetch(`${API}/public/tunnel/categories?locale=${locale}`, {
      next: { revalidate: 120, tags: ['tunnel', 'terms'] },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw as Locale);
  return pageMetadata({
    locale: raw as Locale,
    title: dict.tunnel.title,
    description: dict.tunnel.subtitle,
    path: '/tunnel',
  });
}

export default async function TunnelIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const categories = await fetchCategories(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {dict.tunnel.kicker}
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {dict.tunnel.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{dict.tunnel.subtitle}</p>
      </div>

      {!categories.length ? (
        <p className="mt-12 text-muted-foreground">{dict.tunnel.empty}</p>
      ) : (
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat: any) => {
            const img = cat.coverUrl || cat.bannerUrl || cat.imageUrl;
            return (
              <li key={cat.id}>
                <Link
                  href={`/${locale}/tunnel/${cat.slug}`}
                  className="group block space-y-3 outline-none"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {img ? (
                      <MediaImage
                        src={img}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ffd400]/35 via-transparent to-foreground/10" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold tracking-tight group-hover:underline">
                      {cat.name}
                    </h2>
                    {cat.description ? (
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {cat.description}
                      </p>
                    ) : null}
                    <p className="mt-2 font-mono text-xs text-muted-foreground">
                      {dict.tunnel.partsCount.replace('{n}', String(cat.count ?? 0))}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
