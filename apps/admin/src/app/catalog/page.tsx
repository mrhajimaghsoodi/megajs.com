'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

function i18nTitle(row: { i18n?: { locale: string; title?: string }[] }, locale: string) {
  const match = row.i18n?.find((x) => x.locale === locale) ?? row.i18n?.[0];
  return match?.title ?? '—';
}

export default function CatalogAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.catalog;
  const [tracks, setTracks] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void Promise.all([adminFetch('/admin/catalog/tracks'), adminFetch('/admin/catalog/courses')])
      .then(([t, c]) => {
        setTracks(t);
        setCourses(c);
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

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
                  <td className="p-3 font-mono" dir="ltr">
                    Y{t.yearPlan}
                  </td>
                  <td className="p-3 font-mono" dir="ltr">
                    {t.status}
                  </td>
                  <td className="p-3">{t._count?.courses ?? 0}</td>
                </tr>
              ))}
              {tracks.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-[var(--mj-muted-fg)]">
                    {dict.none}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold">{d.courses}</h2>
        <div className="mt-3 overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[var(--mj-muted)] text-start">
              <tr>
                <th className="p-3">{d.slug}</th>
                <th className="p-3">{d.titleCol}</th>
                <th className="p-3">{d.access}</th>
                <th className="p-3">{d.price}</th>
                <th className="p-3">{d.enrollments}</th>
                <th className="p-3">{d.status}</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs" dir="ltr">
                    {c.slug}
                  </td>
                  <td className="p-3">{i18nTitle(c, locale)}</td>
                  <td className="p-3 font-mono" dir="ltr">
                    {c.accessTier}
                  </td>
                  <td className="p-3 font-mono" dir="ltr">
                    {c.priceCents?.toLocaleString?.(locale === 'fa' ? 'fa-IR' : 'en-US')}
                  </td>
                  <td className="p-3">{c._count?.enrollments ?? 0}</td>
                  <td className="p-3 font-mono" dir="ltr">
                    {c.status}
                  </td>
                </tr>
              ))}
              {courses.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-[var(--mj-muted-fg)]">
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
