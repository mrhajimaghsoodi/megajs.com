'use client';

import { useState } from 'react';
import { MediaPickerModal, type MediaItem } from '@/components/media-picker-modal';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { resolveMediaUrl } from '@/lib/media-url';
import { useAdminLocale } from '@/i18n/locale-context';

type Props = {
  label: string;
  value: string;
  onChange: (url: string) => void;
  help?: string;
};

export function MediaImageField({ label, value, onChange, help }: Props) {
  const { dict } = useAdminLocale();
  const d = dict.cms;
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2 rounded-md border border-[var(--mj-border)] p-3">
      <Label>{label}</Label>
      {help ? <p className="text-xs text-[var(--mj-muted-fg)]">{help}</p> : null}
      {value ? (
        <div className="overflow-hidden rounded border border-[var(--mj-border)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolveMediaUrl(value)}
            alt=""
            className="h-36 w-full bg-[var(--mj-muted)] object-cover"
          />
        </div>
      ) : (
        <div className="grid h-28 place-items-center rounded border border-dashed border-[var(--mj-border)] bg-[var(--mj-muted)] text-xs text-[var(--mj-muted-fg)]">
          {d.noImage}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        <Button type="button" size="sm" className="cursor-pointer" onClick={() => setOpen(true)}>
          {value ? d.changeImage : d.setImage}
        </Button>
        {value ? (
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="cursor-pointer"
            onClick={() => onChange('')}
          >
            {d.removeImage}
          </Button>
        ) : null}
      </div>
      <MediaPickerModal
        open={open}
        onClose={() => setOpen(false)}
        title={label}
        onSelect={(item: MediaItem) => onChange(item.url)}
      />
    </div>
  );
}
