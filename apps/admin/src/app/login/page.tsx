'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';

export default function AdminLoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('+989120000000');
  const [code, setCode] = useState('');
  const [devCode, setDevCode] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  async function requestOtp() {
    setError(null);
    const res = await fetch(`${API}/auth/otp/request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.message ?? 'خطا');
    setDevCode(data.devCode);
  }

  async function verify() {
    setError(null);
    const res = await fetch(`${API}/auth/otp/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, code }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.message ?? 'کد نامعتبر');
    const meRes = await fetch(`${API}/auth/me`, {
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });
    const me = await meRes.json();
    if (!['super_admin', 'editor', 'instructor', 'support', 'analyst'].includes(me.role)) {
      setError('این حساب دسترسی ادمین ندارد');
      return;
    }
    localStorage.setItem('mj_admin_token', data.accessToken);
    router.replace('/');
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col justify-center gap-4 px-4">
      <Image src="/logo.svg" alt="MEGA JS" width={160} height={36} className="mb-2 h-9 w-auto" />
      <h1 className="font-display text-3xl font-bold">ورود ادمین</h1>
      <p className="text-sm text-[var(--mj-muted-fg)]">
        Seed پیش‌فرض: <span className="font-mono" dir="ltr">+989120000000</span>
      </p>
      <input
        className="h-12 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        dir="ltr"
      />
      <button
        type="button"
        onClick={requestOtp}
        className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)]"
      >
        ارسال کد
      </button>
      {devCode ? <p className="font-mono text-sm">DEV: {devCode}</p> : null}
      <input
        className="h-12 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-3"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        dir="ltr"
        placeholder="کد OTP"
      />
      <button
        type="button"
        onClick={verify}
        className="h-11 cursor-pointer rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] font-semibold hover:bg-[var(--mj-muted)]"
      >
        ورود
      </button>
      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
    </div>
  );
}
