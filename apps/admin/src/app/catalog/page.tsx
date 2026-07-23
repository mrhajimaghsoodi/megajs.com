'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';

export default function CatalogAdminPage() {
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
        <h1 className="font-display text-3xl font-bold">کاتالوگ</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">Track → Course → Module → Lesson</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <section>
        <h2 className="font-display text-xl font-semibold">مسیرها (Tracks)</h2>
        <div className="mt-3 overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-[var(--mj-muted)] text-start">
              <tr>
                <th className="p-3">Slug</th>
                <th className="p-3">عنوان FA</th>
                <th className="p-3">سال</th>
                <th className="p-3">وضعیت</th>
                <th className="p-3">دوره‌ها</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((t) => (
                <tr key={t.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs">{t.slug}</td>
                  <td className="p-3">{t.i18n?.find((x: any) => x.locale === 'fa')?.title ?? '—'}</td>
                  <td className="p-3">Y{t.yearPlan}</td>
                  <td className="p-3">{t.status}</td>
                  <td className="p-3">{t._count?.courses ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold">دوره‌ها</h2>
        <div className="mt-3 overflow-x-auto rounded-[var(--mj-radius-md)] border border-[var(--mj-border)]">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[var(--mj-muted)] text-start">
              <tr>
                <th className="p-3">Slug</th>
                <th className="p-3">عنوان</th>
                <th className="p-3">دسترسی</th>
                <th className="p-3">قیمت</th>
                <th className="p-3">ثبت‌نام</th>
                <th className="p-3">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-3 font-mono text-xs">{c.slug}</td>
                  <td className="p-3">{c.i18n?.find((x: any) => x.locale === 'fa')?.title ?? '—'}</td>
                  <td className="p-3">{c.accessTier}</td>
                  <td className="p-3 font-mono">{c.priceCents?.toLocaleString?.()}</td>
                  <td className="p-3">{c._count?.enrollments ?? 0}</td>
                  <td className="p-3">{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
