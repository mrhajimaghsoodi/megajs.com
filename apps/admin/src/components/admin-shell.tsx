'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useAdminLocale } from '@/i18n/locale-context';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

type NavItem = { href: string; label: string };
type NavGroup = { label?: string; items: NavItem[] };

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, dict, setLocale, dir } = useAdminLocale();
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [me, setMe] = useState<{ displayName?: string; role?: string; phone?: string } | null>(
    null,
  );

  // WordPress + WooCommerce menu order (point-by-point)
  const NAV: NavGroup[] = useMemo(
    () => [
      {
        label: dict.nav.groupDashboard,
        items: [
          { href: '/', label: dict.nav.dashboard },
          { href: '/updates', label: dict.nav.updates },
        ],
      },
      {
        label: dict.nav.groupPosts,
        items: [
          { href: '/posts', label: dict.nav.allPosts },
          { href: '/posts/new', label: dict.nav.addPost },
          { href: '/categories', label: dict.nav.postCategories },
          { href: '/tags', label: dict.nav.postTags },
        ],
      },
      {
        label: dict.nav.groupMedia,
        items: [
          { href: '/media', label: dict.nav.library },
          { href: '/media/new', label: dict.nav.addMedia },
        ],
      },
      {
        label: dict.nav.groupPages,
        items: [
          { href: '/pages', label: dict.nav.allPages },
          { href: '/pages/new', label: dict.nav.addPage },
        ],
      },
      {
        items: [{ href: '/comments', label: dict.nav.comments }],
      },
      {
        label: dict.nav.groupWoo,
        items: [
          { href: '/woocommerce', label: dict.nav.wooHome },
          { href: '/orders', label: dict.nav.orders },
          { href: '/customers', label: dict.nav.customers },
          { href: '/coupons', label: dict.nav.coupons },
          { href: '/reports', label: dict.nav.reports },
          { href: '/settings?tab=woocommerce', label: dict.nav.wooSettings },
          { href: '/woocommerce/status', label: dict.nav.wooStatus },
        ],
      },
      {
        label: dict.nav.groupProducts,
        items: [
          { href: '/catalog', label: dict.nav.allProducts },
          { href: '/catalog', label: dict.nav.addProduct },
          { href: '/product-categories', label: dict.nav.productCategories },
          { href: '/product-tags', label: dict.nav.productTags },
          { href: '/attributes', label: dict.nav.attributes },
          { href: '/plans', label: dict.nav.plans },
        ],
      },
      {
        label: dict.nav.groupAppearance,
        items: [
          { href: '/appearance/themes', label: dict.nav.themes },
          { href: '/appearance/customize', label: dict.nav.customize },
          { href: '/appearance/widgets', label: dict.nav.widgets },
          { href: '/menus', label: dict.nav.menus },
        ],
      },
      {
        label: dict.nav.groupPlugins,
        items: [
          { href: '/plugins', label: dict.nav.installedPlugins },
          { href: '/plugins/rankmath', label: dict.nav.rankmath },
          { href: '/plugins/wordfence', label: dict.nav.wordfence },
          { href: '/plugins/wprocket', label: dict.nav.wprocket },
          { href: '/plugins/smush', label: dict.nav.smush },
          { href: '/plugins/elementor', label: dict.nav.elementor },
        ],
      },
      {
        label: dict.nav.groupUsers,
        items: [
          { href: '/users', label: dict.nav.allUsers },
          { href: '/users/new', label: dict.nav.addUser },
          { href: '/profile', label: dict.nav.profile },
        ],
      },
      {
        label: dict.nav.groupTools,
        items: [
          { href: '/tools', label: dict.nav.availableTools },
          { href: '/tools/import', label: dict.nav.import },
          { href: '/tools/export', label: dict.nav.export },
          { href: '/tools/site-health', label: dict.nav.siteHealth },
          { href: '/seo', label: dict.nav.seo },
        ],
      },
      {
        label: dict.nav.groupSettings,
        items: [
          { href: '/settings?tab=general', label: dict.nav.settingsGeneral },
          { href: '/settings?tab=writing', label: dict.nav.settingsWriting },
          { href: '/settings?tab=reading', label: dict.nav.settingsReading },
          { href: '/settings?tab=discussion', label: dict.nav.settingsDiscussion },
          { href: '/settings?tab=media', label: dict.nav.settingsMedia },
          { href: '/settings?tab=permalinks', label: dict.nav.settingsPermalinks },
          { href: '/settings?tab=privacy', label: dict.nav.settingsPrivacy },
        ],
      },
      {
        label: dict.nav.groupOps,
        items: [
          { href: '/practice', label: dict.nav.practice },
          { href: '/live', label: dict.nav.live },
          { href: '/support', label: dict.nav.support },
          { href: '/audit', label: dict.nav.audit },
        ],
      },
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
      className="min-h-dvh bg-[var(--mj-bg)] lg:grid lg:grid-cols-[280px_1fr]"
    >
      <aside className="border-b border-[var(--mj-border)] bg-[#1d2327] text-white lg:border-b-0 lg:border-e lg:border-black/40">
        <div className="flex h-16 items-center gap-3 border-b border-white/10 px-4">
          <Image src="/logo-mark.svg" alt="" width={32} height={32} />
          <div>
            <div className="font-display text-sm font-bold tracking-tight">{dict.brand}</div>
            <div className="font-mono text-[10px] text-primary">{me.role}</div>
          </div>
        </div>
        <nav className="max-h-[calc(100dvh-8rem)] space-y-3 overflow-y-auto p-3">
          {NAV.map((group, gi) => (
            <div key={gi}>
              {group.label ? (
                <div className="mb-1 px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                  {group.label}
                </div>
              ) : null}
              <div className="flex flex-col gap-0.5">
                {group.items.map((item) => {
                  const pathOnly = item.href.split('?')[0];
                  const active =
                    pathOnly === '/'
                      ? pathname === '/'
                      : pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
                  return (
                    <Link
                      key={`${item.href}-${item.label}`}
                      href={item.href}
                      className={`mj-nav-item cursor-pointer rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                        active
                          ? 'bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)]'
                          : 'text-white/75 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <div className="hidden border-t border-white/10 p-4 text-xs text-white/55 lg:block">
          <div className="font-mono" dir="ltr">
            {me.displayName ?? me.phone}
          </div>
          <button
            type="button"
            className="mt-3 cursor-pointer text-primary underline-offset-4 hover:underline"
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
