'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { MediaImageField } from '@/components/media-image-field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export type SeoFields = {
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  ogImageUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  breadcrumbTitle: string;
  focusKeyword: string;
};

export const emptySeoFields = (): SeoFields => ({
  metaTitle: '',
  metaDescription: '',
  canonicalPath: '',
  ogImageUrl: '',
  noIndex: false,
  noFollow: false,
  breadcrumbTitle: '',
  focusKeyword: '',
});

type AnalyzeResult = {
  score: number;
  label: string;
  issues: Array<{ id: string; severity: string; message: string }>;
  schemaSuggestion?: Record<string, unknown>;
};

function CharMeter({
  value,
  min,
  max,
}: {
  value: string;
  min: number;
  max: number;
}) {
  const len = value.length;
  const ok = len >= min && len <= max;
  const color = ok ? 'text-emerald-700' : len === 0 ? 'text-[var(--mj-muted-fg)]' : 'text-[var(--mj-danger)]';
  return (
    <span className={`font-mono text-[11px] ${color}`}>
      {len}/{max}
    </span>
  );
}

/** Rank Math–style SEO metabox for posts and terms */
export function SeoPanel({
  value,
  onChange,
  analyzePayload,
  entityType = 'article',
  previewTitle,
  previewUrl,
}: {
  value: SeoFields;
  onChange: (next: SeoFields) => void;
  /** Extra fields sent to Rank Math analyze (title, body, slug, …) */
  analyzePayload: Record<string, unknown>;
  entityType?: 'article' | 'term' | 'course';
  previewTitle?: string;
  previewUrl?: string;
}) {
  const { dict } = useAdminLocale();
  const d = dict.cms;
  const p = dict.plugins;
  const [score, setScore] = useState<AnalyzeResult | null>(null);
  const [busy, setBusy] = useState(false);

  const set = <K extends keyof SeoFields>(key: K, v: SeoFields[K]) =>
    onChange({ ...value, [key]: v });

  const analyze = async () => {
    setBusy(true);
    try {
      const res = await adminFetch('/admin/plugins/rankmath/analyze', {
        method: 'POST',
        body: JSON.stringify({
          type: entityType === 'term' ? 'term' : 'article',
          ...analyzePayload,
          metaTitle: value.metaTitle || analyzePayload.title || analyzePayload.name,
          metaDescription: value.metaDescription,
          focusKeyword: value.focusKeyword,
          canonicalPath: value.canonicalPath || analyzePayload.canonicalPath,
          ogImageUrl: value.ogImageUrl || analyzePayload.ogImageUrl,
        }),
      });
      setScore(res);
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    // debounce light re-analyze when focus keyword / titles change
    const t = setTimeout(() => {
      void analyze();
    }, 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    value.metaTitle,
    value.metaDescription,
    value.focusKeyword,
    value.canonicalPath,
    value.ogImageUrl,
  ]);

  const snipTitle = value.metaTitle || previewTitle || '';
  const snipDesc = value.metaDescription || '';
  const snipUrl = previewUrl || value.canonicalPath || '';

  return (
    <div className="space-y-4 rounded-md border border-[var(--mj-border)] p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-lg font-bold">{d.seoPanelTitle}</h2>
        {score ? (
          <span
            className={`font-display text-sm font-bold ${
              score.label === 'great'
                ? 'text-emerald-700'
                : score.label === 'ok'
                  ? 'text-amber-700'
                  : 'text-[var(--mj-danger)]'
            }`}
          >
            Rank Math: {score.score}/100 ({score.label})
          </span>
        ) : null}
      </div>
      <p className="text-xs text-[var(--mj-muted-fg)]">{d.seoPanelHelp}</p>

      <div className="space-y-2">
        <Label>{p.focusKeyword}</Label>
        <Input
          value={value.focusKeyword}
          onChange={(e) => set('focusKeyword', e.target.value)}
          placeholder={d.focusKeywordPh}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Label>{d.seoTitle}</Label>
          <CharMeter value={value.metaTitle} min={30} max={60} />
        </div>
        <Input
          value={value.metaTitle}
          onChange={(e) => set('metaTitle', e.target.value)}
          placeholder={previewTitle || d.seoTitle}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Label>{d.seoDescription}</Label>
          <CharMeter value={value.metaDescription} min={70} max={160} />
        </div>
        <textarea
          className="min-h-[88px] w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 py-2 text-sm"
          value={value.metaDescription}
          onChange={(e) => set('metaDescription', e.target.value)}
          placeholder={d.seoDescriptionPh}
        />
      </div>

      <div className="space-y-2">
        <Label>{d.canonicalUrl}</Label>
        <Input
          dir="ltr"
          value={value.canonicalPath}
          onChange={(e) => set('canonicalPath', e.target.value)}
          placeholder={d.canonicalAuto}
        />
        <p className="text-[11px] text-[var(--mj-muted-fg)]">{d.canonicalHelp}</p>
      </div>

      <div className="space-y-2">
        <Label>{d.breadcrumbTitle}</Label>
        <Input
          value={value.breadcrumbTitle}
          onChange={(e) => set('breadcrumbTitle', e.target.value)}
          placeholder={previewTitle}
        />
      </div>

      <MediaImageField
        label={d.ogImage}
        help={d.ogImageHelp}
        value={value.ogImageUrl}
        onChange={(url) => set('ogImageUrl', url)}
      />

      <div className="flex flex-wrap gap-4 text-sm">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={value.noIndex}
            onChange={(e) => set('noIndex', e.target.checked)}
          />
          {d.robotsNoIndex}
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={value.noFollow}
            onChange={(e) => set('noFollow', e.target.checked)}
          />
          {d.robotsNoFollow}
        </label>
      </div>

      <div className="rounded-md border border-[var(--mj-border)] bg-[var(--mj-muted)]/40 p-3">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--mj-muted-fg)]">
          {d.serpPreview}
        </div>
        <div className="font-mono text-[11px] text-emerald-800" dir="ltr">
          {snipUrl || 'https://megajs.com/…'}
        </div>
        <div className="mt-1 text-base font-medium text-[#1a0dab] line-clamp-1">
          {snipTitle || d.seoTitle}
        </div>
        <div className="mt-0.5 text-sm text-[#4d5156] line-clamp-2">
          {snipDesc || d.seoDescriptionPh}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="outline" size="sm" disabled={busy} onClick={() => void analyze()}>
          {busy ? dict.loading : p.runAnalyze}
        </Button>
      </div>

      {score?.issues?.length ? (
        <ul className="max-h-48 space-y-1 overflow-y-auto text-xs">
          {score.issues.map((i) => (
            <li
              key={i.id}
              className={
                i.severity === 'bad'
                  ? 'text-[var(--mj-danger)]'
                  : i.severity === 'good'
                    ? 'text-emerald-700'
                    : 'text-[var(--mj-muted-fg)]'
              }
            >
              [{i.severity}] {i.message}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
