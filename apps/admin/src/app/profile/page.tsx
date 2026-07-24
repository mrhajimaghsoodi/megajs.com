'use client';

import { useEffect, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Badge } from '@/components/ui/badge';
import { useAdminLocale } from '@/i18n/locale-context';

export default function ProfilePage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [me, setMe] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    void adminFetch('/admin/wp/profile').then(setMe).catch((e) => setError(e.message));
  }, []);
  if (!me) return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.profile}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.profileDesc}</p>
      </div>
      <div className="space-y-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 text-sm">
        <div className="flex justify-between gap-3"><span>{d.displayName}</span><span className="font-medium">{me.displayName || '—'}</span></div>
        <div className="flex justify-between gap-3"><span>{d.phone}</span><span className="font-mono" dir="ltr">{me.phone}</span></div>
        <div className="flex justify-between gap-3"><span>{d.email}</span><span className="font-mono" dir="ltr">{me.email || '—'}</span></div>
        <div className="flex justify-between gap-3"><span>{d.role}</span><Badge variant="secondary">{me.role}</Badge></div>
        <div className="flex justify-between gap-3"><span>{d.status}</span><Badge variant="secondary">{me.status}</Badge></div>
      </div>
    </div>
  );
}
