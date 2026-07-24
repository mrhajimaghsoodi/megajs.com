'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdminLocale } from '@/i18n/locale-context';
import { publicSiteUrl } from '@/lib/site';

function titleOf(row: any, locale: string) {
  return row.i18n?.find((x: any) => x.locale === locale)?.title ?? row.i18n?.[0]?.title ?? row.slug;
}

function termLabel(term: any, locale: string) {
  return (
    term?.i18n?.find((x: any) => x.locale === locale)?.name ??
    term?.i18n?.[0]?.name ??
    term?.slug ??
    ''
  );
}

type QuickState = {
  id: string;
  title: string;
  slug: string;
  status: string;
  sticky: boolean;
  termIds: string[];
};

export default function PostsAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<any[]>([]);
  const [cats, setCats] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [quick, setQuick] = useState<QuickState | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (status) params.set('status', status);
    void Promise.all([
      adminFetch(`/admin/cms/articles?${params}`),
      adminFetch('/admin/cms/terms?taxonomy=post_category'),
      adminFetch('/admin/cms/terms?taxonomy=post_tag'),
    ])
      .then(([articles, c, t]) => {
        setRows(articles);
        setCats(c);
        setTags(t);
        setError(null);
      })
      .catch((e) => setError(e.message));
  }, [q, status]);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    if (!categoryId) return rows;
    return rows.filter((row) =>
      (row.taxonomies ?? []).some((t: any) => t.termId === categoryId || t.term?.id === categoryId),
    );
  }, [rows, categoryId]);

  const openQuick = (row: any) => {
    setQuick({
      id: row.id,
      title: titleOf(row, locale),
      slug: row.slug,
      status: row.status,
      sticky: Boolean(row.sticky),
      termIds: (row.taxonomies ?? []).map((t: any) => t.termId ?? t.term?.id).filter(Boolean),
    });
    setMsg(null);
  };

  const saveQuick = async () => {
    if (!quick) return;
    setBusy(true);
    setMsg(null);
    try {
      await adminFetch(`/admin/cms/articles/${quick.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: quick.title,
          slug: quick.slug,
          status: quick.status,
          sticky: quick.sticky,
          termIds: quick.termIds,
          locale,
        }),
      });
      setMsg(d.saved);
      setQuick(null);
      load();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const remove = async (id: string) => {
    if (!confirm(d.confirmDelete)) return;
    await adminFetch(`/admin/cms/articles/${id}`, { method: 'DELETE' });
    if (quick?.id === id) setQuick(null);
    load();
  };

  const toggleQuickTerm = (id: string) => {
    if (!quick) return;
    setQuick({
      ...quick,
      termIds: quick.termIds.includes(id)
        ? quick.termIds.filter((x) => x !== id)
        : [...quick.termIds, id],
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{d.postsTitle}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.postsSubtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild className="cursor-pointer">
            <Link href="/posts/new">{d.newPost}</Link>
          </Button>
          <Button asChild variant="outline" className="cursor-pointer">
            <Link href="/categories">{d.postCategories}</Link>
          </Button>
          <Button asChild variant="outline" className="cursor-pointer">
            <Link href="/tags">{d.postTags}</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Input
          className="max-w-xs"
          placeholder={dict.search}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select
          className="h-10 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">{d.allStatuses}</option>
          <option value="draft">draft</option>
          <option value="published">published</option>
          <option value="archived">archived</option>
        </select>
        <select
          className="h-10 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">{d.allCategories}</option>
          {cats.map((c) => (
            <option key={c.id} value={c.id}>
              {termLabel(c, locale)}
            </option>
          ))}
        </select>
        <Button type="button" variant="outline" className="cursor-pointer" onClick={load}>
          {dict.filter}
        </Button>
      </div>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[880px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">{d.titleCol}</th>
              <th className="p-3 text-start">{d.categories}</th>
              <th className="p-3 text-start">{d.tags}</th>
              <th className="p-3 text-start">{d.status}</th>
              <th className="p-3 text-start">{d.updated}</th>
              <th className="p-3 text-start">{d.actions}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => {
              const rowCats = (row.taxonomies ?? [])
                .map((t: any) => t.term)
                .filter((t: any) => t?.taxonomy === 'post_category');
              const rowTags = (row.taxonomies ?? [])
                .map((t: any) => t.term)
                .filter((t: any) => t?.taxonomy === 'post_tag');
              const qState = quick?.id === row.id ? quick : null;

              return (
                <tr key={row.id} className="border-t border-[var(--mj-border)] align-top">
                  <td className="p-3" colSpan={qState ? 6 : 1}>
                    {!qState ? (
                      <div>
                        <div className="font-medium">
                          {row.sticky ? (
                            <span className="me-2 rounded bg-primary/30 px-1.5 py-0.5 text-[10px] font-bold uppercase">
                              sticky
                            </span>
                          ) : null}
                          {titleOf(row, locale)}
                        </div>
                        <div className="mt-1 font-mono text-[11px] text-[var(--mj-muted-fg)]" dir="ltr">
                          {row.slug}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                          <Link
                            href={`/posts/${row.id}`}
                            className="font-semibold text-primary underline-offset-4 hover:underline"
                          >
                            {d.edit}
                          </Link>
                          <button
                            type="button"
                            className="font-semibold text-[var(--mj-muted-fg)] underline-offset-4 hover:underline"
                            onClick={() => openQuick(row)}
                          >
                            {d.quickEdit}
                          </button>
                          <button
                            type="button"
                            className="font-semibold text-[var(--mj-danger)] underline-offset-4 hover:underline"
                            onClick={() => void remove(row.id)}
                          >
                            {d.delete}
                          </button>
                          {row.status === 'published' ? (
                            <a
                              href={publicSiteUrl(locale, `/articles/${row.slug}`)}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-[var(--mj-muted-fg)] underline-offset-4 hover:underline"
                            >
                              {d.view}
                            </a>
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-3 rounded-md border border-[var(--mj-border)] bg-[var(--mj-muted)]/40 p-4">
                        <div className="font-display text-sm font-bold">{d.quickEdit}</div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <Input
                            value={qState.title}
                            onChange={(e) => setQuick({ ...qState, title: e.target.value })}
                            placeholder={d.titleCol}
                          />
                          <Input
                            dir="ltr"
                            value={qState.slug}
                            onChange={(e) => setQuick({ ...qState, slug: e.target.value })}
                            placeholder="slug"
                          />
                          <select
                            className="h-10 rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
                            value={qState.status}
                            onChange={(e) => setQuick({ ...qState, status: e.target.value })}
                          >
                            <option value="draft">draft</option>
                            <option value="published">published</option>
                            <option value="archived">archived</option>
                          </select>
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={qState.sticky}
                              onChange={(e) => setQuick({ ...qState, sticky: e.target.checked })}
                            />
                            {d.stickyPost}
                          </label>
                        </div>
                        <div>
                          <div className="mb-1 text-xs font-semibold">{d.categories}</div>
                          <div className="flex flex-wrap gap-2">
                            {cats.map((c) => (
                              <label key={c.id} className="flex items-center gap-1 text-xs">
                                <input
                                  type="checkbox"
                                  checked={qState.termIds.includes(c.id)}
                                  onChange={() => toggleQuickTerm(c.id)}
                                />
                                {termLabel(c, locale)}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 text-xs font-semibold">{d.tags}</div>
                          <div className="flex flex-wrap gap-2">
                            {tags.map((t) => (
                              <label key={t.id} className="flex items-center gap-1 text-xs">
                                <input
                                  type="checkbox"
                                  checked={qState.termIds.includes(t.id)}
                                  onChange={() => toggleQuickTerm(t.id)}
                                />
                                {termLabel(t, locale)}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" disabled={busy} onClick={() => void saveQuick()}>
                            {dict.save}
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => setQuick(null)}>
                            {d.cancelEdit}
                          </Button>
                        </div>
                      </div>
                    )}
                  </td>
                  {!qState ? (
                    <>
                      <td className="p-3 text-xs text-[var(--mj-muted-fg)]">
                        {rowCats.map((t: any) => termLabel(t, locale)).join(', ') || '—'}
                      </td>
                      <td className="p-3 text-xs text-[var(--mj-muted-fg)]">
                        {rowTags.map((t: any) => termLabel(t, locale)).join(', ') || '—'}
                      </td>
                      <td className="p-3">
                        <Badge variant="secondary">{row.status}</Badge>
                      </td>
                      <td className="p-3 text-xs" dir="ltr">
                        {new Date(row.updatedAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}
                      </td>
                      <td className="p-3">
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/posts/${row.id}`}>{d.edit}</Link>
                        </Button>
                      </td>
                    </>
                  ) : null}
                </tr>
              );
            })}
            {!filtered.length ? (
              <tr>
                <td className="p-6 text-[var(--mj-muted-fg)]" colSpan={6}>
                  {dict.none}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
