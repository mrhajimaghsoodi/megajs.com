'use client';

import { useState } from 'react';
import { adminUpload } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export type VideoFieldsValue = {
  videoSource: string;
  aparatUrl: string;
  vodUrl: string;
  videoUrl: string;
  videoPosterUrl: string;
};

export function TunnelVideoFields({
  value,
  onChange,
}: {
  value: VideoFieldsValue;
  onChange: (next: VideoFieldsValue) => void;
}) {
  const { dict } = useAdminLocale();
  const d = dict.tunnel;
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof VideoFieldsValue>(key: K, v: VideoFieldsValue[K]) =>
    onChange({ ...value, [key]: v });

  const upload = async (file: File | null) => {
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const item = await adminUpload('/admin/cms/media/upload-video', file, {
        title: file.name,
        alt: file.name,
      });
      onChange({
        ...value,
        videoSource: 'upload',
        videoUrl: item.url,
      });
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-3 rounded-md border border-[var(--mj-border)] p-3">
      <Label>{d.videoBox}</Label>
      <p className="text-xs text-[var(--mj-muted-fg)]">{d.videoHelp}</p>
      <select
        className="h-9 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 text-sm"
        value={value.videoSource}
        onChange={(e) => set('videoSource', e.target.value)}
      >
        <option value="none">{d.videoNone}</option>
        <option value="aparat">{d.videoAparat}</option>
        <option value="vod">{d.videoVod}</option>
        <option value="upload">{d.videoUpload}</option>
      </select>

      {value.videoSource === 'aparat' ? (
        <div className="space-y-1">
          <Label className="text-xs">{d.aparatUrl}</Label>
          <Input
            dir="ltr"
            value={value.aparatUrl}
            onChange={(e) => set('aparatUrl', e.target.value)}
            placeholder="https://www.aparat.com/v/..."
          />
        </div>
      ) : null}

      {value.videoSource === 'vod' ? (
        <div className="space-y-1">
          <Label className="text-xs">{d.vodUrl}</Label>
          <Input
            dir="ltr"
            value={value.vodUrl}
            onChange={(e) => set('vodUrl', e.target.value)}
            placeholder="https://cdn.example.com/stream.m3u8"
          />
        </div>
      ) : null}

      {value.videoSource === 'upload' ? (
        <div className="space-y-2">
          <Label className="text-xs">{d.uploadVideo}</Label>
          <Input
            type="file"
            accept="video/mp4,video/webm,video/quicktime"
            disabled={busy}
            onChange={(e) => void upload(e.target.files?.[0] ?? null)}
          />
          {value.videoUrl ? (
            <p className="truncate font-mono text-[11px] text-[var(--mj-muted-fg)]" dir="ltr">
              {value.videoUrl}
            </p>
          ) : null}
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="cursor-pointer"
            onClick={() => onChange({ ...value, videoUrl: '', videoSource: 'none' })}
          >
            {d.clearVideo}
          </Button>
        </div>
      ) : null}

      {value.videoSource !== 'none' ? (
        <div className="space-y-1">
          <Label className="text-xs">{d.videoPoster}</Label>
          <Input
            dir="ltr"
            value={value.videoPosterUrl}
            onChange={(e) => set('videoPosterUrl', e.target.value)}
            placeholder="/api/uploads/..."
          />
        </div>
      ) : null}

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
    </div>
  );
}
