'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';
import { formatTehranDateTime } from '@/lib/tehran-time';

export default function WordfencePluginPage() {
  const { locale, dict } = useAdminLocale();
  const d = dict.plugins;
  const [data, setData] = useState<any>(null);
  const [scan, setScan] = useState<any>(null);
  const [ip, setIp] = useState('');
  const [reason, setReason] = useState('manual');
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const load = () => {
    void adminFetch('/admin/plugins/wordfence').then(setData).catch((e) => setError(e.message));
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    await adminFetch('/admin/plugins/wordfence/settings', {
      method: 'PUT',
      body: JSON.stringify(data.settings),
    });
    setMsg(d.saved);
    load();
  };

  const block = async () => {
    await adminFetch('/admin/plugins/wordfence/block', {
      method: 'POST',
      body: JSON.stringify({ ip, reason, hours: 24 }),
    });
    setIp('');
    load();
  };

  const unblock = async (blockedIp: string) => {
    await adminFetch(`/admin/plugins/wordfence/block/${encodeURIComponent(blockedIp)}`, {
      method: 'DELETE',
    });
    load();
  };

  const runScan = async () => {
    const res = await adminFetch('/admin/plugins/wordfence/scan', { method: 'POST' });
    setScan(res);
  };

  if (!data) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;

  const s = data.settings;
  const cards = [
    { label: d.events24h, value: data.stats.events24h },
    { label: d.fails24h, value: data.stats.fails24h },
    { label: d.blockedIps, value: data.stats.blocked },
    { label: d.lockouts, value: data.stats.lockouts },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.wordfenceTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.wordfenceSubtitle}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
            <div className="text-xs text-[var(--mj-muted-fg)]">{c.label}</div>
            <div className="mt-2 font-display text-2xl font-bold" dir="ltr">{c.value}</div>
          </div>
        ))}
      </div>

      <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.firewall}</h2>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={Boolean(s.enabled)} onChange={(e) => setData({ ...data, settings: { ...s, enabled: e.target.checked } })} />
          {d.enabled}
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="space-y-2"><Label>{d.maxOtp}</Label><Input dir="ltr" value={String(s.maxOtpPerHour)} onChange={(e) => setData({ ...data, settings: { ...s, maxOtpPerHour: Number(e.target.value) } })} /></div>
          <div className="space-y-2"><Label>{d.maxFail}</Label><Input dir="ltr" value={String(s.maxFailBeforeLock)} onChange={(e) => setData({ ...data, settings: { ...s, maxFailBeforeLock: Number(e.target.value) } })} /></div>
          <div className="space-y-2"><Label>{d.lockMinutes}</Label><Input dir="ltr" value={String(s.lockoutMinutes)} onChange={(e) => setData({ ...data, settings: { ...s, lockoutMinutes: Number(e.target.value) } })} /></div>
        </div>
        <Button className="cursor-pointer" onClick={() => void save()}>{dict.save}</Button>
        <Button variant="outline" className="ms-2 cursor-pointer" onClick={() => void runScan()}>{d.runScan}</Button>
        {scan ? (
          <div className="space-y-1 text-sm">
            <Badge variant="secondary">score {scan.score}</Badge>
            {scan.findings.map((f: any) => (
              <div key={f.id}>[{f.severity}] {f.message}</div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{d.blockIp}</h2>
        <div className="flex flex-wrap gap-2">
          <Input className="max-w-xs" dir="ltr" placeholder="1.2.3.4" value={ip} onChange={(e) => setIp(e.target.value)} />
          <Input className="max-w-xs" value={reason} onChange={(e) => setReason(e.target.value)} />
          <Button className="cursor-pointer" onClick={() => void block()}>{d.block}</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[var(--mj-muted)]"><tr><th className="p-2 text-start">IP</th><th className="p-2 text-start">{d.reason}</th><th className="p-2 text-start" /></tr></thead>
            <tbody>
              {(data.blockedIps ?? []).map((row: any) => (
                <tr key={row.id} className="border-t border-[var(--mj-border)]">
                  <td className="p-2 font-mono" dir="ltr">{row.ip}</td>
                  <td className="p-2">{row.reason}</td>
                  <td className="p-2"><Button size="sm" variant="outline" className="cursor-pointer" onClick={() => void unblock(row.ip)}>{d.unblock}</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold">{d.events}</h2>
        <div className="mt-3 space-y-2">
          {(data.recent ?? []).map((ev: any) => (
            <div key={ev.id} className="rounded-md border border-[var(--mj-border)] p-3 text-sm">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{ev.type}</Badge>
                <span className="font-mono text-xs" dir="ltr">{ev.ip || '—'}</span>
                <span className="text-xs text-[var(--mj-muted-fg)]" dir="ltr">{formatTehranDateTime(ev.createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
