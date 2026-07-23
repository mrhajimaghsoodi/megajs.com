'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { useAdminLocale } from '@/i18n/locale-context';

function i18nTitle(row: { i18n?: { locale: string; title?: string }[] }, locale: string) {
  const match = row.i18n?.find((x) => x.locale === locale) ?? row.i18n?.[0];
  return match?.title;
}

export default function LiveAdminPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.live;
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState('live-' + Date.now().toString().slice(-6));
  const [title, setTitle] = useState('');
  const [startsAt, setStartsAt] = useState(
    new Date(Date.now() + 86400000).toISOString().slice(0, 16),
  );

  useEffect(() => {
    setTitle(d.defaultTitle);
  }, [d.defaultTitle]);

  async function load() {
    try {
      setRows(await adminFetch('/admin/live'));
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : dict.error);
    }
  }

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createEvent() {
    await adminFetch('/admin/live', {
      method: 'POST',
      body: JSON.stringify({
        slug,
        startsAt: new Date(startsAt).toISOString(),
        destinations: ['site', 'youtube', 'aparat', 'instagram'],
        fa: { title, summary: d.defaultSummary },
        en: { title, summary: d.defaultSummaryEn },
        externalUrls: {
          youtube: 'https://youtube.com',
          aparat: 'https://aparat.com',
          instagram: 'https://instagram.com',
        },
      }),
    });
    await load();
  }

  async function setStatus(id: string, status: string) {
    await adminFetch(`/admin/live/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({
        status,
        playbackUrl:
          status === 'live' ? 'https://megajs.com/live/player-placeholder' : undefined,
        recordingUrl:
          status === 'ended' ? 'https://megajs.com/vod/placeholder' : undefined,
      }),
    });
    await load();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.title}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.subtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}

      <section className="grid gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          {d.slug}
          <input
            className="h-11 rounded border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3 font-mono"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            dir="ltr"
          />
        </label>
        <label className="grid gap-1 text-sm">
          {d.start}
          <input
            type="datetime-local"
            className="h-11 rounded border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3"
            value={startsAt}
            onChange={(e) => setStartsAt(e.target.value)}
            dir="ltr"
          />
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          {d.titleCol}
          <input
            className="h-11 rounded border border-[var(--mj-border)] bg-[var(--mj-bg)] px-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={() => void createEvent()}
          className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)] md:col-span-2"
        >
          {d.createEvent}
        </button>
      </section>

      <div className="space-y-3">
        {rows.length === 0 ? (
          <div className="rounded-[var(--mj-radius-md)] border border-dashed border-[var(--mj-border)] p-8 text-sm text-[var(--mj-muted-fg)]">
            {dict.none}
          </div>
        ) : null}
        {rows.map((ev) => (
          <article
            key={ev.id}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-xl font-semibold">
                  {i18nTitle(ev, locale) ?? ev.slug}
                </h2>
                <p className="mt-1 font-mono text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                  {ev.slug} · {ev.status} · {d.registrations} {ev.registrations?.length ?? 0}
                </p>
                <p className="mt-2 text-xs text-[var(--mj-muted-fg)]" dir="ltr">
                  ingest: {ev.ingestUrl ?? dict.none}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['scheduled', 'live', 'ended', 'cancelled'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void setStatus(ev.id, s)}
                    className="cursor-pointer rounded-full border border-[var(--mj-border)] px-3 py-1 font-mono text-xs hover:bg-[var(--mj-muted)]"
                    dir="ltr"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {JSON.parse(ev.destinationsJson || '[]').map((dest: string) => (
                <span
                  key={dest}
                  className="rounded-full bg-[var(--mj-muted)] px-2 py-1 font-mono text-xs"
                  dir="ltr"
                >
                  {dest}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
