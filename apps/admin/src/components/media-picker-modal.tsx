'use client';

import { useCallback, useEffect, useState } from 'react';
import { adminFetch, adminUpload } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resolveMediaUrl } from '@/lib/media-url';
import { useAdminLocale } from '@/i18n/locale-context';

export type MediaItem = {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  alt?: string;
  title?: string;
  createdAt?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSelect: (item: MediaItem) => void;
  title?: string;
};

export function MediaPickerModal({ open, onClose, onSelect, title }: Props) {
  const { dict } = useAdminLocale();
  const d = dict.cms;
  const [rows, setRows] = useState<MediaItem[]>([]);
  const [q, setQ] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const load = useCallback(async () => {
    try {
      const path = q.trim()
        ? `/admin/cms/media?q=${encodeURIComponent(q.trim())}`
        : '/admin/cms/media';
      const data = await adminFetch(path);
      setRows(data);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  }, [q]);

  useEffect(() => {
    if (open) void load();
  }, [open, load]);

  if (!open) return null;

  const upload = async (file: File | null) => {
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const item = await adminUpload('/admin/cms/media/upload', file, {
        title: file.name,
        alt: file.name,
      });
      setSelected(item);
      await load();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label={dict.close}
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-[var(--mj-border)] bg-[var(--mj-card)] shadow-xl">
        <div className="flex items-center justify-between border-b border-[var(--mj-border)] px-4 py-3">
          <h2 className="font-display text-lg font-bold">
            {title || d.mediaPickerTitle}
          </h2>
          <Button type="button" variant="ghost" size="sm" onClick={onClose}>
            {dict.close}
          </Button>
        </div>

        <div
          className={`flex flex-wrap items-end gap-3 border-b p-4 transition ${
            dragOver
              ? 'border-[var(--mj-accent)] bg-[var(--mj-accent)]/10'
              : 'border-[var(--mj-border)]'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            void upload(e.dataTransfer.files?.[0] ?? null);
          }}
        >
          <div className="min-w-[12rem] flex-1 space-y-1">
            <Label>{dict.search}</Label>
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') void load();
              }}
              placeholder={d.mediaSearch}
            />
          </div>
          <Button type="button" variant="outline" onClick={() => void load()}>
            {dict.search}
          </Button>
          <div className="space-y-1">
            <Label>{d.uploadFile}</Label>
            <Input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              disabled={busy}
              onChange={(e) => void upload(e.target.files?.[0] ?? null)}
            />
            <p className="text-[11px] text-[var(--mj-muted-fg)]">{d.dropUploadHint}</p>
          </div>
        </div>

        {error ? (
          <p className="px-4 pt-3 text-sm text-[var(--mj-danger)]">{error}</p>
        ) : null}

        <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto p-4 sm:grid-cols-3 md:grid-cols-4">
          {rows.map((row) => {
            const on = selected?.id === row.id;
            return (
              <button
                key={row.id}
                type="button"
                className={`overflow-hidden rounded-md border text-start transition ${
                  on
                    ? 'border-[var(--mj-accent)] ring-2 ring-[var(--mj-accent)]'
                    : 'border-[var(--mj-border)] hover:border-[var(--mj-accent)]/50'
                }`}
                onClick={() => setSelected(row)}
                onDoubleClick={() => {
                  onSelect(row);
                  onClose();
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolveMediaUrl(row.url)}
                  alt={row.alt || row.title || row.filename}
                  className="h-28 w-full bg-[var(--mj-muted)] object-cover"
                />
                <div className="truncate p-2 text-xs">{row.title || row.filename}</div>
              </button>
            );
          })}
          {!rows.length ? (
            <p className="col-span-full text-sm text-[var(--mj-muted-fg)]">{dict.none}</p>
          ) : null}
        </div>

        <div className="flex justify-end gap-2 border-t border-[var(--mj-border)] px-4 py-3">
          <Button type="button" variant="outline" onClick={onClose}>
            {dict.close}
          </Button>
          <Button
            type="button"
            disabled={!selected}
            onClick={() => {
              if (!selected) return;
              onSelect(selected);
              onClose();
            }}
          >
            {d.selectMedia}
          </Button>
        </div>
      </div>
    </div>
  );
}
