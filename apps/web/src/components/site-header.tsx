'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Heart,
  MenuIcon,
  Search,
  ShoppingBag,
  UserRound,
} from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MobileNavSheet = dynamic(
  () => import('./mobile-nav-sheet').then((m) => m.MobileNavSheet),
  {
    ssr: false,
    loading: () => (
      <Button variant="outline" size="icon" className="rounded-xl lg:hidden" aria-hidden>
        <MenuIcon />
      </Button>
    ),
  },
);

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const base = `/${locale}`;
  const w = dict.woodmart;
  const primary = [
    { href: `${base}/learn`, label: dict.nav.learn },
    { href: `${base}/curriculum`, label: dict.nav.curriculum },
    { href: `${base}/practice`, label: dict.nav.practice },
    { href: `${base}/live`, label: dict.nav.live },
    { href: `${base}/articles`, label: dict.nav.articles },
    { href: `${base}/tunnel`, label: dict.nav.tunnel },
    { href: `${base}/docs`, label: dict.nav.docs },
    { href: `${base}/pricing`, label: dict.nav.pricing },
  ];
  const more = [
    { href: `${base}/podcasts`, label: dict.nav.podcasts },
    { href: `${base}/tokens`, label: dict.nav.tokens },
    { href: `${base}/apps`, label: dict.nav.apps },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];
  const other = locale === 'fa' ? 'en' : 'fa';
  const switchedPath = pathname?.replace(/^\/(fa|en)(?=\/|$)/, `/${other}`) || `/${other}`;
  const [authed, setAuthed] = useState(false);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    setAuthed(Boolean(localStorage.getItem('mj_token')));
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    window.location.href = query
      ? `${base}/learn?q=${encodeURIComponent(query)}`
      : `${base}/learn`;
  }

  return (
    <div className="sticky top-0 z-40">
      <div className="hidden border-b border-border bg-[var(--mj-black)] text-white sm:block dark:bg-black/40">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-[11px] sm:px-6 lg:px-8">
          <p className="truncate text-white/70">{w.topbar.promo}</p>
          <div className="flex shrink-0 items-center gap-4 text-white/55">
            <span>{w.topbar.support}</span>
            <Link href={`${base}/contact`} className="font-medium text-[var(--mj-yellow)] hover:underline">
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      </div>

      <header className="border-b border-border bg-card/95 shadow-[var(--mj-shadow-sm)] backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-3 px-4 sm:px-6 lg:gap-6 lg:px-8">
          <Logo href={base} priority />

          <form
            onSubmit={onSearch}
            className="relative mx-auto hidden min-w-0 flex-1 md:block lg:max-w-xl"
          >
            <Search className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={w.searchPlaceholder}
              className="h-11 rounded-2xl border-border bg-muted/60 pe-24 ps-10"
              aria-label={dict.search}
            />
            <Button
              type="submit"
              size="sm"
              className="absolute end-1.5 top-1/2 h-8 -translate-y-1/2 rounded-xl px-4 font-bold"
            >
              {dict.search}
            </Button>
          </form>

          <div className="ms-auto flex items-center gap-1 sm:gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden rounded-xl font-mono text-xs uppercase sm:inline-flex"
            >
              <Link href={switchedPath} hrefLang={other}>
                {other === 'fa' ? 'فا' : 'EN'}
              </Link>
            </Button>
            <ThemeToggle />
            <Button asChild variant="ghost" size="icon" className="hidden rounded-xl sm:inline-flex" title={w.wishlist}>
              <Link href={`${base}/learn`} aria-label={w.wishlist}>
                <Heart className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hidden rounded-xl sm:inline-flex" title={w.cart}>
              <Link href={`${base}/pricing`} aria-label={w.cart}>
                <ShoppingBag className="size-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="hidden rounded-xl px-3 font-bold sm:inline-flex"
              title={authed ? dict.nav.profile : dict.nav.login}
            >
              <Link href={authed ? `${base}/profile` : `${base}/login`}>
                <UserRound className="me-1.5 size-4" />
                {authed ? dict.nav.profile : dict.nav.login}
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-xl sm:hidden" title={authed ? dict.nav.profile : dict.nav.login}>
              <Link href={authed ? `${base}/profile` : `${base}/login`} aria-label={dict.nav.login}>
                <UserRound className="size-5" />
              </Link>
            </Button>

            <MobileNavSheet
              locale={locale}
              dict={dict}
              links={[...primary, ...more]}
              open={open}
              onOpenChange={setOpen}
              q={q}
              onQChange={setQ}
              onSearch={onSearch}
            />
          </div>
        </div>

        <div className="hidden border-t border-border bg-[var(--mj-black)] text-white lg:block">
          <div className="mx-auto flex h-12 max-w-7xl items-center gap-1 px-4 sm:px-6 lg:px-8">
            <div className="me-3 inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground">
              <MenuIcon className="size-3.5" />
              {w.browseCategories}
            </div>
            <nav className="flex items-center gap-0.5" aria-label="Primary">
              {primary.map((link) => {
                const active = pathname === link.href || pathname?.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                      active
                        ? 'bg-white/10 text-[var(--mj-yellow)]'
                        : 'text-white/70 hover:bg-white/5 hover:text-[var(--mj-yellow)]',
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
