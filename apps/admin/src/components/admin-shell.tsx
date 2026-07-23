'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Image from 'next/image';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

const NAV = [
  { href: '/', label: 'داشبورد' },
  { href: '/catalog', label: 'کاتالوگ' },
  { href: '/seo', label: 'SEO Hub' },
  { href: '/users', label: 'کاربران' },
  { href: '/billing', label: 'فروش / سفارش' },
  { href: '/practice', label: 'چالش‌ها' },
  { href: '/live', label: 'لایو Ops' },
  { href: '/audit', label: 'Audit' },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [me, setMe] = useState<{ displayName?: string; role?: string; phone?: string } | null>(
    null,
  );

  useEffect(() => {
    const t = localStorage.getItem('mj_admin_token');
    setToken(t);
    setReady(true);
  }, []);

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
        در حال بررسی دسترسی…
      </div>
    );
  }

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-[var(--mj-border)] bg-[var(--mj-card)] lg:border-b-0 lg:border-l">
        <div className="flex h-16 items-center gap-3 border-b border-[var(--mj-border)] px-4">
          <Image src="/logo-mark.svg" alt="" width={32} height={32} />
          <div>
            <div className="text-sm font-bold">MEGA Admin</div>
            <div className="font-mono text-[10px] text-[var(--mj-muted-fg)]">{me.role}</div>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto p-3 lg:flex-col">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`cursor-pointer rounded-[var(--mj-radius-md)] px-3 py-2 text-sm transition-colors ${
                  active
                    ? 'bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)]'
                    : 'hover:bg-[var(--mj-muted)]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden border-t border-[var(--mj-border)] p-4 text-xs text-[var(--mj-muted-fg)] lg:block">
          <div>{me.displayName ?? me.phone}</div>
          <button
            type="button"
            className="mt-2 cursor-pointer underline"
            onClick={() => {
              localStorage.removeItem('mj_admin_token');
              router.replace('/login');
            }}
          >
            خروج
          </button>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="flex h-16 items-center justify-between border-b border-[var(--mj-border)] px-4 sm:px-6">
          <div className="text-sm text-[var(--mj-muted-fg)]">کنسول عملیات MEGA JS</div>
          <a
            href="http://localhost:3000/fa"
            className="text-sm underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            مشاهده سایت
          </a>
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
