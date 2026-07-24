'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

function i18nTitle(row: { i18n?: { locale: string; title?: string }[] }, locale: string) {
  const match = row.i18n?.find((x) => x.locale === locale) ?? row.i18n?.[0];
  return match?.title ?? '—';
}

export default function CatalogAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.catalog;
  const c = dict.commerce;
  const [tracks, setTracks] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const [trackTitle, setTrackTitle] = useState('');
  const [trackSlug, setTrackSlug] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseSlug, setCourseSlug] = useState('');
  const [courseTrackId, setCourseTrackId] = useState('');
  const [priceCents, setPriceCents] = useState('0');

  const load = () => {
    void Promise.all([
      adminFetch('/admin/catalog/tracks'),
      adminFetch('/admin/catalog/courses'),
    ])
      .then(([t, co]) => {
        setTracks(t);
        setCourses(co);
        if (!courseTrackId && t[0]) setCourseTrackId(t[0].id);
      })
      .catch((e) => setError(e.message));
  };

  useEffect(() => {
    load();
  }, []);

  const createTrack = async () => {
    try {
      await adminFetch('/admin/commerce/tracks', {
        method: 'POST',
        body: JSON.stringify({
          title: trackTitle,
          slug: trackSlug,
          locale,
          status: 'draft',
        }),
      });
      setTrackTitle('');
      setTrackSlug('');
      setMsg(c.saved);
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const createCourse = async () => {
    try {
      await adminFetch('/admin/commerce/courses', {
        method: 'POST',
        body: JSON.stringify({
          trackId: courseTrackId,
          title: courseTitle,
          slug: courseSlug,
          priceCents: Number(priceCents),
          locale,
          status: 'draft',
        }),
      });
      setCourseTitle('');
      setCourseSlug('');
      setMsg(c.saved);
      load();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">{c.productsTitle}</h1>
          <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{c.productsSubtitle}</p>
        </div>
        <Button asChild variant="outline" className="cursor-pointer">
          <Link href="/product-categories">{c.productCategories}</Link>
        </Button>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <section className="grid gap-4 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 lg:grid-cols-2">
        <div className="space-y-3">
          <h2 className="font-display text-lg font-semibold">{c.newTrack}</h2>
          <div className="space-y-2">
            <Label>{d.titleCol}</Label>
            <Input value={trackTitle} onChange={(e) => setTrackTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>slug</Label>
            <Input dir="ltr" value={trackSlug} onChange={(e) => setTrackSlug(e.target.value)} />
          </div>
          <Button className="cursor-pointer" onClick={() => void createTrack()}>
            {c.addTrack}
          </Button>
        </div>
        <div className="space-y-3">
          <h2 className="font-display text-lg font-semibold">{c.newProduct}</h2>
          <div className="space-y-2">
            <Label>{d.titleCol}</Label>
            <Input value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>slug</Label>
            <Input dir="ltr" value={courseSlug} onChange={(e) => setCourseSlug(e.target.value)} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>{d.tracks}</Label>
              <select
                className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm"
                value={courseTrackId}
                onChange={(e) => setCourseTrackId(e.target.value)}
              >
                {tracks.map((t) => (
                  <option key={t.id} value={t.id}>
                    {i18nTitle(t, locale)}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label>{c.priceCents}</Label>
              <Input dir="ltr" value={priceCents} onChange={(e) => setPriceCents(e.target.value)} />
            </div>
          </div>
          <Button className="cursor-pointer" onClick={() => void createCourse()}>
            {c.addProduct}
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold">{d.tracks}</h2>
        <div className="mt-3 overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-[var(--mj-muted)] text-start">
              <tr>
                <th className="p-3">{d.slug}</th>
                <th className="p-3">{d.titleCol}</th>
                <th className="p-3">{d.year}</th>
                <th className="p-3">{d.status}</th>
                <th className="p-3">{d.courses}</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((t) => (
                <tr key={t.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs" dir="ltr">
                    {t.slug}
                  </td>
                  <td className="p-3">{i18nTitle(t, locale)}</td>
                  <td className="p-3 font-mono">{t.yearPlan}</td>
                  <td className="p-3">
                    <Badge variant="secondary">{t.status}</Badge>
                  </td>
                  <td className="p-3 font-mono">{t._count?.courses ?? t.courses?.length ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold">{c.products}</h2>
        <div className="mt-3 overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[var(--mj-muted)] text-start">
              <tr>
                <th className="p-3">{d.slug}</th>
                <th className="p-3">{d.titleCol}</th>
                <th className="p-3">{c.price}</th>
                <th className="p-3">{d.status}</th>
                <th className="p-3" />
              </tr>
            </thead>
            <tbody>
              {courses.map((co) => (
                <tr key={co.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs" dir="ltr">
                    {co.slug}
                  </td>
                  <td className="p-3">{i18nTitle(co, locale)}</td>
                  <td className="p-3 font-mono" dir="ltr">
                    {(co.priceCents / 10).toLocaleString()} {co.currency}
                  </td>
                  <td className="p-3">
                    <Badge variant="secondary">{co.status}</Badge>
                  </td>
                  <td className="p-3">
                    <Link className="underline-offset-4 hover:underline" href={`/products/${co.id}`}>
                      {dict.cms.edit}
                    </Link>
                  </td>
                </tr>
              ))}
              {!courses.length ? (
                <tr>
                  <td className="p-6 text-[var(--mj-muted-fg)]" colSpan={5}>
                    {dict.none}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
