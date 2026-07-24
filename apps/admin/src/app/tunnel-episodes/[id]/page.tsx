'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { CategoryChecklist, type TermRow } from '@/components/category-checklist';
import { ContentEditorLazy as ContentEditor } from '@/components/content-editor-lazy';
import { MediaImageField } from '@/components/media-image-field';
import { SeoPanel, emptySeoFields, type SeoFields } from '@/components/seo-panel';
import { TagChecklist } from '@/components/tag-checklist';
import {
  TunnelVideoFields,
  type VideoFieldsValue,
} from '@/components/tunnel-video-fields';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';
import { publicSiteUrl } from '@/lib/site';

export default function EditTunnelEpisodePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { locale, dict } = useAdminLocale();
  const d = dict.tunnel;
  const cms = dict.cms;
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [summary, setSummary] = useState('');
  const [bodyMdx, setBodyMdx] = useState('');
  const [status, setStatus] = useState('draft');
  const [coverUrl, setCoverUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [sticky, setSticky] = useState(false);
  const [sortOrder, setSortOrder] = useState('0');
  const [seriesTermId, setSeriesTermId] = useState('');
  const [termIds, setTermIds] = useState<string[]>([]);
  const [cats, setCats] = useState<TermRow[]>([]);
  const [tags, setTags] = useState<TermRow[]>([]);
  const [video, setVideo] = useState<VideoFieldsValue>({
    videoSource: 'none',
    aparatUrl: '',
    vodUrl: '',
    videoUrl: '',
    videoPosterUrl: '',
  });
  const [seo, setSeo] = useState<SeoFields>(emptySeoFields());
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const load = useCallback(async () => {
    const [row, c, t] = await Promise.all([
      adminFetch(`/admin/cms/tunnel-episodes/${id}`),
      adminFetch('/admin/cms/terms?taxonomy=tunnel_category'),
      adminFetch('/admin/cms/terms?taxonomy=tunnel_tag'),
    ]);
    const i18n = row.i18n?.find((x: any) => x.locale === locale) ?? row.i18n?.[0];
    setTitle(i18n?.title ?? '');
    setSummary(i18n?.summary ?? '');
    setBodyMdx(i18n?.bodyMdx ?? '');
    setSlug(row.slug);
    setStatus(row.status);
    setCoverUrl(row.coverUrl ?? '');
    setBannerUrl(row.bannerUrl ?? '');
    setSticky(Boolean(row.sticky));
    setSortOrder(String(row.sortOrder ?? 0));
    setSeriesTermId(row.seriesTermId ?? '');
    setTermIds(row.taxonomies?.map((x: any) => x.termId) ?? []);
    setCats(c);
    setTags(t);
    setVideo({
      videoSource: row.videoSource ?? 'none',
      aparatUrl: row.aparatUrl ?? '',
      vodUrl: row.vodUrl ?? '',
      videoUrl: row.videoUrl ?? '',
      videoPosterUrl: row.videoPosterUrl ?? '',
    });
    setSeo({
      metaTitle: row.seo?.metaTitle ?? '',
      metaDescription: row.seo?.metaDescription ?? '',
      canonicalPath: row.seo?.canonicalPath ?? `/tunnel/e/${row.slug}`,
      ogImageUrl: row.seo?.ogImageUrl ?? row.coverUrl ?? '',
      noIndex: Boolean(row.seo?.noIndex),
      noFollow: Boolean(row.seo?.noFollow),
      breadcrumbTitle: row.seo?.breadcrumbTitle ?? '',
      focusKeyword: row.focusKeyword ?? '',
    });
    setReady(true);
  }, [id, locale]);

  useEffect(() => {
    void load().catch((e) => setError(e.message));
  }, [load]);

  const save = async () => {
    setBusy(true);
    setMsg(null);
    try {
      await adminFetch(`/admin/cms/tunnel-episodes/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title,
          slug,
          summary,
          bodyMdx,
          status,
          coverUrl: coverUrl || null,
          bannerUrl: bannerUrl || null,
          sticky,
          sortOrder: Number(sortOrder) || 0,
          seriesTermId: seriesTermId || null,
          focusKeyword: seo.focusKeyword,
          termIds,
          locale,
          ...video,
          seo: {
            metaTitle: seo.metaTitle || title,
            metaDescription: seo.metaDescription || summary,
            canonicalPath: seo.canonicalPath || `/tunnel/e/${slug}`,
            ogImageUrl: seo.ogImageUrl || coverUrl || bannerUrl || undefined,
            noIndex: seo.noIndex,
            noFollow: seo.noFollow,
            breadcrumbTitle: seo.breadcrumbTitle,
          },
        }),
      });
      setMsg(d.saved);
      await load();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const remove = async () => {
    if (!confirm(cms.confirmDelete)) return;
    await adminFetch(`/admin/cms/tunnel-episodes/${id}`, { method: 'DELETE' });
    router.push('/tunnel-episodes');
  };

  if (!ready) {
    return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  }

  const viewPath = `/tunnel/e/${slug}`;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/tunnel-episodes" className="text-sm underline-offset-4 hover:underline">
            ← {d.back}
          </Link>
          <h1 className="mt-2 font-display text-3xl font-bold">{d.editEpisode}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <a href={publicSiteUrl(locale, viewPath)} target="_blank" rel="noreferrer">
              {dict.commerce.view}
            </a>
          </Button>
          <Button variant="destructive" onClick={() => void remove()}>
            {cms.delete}
          </Button>
          <Button disabled={busy} onClick={() => void save()}>
            {busy ? dict.loading : dict.save}
          </Button>
        </div>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>{cms.titleCol}</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="text-lg" />
          </div>
          <div className="space-y-2">
            <Label>slug</Label>
            <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{cms.excerpt}</Label>
            <Input value={summary} onChange={(e) => setSummary(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{cms.body}</Label>
            <ContentEditor
              value={bodyMdx}
              onChange={setBodyMdx}
              dir={locale === 'fa' ? 'rtl' : 'ltr'}
              enableCodeEditor
            />
          </div>
          <SeoPanel
            value={seo}
            onChange={setSeo}
            entityType="article"
            previewTitle={title}
            previewUrl={publicSiteUrl(locale, viewPath)}
            analyzePayload={{
              title,
              slug,
              body: bodyMdx,
              canonicalPath: seo.canonicalPath || viewPath,
              ogImageUrl: seo.ogImageUrl || coverUrl || bannerUrl,
              locale,
            }}
          />
        </div>

        <aside className="space-y-4">
          <div className="space-y-3 rounded-md border border-[var(--mj-border)] p-3">
            <Label>{cms.publishBox}</Label>
            <select
              className="h-10 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="draft">draft</option>
              <option value="published">published</option>
              <option value="archived">archived</option>
            </select>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input type="checkbox" checked={sticky} onChange={(e) => setSticky(e.target.checked)} />
              {cms.stickyPost}
            </label>
            <div className="space-y-1">
              <Label>{d.partOrder}</Label>
              <Input dir="ltr" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>{d.series}</Label>
              <select
                className="h-9 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 text-sm"
                value={seriesTermId}
                onChange={(e) => setSeriesTermId(e.target.value)}
              >
                <option value="">{d.pickSeries}</option>
                {cats.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.i18n?.find((x) => x.locale === locale)?.name ?? c.i18n?.[0]?.name ?? c.slug}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <TunnelVideoFields value={video} onChange={setVideo} />
          <MediaImageField label={cms.featuredImage} value={coverUrl} onChange={setCoverUrl} />
          <MediaImageField label={cms.bannerImage} value={bannerUrl} onChange={setBannerUrl} />

          <CategoryChecklist
            taxonomy="tunnel_category"
            terms={cats}
            selectedIds={termIds.filter((tid) => cats.some((c) => c.id === tid))}
            onChange={(ids) => {
              const tagIds = termIds.filter((tid) => tags.some((t) => t.id === tid));
              setTermIds([...ids, ...tagIds]);
            }}
            onTermsChange={setCats}
            title={d.categories}
          />
          <TagChecklist
            taxonomy="tunnel_tag"
            terms={tags}
            selectedIds={termIds.filter((tid) => tags.some((t) => t.id === tid))}
            onChange={(ids) => {
              const catIds = termIds.filter((tid) => cats.some((c) => c.id === tid));
              setTermIds([...catIds, ...ids]);
            }}
            onTermsChange={setTags}
            title={d.tags}
          />
        </aside>
      </div>
    </div>
  );
}
