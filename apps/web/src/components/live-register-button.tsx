'use client';

import { useState } from 'react';
import { API_BASE } from '@/lib/utils';

export function LiveRegisterButton({
  slug,
  label,
  loginHint,
  errorLabel,
  registeredLabel,
}: {
  slug: string;
  label: string;
  loginHint: string;
  errorLabel: string;
  registeredLabel: string;
}) {
  const [msg, setMsg] = useState('');

  async function register() {
    const token = localStorage.getItem('mj_token');
    if (!token) {
      setMsg(loginHint);
      return;
    }
    const res = await fetch(`${API_BASE}/live/event/${slug}/register`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    setMsg(res.ok ? registeredLabel : errorLabel);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => void register()}
        className="mt-8 h-11 cursor-pointer rounded-[var(--mj-radius-md)] bg-[var(--mj-accent)] px-5 font-semibold text-[var(--mj-accent-fg)]"
      >
        {label}
      </button>
      {msg ? <p className="mt-3 text-sm text-[var(--mj-muted-fg)]">{msg}</p> : null}
    </div>
  );
}
