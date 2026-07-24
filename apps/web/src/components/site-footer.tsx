import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/utils';
import { Logo } from './logo';

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const f = dict.footer;
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
    <footer className="mt-auto border-t border-white/10 bg-[#0c0c0c] text-[var(--mj-canvas-fg)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-4">
            <Logo href={base} />
            <p className="max-w-sm text-sm leading-7 text-white/55">{f.blurb}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 underline-offset-4 transition-colors hover:text-primary hover:underline"
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
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} MEGA JS</span>
          <span>{f.rights}</span>
        </div>
      </div>
    </footer>
  );
}
