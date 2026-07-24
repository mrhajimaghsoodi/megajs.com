import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import { formatTehranYear } from '@/lib/tehran-time';
import type { Locale } from '@/lib/utils';
import { Logo } from './logo';
import { NewsletterBand } from './woodmart/newsletter';

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const f = dict.footer;
  const w = dict.woodmart;
  const columns = [
    {
      title: f.learn,
      links: [
        { href: `${base}/learn`, label: dict.nav.learn },
        { href: `${base}/curriculum`, label: dict.nav.curriculum },
        { href: `${base}/practice`, label: dict.nav.practice },
        { href: `${base}/live`, label: dict.nav.live },
      ],
    },
    {
      title: f.content,
      links: [
        { href: `${base}/articles`, label: dict.nav.articles },
        { href: `${base}/tunnel`, label: dict.nav.tunnel },
        { href: `${base}/docs`, label: dict.nav.docs },
        { href: `${base}/podcasts`, label: dict.nav.podcasts },
        { href: `${base}/tokens`, label: dict.nav.tokens },
      ],
    },
    {
      title: f.product,
      links: [
        { href: `${base}/pricing`, label: dict.nav.pricing },
        { href: `${base}/apps`, label: dict.nav.apps },
        { href: `${base}/login`, label: dict.nav.login },
      ],
    },
    {
      title: f.company,
      links: [
        { href: `${base}/about`, label: dict.nav.about },
        { href: `${base}/contact`, label: dict.nav.contact },
        { href: `${base}/profile/support`, label: dict.support.title },
      ],
    },
    {
      title: f.legal,
      links: [
        { href: `${base}/terms`, label: dict.terms.title },
        { href: `${base}/privacy`, label: dict.privacy.title },
      ],
    },
  ];

  return (
    <>
      <NewsletterBand
        title={w.newsletter.title}
        body={w.newsletter.body}
        placeholder={w.newsletter.placeholder}
        cta={w.newsletter.cta}
        success={w.newsletter.success}
      />
      <footer className="mt-auto border-t border-border bg-[var(--mj-black)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
            <div className="space-y-4">
              <Logo href={base} />
              <p className="max-w-sm text-sm leading-7 text-white/60">{f.blurb}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {w.footerBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {columns.map((col) => (
                <div key={col.title}>
                  <div className="mb-3 text-xs font-bold text-[var(--mj-yellow)]">{col.title}</div>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-[var(--mj-yellow)] hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>© {formatTehranYear()} MEGA JS</span>
            <span>{f.rights}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
