'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { CategoryChecklist, type TermRow } from '@/components/category-checklist';
import { ContentEditorLazy as ContentEditor } from '@/components/content-editor-lazy';
import { MediaImageField } from '@/components/media-image-field';
import { ProductGalleryField } from '@/components/product-gallery-field';
import { SeoPanel, emptySeoFields, type SeoFields } from '@/components/seo-panel';
import { TagChecklist } from '@/components/tag-checklist';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';
import { publicSiteUrl } from '@/lib/site';

function parseGallery(raw?: string | null): string[] {
  try {
    const v = JSON.parse(raw || '[]');
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { locale, dict } = useAdminLocale();
  const d = dict.commerce;
  const cms = dict.cms;
  const [course, setCourse] = useState<any>(null);
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
  const [sortOrder, setSortOrder] = useState('0');
  const [termIds, setTermIds] = useState<string[]>([]);
  const [seo, setSeo] = useState<SeoFields>(emptySeoFields());
  const [moduleTitle, setModuleTitle] = useState('');
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonModuleId, setLessonModuleId] = useState('');
  const [lessonBody, setLessonBody] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const [row, c, t, tr] = await Promise.all([
      adminFetch(`/admin/commerce/courses/${id}`),
      adminFetch('/admin/cms/terms?taxonomy=product_category'),
      adminFetch('/admin/cms/terms?taxonomy=product_tag'),
      adminFetch('/admin/catalog/tracks'),
    ]);
    const i18n = row.i18n?.find((x: any) => x.locale === locale) ?? row.i18n?.[0];
    setCourse(row);
    setCats(c);
    setTags(t);
    setTracks(tr);
    setTitle(i18n?.title ?? '');
    setSummary(i18n?.summary ?? '');
    setDescription(i18n?.description ?? '');
    setSlug(row.slug);
    setStatus(row.status);
    setTrackId(row.trackId);
    setPriceCents(String(row.priceCents ?? 0));
    setSalePriceCents(
      row.salePriceCents == null ? '' : String(row.salePriceCents),
    );
    setSku(row.sku ?? '');
    setCoverUrl(row.coverUrl ?? '');
    setBannerUrl(row.bannerUrl ?? '');
    setGallery(parseGallery(row.galleryJson));
    setFeatured(Boolean(row.featured));
    setAccessTier(row.accessTier ?? 'paid');
    setEstimatedMinutes(String(row.estimatedMinutes ?? 0));
    setLevel(row.level ?? '');
    setSortOrder(String(row.sortOrder ?? 0));
    setTermIds(row.taxonomies?.map((x: any) => x.termId) ?? []);
    setSeo({
      metaTitle: row.seo?.metaTitle ?? '',
      metaDescription: row.seo?.metaDescription ?? '',
      canonicalPath: row.seo?.canonicalPath ?? `/learn/course/${row.slug}`,
      ogImageUrl: row.seo?.ogImageUrl ?? row.coverUrl ?? '',
      noIndex: Boolean(row.seo?.noIndex),
      noFollow: Boolean(row.seo?.noFollow),
      breadcrumbTitle: row.seo?.breadcrumbTitle ?? '',
      focusKeyword: row.focusKeyword ?? '',
    });
    if (row.modules?.[0]) setLessonModuleId(row.modules[0].id);
  }, [id, locale]);

  useEffect(() => {
    void load().catch((e) => setError(e.message));
  }, [load]);

  const save = async () => {
    setBusy(true);
    setMsg(null);
    try {
      await adminFetch(`/admin/commerce/courses/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title,
          summary,
          description,
          slug,
          status,
          trackId: trackId || undefined,
          priceCents: Number(priceCents) || 0,
          salePriceCents: salePriceCents.trim() === '' ? null : Number(salePriceCents),
          sku: sku || null,
          coverUrl: coverUrl || null,
          bannerUrl: bannerUrl || null,
          galleryJson: JSON.stringify(gallery),
          featured,
          accessTier,
          estimatedMinutes: Number(estimatedMinutes) || 0,
          level,
          sortOrder: Number(sortOrder) || 0,
          focusKeyword: seo.focusKeyword,
          termIds,
          locale,
          seo: {
            metaTitle: seo.metaTitle || title,
            metaDescription: seo.metaDescription || summary,
            canonicalPath: seo.canonicalPath || `/learn/course/${slug}`,
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
    setBusy(true);
    try {
      await adminFetch(`/admin/commerce/courses/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: 'archived', locale }),
      });
      router.push('/catalog');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const addModule = async () => {
    await adminFetch(`/admin/commerce/courses/${id}/modules`, {
      method: 'POST',
      body: JSON.stringify({ title: moduleTitle, locale }),
    });
    setModuleTitle('');
    await load();
  };

  const addLesson = async () => {
    if (!lessonModuleId) return;
    await adminFetch(`/admin/commerce/modules/${lessonModuleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify({
        title: lessonTitle,
        bodyMdx: lessonBody,
        locale,
        status: 'draft',
      }),
    });
    setLessonTitle('');
    setLessonBody('');
    await load();
  };

  if (!course) {
    return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  }

  const viewPath = `/learn/course/${slug}`;
  const lessonCount = (course.modules ?? []).reduce(
    (n: number, m: any) => n + (m.lessons?.length ?? 0),
    0,
  );

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/catalog" className="text-sm underline-offset-4 hover:underline">
            ← {d.back}
          </Link>
          <h1 className="mt-2 font-display text-3xl font-bold">{d.editProduct}</h1>
          <p className="mt-1 text-xs text-[var(--mj-muted-fg)]">
            {d.enrollments}: {course._count?.enrollments ?? 0} · {d.lessonsCount}: {lessonCount}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" className="cursor-pointer">
            <a href={publicSiteUrl(locale, viewPath)} target="_blank" rel="noreferrer">
              {d.view}
            </a>
          </Button>
          <Button variant="destructive" className="cursor-pointer" onClick={() => void remove()}>
            {cms.delete}
          </Button>
          <Button className="cursor-pointer" disabled={busy} onClick={() => void save()}>
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
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>slug / permalink</Label>
              <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>SKU</Label>
              <Input dir="ltr" value={sku} onChange={(e) => setSku(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>{d.shortDescription}</Label>
            <Input value={summary} onChange={(e) => setSummary(e.target.value)} />
            <p className="text-xs text-[var(--mj-muted-fg)]">{d.shortDescriptionHelp}</p>
          </div>
          <div className="space-y-2">
            <Label>{d.productDescription}</Label>
            <ContentEditor
              value={description}
              onChange={setDescription}
              rows={12}
              dir={locale === 'fa' ? 'rtl' : 'ltr'}
            />
          </div>

          <SeoPanel
            value={seo}
            onChange={setSeo}
            entityType="course"
            previewTitle={title}
            previewUrl={publicSiteUrl(locale, viewPath)}
            analyzePayload={{
              title,
              slug,
              body: description,
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
              <option value="coming_soon">coming_soon</option>
              <option value="archived">archived</option>
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
            <div className="space-y-1">
              <Label>{d.sortOrder}</Label>
              <Input
                dir="ltr"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              />
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
                placeholder={d.salePriceHint}
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
            selectedIds={termIds.filter((tid) => cats.some((c) => c.id === tid))}
            onChange={(ids) => {
              const tagIds = termIds.filter((tid) => tags.some((t) => t.id === tid));
              setTermIds([...ids, ...tagIds]);
            }}
            onTermsChange={setCats}
            title={d.productCategories}
          />
          <TagChecklist
            taxonomy="product_tag"
            terms={tags}
            selectedIds={termIds.filter((tid) => tags.some((t) => t.id === tid))}
            onChange={(ids) => {
              const catIds = termIds.filter((tid) => cats.some((c) => c.id === tid));
              setTermIds([...catIds, ...ids]);
            }}
            onTermsChange={setTags}
            title={cms.productTags}
          />
        </aside>
      </div>

      <section className="space-y-4 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.curriculum}</h2>
        <div className="flex flex-wrap gap-2">
          <Input
            className="max-w-xs"
            placeholder={d.moduleTitle}
            value={moduleTitle}
            onChange={(e) => setModuleTitle(e.target.value)}
          />
          <Button variant="outline" className="cursor-pointer" onClick={() => void addModule()}>
            {d.addModule}
          </Button>
        </div>
        <div className="space-y-3">
          {(course.modules ?? []).map((mod: any) => {
            const modTitle =
              mod.i18n?.find((x: any) => x.locale === locale)?.title ??
              mod.i18n?.[0]?.title ??
              mod.slug;
            return (
              <div key={mod.id} className="rounded-md border border-[var(--mj-border)] p-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">module</Badge>
                  <span className="font-medium">{modTitle}</span>
                </div>
                <ul className="mt-2 space-y-1 text-sm text-[var(--mj-muted-fg)]">
                  {(mod.lessons ?? []).map((les: any) => (
                    <li key={les.id}>
                      {les.i18n?.find((x: any) => x.locale === locale)?.title ??
                        les.i18n?.[0]?.title ??
                        les.slug}{' '}
                      <span className="font-mono text-xs">({les.status})</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="grid gap-3 border-t border-[var(--mj-border)] pt-4">
          <Label>{d.addLesson}</Label>
          <select
            className="h-10 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
            value={lessonModuleId}
            onChange={(e) => setLessonModuleId(e.target.value)}
          >
            {(course.modules ?? []).map((mod: any) => (
              <option key={mod.id} value={mod.id}>
                {mod.i18n?.[0]?.title ?? mod.slug}
              </option>
            ))}
          </select>
          <Input
            value={lessonTitle}
            onChange={(e) => setLessonTitle(e.target.value)}
            placeholder={d.lessonTitle}
          />
          <ContentEditor
            value={lessonBody}
            onChange={setLessonBody}
            rows={8}
            dir={locale === 'fa' ? 'rtl' : 'ltr'}
          />
          <Button className="w-fit cursor-pointer" onClick={() => void addLesson()}>
            {d.addLesson}
          </Button>
        </div>
      </section>
    </div>
  );
}
