'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function LiveDetailPage() {
  const params = useParams<{ locale: string; slug: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const fa = locale === 'fa';
  const slug = params.slug;
  const [event, setEvent] = useState<any>(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    void fetch(`${API_BASE}/live/event/${slug}?locale=${locale}`)
      .then((r) => r.json())
      .then(setEvent);
  }, [slug, locale]);

  async function register() {
    const token = localStorage.getItem('mj_token');
    if (!token) {
      setMsg(fa ? 'ابتدا وارد شوید.' : 'Log in first.');
      return;
    }
    const res = await fetch(`${API_BASE}/live/event/${slug}/register`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    setMsg(res.ok ? (fa ? 'ثبت‌نام شدید.' : 'Registered.') : (fa ? 'خطا' : 'Error'));
  }

  if (!event) return <div className="p-8 text-sm text-[var(--mj-muted-fg)]">…</div>;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href={`/${locale}/live`} className="text-sm text-[var(--mj-muted-fg)] hover:underline">
        ← {fa ? 'بازگشت' : 'Back'}
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-4xl font-bold">{event.title}</h1>
        <span className="rounded-full bg-[var(--mj-accent)] px-3 py-1 text-xs font-semibold text-[var(--mj-accent-fg)]">
          {event.status}
        </span>
      </div>
      <p className="mt-3 text-[var(--mj-muted-fg)]">{event.summary}</p>
      <p className="mt-2 font-mono text-xs text-[var(--mj-muted-fg)]">
        {new Date(event.startsAt).toLocaleString(fa ? 'fa-IR' : 'en-US')}
      </p>

      <div className="mt-8 aspect-video overflow-hidden rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-ink)] text-[var(--mj-yellow)]">
        <div className="grid h-full place-items-center p-6 text-center">
          {event.status === 'live' ? (
            <div>
              <div className="font-display text-2xl font-bold">LIVE</div>
              <p className="mt-2 text-sm opacity-80">
                {event.playbackUrl ?? (fa ? 'پخش‌کننده سایت به‌زودی به ingest وصل می‌شود' : 'Site player wiring to ingest next')}
              </p>
            </div>
          ) : event.status === 'ended' ? (
            <div>
              <div className="font-display text-2xl font-bold">VOD</div>
              <p className="mt-2 text-sm opacity-80">{event.recordingUrl ?? 'Recording pending'}</p>
            </div>
          ) : (
            <div>
              <div className="font-display text-2xl font-bold">{fa ? 'به‌زودی' : 'Upcoming'}</div>
              <p className="mt-2 text-sm opacity-80">
                {fa ? 'ثبت‌نام کنید تا یادآوری SMS بگیرید' : 'Register for SMS reminder'}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(event.destinations ?? []).map((d: string) => (
          <a
            key={d}
            href={event.externalUrls?.[d] ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--mj-border)] px-3 py-1 text-xs uppercase hover:bg-[var(--mj-muted)]"
          >
            {d}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => void register()}
        className="mt-8 h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-5 font-semibold text-[var(--mj-accent-fg)]"
      >
        {fa ? 'ثبت‌نام در وبینار' : 'Register for webinar'}
      </button>
      {msg ? <p className="mt-3 text-sm text-[var(--mj-muted-fg)]">{msg}</p> : null}
    </div>
  );
}
