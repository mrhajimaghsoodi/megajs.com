'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageEnter, SkeletonPanel, Stagger } from '@/components/ui/motion';
import { useAdminLocale } from '@/i18n/locale-context';
import { formatTehranDate, formatTehranDateTime } from '@/lib/datetime';

type Dash = any;

function fmtMoney(cents: number, locale: string) {
  return `${(cents / 10).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')} IRT`;
}

function fmtNum(n: number, locale: string) {
  return n.toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US');
}

function titleOf(row: any, locale: string) {
  return (
    row?.i18n?.find((x: any) => x.locale === locale)?.title ??
    row?.i18n?.[0]?.title ??
    row?.slug ??
    '—'
  );
}

function BarList({
  rows,
  locale,
}: {
  rows: Array<{ label: string; value: number }>;
  locale: string;
}) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="mb-1 flex items-center justify-between gap-2 text-xs">
            <span className="truncate font-mono">{r.label}</span>
            <span className="font-mono text-[var(--mj-muted-fg)]">
              {fmtNum(r.value, locale)}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[var(--mj-muted)]">
            <div
              className="h-full rounded-full bg-[var(--mj-accent)] transition-all"
              style={{ width: `${Math.max(4, (r.value / max) * 100)}%` }}
            />
          </div>
        </div>
      ))}
      {!rows.length ? (
        <p className="text-sm text-[var(--mj-muted-fg)]">—</p>
      ) : null}
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
  href,
}: {
  label: string;
  value: string | number;
  hint?: string;
  href?: string;
}) {
  const inner = (
    <article className="mj-card-motion h-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4 transition hover:border-[var(--mj-accent)]">
      <div className="text-xs text-[var(--mj-muted-fg)]">{label}</div>
      <div className="mt-2 font-display text-2xl font-bold tracking-tight" dir="ltr">
        {value}
      </div>
      {hint ? <div className="mt-1 text-[11px] text-[var(--mj-muted-fg)]">{hint}</div> : null}
    </article>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-lg font-semibold">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export default function AdminDashboard() {
  const { locale, dict } = useAdminLocale();
  const d = dict.dashboard;
  const [data, setData] = useState<Dash | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await adminFetch('/admin/dashboard');
      setData(res);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void load();
    const t = setInterval(() => void load(), 60_000);
    return () => clearInterval(t);
  }, [load]);

  if (!data && !error) {
    return <SkeletonPanel cards={12} />;
  }

  if (!data) {
    return (
      <div className="space-y-3">
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="text-sm text-[var(--mj-danger)]">{error}</p>
        <Button className="cursor-pointer" onClick={() => void load()}>
          {d.refresh}
        </Button>
      </div>
    );
  }

  const ov = data.overview;
  const people = data.people;
  const content = data.content;
  const catalog = data.catalog;
  const commerce = data.commerce;
  const learning = data.learning;
  const support = data.support;
  const security = data.security;
  const health = data.health;
  const recent = data.recent;

  const heroStats = [
    {
      label: d.users,
      value: fmtNum(ov.usersTotal, locale),
      hint: `+${fmtNum(ov.usersToday, locale)} ${d.today}`,
      href: '/users',
    },
    {
      label: d.revenue,
      value: fmtMoney(ov.revenueCompletedCents, locale),
      hint: `${fmtNum(ov.ordersMonth, locale)} ${d.ordersMonth}`,
      href: '/orders',
    },
    {
      label: d.orders,
      value: fmtNum(data.orders, locale),
      hint: `+${fmtNum(ov.ordersToday, locale)} ${d.today}`,
      href: '/orders',
    },
    {
      label: d.activeSubs,
      value: fmtNum(data.activeSubs, locale),
      hint: d.subscriptions,
      href: '/plans',
    },
    {
      label: d.ticketsOpen,
      value: fmtNum(support.ticketsOpen, locale),
      hint:
        support.ticketsUrgent > 0
          ? `${fmtNum(support.ticketsUrgent, locale)} ${d.urgent}`
          : d.supportHealthy,
      href: '/support',
    },
    {
      label: d.liveNow,
      value: fmtNum(learning.liveNow, locale),
      hint: `${fmtNum(learning.liveScheduled, locale)} ${d.scheduled}`,
      href: '/live',
    },
  ];

  const shortcuts = [
    { href: '/posts/new', label: d.shortcutPost },
    { href: '/pages/new', label: d.shortcutPage },
    { href: '/catalog', label: d.shortcutProduct },
    { href: '/orders', label: d.shortcutOrders },
    { href: '/users', label: d.shortcutUsers },
    { href: '/plugins/elementor', label: d.shortcutElementor },
    { href: '/plugins/rankmath', label: d.shortcutSeo },
    { href: '/plugins/wordfence', label: d.shortcutSecurity },
    { href: '/support', label: d.shortcutSupport },
    { href: '/settings', label: d.shortcutSettings },
  ];

  return (
    <PageEnter className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{d.title}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitleFull}</p>
          <p className="mt-1 font-mono text-[10px] text-[var(--mj-muted-fg)]" dir="ltr">
            {d.updatedAt}: {formatTehranDateTime(data.generatedAt)}
            {refreshing ? ' · …' : ''}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="cursor-pointer" onClick={() => void load()}>
            {d.refresh}
          </Button>
          <Button asChild className="cursor-pointer">
            <Link href="/support">
              {d.ticketsInbox}
              <span className="ms-2 rounded-full bg-[var(--mj-accent-fg)]/15 px-2 py-0.5 font-mono text-xs">
                {support.ticketsOpen}
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      {/* Health strip */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-3">
          <div className="text-[11px] text-[var(--mj-muted-fg)]">{d.healthContent}</div>
          <div className="mt-1 font-mono text-lg font-bold" dir="ltr">
            {fmtNum(health.contentReady, locale)}
          </div>
        </div>
        <div className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-3">
          <div className="text-[11px] text-[var(--mj-muted-fg)]">{d.healthModeration}</div>
          <div className="mt-1 font-mono text-lg font-bold" dir="ltr">
            {fmtNum(health.pendingModeration, locale)}
          </div>
        </div>
        <div className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-3">
          <div className="text-[11px] text-[var(--mj-muted-fg)]">{d.healthSecurity}</div>
          <div className="mt-1 font-mono text-lg font-bold" dir="ltr">
            {fmtNum(health.securityAlerts, locale)}
          </div>
        </div>
        <div className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-3">
          <div className="text-[11px] text-[var(--mj-muted-fg)]">{d.tokens}</div>
          <div className="mt-1 font-mono text-lg font-bold" dir="ltr">
            {fmtNum(learning.totalTokensInWallets, locale)}
          </div>
        </div>
      </div>

      {/* Hero KPIs */}
      <Stagger className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {heroStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </Stagger>

      {/* Shortcuts */}
      <Section title={d.shortcuts}>
        <div className="flex flex-wrap gap-2">
          {shortcuts.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-md border border-[var(--mj-border)] px-3 py-1.5 text-sm transition hover:border-[var(--mj-accent)] hover:bg-[var(--mj-muted)]"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </Section>

      <div className="grid gap-4 xl:grid-cols-2">
        {/* People */}
        <Section
          title={d.sectionPeople}
          action={
            <Link href="/users" className="text-xs underline-offset-4 hover:underline">
              {d.viewAll}
            </Link>
          }
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label={d.total} value={fmtNum(people.total, locale)} />
            <StatCard label={d.today} value={fmtNum(people.today, locale)} />
            <StatCard label={d.week} value={fmtNum(people.week, locale)} />
            <StatCard label={d.month} value={fmtNum(people.month, locale)} />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <div className="mb-2 text-xs font-medium text-[var(--mj-muted-fg)]">{d.byRole}</div>
              <BarList
                locale={locale}
                rows={(people.byRole ?? []).map((r: any) => ({
                  label: r.role,
                  value: r._count,
                }))}
              />
            </div>
            <div>
              <div className="mb-2 text-xs font-medium text-[var(--mj-muted-fg)]">{d.byStatus}</div>
              <BarList
                locale={locale}
                rows={(people.byStatus ?? []).map((r: any) => ({
                  label: r.status,
                  value: r._count,
                }))}
              />
            </div>
          </div>
        </Section>

        {/* Commerce */}
        <Section
          title={d.sectionCommerce}
          action={
            <Link href="/reports" className="text-xs underline-offset-4 hover:underline">
              {d.viewReports}
            </Link>
          }
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard
              label={d.revenue}
              value={fmtMoney(commerce.revenueCompletedCents, locale)}
            />
            <StatCard label={d.ordersToday} value={fmtNum(commerce.ordersToday, locale)} />
            <StatCard label={d.coupons} value={fmtNum(commerce.couponsActive, locale)} href="/coupons" />
            <StatCard label={d.plans} value={fmtNum(commerce.plansActive, locale)} href="/plans" />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <div className="mb-2 text-xs font-medium text-[var(--mj-muted-fg)]">{d.ordersByStatus}</div>
              <BarList
                locale={locale}
                rows={(commerce.byStatus ?? []).map((r: any) => ({
                  label: r.status,
                  value: r._count,
                }))}
              />
            </div>
            <div>
              <div className="mb-2 text-xs font-medium text-[var(--mj-muted-fg)]">{d.ordersByKind}</div>
              <BarList
                locale={locale}
                rows={(commerce.byKind ?? []).map((r: any) => ({
                  label: r.kind,
                  value: r._count,
                }))}
              />
            </div>
          </div>
        </Section>

        {/* Content */}
        <Section
          title={d.sectionContent}
          action={
            <Link href="/posts" className="text-xs underline-offset-4 hover:underline">
              {d.viewAll}
            </Link>
          }
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <StatCard
              label={d.postsPublished}
              value={`${fmtNum(content.articlesPublished, locale)} / ${fmtNum(content.articlesTotal, locale)}`}
              href="/posts"
            />
            <StatCard
              label={d.pagesPublished}
              value={`${fmtNum(content.pagesPublished, locale)} / ${fmtNum(content.pagesTotal, locale)}`}
              href="/pages"
            />
            <StatCard
              label={d.media}
              value={`${fmtNum(content.mediaOptimized, locale)} / ${fmtNum(content.mediaTotal, locale)}`}
              hint={d.smushHint}
              href="/media"
            />
            <StatCard
              label={d.commentsPending}
              value={fmtNum(content.commentsPending, locale)}
              href="/comments"
            />
            <StatCard label={d.redirects} value={fmtNum(content.redirects, locale)} href="/seo" />
            <StatCard label={d.seoRows} value={fmtNum(content.seoRows, locale)} href="/seo" />
          </div>
        </Section>

        {/* Catalog / Learning */}
        <Section
          title={d.sectionCatalog}
          action={
            <Link href="/catalog" className="text-xs underline-offset-4 hover:underline">
              {d.viewAll}
            </Link>
          }
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <StatCard label={d.tracks} value={fmtNum(catalog.tracksTotal, locale)} />
            <StatCard
              label={d.courses}
              value={`${fmtNum(catalog.coursesPublished, locale)} / ${fmtNum(catalog.coursesTotal, locale)}`}
            />
            <StatCard
              label={d.publishedLessons}
              value={fmtNum(catalog.lessonsPublished, locale)}
              hint={`${fmtNum(catalog.lessonsDraft, locale)} draft`}
            />
            <StatCard label={d.enrollments} value={fmtNum(catalog.enrollmentsTotal, locale)} />
            <StatCard label={d.challenges} value={fmtNum(learning.challengesPublished, locale)} href="/practice" />
            <StatCard
              label={d.submissionsWeek}
              value={fmtNum(learning.submissionsWeek, locale)}
              hint={`${fmtNum(learning.submissionsTotal, locale)} ${d.total}`}
            />
          </div>
          <div className="mt-4">
            <div className="mb-2 text-xs font-medium text-[var(--mj-muted-fg)]">{d.topCourses}</div>
            <BarList
              locale={locale}
              rows={(catalog.topCourses ?? []).map((r: any) => ({
                label: titleOf(r.course, locale),
                value: r.count,
              }))}
            />
          </div>
        </Section>
      </div>

      {/* Support + Security */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Section
          title={d.sectionSupport}
          action={
            <Link href="/support" className="text-xs underline-offset-4 hover:underline">
              {d.viewAll}
            </Link>
          }
        >
          <div className="grid grid-cols-3 gap-3">
            <StatCard label={d.open} value={fmtNum(support.ticketsOpen, locale)} />
            <StatCard label={d.urgent} value={fmtNum(support.ticketsUrgent, locale)} />
            <StatCard
              label={d.resolvedMonth}
              value={fmtNum(support.ticketsResolvedMonth, locale)}
            />
          </div>
          <div className="mt-4 space-y-2">
            {(recent.tickets ?? []).map((t: any) => (
              <Link
                key={t.id}
                href={`/support/${t.id}`}
                className="flex items-center justify-between gap-3 rounded-md border border-[var(--mj-border)] px-3 py-2 text-sm hover:border-[var(--mj-accent)]"
              >
                <span className="truncate font-medium">{t.subject}</span>
                <Badge variant="secondary">{t.status}</Badge>
              </Link>
            ))}
            {!recent.tickets?.length ? (
              <p className="text-sm text-[var(--mj-muted-fg)]">{dict.none}</p>
            ) : null}
          </div>
        </Section>

        <Section
          title={d.sectionSecurity}
          action={
            <Link
              href="/plugins/wordfence"
              className="text-xs underline-offset-4 hover:underline"
            >
              Wordfence
            </Link>
          }
        >
          <div className="grid grid-cols-3 gap-3">
            <StatCard label={d.events24h} value={fmtNum(security.events24h, locale)} />
            <StatCard label={d.blockedIps} value={fmtNum(security.blockedIps, locale)} />
            <StatCard label={d.lockouts} value={fmtNum(security.lockouts, locale)} />
          </div>
          <p className="mt-3 text-xs text-[var(--mj-muted-fg)]">{d.securityHint}</p>
        </Section>
      </div>

      {/* Recent activity tables */}
      <div className="grid gap-4 xl:grid-cols-2">
        <Section
          title={d.recentOrders}
          action={
            <Link href="/orders" className="text-xs underline-offset-4 hover:underline">
              {d.viewAll}
            </Link>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm">
              <thead className="text-xs text-[var(--mj-muted-fg)]">
                <tr>
                  <th className="pb-2 text-start">{d.order}</th>
                  <th className="pb-2 text-start">{d.customer}</th>
                  <th className="pb-2 text-start">{d.amount}</th>
                  <th className="pb-2 text-start">{d.status}</th>
                </tr>
              </thead>
              <tbody>
                {(recent.orders ?? []).map((o: any) => (
                  <tr key={o.id} className="border-t border-[var(--mj-border)]">
                    <td className="py-2">
                      <Link
                        href={`/orders/${o.id}`}
                        className="font-mono text-xs underline-offset-4 hover:underline"
                        dir="ltr"
                      >
                        #{o.id.slice(0, 8)}
                      </Link>
                    </td>
                    <td className="py-2 text-xs">
                      {o.user?.displayName || o.user?.phone || '—'}
                    </td>
                    <td className="py-2 font-mono text-xs" dir="ltr">
                      {fmtMoney(o.amountCents, locale)}
                    </td>
                    <td className="py-2">
                      <Badge variant="secondary">{o.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          title={d.recentUsers}
          action={
            <Link href="/users" className="text-xs underline-offset-4 hover:underline">
              {d.viewAll}
            </Link>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm">
              <thead className="text-xs text-[var(--mj-muted-fg)]">
                <tr>
                  <th className="pb-2 text-start">{d.user}</th>
                  <th className="pb-2 text-start">{d.role}</th>
                  <th className="pb-2 text-start">{d.status}</th>
                  <th className="pb-2 text-start">{d.joined}</th>
                </tr>
              </thead>
              <tbody>
                {(recent.users ?? []).map((u: any) => (
                  <tr key={u.id} className="border-t border-[var(--mj-border)]">
                    <td className="py-2">
                      <Link
                        href={`/users/${u.id}`}
                        className="underline-offset-4 hover:underline"
                      >
                        {u.displayName || u.phone || u.id.slice(0, 8)}
                      </Link>
                    </td>
                    <td className="py-2 font-mono text-xs">{u.role}</td>
                    <td className="py-2">
                      <Badge variant="secondary">{u.status}</Badge>
                    </td>
                    <td className="py-2 text-xs" dir="ltr">
                      {formatTehranDate(u.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          title={d.recentArticles}
          action={
            <Link href="/posts" className="text-xs underline-offset-4 hover:underline">
              {d.viewAll}
            </Link>
          }
        >
          <div className="space-y-2">
            {(recent.articles ?? []).map((a: any) => (
              <Link
                key={a.id}
                href={`/posts/${a.id}`}
                className="flex items-center justify-between gap-3 rounded-md border border-[var(--mj-border)] px-3 py-2 text-sm hover:border-[var(--mj-accent)]"
              >
                <span className="truncate">{titleOf(a, locale)}</span>
                <Badge variant="secondary">{a.status}</Badge>
              </Link>
            ))}
            {!recent.articles?.length ? (
              <p className="text-sm text-[var(--mj-muted-fg)]">{dict.none}</p>
            ) : null}
          </div>
        </Section>

        <Section
          title={d.recentAudit}
          action={
            <Link href="/audit" className="text-xs underline-offset-4 hover:underline">
              {d.viewAll}
            </Link>
          }
        >
          <div className="space-y-2">
            {(recent.audit ?? []).map((a: any) => (
              <div
                key={a.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-[var(--mj-border)] px-3 py-2 text-sm"
              >
                <div className="min-w-0">
                  <div className="truncate font-mono text-xs">{a.action}</div>
                  <div className="truncate text-[11px] text-[var(--mj-muted-fg)]">
                    {a.entity}
                    {a.entityId ? ` · ${String(a.entityId).slice(0, 8)}` : ''}
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[var(--mj-muted-fg)]" dir="ltr">
                  {formatTehranDateTime(a.createdAt)}
                </span>
              </div>
            ))}
            {!recent.audit?.length ? (
              <p className="text-sm text-[var(--mj-muted-fg)]">{dict.none}</p>
            ) : null}
          </div>
        </Section>
      </div>
    </PageEnter>
  );
}
