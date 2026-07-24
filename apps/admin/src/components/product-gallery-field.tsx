'use client';

import { useState } from 'react';
import { MediaPickerModal, type MediaItem } from '@/components/media-picker-modal';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { resolveMediaUrl } from '@/lib/media-url';
import { useAdminLocale } from '@/i18n/locale-context';

/** Simple Woo-style product gallery (ordered URL list). */
export function ProductGalleryField({
  urls,
  onChange,
}: {
  urls: string[];
  onChange: (urls: string[]) => void;
}) {
  const { dict } = useAdminLocale();
  const d = dict.commerce;
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2 rounded-md border border-[var(--mj-border)] p-3">
      <Label>{d.gallery}</Label>
      <p className="text-xs text-[var(--mj-muted-fg)]">{d.galleryHelp}</p>
      <div className="grid grid-cols-3 gap-2">
        {urls.map((url) => (
          <div key={url} className="relative overflow-hidden rounded border border-[var(--mj-border)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resolveMediaUrl(url)}
              alt=""
              className="aspect-square w-full object-cover"
            />
            <Button
              type="button"
              size="sm"
              variant="destructive"
              className="absolute end-1 top-1 h-6 cursor-pointer px-1.5 text-[10px]"
              onClick={() => onChange(urls.filter((u) => u !== url))}
            >
              ×
            </Button>
          </div>
        ))}
      </div>
      <Button type="button" size="sm" className="cursor-pointer" onClick={() => setOpen(true)}>
        {d.addGalleryImage}
      </Button>
      <MediaPickerModal
        open={open}
        onClose={() => setOpen(false)}
        title={d.gallery}
        onSelect={(item: MediaItem) => {
          if (!urls.includes(item.url)) onChange([...urls, item.url]);
        }}
      />
    </div>
  );
}
