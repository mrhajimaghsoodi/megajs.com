'use client';

import { useEffect, useState } from 'react';
import { adminFetch, adminUpload } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resolveMediaUrl } from '@/lib/media-url';
import { useAdminLocale } from '@/i18n/locale-context';
import { formatTehranDateTime } from '@/lib/tehran-time';

export default function MediaAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [url, setUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const load = () => {
    const path = q.trim()
      ? `/admin/cms/media?q=${encodeURIComponent(q.trim())}`
      : '/admin/cms/media';
    void adminFetch(path)
      .then(setRows)
      .catch((e) => setError(e.message));
  };
  useEffect(() => {
    load();
  }, []);

  const uploadFile = async (file: File | null) => {
    if (!file) return;
    setBusy(true);
    setError(null);
    setMsg(null);
    try {
      await adminUpload('/admin/cms/media/upload', file, {
        alt: alt || file.name,
        title: title || file.name,
      });
      setAlt('');
      setTitle('');
      setMsg(d.saved);
      load();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const createUrl = async () => {
    setError(null);
    try {
      await adminFetch('/admin/cms/media', {
        method: 'POST',
        body: JSON.stringify({
          url,
          filename: url.split('/').pop(),
          alt,
          title,
          mimeType: 'image/jpeg',
        }),
      });
      setUrl('');
      setAlt('');
      setTitle('');
      setMsg(d.saved);
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
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid max-w-2xl gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <div className="space-y-2">
          <Label>{d.uploadFile}</Label>
          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            disabled={busy}
            onChange={(e) => void uploadFile(e.target.files?.[0] ?? null)}
          />
          <p className="text-xs text-[var(--mj-muted-fg)]">{d.uploadHint}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Alt</Label>
            <Input value={alt} onChange={(e) => setAlt(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{d.titleCol}</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="border-t border-[var(--mj-border)] pt-3">
          <p className="mb-2 text-xs font-medium text-[var(--mj-muted-fg)]">{d.orRegisterUrl}</p>
          <div className="space-y-2">
            <Label>URL</Label>
            <Input
              dir="ltr"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <Button className="mt-3 cursor-pointer" onClick={() => void createUrl()}>
            {d.addMedia}
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Input
          className="max-w-xs"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={d.mediaSearch}
        />
        <Button variant="outline" onClick={() => load()}>
          {dict.search}
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((row) => (
          <div
            key={row.id}
            className="overflow-hidden rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]"
          >
            {row.mimeType?.startsWith('image/') ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={resolveMediaUrl(row.url)}
                alt={row.alt || row.title}
                className="h-40 w-full bg-[var(--mj-muted)] object-cover"
              />
            ) : (
              <div className="grid h-40 place-items-center bg-[var(--mj-muted)] font-mono text-xs">
                {row.mimeType}
              </div>
            )}
            <div className="space-y-2 p-3 text-sm">
              <div className="truncate font-medium">{row.title || row.filename}</div>
              <div className="truncate font-mono text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                {row.url}
              </div>
              <div className="text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                {formatTehranDateTime(row.createdAt)}
              </div>
              <Button
                variant="destructive"
                size="sm"
                className="cursor-pointer"
                onClick={() => void remove(row.id)}
              >
                {d.delete}
              </Button>
            </div>
          </div>
        ))}
      </div>
      {!rows.length ? <p className="text-sm text-[var(--mj-muted-fg)]">{dict.none}</p> : null}
    </div>
  );
}
