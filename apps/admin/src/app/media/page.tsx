'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function MediaAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<any[]>([]);
  const [url, setUrl] = useState('');
  const [filename, setFilename] = useState('');
  const [alt, setAlt] = useState('');
  const [title, setTitle] = useState('');
  const [mimeType, setMimeType] = useState('image/jpeg');
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    void adminFetch('/admin/cms/media').then(setRows).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  const create = async () => {
    try {
      await adminFetch('/admin/cms/media', {
        method: 'POST',
        body: JSON.stringify({ url, filename, alt, title, mimeType }),
      });
      setUrl(''); setFilename(''); setAlt(''); setTitle('');
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const remove = async (id: string) => {
    if (!confirm(d.confirmDelete)) return;
    await adminFetch(`/admin/cms/media/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.mediaTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.mediaSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid max-w-2xl gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <div className="space-y-2"><Label>URL</Label><Input dir="ltr" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." /></div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>{d.filename}</Label><Input dir="ltr" value={filename} onChange={(e) => setFilename(e.target.value)} /></div>
          <div className="space-y-2"><Label>MIME</Label><Input dir="ltr" value={mimeType} onChange={(e) => setMimeType(e.target.value)} /></div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>Alt</Label><Input value={alt} onChange={(e) => setAlt(e.target.value)} /></div>
          <div className="space-y-2"><Label>{d.titleCol}</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        </div>
        <Button className="cursor-pointer" onClick={() => void create()}>{d.addMedia}</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((row) => (
          <div key={row.id} className="overflow-hidden rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
            {row.mimeType?.startsWith('image/') ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={row.url} alt={row.alt || row.title} className="h-40 w-full object-cover bg-[var(--mj-muted)]" />
            ) : (
              <div className="grid h-40 place-items-center bg-[var(--mj-muted)] font-mono text-xs">{row.mimeType}</div>
            )}
            <div className="space-y-2 p-3 text-sm">
              <div className="font-medium truncate">{row.title || row.filename}</div>
              <div className="truncate font-mono text-xs text-[var(--mj-muted-fg)]" dir="ltr">{row.url}</div>
              <div className="text-xs text-[var(--mj-muted-fg)]" dir="ltr">{new Date(row.createdAt).toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')}</div>
              <Button variant="destructive" size="sm" className="cursor-pointer" onClick={() => void remove(row.id)}>{d.delete}</Button>
            </div>
          </div>
        ))}
      </div>
      {!rows.length ? <p className="text-sm text-[var(--mj-muted-fg)]">{dict.none}</p> : null}
    </div>
  );
}
