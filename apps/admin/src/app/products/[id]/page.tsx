'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { ContentEditor } from '@/components/content-editor';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { locale, dict } = useAdminLocale();
  const d = dict.commerce;
  const cms = dict.cms;
  const [course, setCourse] = useState<any>(null);
  const [terms, setTerms] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [status, setStatus] = useState('draft');
  const [priceCents, setPriceCents] = useState('0');
  const [sku, setSku] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [featured, setFeatured] = useState(false);
  const [termIds, setTermIds] = useState<string[]>([]);
  const [moduleTitle, setModuleTitle] = useState('');
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonModuleId, setLessonModuleId] = useState('');
  const [lessonBody, setLessonBody] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const [row, cats] = await Promise.all([
      adminFetch(`/admin/commerce/courses/${id}`),
      adminFetch('/admin/cms/terms?taxonomy=product_category'),
    ]);
    const i18n = row.i18n?.find((x: any) => x.locale === locale) ?? row.i18n?.[0];
    setCourse(row);
    setTerms(cats);
    setTitle(i18n?.title ?? '');
    setSummary(i18n?.summary ?? '');
    setDescription(i18n?.description ?? '');
    setSlug(row.slug);
    setStatus(row.status);
    setPriceCents(String(row.priceCents ?? 0));
    setSku(row.sku ?? '');
    setCoverUrl(row.coverUrl ?? '');
    setFeatured(Boolean(row.featured));
    setTermIds(row.taxonomies?.map((t: any) => t.termId) ?? []);
    if (row.modules?.[0]) setLessonModuleId(row.modules[0].id);
  }, [id, locale]);

  useEffect(() => {
    void load().catch((e) => setError(e.message));
  }, [load]);

  const save = async () => {
    try {
      await adminFetch(`/admin/commerce/courses/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title,
          summary,
          description,
          slug,
          status,
          priceCents: Number(priceCents),
          sku: sku || null,
          coverUrl: coverUrl || null,
          featured,
          termIds,
          locale,
        }),
      });
      setMsg(d.saved);
      await load();
    } catch (e: any) {
      setError(e.message);
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

  const termName = (t: any) =>
    t.i18n?.find((x: any) => x.locale === locale)?.name ?? t.i18n?.[0]?.name ?? t.slug;

  if (!course) {
    return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/catalog" className="text-sm underline-offset-4 hover:underline">
            ← {d.back}
          </Link>
          <h1 className="mt-2 font-display text-3xl font-bold">{d.editProduct}</h1>
        </div>
        <Button className="cursor-pointer" onClick={() => void save()}>
          {dict.save}
        </Button>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid gap-4">
        <div className="space-y-2">
          <Label>{cms.titleCol}</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label>slug</Label>
            <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>SKU</Label>
            <Input dir="ltr" value={sku} onChange={(e) => setSku(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{d.priceCents}</Label>
            <Input dir="ltr" value={priceCents} onChange={(e) => setPriceCents(e.target.value)} />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>{cms.status}</Label>
            <select
              className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="draft">draft</option>
              <option value="published">published</option>
              <option value="archived">archived</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>{cms.coverUrl}</Label>
            <Input dir="ltr" value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} />
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          {d.featured}
        </label>
        <div className="space-y-2">
          <Label>{cms.summary}</Label>
          <Input value={summary} onChange={(e) => setSummary(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{cms.description}</Label>
          <ContentEditor
            value={description}
            onChange={setDescription}
            rows={8}
            dir={locale === 'fa' ? 'rtl' : 'ltr'}
          />
        </div>
        <div className="space-y-2">
          <Label>{d.productCategories}</Label>
          <div className="flex flex-wrap gap-2">
            {terms.map((t) => {
              const on = termIds.includes(t.id);
              return (
                <button
                  key={t.id}
                  type="button"
                  className={`cursor-pointer rounded-md border px-2 py-1 text-xs ${
                    on
                      ? 'border-[var(--mj-accent)] bg-[var(--mj-accent)] text-[var(--mj-accent-fg)]'
                      : 'border-[var(--mj-border)]'
                  }`}
                  onClick={() =>
                    setTermIds((prev) =>
                      on ? prev.filter((x) => x !== t.id) : [...prev, t.id],
                    )
                  }
                >
                  {termName(t)}
                </button>
              );
            })}
          </div>
        </div>
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
