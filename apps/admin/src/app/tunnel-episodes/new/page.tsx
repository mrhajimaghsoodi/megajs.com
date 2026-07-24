'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
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

export default function NewTunnelEpisodePage() {
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void Promise.all([
      adminFetch('/admin/cms/terms?taxonomy=tunnel_category'),
      adminFetch('/admin/cms/terms?taxonomy=tunnel_tag'),
    ])
      .then(([c, t]) => {
        setCats(c);
        setTags(t);
        const def = (c as TermRow[]).find((x) => x.isDefault) ?? c[0];
        if (def) {
          setTermIds([def.id]);
          setSeriesTermId(def.id);
        }
      })
      .catch((e) => setError(e.message));
  }, []);

  const autoSlug = useMemo(() => {
    if (slug) return slug;
    return title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\u0600-\u06FF-]+/g, '')
      .slice(0, 80);
  }, [title, slug]);

  const effectiveSlug = slug || autoSlug;
  const previewPath = `/tunnel/e/${effectiveSlug || 'new-part'}`;

  const save = async () => {
    setBusy(true);
    setError(null);
    try {
      const row = await adminFetch('/admin/cms/tunnel-episodes', {
        method: 'POST',
        body: JSON.stringify({
          title,
          slug: effectiveSlug,
          summary,
          bodyMdx,
          status,
          coverUrl: coverUrl || undefined,
          bannerUrl: bannerUrl || undefined,
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
            canonicalPath: seo.canonicalPath || previewPath,
            ogImageUrl: seo.ogImageUrl || coverUrl || bannerUrl || undefined,
            noIndex: seo.noIndex,
            noFollow: seo.noFollow,
            breadcrumbTitle: seo.breadcrumbTitle,
          },
        }),
      });
      router.push(`/tunnel-episodes/${row.id}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <Link href="/tunnel-episodes" className="text-sm underline-offset-4 hover:underline">
          ← {d.back}
        </Link>
        <h1 className="mt-2 font-display text-3xl font-bold">{d.addEpisode}</h1>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>{cms.titleCol}</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="text-lg" />
          </div>
          <div className="space-y-2">
            <Label>slug</Label>
            <Input
              dir="ltr"
              value={slug}
              placeholder={autoSlug}
              onChange={(e) => setSlug(e.target.value)}
            />
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
            previewUrl={publicSiteUrl(locale, previewPath)}
            analyzePayload={{
              title,
              slug: effectiveSlug,
              body: bodyMdx,
              canonicalPath: seo.canonicalPath || previewPath,
              ogImageUrl: seo.ogImageUrl || coverUrl || bannerUrl,
              locale,
            }}
          />
          <Button className="cursor-pointer" disabled={busy} onClick={() => void save()}>
            {busy ? dict.loading : dict.save}
          </Button>
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
              <p className="text-[11px] text-[var(--mj-muted-fg)]">{d.partOrderHelp}</p>
            </div>
            <div className="space-y-1">
              <Label>{d.series}</Label>
              <select
                className="h-9 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 text-sm"
                value={seriesTermId}
                onChange={(e) => {
                  setSeriesTermId(e.target.value);
                  if (e.target.value && !termIds.includes(e.target.value)) {
                    setTermIds([e.target.value, ...termIds]);
                  }
                }}
              >
                <option value="">{d.pickSeries}</option>
                {cats.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.i18n?.[0]?.name ?? c.slug}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <TunnelVideoFields value={video} onChange={setVideo} />

          <MediaImageField
            label={cms.featuredImage}
            help={cms.featuredImageHelp}
            value={coverUrl}
            onChange={setCoverUrl}
          />
          <MediaImageField
            label={cms.bannerImage}
            help={cms.bannerImageHelp}
            value={bannerUrl}
            onChange={setBannerUrl}
          />

          <CategoryChecklist
            taxonomy="tunnel_category"
            terms={cats}
            selectedIds={termIds.filter((id) => cats.some((c) => c.id === id))}
            onChange={(ids) => {
              const tagIds = termIds.filter((id) => tags.some((t) => t.id === id));
              setTermIds([...ids, ...tagIds]);
              if (ids[0]) setSeriesTermId(ids[0]);
            }}
            onTermsChange={setCats}
            title={d.categories}
          />
          <TagChecklist
            taxonomy="tunnel_tag"
            terms={tags}
            selectedIds={termIds.filter((id) => tags.some((t) => t.id === id))}
            onChange={(ids) => {
              const catIds = termIds.filter((id) => cats.some((c) => c.id === id));
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
