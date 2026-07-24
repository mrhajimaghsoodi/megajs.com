'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function SettingsAdminPage() {
  const { dict } = useAdminLocale();
  const d = dict.cms;
  const [general, setGeneral] = useState({ siteName: 'MEGA JS', tagline: '', adminEmail: '', timezone: 'Asia/Tehran' });
  const [reading, setReading] = useState({ postsPerPage: 10, homepage: 'latest' });
  const [discussion, setDiscussion] = useState({ commentsOpen: true, moderateNew: true });
  const [payments, setPayments] = useState({ currency: 'IRT', zarinpalMerchant: '', stripePublishable: '', testMode: true });
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/cms/settings')
      .then((s: any) => {
        if (s.general) setGeneral({ ...general, ...s.general });
        if (s.reading) setReading({ ...reading, ...s.reading });
        if (s.discussion) setDiscussion({ ...discussion, ...s.discussion });
        if (s.payments) setPayments({ ...payments, ...s.payments });
      })
      .catch((e) => setError(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = async () => {
    try {
      await adminFetch('/admin/cms/settings', {
        method: 'PUT',
        body: JSON.stringify({ general, reading, discussion, payments }),
      });
      setMsg(d.saved);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.settingsTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.settingsSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.general}</h2>
        <div className="space-y-2"><Label>{d.siteName}</Label><Input value={general.siteName} onChange={(e) => setGeneral({ ...general, siteName: e.target.value })} /></div>
        <div className="space-y-2"><Label>{d.tagline}</Label><Input value={general.tagline} onChange={(e) => setGeneral({ ...general, tagline: e.target.value })} /></div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>{d.adminEmail}</Label><Input dir="ltr" value={general.adminEmail} onChange={(e) => setGeneral({ ...general, adminEmail: e.target.value })} /></div>
          <div className="space-y-2"><Label>{d.timezone}</Label><Input dir="ltr" value={general.timezone} onChange={(e) => setGeneral({ ...general, timezone: e.target.value })} /></div>
        </div>
      </section>

      <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.reading}</h2>
        <div className="space-y-2"><Label>{d.postsPerPage}</Label><Input dir="ltr" value={String(reading.postsPerPage)} onChange={(e) => setReading({ ...reading, postsPerPage: Number(e.target.value) || 10 })} /></div>
        <div className="space-y-2"><Label>{d.homepage}</Label><Input value={reading.homepage} onChange={(e) => setReading({ ...reading, homepage: e.target.value })} /></div>
      </section>

      <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.discussion}</h2>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={discussion.commentsOpen} onChange={(e) => setDiscussion({ ...discussion, commentsOpen: e.target.checked })} /> {d.commentsOpen}</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={discussion.moderateNew} onChange={(e) => setDiscussion({ ...discussion, moderateNew: e.target.checked })} /> {d.moderateNew}</label>
      </section>

      <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.payments}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>{d.currency}</Label><Input dir="ltr" value={payments.currency} onChange={(e) => setPayments({ ...payments, currency: e.target.value })} /></div>
          <div className="space-y-2"><Label>Zarinpal merchant</Label><Input dir="ltr" value={payments.zarinpalMerchant} onChange={(e) => setPayments({ ...payments, zarinpalMerchant: e.target.value })} /></div>
        </div>
        <div className="space-y-2"><Label>Stripe publishable</Label><Input dir="ltr" value={payments.stripePublishable} onChange={(e) => setPayments({ ...payments, stripePublishable: e.target.value })} /></div>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={payments.testMode} onChange={(e) => setPayments({ ...payments, testMode: e.target.checked })} /> {d.testMode}</label>
      </section>

      <Button className="cursor-pointer" onClick={() => void save()}>{dict.save}</Button>
    </div>
  );
}
