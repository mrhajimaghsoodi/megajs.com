'use client';

import { useCallback, useEffect, useState, type DragEvent } from 'react';
import { adminFetch, adminUpload } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resolveMediaUrl } from '@/lib/media-url';
import { useAdminLocale } from '@/i18n/locale-context';
import { formatTehranDateTime } from '@/lib/tehran-time';

export type MediaLibraryItem = {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  alt?: string;
  title?: string;
  createdAt?: string;
  storageKey?: string | null;
};

type Props = {
  /** Compact mode hides the external-URL form (used inside pickers if needed) */
  showUrlRegister?: boolean;
};

export function MediaLibrary({ showUrlRegister = true }: Props) {
  const { dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<MediaLibraryItem[]>([]);
  const [q, setQ] = useState('');
  const [url, setUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAlt, setEditAlt] = useState('');
  const [editTitle, setEditTitle] = useState('');

  const load = useCallback(() => {
    const path = q.trim()
      ? `/admin/cms/media?q=${encodeURIComponent(q.trim())}`
      : '/admin/cms/media';
    void adminFetch(path)
      .then(setRows)
      .catch((e) => setError(e.message));
  }, [q]);

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
    if (editingId === id) setEditingId(null);
    load();
  };

  const startEdit = (row: MediaLibraryItem) => {
    setEditingId(row.id);
    setEditAlt(row.alt ?? '');
    setEditTitle(row.title ?? '');
  };

  const saveEdit = async () => {
    if (!editingId) return;
    setBusy(true);
    setError(null);
    try {
      await adminFetch(`/admin/cms/media/${editingId}`, {
        method: 'PATCH',
        body: JSON.stringify({ alt: editAlt, title: editTitle }),
      });
      setEditingId(null);
      setMsg(d.saved);
      load();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0] ?? null;
    void uploadFile(file);
  };

  return (
    <div className="space-y-6">
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div
        className={`grid max-w-2xl gap-3 rounded-[var(--mj-radius-md)] border p-4 transition ${
          dragOver
            ? 'border-[var(--mj-accent)] bg-[var(--mj-accent)]/10'
            : 'border-[var(--mj-border)]'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
      >
        <div className="space-y-2">
          <Label>{d.uploadFile}</Label>
          <p className="text-xs text-[var(--mj-muted-fg)]">{d.dropUploadHint}</p>
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
        {showUrlRegister ? (
          <div className="border-t border-[var(--mj-border)] pt-3">
            <p className="mb-2 text-xs font-medium text-[var(--mj-muted-fg)]">
              {d.orRegisterUrl}
            </p>
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
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2">
        <Input
          className="max-w-xs"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') load();
          }}
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
              {editingId === row.id ? (
                <>
                  <div className="space-y-1">
                    <Label className="text-xs">Alt</Label>
                    <Input
                      value={editAlt}
                      onChange={(e) => setEditAlt(e.target.value)}
                      className="h-8"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">{d.titleCol}</Label>
                    <Input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="h-8"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      className="cursor-pointer"
                      disabled={busy}
                      onClick={() => void saveEdit()}
                    >
                      {dict.save}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => setEditingId(null)}
                    >
                      {d.cancelEdit}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="truncate font-medium">{row.title || row.filename}</div>
                  {row.alt ? (
                    <div className="truncate text-xs text-[var(--mj-muted-fg)]">
                      alt: {row.alt}
                    </div>
                  ) : null}
                  <div
                    className="truncate font-mono text-xs text-[var(--mj-muted-fg)]"
                    dir="ltr"
                  >
                    {row.url}
                  </div>
                  <div className="text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                    {row.createdAt ? formatTehranDateTime(row.createdAt) : null}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                      onClick={() => startEdit(row)}
                    >
                      {d.editMedia}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="cursor-pointer"
                      onClick={() => void remove(row.id)}
                    >
                      {d.delete}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {!rows.length ? (
        <p className="text-sm text-[var(--mj-muted-fg)]">{dict.none}</p>
      ) : null}
    </div>
  );
}
