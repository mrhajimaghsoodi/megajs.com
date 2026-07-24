'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdminLocale } from '@/i18n/locale-context';
import { publicSiteUrl } from '@/lib/site';
import { formatTehranDateTime } from '@/lib/tehran-time';

export default function TunnelEpisodesAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.tunnel;
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(() => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (status) params.set('status', status);
    void adminFetch(`/admin/cms/tunnel-episodes?${params}`)
      .then(setRows)
      .catch((e) => setError(e.message));
  }, [q, status]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{d.title}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" className="cursor-pointer">
            <Link href="/tunnel-categories">{d.categories}</Link>
          </Button>
          <Button asChild className="cursor-pointer">
            <Link href="/tunnel-episodes/new">{d.addEpisode}</Link>
          </Button>
        </div>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <div className="flex flex-wrap gap-2">
        <Input
          className="max-w-xs"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={dict.search}
        />
        <select
          className="h-10 rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">{dict.cms.status}</option>
          <option value="draft">draft</option>
          <option value="published">published</option>
          <option value="archived">archived</option>
        </select>
        <Button variant="outline" onClick={() => load()}>
          {dict.search}
        </Button>
      </div>

      <div className="overflow-x-auto rounded-md border border-[var(--mj-border)]">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-[var(--mj-muted)] text-start">
            <tr>
              <th className="p-3">{dict.cms.titleCol}</th>
              <th className="p-3">{d.series}</th>
              <th className="p-3">{d.partOrder}</th>
              <th className="p-3">{dict.cms.status}</th>
              <th className="p-3">{d.video}</th>
              <th className="p-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const title =
                row.i18n?.find((x: any) => x.locale === locale)?.title ??
                row.i18n?.[0]?.title ??
                row.slug;
              const series =
                row.seriesTerm?.i18n?.find((x: any) => x.locale === locale)?.name ??
                row.seriesTerm?.i18n?.[0]?.name ??
                row.seriesTerm?.slug ??
                '—';
              return (
                <tr key={row.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3">
                    <div className="font-medium">{title}</div>
                    <div className="font-mono text-[11px] text-[var(--mj-muted-fg)]" dir="ltr">
                      {row.slug}
                    </div>
                    {row.publishedAt ? (
                      <div className="text-[11px] text-[var(--mj-muted-fg)]" dir="ltr">
                        {formatTehranDateTime(row.publishedAt)}
                      </div>
                    ) : null}
                  </td>
                  <td className="p-3">{series}</td>
                  <td className="p-3 font-mono">{row.sortOrder}</td>
                  <td className="p-3">
                    <Badge variant="secondary">{row.status}</Badge>
                  </td>
                  <td className="p-3 font-mono text-xs">{row.videoSource}</td>
                  <td className="p-3 text-end">
                    <div className="flex justify-end gap-2">
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={publicSiteUrl(locale, `/tunnel/e/${row.slug}`)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {dict.commerce.view}
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <Link href={`/tunnel-episodes/${row.id}`}>{dict.cms.edit}</Link>
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!rows.length ? (
          <p className="p-4 text-sm text-[var(--mj-muted-fg)]">{dict.none}</p>
        ) : null}
      </div>
    </div>
  );
}
