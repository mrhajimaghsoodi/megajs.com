'use client';

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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

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
    { href: `${base}/pricing`, label: dict.nav.pricing },
  ];
  const more = [
    { href: `${base}/podcasts`, label: dict.nav.podcasts },
    { href: `${base}/tokens`, label: dict.nav.tokens },
    { href: `${base}/apps`, label: dict.nav.apps },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];
  const categories = [
    { href: `${base}/learn`, label: w.cats.all },
    { href: `${base}/curriculum`, label: w.cats.roadmap },
    { href: `${base}/practice`, label: w.cats.practice },
    { href: `${base}/live`, label: w.cats.live },
    { href: `${base}/pricing`, label: w.cats.plans },
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
      {/* WoodMart-style top bar */}
      <div className="hidden border-b border-white/10 bg-[#1a1a1a] text-white sm:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-[11px] sm:px-6 lg:px-8">
          <p className="truncate text-white/70">{w.topbar.promo}</p>
          <div className="flex shrink-0 items-center gap-4 text-white/55">
            <span>{w.topbar.support}</span>
            <Link href={`${base}/contact`} className="hover:text-primary">
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center gap-3 px-4 sm:px-6 lg:gap-6 lg:px-8">
          <Logo href={base} priority />

          <form onSubmit={onSearch} className="relative mx-auto hidden min-w-0 flex-1 md:block lg:max-w-xl">
            <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={w.searchPlaceholder}
              className="h-11 rounded-none border-border bg-muted/40 pe-24 ps-10"
              aria-label={dict.search}
            />
            <Button
              type="submit"
              size="sm"
              className="absolute end-1 top-1/2 h-9 -translate-y-1/2 rounded-none px-4"
            >
              {dict.search}
            </Button>
          </form>

          <div className="ms-auto flex items-center gap-1 sm:gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden rounded-none font-mono text-xs uppercase sm:inline-flex"
            >
              <Link href={switchedPath} hrefLang={other}>
                {other === 'fa' ? 'فا' : 'EN'}
              </Link>
            </Button>
            <ThemeToggle />
            <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex" title={w.wishlist}>
              <Link href={`${base}/learn`} aria-label={w.wishlist}>
                <Heart className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex" title={w.cart}>
              <Link href={`${base}/pricing`} aria-label={w.cart}>
                <ShoppingBag className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" title={authed ? dict.nav.profile : dict.nav.login}>
              <Link href={authed ? `${base}/profile` : `${base}/login`} aria-label={dict.nav.login}>
                <UserRound className="size-5" />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-none lg:hidden" aria-label={dict.menu}>
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side={locale === 'fa' ? 'right' : 'left'} className="w-[min(100%,20rem)]">
                <SheetHeader>
                  <SheetTitle>{dict.brand}</SheetTitle>
                </SheetHeader>
                <form onSubmit={onSearch} className="mt-4 md:hidden">
                  <Input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder={w.searchPlaceholder}
                    className="rounded-none"
                  />
                </form>
                <div className="mt-4 flex flex-col gap-1">
                  {[...primary, ...more].map((link) => (
                    <Button key={link.href} asChild variant="ghost" className="justify-start rounded-none">
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Category / mega nav bar */}
        <div className="hidden border-t border-border bg-[#1a1a1a] text-white lg:block">
          <div className="mx-auto flex h-11 max-w-7xl items-center gap-1 px-4 sm:px-6 lg:px-8">
            <div className="me-3 flex h-full items-center gap-2 bg-primary px-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-[var(--mj-ink)]">
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
                      'px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors',
                      active ? 'text-primary' : 'text-white/70 hover:text-primary',
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="ms-auto flex items-center gap-3 text-[11px] text-white/45">
              {categories.slice(0, 3).map((c) => (
                <Link key={c.href} href={c.href} className="hover:text-primary">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
