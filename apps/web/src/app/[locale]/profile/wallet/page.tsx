'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { API_BASE, isLocale, type Locale } from '@/lib/utils';

export default function WalletPage() {
  const params = useParams<{ locale: string }>();
  const locale = (isLocale(params.locale) ? params.locale : 'fa') as Locale;
  const fa = locale === 'fa';
  const [balance, setBalance] = useState(0);
  const [ledger, setLedger] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('mj_token');
    if (!token) return;
    const h = { Authorization: `Bearer ${token}` };
    void Promise.all([
      fetch(`${API_BASE}/wallet`, { headers: h }).then((r) => r.json()),
      fetch(`${API_BASE}/wallet/ledger`, { headers: h }).then((r) => r.json()),
    ]).then(([w, l]) => {
      setBalance(w.balance ?? 0);
      setLedger(Array.isArray(l) ? l : []);
    });
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl font-bold">{fa ? 'کیف توکن' : 'Token wallet'}</h1>
      <div className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6">
        <div className="text-sm text-[var(--mj-muted-fg)]">{fa ? 'موجودی' : 'Balance'}</div>
        <div className="mt-2 font-mono text-4xl font-bold">{balance}</div>
      </div>
      <div className="space-y-2">
        {ledger.map((row) => (
          <div key={row.id} className="flex justify-between border-b border-[var(--mj-border)] py-2 text-sm">
            <span>{row.reason}</span>
            <span className="font-mono">{row.amount > 0 ? `+${row.amount}` : row.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
