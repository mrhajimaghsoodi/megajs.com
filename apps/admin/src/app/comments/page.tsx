'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAdminLocale } from '@/i18n/locale-context';

export default function CommentsAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<any[]>([]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    const params = new URLSearchParams();
    if (status) params.set('status', status);
    void adminFetch(`/admin/cms/comments?${params}`).then(setRows).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  const setSt = async (id: string, next: string) => {
    await adminFetch(`/admin/cms/comments/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status: next }) });
    load();
  };
  const remove = async (id: string) => {
    if (!confirm(d.confirmDelete)) return;
    await adminFetch(`/admin/cms/comments/${id}`, { method: 'DELETE' });
    load();
  };

  const articleTitle = (row: any) =>
    row.article?.i18n?.find((x: any) => x.locale === locale)?.title ?? row.article?.slug ?? '—';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.commentsTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.commentsSubtitle}</p>
      </div>
      <div className="flex gap-2">
        <select className="h-10 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">{d.allStatuses}</option>
          <option value="pending">pending</option>
          <option value="approved">approved</option>
          <option value="spam">spam</option>
          <option value="trash">trash</option>
        </select>
        <Button variant="outline" className="cursor-pointer" onClick={load}>{dict.filter}</Button>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.id} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{row.status}</Badge>
              <span className="text-sm font-medium">{row.authorName || row.authorEmail || 'anon'}</span>
              <span className="text-xs text-[var(--mj-muted-fg)]">→ {articleTitle(row)}</span>
            </div>
            <p className="mt-2 text-sm whitespace-pre-wrap">{row.body}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button size="sm" className="cursor-pointer" onClick={() => void setSt(row.id, 'approved')}>{d.approve}</Button>
              <Button size="sm" variant="outline" className="cursor-pointer" onClick={() => void setSt(row.id, 'spam')}>spam</Button>
              <Button size="sm" variant="outline" className="cursor-pointer" onClick={() => void setSt(row.id, 'trash')}>trash</Button>
              <Button size="sm" variant="destructive" className="cursor-pointer" onClick={() => void remove(row.id)}>{d.delete}</Button>
            </div>
          </div>
        ))}
        {!rows.length ? <p className="text-sm text-[var(--mj-muted-fg)]">{dict.none}</p> : null}
      </div>
    </div>
  );
}
