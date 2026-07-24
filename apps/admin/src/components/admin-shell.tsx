'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useAdminLocale } from '@/i18n/locale-context';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, dict, setLocale, dir } = useAdminLocale();
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [me, setMe] = useState<{ displayName?: string; role?: string; phone?: string } | null>(
    null,
  );

  const NAV = useMemo(
    () => [
      { href: '/', label: dict.nav.dashboard },
      { href: '/catalog', label: dict.nav.catalog },
      { href: '/seo', label: dict.nav.seo },
      { href: '/users', label: dict.nav.users },
      { href: '/billing', label: dict.nav.billing },
      { href: '/practice', label: dict.nav.practice },
      { href: '/live', label: dict.nav.live },
      { href: '/support', label: dict.nav.support },
      { href: '/audit', label: dict.nav.audit },
    ],
    [dict],
  );

  useEffect(() => {
    const sync = () => {
      setToken(localStorage.getItem('mj_admin_token'));
      setReady(true);
    };
    sync();
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, [pathname]);

  useEffect(() => {
    if (!ready) return;
    if (!token) {
      if (pathname !== '/login') router.replace('/login');
      return;
    }
    void (async () => {
      const res = await fetch(`${API}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        localStorage.removeItem('mj_admin_token');
        router.replace('/login');
        return;
      }
      const data = await res.json();
      if (!['super_admin', 'editor', 'instructor', 'support', 'analyst'].includes(data.role)) {
        setMe(null);
        router.replace('/login');
        return;
      }
      setMe(data);
    })();
  }, [token, ready, pathname, router]);

  const headers = useMemo(() => {
    const h: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) h.Authorization = `Bearer ${token}`;
    return h;
  }, [token]);

  if (!ready) return null;
  if (pathname === '/login') return <>{children}</>;
  if (!token || !me) {
    return (
      <div className="grid min-h-dvh place-items-center text-sm text-[var(--mj-muted-fg)]">
        {dict.checkingAccess}
      </div>
    );
  }

  const siteUrl =
    locale === 'fa'
      ? process.env.NEXT_PUBLIC_SITE_URL
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/fa`
        : 'http://localhost:3000/fa'
      : process.env.NEXT_PUBLIC_SITE_URL
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/en`
        : 'http://localhost:3000/en';

  return (
    <div
      dir={dir}
      lang={locale}
      className="min-h-dvh bg-[var(--mj-bg)] lg:grid lg:grid-cols-[260px_1fr]"
    >
      <aside className="border-b border-[var(--mj-border)] bg-[#121212] text-white lg:border-b-0 lg:border-e lg:border-[var(--mj-border)]">
        <div className="flex h-16 items-center gap-3 border-b border-white/10 px-4">
          <Image src="/logo-mark.svg" alt="" width={32} height={32} />
          <div>
            <div className="font-display text-sm font-bold tracking-tight">{dict.brand}</div>
            <div className="font-mono text-[10px] text-[var(--mj-yellow)]">{me.role}</div>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto p-3 lg:flex-col">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href + '/'));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mj-nav-item cursor-pointer rounded-md px-3 py-2.5 text-sm transition-colors ${
                  active
                    ? 'bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)]'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden border-t border-white/10 p-4 text-xs text-white/55 lg:block">
          <div className="font-mono" dir="ltr">
            {me.displayName ?? me.phone}
          </div>
          <button
            type="button"
            className="mt-3 cursor-pointer text-[var(--mj-yellow)] underline-offset-4 hover:underline"
            onClick={() => {
              localStorage.removeItem('mj_admin_token');
              setToken(null);
              setMe(null);
              window.location.assign('/login');
            }}
          >
            {dict.logout}
          </button>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="flex h-16 items-center justify-between gap-3 border-b border-[var(--mj-border)] bg-[var(--mj-card)] px-4 sm:px-6">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mj-muted-fg)]">
            {dict.console}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="mj-btn inline-flex h-9 cursor-pointer items-center rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] px-3 text-sm font-medium"
              onClick={() => setLocale(locale === 'fa' ? 'en' : 'fa')}
            >
              {locale === 'fa' ? 'EN' : 'فا'}
            </button>
            <a
              href={siteUrl}
              className="text-sm underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {dict.viewSite}
            </a>
          </div>
        </header>
        <div className="p-4 sm:p-6" data-admin-headers={JSON.stringify(headers)}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function useAdminToken() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => setToken(localStorage.getItem('mj_admin_token')), []);
  return token;
}

export async function adminFetch(path: string, init?: RequestInit) {
  const token = localStorage.getItem('mj_admin_token');
  const headers = new Headers(init?.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  const res = await fetch(`${API}${path}`, { ...init, headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json();
}
