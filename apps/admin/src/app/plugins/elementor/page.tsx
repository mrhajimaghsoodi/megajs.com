'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import {
  emptyBuilder,
  type BuilderDoc,
} from '@/components/elementor-builder';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

const ElementorBuilder = dynamic(
  () => import('@/components/elementor-builder').then((m) => m.ElementorBuilder),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 animate-pulse rounded-md border border-[var(--mj-border)] bg-[var(--mj-muted)]" />
    ),
  },
);

export default function ElementorPluginPage() {
  const { id } = useParams<{ id?: string }>();
  const { locale, dict } = useAdminLocale();
  const d = dict.plugins;
  const [pages, setPages] = useState<any[]>([]);
  const [pageId, setPageId] = useState(id ?? '');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [builder, setBuilder] = useState<BuilderDoc>(emptyBuilder());
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/cms/pages')
      .then((rows) => {
        setPages(rows);
        if (!pageId && rows[0]) setPageId(rows[0].id);
      })
      .catch((e) => setError(e.message));
  }, []);

  const load = useCallback(async () => {
    if (!pageId) return;
    const row = await adminFetch(`/admin/plugins/elementor/pages/${pageId}`);
    const i18n = row.i18n?.find((x: any) => x.locale === locale) ?? row.i18n?.[0];
    setTitle(i18n?.title ?? '');
    setSlug(row.slug);
    setBuilder((row.builder as BuilderDoc) ?? emptyBuilder());
  }, [pageId, locale]);

  useEffect(() => {
    void load().catch((e) => setError(e.message));
  }, [load]);

  const save = async () => {
    try {
      await adminFetch(`/admin/plugins/elementor/pages/${pageId}`, {
        method: 'PUT',
        body: JSON.stringify({ builder, template: 'elementor' }),
      });
      await adminFetch(`/admin/cms/pages/${pageId}`, {
        method: 'PATCH',
        body: JSON.stringify({ title, slug, locale, template: 'elementor' }),
      });
      setMsg(d.saved);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const createPage = async () => {
    const row = await adminFetch('/admin/cms/pages', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Elementor page',
        slug: `builder-${Date.now()}`,
        locale,
        status: 'draft',
        template: 'elementor',
      }),
    });
    setPageId(row.id);
    setPages((prev) => [row, ...prev]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{d.elementorTitle}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.elementorSubtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="cursor-pointer" onClick={() => void createPage()}>
            {d.newBuilderPage}
          </Button>
          <Button className="cursor-pointer" disabled={!pageId} onClick={() => void save()}>
            {dict.save}
          </Button>
        </div>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="space-y-2">
          <Label>{d.selectPage}</Label>
          <select
            className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
            value={pageId}
            onChange={(e) => setPageId(e.target.value)}
          >
            {pages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.i18n?.[0]?.title ?? p.slug}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label>{dict.cms.titleCol}</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>slug</Label>
          <Input dir="ltr" value={slug} onChange={(e) => setSlug(e.target.value)} />
        </div>
      </div>

      {pageId ? (
        <>
          <ElementorBuilder value={builder} onChange={setBuilder} />
          <p className="text-xs text-[var(--mj-muted-fg)]">
            <Link className="underline-offset-4 hover:underline" href={`/pages/${pageId}`}>
              {d.openClassicEditor}
            </Link>
          </p>
        </>
      ) : null}
    </div>
  );
}
