import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import {
  getDocsCatalog,
  getTechMeta,
  listTechs,
} from '@/lib/docs/loader';
import { localizeTitle } from '@/lib/docs/types';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/utils';

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
    title: dict.docs.title,
    description: dict.docs.subtitle,
    path: '/docs',
  });
}

export default async function DocsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const catalog = getDocsCatalog();
  const techs = listTechs();
  const byId = new Map(techs.map((t) => [t.id, t]));

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6" dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {dict.docs.kicker}
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {dict.docs.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{dict.docs.subtitle}</p>
        <p className="mt-3 text-sm text-muted-foreground">{dict.docs.sourcesNote}</p>
      </div>

      <div className="mt-14 space-y-12">
        {catalog.groups.map((group) => (
          <section key={group.id}>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              {localizeTitle(group.title, locale)}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.techs.map((id) => {
                const tech = byId.get(id) ?? getTechMeta(id);
                if (!tech) return null;
                return (
                  <li key={id}>
                    <Link
                      href={`/${locale}/docs/${tech.id}`}
                      className="group block space-y-2 border-b border-border pb-4 transition-colors hover:border-[#ffd400]"
                    >
                      <h3 className="font-display text-xl font-bold tracking-tight group-hover:underline">
                        {localizeTitle(tech.title, locale)}
                      </h3>
                      <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {localizeTitle(tech.description, locale)}
                      </p>
                      <p className="font-mono text-[11px] text-muted-foreground" dir="ltr">
                        content/docs/{tech.id}/
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
