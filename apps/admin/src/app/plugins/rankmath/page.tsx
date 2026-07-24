'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAdminLocale } from '@/i18n/locale-context';

const SITEMAP_TOGGLES = [
  ['sitemap', 'sitemap'],
  ['sitemapMisc', 'sitemapMisc'],
  ['sitemapPosts', 'sitemapPosts'],
  ['sitemapPages', 'sitemapPages'],
  ['sitemapCategories', 'sitemapCategories'],
  ['sitemapTags', 'sitemapTags'],
  ['sitemapProducts', 'sitemapProducts'],
  ['sitemapProductCategories', 'sitemapProductCategories'],
  ['sitemapLives', 'sitemapLives'],
  ['sitemapPodcasts', 'sitemapPodcasts'],
  ['sitemapIncludeImages', 'sitemapIncludeImages'],
  ['sitemapHreflang', 'sitemapHreflang'],
] as const;

export default function RankMathPluginPage() {
  const { dict, locale } = useAdminLocale();
  const d = dict.plugins;
  const [settings, setSettings] = useState<any>(null);
  const [preview, setPreview] = useState<any>(null);
  const [title, setTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('');
  const [body, setBody] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void Promise.all([
      adminFetch('/admin/plugins/rankmath/settings'),
      adminFetch('/admin/plugins/rankmath/sitemap-preview'),
    ])
      .then(([s, p]) => {
        setSettings(s);
        setPreview(p);
      })
      .catch((e) => setError(e.message));
  }, []);

  const save = async () => {
    try {
      const next = await adminFetch('/admin/plugins/rankmath/settings', {
        method: 'PUT',
        body: JSON.stringify(settings),
      });
      setSettings(next);
      const p = await adminFetch('/admin/plugins/rankmath/sitemap-preview');
      setPreview(p);
      setMsg(d.saved);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const analyze = async () => {
    const res = await adminFetch('/admin/plugins/rankmath/analyze', {
      method: 'POST',
      body: JSON.stringify({
        title,
        metaTitle: title,
        metaDescription,
        slug,
        focusKeyword,
        body,
        canonicalPath: `/articles/${slug}`,
      }),
    });
    setAnalysis(res);
  };

  if (!settings) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://megajs.com';
  const indexUrl = `${siteUrl}/sitemap_index.xml`;

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.rankmathTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.rankmathSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <section className="space-y-3 rounded-2xl border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.settings}</h2>
        {(['enabled', 'breadcrumbs', 'og', 'schema', 'robotsNoIndexSearch'] as const).map((key) => (
          <label key={key} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(settings[key])}
              onChange={(e) => setSettings({ ...settings, [key]: e.target.checked })}
            />
            {key}
          </label>
        ))}
      </section>

      <section className="space-y-3 rounded-2xl border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.sitemapTypes}</h2>
        <p className="text-sm text-[var(--mj-muted-fg)]">
          {d.sitemapIndexUrl}:{' '}
          <a className="underline" href={indexUrl} target="_blank" rel="noreferrer" dir="ltr">
            {indexUrl}
          </a>
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {SITEMAP_TOGGLES.map(([key, labelKey]) => (
            <label key={key} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={Boolean(settings[key])}
                onChange={(e) => setSettings({ ...settings, [key]: e.target.checked })}
              />
              {(d as any)[labelKey] ?? key}
            </label>
          ))}
        </div>
        <Button className="cursor-pointer" onClick={() => void save()}>
          {dict.save}
        </Button>
      </section>

      <section className="space-y-3 rounded-2xl border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.analyzer}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>{d.focusKeyword}</Label>
            <Input value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>slug</Label>
            <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
          </div>
        </div>
        <div className="space-y-2">
          <Label>SEO title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Meta description</Label>
          <Input value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Body</Label>
          <Textarea rows={6} value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <Button className="cursor-pointer" onClick={() => void analyze()}>
          {d.runAnalyze}
        </Button>
        {analysis ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-bold">{analysis.score}</span>
              <Badge variant="secondary">{analysis.label}</Badge>
            </div>
            <ul className="space-y-1 text-sm">
              {analysis.issues.map((i: any) => (
                <li
                  key={i.id}
                  className={
                    i.severity === 'bad'
                      ? 'text-[var(--mj-danger)]'
                      : i.severity === 'good'
                        ? 'text-emerald-700'
                        : ''
                  }
                >
                  [{i.severity}] {i.message}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section className="space-y-3 rounded-2xl border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.sitemapPreview}</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {Object.entries(preview?.counts ?? {}).map(([type, count]) => (
            <div
              key={type}
              className="flex items-center justify-between rounded-xl border border-[var(--mj-border)] px-3 py-2 text-sm"
            >
              <span dir="ltr">{type}-sitemap.xml</span>
              <Badge variant="secondary">{String(count)}</Badge>
            </div>
          ))}
        </div>
        <ul className="space-y-1 text-xs text-[var(--mj-muted-fg)]" dir="ltr">
          {(preview?.index?.sitemaps ?? []).map((s: any) => (
            <li key={s.type}>
              {siteUrl}/{s.type}-sitemap.xml · {s.count} · {s.lastmod || '—'}
            </li>
          ))}
        </ul>
        <p className="text-xs text-[var(--mj-muted-fg)]">
          {locale === 'fa'
            ? 'این فایل‌ها را در Google Search Console به‌عنوان Sitemap ثبت کنید.'
            : 'Submit these files as Sitemaps in Google Search Console.'}
        </p>
      </section>
    </div>
  );
}
