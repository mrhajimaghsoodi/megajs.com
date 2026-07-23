'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <span className="inline-block h-11 w-11" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';
  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] text-[var(--mj-fg)] transition-colors duration-[var(--mj-motion-base)] hover:bg-[var(--mj-muted)]"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
