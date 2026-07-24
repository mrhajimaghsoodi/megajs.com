import Link from 'next/link';
import { formatTehranDateTime } from '@/lib/datetime';
import { resolveMediaUrl } from '@/lib/media-url';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

export type ArticleCardData = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  coverUrl?: string | null;
  publishedAt?: string | null;
  sticky?: boolean;
  permalink?: string;
  taxonomies?: Array<{
    term?: {
      id: string;
      slug: string;
      taxonomy: string;
      i18n?: Array<{ locale: string; name: string }>;
    };
  }>;
};

function termLabel(term: NonNullable<ArticleCardData['taxonomies']>[0]['term'], locale: string) {
  if (!term) return '';
  return (
    term.i18n?.find((x) => x.locale === locale)?.name ??
    term.i18n?.[0]?.name ??
    term.slug
  );
}

export function ArticleCard({
  article,
  locale,
  variant = 'grid',
}: {
  article: ArticleCardData;
  locale: Locale;
  variant?: 'grid' | 'list' | 'compact';
}) {
  const cats = (article.taxonomies ?? [])
    .map((t) => t.term)
    .filter((t) => t?.taxonomy === 'post_category');
  const href = `/${locale}${article.permalink || `/articles/${article.slug}`}`;

  if (variant === 'list') {
    return (
      <Link
        href={href}
        className="group grid gap-4 overflow-hidden border border-border bg-card transition hover:border-primary/50 sm:grid-cols-[11rem_1fr]"
      >
        <div className="aspect-[16/10] bg-muted sm:aspect-auto sm:min-h-[7.5rem]">
          {article.coverUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={resolveMediaUrl(article.coverUrl)}
              alt=""
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#1a1a1a] via-[#2a2410] to-primary/35" />
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 p-4 sm:py-5 sm:pe-5">
          <div className="flex flex-wrap items-center gap-2">
            {article.sticky ? (
              <span className="bg-primary px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[var(--mj-ink)]">
                Sticky
              </span>
            ) : null}
            {cats.slice(0, 2).map((c) =>
              c ? (
                <span key={c.id} className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  {termLabel(c, locale)}
                </span>
              ) : null,
            )}
          </div>
          <h2 className="font-display text-xl font-semibold leading-snug group-hover:text-primary">
            {article.title}
          </h2>
          {article.summary ? (
            <p className="line-clamp-2 text-sm text-muted-foreground">{article.summary}</p>
          ) : null}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col overflow-hidden border border-border bg-card transition hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_16px_40px_-28px_rgba(0,0,0,0.45)]',
        variant === 'compact' && 'text-sm',
      )}
    >
      <div className={cn('aspect-[16/10] bg-muted', variant === 'compact' && 'aspect-[16/9]')}>
        {article.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={resolveMediaUrl(article.coverUrl)}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#1a1a1a] via-[#2a2410] to-primary/40" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex flex-wrap items-center gap-2">
          {article.sticky ? (
            <span className="bg-primary px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[var(--mj-ink)]">
              Sticky
            </span>
          ) : null}
          {cats.slice(0, 2).map((c) =>
            c ? (
              <span key={c.id} className="font-mono text-[10px] uppercase tracking-wider text-primary">
                {termLabel(c, locale)}
              </span>
            ) : null,
          )}
        </div>
        <h2 className="font-display text-lg font-semibold leading-snug group-hover:text-primary sm:text-xl">
          {article.title}
        </h2>
        {article.summary ? (
          <p className="line-clamp-3 flex-1 text-sm text-muted-foreground">{article.summary}</p>
        ) : null}
        {article.publishedAt ? (
          <time
            className="pt-1 font-mono text-[11px] text-muted-foreground"
            dateTime={article.publishedAt}
          >
            {formatTehranDateTime(article.publishedAt)}
          </time>
        ) : null}
      </div>
    </Link>
  );
}
