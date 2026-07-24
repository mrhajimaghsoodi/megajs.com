'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdminLocale } from '@/i18n/locale-context';

function titleOf(row: any, locale: string) {
  return row.i18n?.find((x: any) => x.locale === locale)?.title ?? row.i18n?.[0]?.title ?? row.slug;
}

export default function PostsAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (status) params.set('status', status);
    void adminFetch(`/admin/cms/articles?${params}`)
      .then(setRows)
      .catch((e) => setError(e.message));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{d.postsTitle}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.postsSubtitle}</p>
        </div>
        <Button asChild className="cursor-pointer">
          <Link href="/posts/new">{d.newPost}</Link>
        </Button>
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
        <Button type="button" variant="outline" className="cursor-pointer" onClick={load}>
          {dict.filter}
        </Button>
        <Button asChild variant="outline" className="cursor-pointer">
          <Link href="/categories">{d.postCategories}</Link>
        </Button>
        <Button asChild variant="outline" className="cursor-pointer">
          <Link href="/tags">{d.postTags}</Link>
        </Button>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--mj-muted)]">
            <tr>
              <th className="p-3 text-start">{d.titleCol}</th>
              <th className="p-3 text-start">slug</th>
              <th className="p-3 text-start">{d.status}</th>
              <th className="p-3 text-start">{d.comments}</th>
              <th className="p-3 text-start">{d.updated}</th>
              <th className="p-3 text-start" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-[var(--mj-border)]">
                <td className="p-3 font-medium">{titleOf(row, locale)}</td>
                <td className="p-3 font-mono text-xs" dir="ltr">
                  {row.slug}
                </td>
                <td className="p-3">
                  <Badge variant="secondary">{row.status}</Badge>
                </td>
                <td className="p-3 font-mono">{row._count?.comments ?? 0}</td>
                <td className="p-3 text-xs" dir="ltr">
                  {new Date(row.updatedAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}
                </td>
                <td className="p-3">
                  <Link className="underline-offset-4 hover:underline" href={`/posts/${row.id}`}>
                    {d.edit}
                  </Link>
                </td>
              </tr>
            ))}
            {!rows.length ? (
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
