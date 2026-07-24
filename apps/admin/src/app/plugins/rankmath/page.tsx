'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAdminLocale } from '@/i18n/locale-context';

export default function RankMathPluginPage() {
  const { dict } = useAdminLocale();
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

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.rankmathTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.rankmathSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.settings}</h2>
        {(['enabled','sitemap','breadcrumbs','og','schema','robotsNoIndexSearch'] as const).map((key) => (
          <label key={key} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(settings[key])}
              onChange={(e) => setSettings({ ...settings, [key]: e.target.checked })}
            />
            {key}
          </label>
        ))}
        <Button className="cursor-pointer" onClick={() => void save()}>{dict.save}</Button>
      </section>

      <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.analyzer}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>{d.focusKeyword}</Label><Input value={focusKeyword} onChange={(e) => setFocusKeyword(e.target.value)} /></div>
          <div className="space-y-2"><Label>slug</Label><Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} /></div>
        </div>
        <div className="space-y-2"><Label>SEO title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        <div className="space-y-2"><Label>Meta description</Label><Input value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} /></div>
        <div className="space-y-2"><Label>Body</Label><Textarea rows={6} value={body} onChange={(e) => setBody(e.target.value)} /></div>
        <Button className="cursor-pointer" onClick={() => void analyze()}>{d.runAnalyze}</Button>
        {analysis ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-bold">{analysis.score}</span>
              <Badge variant="secondary">{analysis.label}</Badge>
            </div>
            <ul className="space-y-1 text-sm">
              {analysis.issues.map((i: any) => (
                <li key={i.id} className={i.severity === 'bad' ? 'text-[var(--mj-danger)]' : i.severity === 'good' ? 'text-emerald-700' : ''}>
                  [{i.severity}] {i.message}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-lg font-semibold">{d.sitemapPreview}</h2>
        <p className="text-sm text-[var(--mj-muted-fg)]">
          articles: {preview?.articles?.length ?? 0} · pages: {preview?.pages?.length ?? 0} · courses: {preview?.courses?.length ?? 0}
        </p>
      </section>
    </div>
  );
}
