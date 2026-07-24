import Link from 'next/link';
import { MediaImage } from '@/components/media-image';
import type { PublicArticle } from '@/lib/catalog';
import type { Locale } from '@/lib/utils';

export function BlogTeaser({
  articles,
  locale,
  emptyTopics,
  emptyLabel,
  readMore,
}: {
  articles: PublicArticle[];
  locale: Locale;
  emptyTopics: string[];
  emptyLabel: string;
  readMore: string;
}) {
  const items =
    articles.length > 0
      ? articles.map((a) => ({
          key: a.id,
          href: `/${locale}${a.permalink || `/articles/${a.slug}`}`,
          title: a.title,
          summary: a.summary ?? '',
          coverUrl: (a as PublicArticle & { coverUrl?: string }).coverUrl,
        }))
      : emptyTopics.slice(0, 3).map((topic, i) => ({
          key: `topic-${i}`,
          href: `/${locale}/articles`,
          title: topic,
          summary: emptyLabel,
          coverUrl: undefined as string | undefined,
        }));

  return (
    <div className="mj-stagger grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className="mj-lift group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--mj-shadow-sm)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[var(--mj-black)] via-[#2a2a2a] to-[var(--mj-yellow)]">
            {item.coverUrl ? (
              <MediaImage
                src={item.coverUrl}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="transition duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div
                className="h-full w-full opacity-35"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, rgba(255,212,0,0.4), transparent 50%)',
                }}
                aria-hidden
              />
            )}
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-[var(--mj-yellow)]">
              {item.title}
            </h3>
            <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{item.summary}</p>
            <span className="pt-2 text-xs font-bold text-[var(--mj-yellow)]">{readMore}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
