import Link from 'next/link';
import type { PublicArticle } from '@/lib/catalog';
import { resolveMediaUrl } from '@/lib/media-url';
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
          href: `/${locale}/articles/${a.slug}`,
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
          className="group flex flex-col border border-border bg-card transition-colors hover:border-primary/40"
        >
          <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2410] to-primary/40">
            {item.coverUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={resolveMediaUrl(item.coverUrl)}
                alt=""
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div
                className="h-full w-full opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
                aria-hidden
              />
            )}
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-primary">
              {item.title}
            </h3>
            <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{item.summary}</p>
            <span className="pt-2 text-xs font-bold uppercase tracking-wide text-muted-foreground group-hover:text-primary">
              {readMore}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
