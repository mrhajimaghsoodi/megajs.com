'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import {
  Code2,
  ExternalLink,
  Folder,
  GraduationCap,
  LayoutDashboard,
  LifeBuoy,
  Radio,
  Settings,
  ShoppingBag,
  UserRound,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { getDictionary } from '@/i18n/dictionaries';
import {
  activeEndpointId,
  bannerCopy,
  endpointHref,
  FALLBACK_MY_ACCOUNT,
  flattenEnabledItems,
  itemLabel,
  type MyAccountItem,
  type MyAccountSettings,
} from '@/lib/my-account';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';
import { cn } from '@/lib/utils';

const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  GraduationCap,
  ShoppingBag,
  Wallet,
  Code2,
  Radio,
  LifeBuoy,
  Settings,
  Folder,
  ExternalLink,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const Comp = ICONS[name] ?? LayoutDashboard;
  return <Comp className={className} aria-hidden />;
}

function NavLink({
  item,
  locale,
  activeId,
  colors,
  ajax,
}: {
  item: MyAccountItem;
  locale: Locale;
  activeId: string;
  colors: MyAccountSettings['colors'];
  ajax: boolean;
}) {
  const href = endpointHref(locale, item);
  const active = item.id === activeId;
  const label = itemLabel(item, locale);
  const className = cn(
    'mj-nav-item flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
    item.className,
  );
  const style: CSSProperties = active
    ? { background: colors.menuActiveBg, color: colors.menuActiveText }
    : { color: colors.menuText };

  if (item.type === 'link') {
    return (
      <a
        href={href}
        target={item.openInNewTab ? '_blank' : undefined}
        rel={item.openInNewTab ? 'noreferrer' : undefined}
        className={cn(className, 'hover:bg-black/5')}
        style={style}
      >
        <Icon name={item.icon} className="size-4 shrink-0 opacity-80" />
        <span className="truncate">{label}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      prefetch={ajax}
      className={cn(className, !active && 'hover:bg-black/5')}
      style={style}
    >
      <Icon name={item.icon} className="size-4 shrink-0 opacity-80" />
      <span className="truncate">{label}</span>
    </Link>
  );
}

export function ProfileShell({ children }: { children: ReactNode }) {
  const params = useParams<{ locale: string }>();
  const pathname = usePathname();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const dict = getDictionary(locale);
  const p = dict.profile;
  const [config, setConfig] = useState<MyAccountSettings>(FALLBACK_MY_ACCOUNT);
  const [role, setRole] = useState<string | null>(null);
  const [user, setUser] = useState<{
    displayName?: string | null;
    phone?: string | null;
    email?: string | null;
    emailVerified?: boolean;
  } | null>(null);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    void fetch(`${API_BASE}/public/my-account`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data) setConfig(data as MyAccountSettings);
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('mj_token');
    setAuthed(Boolean(token));
    if (!token) {
      setRole('guest');
      return;
    }
    void fetch(`${API_BASE}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((me) => {
        if (!me) {
          setRole('guest');
          return;
        }
        setRole(me.role ?? 'user');
        setUser(me);
      })
      .catch(() => setRole('guest'));
  }, []);

  const items = useMemo(
    () => flattenEnabledItems(config.items ?? [], role),
    [config.items, role],
  );
  const activeId = activeEndpointId(pathname, locale, items);
  const colors = config.colors;
  const layout = config.layout === 'tabs' ? 'tabs' : 'sidebar';
  const sidebarEnd = config.sidebarPosition === 'end';
  const needsEmail =
    Boolean(config.emailVerification?.enabled) &&
    authed &&
    user &&
    !user.emailVerified;

  const banners = (config.banners ?? []).filter(
    (b) =>
      b.enabled &&
      (b.target === '*' ||
        b.target === activeId ||
        (b.target === 'dashboard' && activeId === 'dashboard')),
  );

  const menu = (
    <nav className={cn(layout === 'tabs' ? 'flex flex-wrap gap-1.5' : 'flex flex-col gap-1')}>
      {items.map((item) => {
        if (item.type === 'group') {
          return (
            <div key={item.id} className={cn('mt-2', item.className, layout === 'tabs' && 'w-full')}>
              <div
                className="mb-1.5 flex items-center gap-2 px-2 text-[11px] font-bold uppercase tracking-wide opacity-55"
                style={{ color: colors.menuText }}
              >
                <Icon name={item.icon} className="size-3.5" />
                {itemLabel(item, locale)}
              </div>
              <div className={cn(layout === 'tabs' ? 'flex flex-wrap gap-1.5' : 'flex flex-col gap-1')}>
                {(item.children ?? []).map((child) => (
                  <NavLink
                    key={child.id}
                    item={child}
                    locale={locale}
                    activeId={activeId}
                    colors={colors}
                    ajax={config.ajax}
                  />
                ))}
              </div>
            </div>
          );
        }
        return (
          <NavLink
            key={item.id}
            item={item}
            locale={locale}
            activeId={activeId}
            colors={colors}
            ajax={config.ajax}
          />
        );
      })}
    </nav>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-primary">{p.panel}</p>
          <h1 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{p.accountTitle}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{p.accountSubtitle}</p>
        </div>
      </div>

      <div
        className={cn(
          'grid gap-6',
          layout === 'sidebar' && 'lg:grid-cols-[280px_1fr]',
          layout === 'sidebar' && sidebarEnd && 'lg:[grid-template-columns:1fr_280px]',
        )}
      >
        <aside
          className={cn(
            'h-fit overflow-hidden rounded-2xl border border-border shadow-[var(--mj-shadow-sm)]',
            layout === 'tabs' && 'lg:col-span-full',
            layout === 'sidebar' && sidebarEnd && 'lg:order-2',
          )}
          style={{ background: colors.menuBg }}
        >
          <div
            className="flex items-center gap-3 border-b border-black/5 px-4 py-4"
            style={{ borderColor: 'color-mix(in oklab, currentColor 8%, transparent)' }}
          >
            <div
              className="flex size-12 items-center justify-center rounded-2xl text-white"
              style={{ background: colors.accent }}
            >
              <UserRound className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold" style={{ color: colors.menuText }}>
                {authed
                  ? `${p.hello}، ${user?.displayName ?? user?.phone ?? '—'}`
                  : p.pleaseLogin}
              </p>
              <p className="truncate text-xs opacity-60" style={{ color: colors.menuText }}>
                {authed ? user?.email || user?.phone || role : 'guest'}
              </p>
            </div>
          </div>
          <div className="p-3">{menu}</div>
        </aside>

        <div
          className={cn(
            'min-w-0 rounded-2xl border border-border p-4 shadow-[var(--mj-shadow-sm)] sm:p-6',
            config.ajax && 'mj-account-ajax',
            layout === 'sidebar' && sidebarEnd && 'lg:order-1',
          )}
          style={{ background: colors.contentBg }}
          key={config.ajax ? pathname : 'static'}
        >
          {needsEmail ? (
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
              <p>{p.verifyEmailBanner}</p>
              <Link
                href={`/${locale}/profile/settings`}
                className="rounded-xl bg-amber-500 px-3 py-1.5 text-xs font-bold text-white"
              >
                {p.verifyEmailCta}
              </Link>
            </div>
          ) : null}
          {banners.map((b) => {
            const copy = bannerCopy(b, locale);
            const inner = (
              <div className="mb-5 overflow-hidden rounded-2xl border border-border bg-[var(--mj-accent-soft)]">
                {b.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={b.imageUrl} alt="" className="h-36 w-full object-cover" />
                ) : null}
                <div className="p-4 sm:p-5">
                  <h2 className="font-display text-lg font-bold" style={{ color: colors.accent }}>
                    {copy.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{copy.body}</p>
                </div>
              </div>
            );
            if (b.href) {
              const href = b.href.startsWith('http')
                ? b.href
                : `/${locale}${b.href.startsWith('/') ? b.href : `/${b.href}`}`;
              return (
                <Link key={b.id} href={href} className="block">
                  {inner}
                </Link>
              );
            }
            return <div key={b.id}>{inner}</div>;
          })}
          {children}
        </div>
      </div>
    </div>
  );
}
