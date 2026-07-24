'use client';

import { useEffect } from 'react';
import type { Locale } from '@/lib/utils';
import { dirFor } from '@/lib/utils';

/** Sync <html lang/dir> with the active locale (root layout cannot be per-locale). */
export function LocaleDocument({ locale }: { locale: Locale }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dirFor(locale);
    root.dataset.locale = locale;
  }, [locale]);

  return null;
}
