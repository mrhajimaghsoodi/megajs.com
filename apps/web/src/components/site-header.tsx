'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
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
  const isHome = pathname === base || pathname === `${base}/`;
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
  const other = locale === 'fa' ? 'en' : 'fa';
  const switchedPath = pathname?.replace(/^\/(fa|en)(?=\/|$)/, `/${other}`) || `/${other}`;
  const [authed, setAuthed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAuthed(Boolean(localStorage.getItem('mj_token')));
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b backdrop-blur-md',
        isHome
          ? 'border-white/10 bg-[#0c0c0c]/80 text-[var(--mj-canvas-fg)]'
          : 'border-border bg-background/88',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo href={base} priority className={isHome ? 'brightness-110' : undefined} />
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {primary.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Button
                key={link.href}
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  active && (isHome ? 'bg-white/10 text-primary' : 'bg-muted text-foreground'),
                  !active && isHome && 'text-white/65 hover:bg-white/5 hover:text-white',
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className={cn('font-mono text-xs uppercase', isHome && 'border-white/15 bg-transparent')}
          >
            <Link href={switchedPath} hrefLang={other}>
              {other === 'fa' ? 'فا' : 'EN'}
            </Link>
          </Button>
          <ThemeToggle />
          <Button asChild size="sm" className="hidden h-10 px-4 sm:inline-flex">
            <Link href={authed ? `${base}/profile` : `${base}/login`}>
              {authed ? dict.nav.profile : dict.nav.login}
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={cn('lg:hidden', isHome && 'border-white/15 bg-transparent')}
                aria-label={dict.menu}
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side={locale === 'fa' ? 'right' : 'left'} className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>{dict.brand}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1">
                {[...primary, ...more].map((link) => (
                  <Button key={link.href} asChild variant="ghost" className="justify-start">
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
                <Button asChild className="mt-3">
                  <Link href={authed ? `${base}/profile` : `${base}/login`}>
                    {authed ? dict.nav.profile : dict.nav.login}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
