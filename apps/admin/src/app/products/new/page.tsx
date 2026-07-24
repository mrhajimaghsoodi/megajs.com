'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { CategoryChecklist, type TermRow } from '@/components/category-checklist';
import { ContentEditorLazy as ContentEditor } from '@/components/content-editor-lazy';
import { MediaImageField } from '@/components/media-image-field';
import { ProductGalleryField } from '@/components/product-gallery-field';
import { SeoPanel, emptySeoFields, type SeoFields } from '@/components/seo-panel';
import { TagChecklist } from '@/components/tag-checklist';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';
import { publicSiteUrl } from '@/lib/site';

export default function NewProductPage() {
  const router = useRouter();
  const { locale, dict } = useAdminLocale();
  const d = dict.commerce;
  const cms = dict.cms;
  const [tracks, setTracks] = useState<any[]>([]);
  const [cats, setCats] = useState<TermRow[]>([]);
  const [tags, setTags] = useState<TermRow[]>([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [status, setStatus] = useState('draft');
  const [trackId, setTrackId] = useState('');
  const [priceCents, setPriceCents] = useState('0');
  const [salePriceCents, setSalePriceCents] = useState('');
  const [sku, setSku] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [gallery, setGallery] = useState<string[]>([]);
  const [featured, setFeatured] = useState(false);
  const [accessTier, setAccessTier] = useState('paid');
  const [estimatedMinutes, setEstimatedMinutes] = useState('0');
  const [level, setLevel] = useState('');
  const [termIds, setTermIds] = useState<string[]>([]);
  const [seo, setSeo] = useState<SeoFields>(emptySeoFields());
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void Promise.all([
      adminFetch('/admin/catalog/tracks'),
      adminFetch('/admin/cms/terms?taxonomy=product_category'),
      adminFetch('/admin/cms/terms?taxonomy=product_tag'),
    ])
      .then(([tr, c, t]) => {
        setTracks(tr);
        setCats(c);
        setTags(t);
        if (tr[0]) setTrackId(tr[0].id);
        const def = (c as TermRow[]).find((x) => x.isDefault);
        if (def) setTermIds([def.id]);
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
  const previewPath = `/learn/course/${effectiveSlug || 'new-course'}`;

  const save = async () => {
    if (!trackId) {
      setError(d.trackRequired);
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const row = await adminFetch('/admin/commerce/courses', {
        method: 'POST',
        body: JSON.stringify({
          trackId,
          title,
          slug: effectiveSlug,
          summary,
          description,
          status,
          priceCents: Number(priceCents) || 0,
          salePriceCents: salePriceCents.trim() === '' ? null : Number(salePriceCents),
          sku: sku || undefined,
          coverUrl: coverUrl || undefined,
          bannerUrl: bannerUrl || undefined,
          galleryJson: JSON.stringify(gallery),
          featured,
          accessTier,
          estimatedMinutes: Number(estimatedMinutes) || 0,
          level,
          focusKeyword: seo.focusKeyword,
          termIds,
          locale,
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
      router.push(`/products/${row.id}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <Link href="/catalog" className="text-sm underline-offset-4 hover:underline">
          ← {d.back}
        </Link>
        <h1 className="mt-2 font-display text-3xl font-bold">{d.newProduct}</h1>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>{cms.titleCol}</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="text-lg" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
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
              <Label>SKU</Label>
              <Input dir="ltr" value={sku} onChange={(e) => setSku(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>{d.shortDescription}</Label>
            <Input value={summary} onChange={(e) => setSummary(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{d.productDescription}</Label>
            <ContentEditor
              value={description}
              onChange={setDescription}
              dir={locale === 'fa' ? 'rtl' : 'ltr'}
            />
          </div>
          <SeoPanel
            value={seo}
            onChange={setSeo}
            entityType="course"
            previewTitle={title}
            previewUrl={publicSiteUrl(locale, previewPath)}
            analyzePayload={{
              title,
              slug: effectiveSlug,
              body: description,
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
              <option value="coming_soon">coming_soon</option>
            </select>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              {d.featured}
            </label>
            <div className="space-y-1">
              <Label>{d.track}</Label>
              <select
                className="h-9 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 text-sm"
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
              >
                {tracks.map((tr) => (
                  <option key={tr.id} value={tr.id}>
                    {tr.i18n?.[0]?.title ?? tr.slug}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-3 rounded-md border border-[var(--mj-border)] p-3">
            <Label>{d.pricingBox}</Label>
            <div className="space-y-1">
              <Label className="text-xs">{d.priceCents}</Label>
              <Input dir="ltr" value={priceCents} onChange={(e) => setPriceCents(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">{d.salePriceCents}</Label>
              <Input
                dir="ltr"
                value={salePriceCents}
                onChange={(e) => setSalePriceCents(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">{d.accessTier}</Label>
              <select
                className="h-9 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 text-sm"
                value={accessTier}
                onChange={(e) => setAccessTier(e.target.value)}
              >
                <option value="free">free</option>
                <option value="paid">paid</option>
                <option value="subscription">subscription</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 rounded-md border border-[var(--mj-border)] p-3">
            <Label>{d.courseSettings}</Label>
            <div className="space-y-1">
              <Label className="text-xs">{d.level}</Label>
              <select
                className="h-9 w-full rounded-md border border-[var(--mj-border)] bg-[var(--mj-card)] px-2 text-sm"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">{d.levelUnset}</option>
                <option value="beginner">{d.levelBeginner}</option>
                <option value="intermediate">{d.levelIntermediate}</option>
                <option value="advanced">{d.levelAdvanced}</option>
              </select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs">{d.estimatedMinutes}</Label>
              <Input
                dir="ltr"
                value={estimatedMinutes}
                onChange={(e) => setEstimatedMinutes(e.target.value)}
              />
            </div>
          </div>

          <MediaImageField
            label={cms.featuredImage}
            help={d.productImageHelp}
            value={coverUrl}
            onChange={setCoverUrl}
          />
          <MediaImageField
            label={cms.bannerImage}
            help={cms.bannerImageHelp}
            value={bannerUrl}
            onChange={setBannerUrl}
          />
          <ProductGalleryField urls={gallery} onChange={setGallery} />

          <CategoryChecklist
            taxonomy="product_category"
            terms={cats}
            selectedIds={termIds.filter((id) => cats.some((c) => c.id === id))}
            onChange={(ids) => {
              const tagIds = termIds.filter((id) => tags.some((t) => t.id === id));
              setTermIds([...ids, ...tagIds]);
            }}
            onTermsChange={setCats}
            title={d.productCategories}
          />
          <TagChecklist
            taxonomy="product_tag"
            terms={tags}
            selectedIds={termIds.filter((id) => tags.some((t) => t.id === id))}
            onChange={(ids) => {
              const catIds = termIds.filter((id) => cats.some((c) => c.id === id));
              setTermIds([...catIds, ...ids]);
            }}
            onTermsChange={setTags}
            title={cms.productTags}
          />
        </aside>
      </div>
    </div>
  );
}
