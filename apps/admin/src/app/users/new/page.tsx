'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

export default function AddUserPage() {
  const router = useRouter();
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const [phone, setPhone] = useState('+98');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const save = async () => {
    setBusy(true);
    try {
      const user = await adminFetch('/admin/wp/users', {
        method: 'POST',
        body: JSON.stringify({ phone, displayName, email, role }),
      });
      router.push(`/users/${user.id}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.addUser}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.addUserDesc}</p>
      </div>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      <div className="grid gap-3">
        <div className="space-y-2"><Label>{d.phone}</Label><Input dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
        <div className="space-y-2"><Label>{d.displayName}</Label><Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} /></div>
        <div className="space-y-2"><Label>{d.email}</Label><Input dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <div className="space-y-2">
          <Label>{d.role}</Label>
          <select className="h-10 w-full rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3 text-sm" value={role} onChange={(e) => setRole(e.target.value)}>
            {['user','instructor','editor','support','analyst','super_admin'].map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <Button className="cursor-pointer" disabled={busy} onClick={() => void save()}>{busy ? dict.loading : dict.save}</Button>
      </div>
    </div>
  );
}
