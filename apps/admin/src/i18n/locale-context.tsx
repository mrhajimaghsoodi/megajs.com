'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  ADMIN_LOCALE_KEY,
  getAdminDictionary,
  type AdminDictionary,
  type AdminLocale,
} from './dictionaries';

type Ctx = {
  locale: AdminLocale;
  dict: AdminDictionary;
  setLocale: (locale: AdminLocale) => void;
  dir: 'rtl' | 'ltr';
};

const AdminLocaleContext = createContext<Ctx | null>(null);

export function AdminLocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<AdminLocale>('fa');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(ADMIN_LOCALE_KEY);
    if (saved === 'en' || saved === 'fa') setLocaleState(saved);
    setReady(true);
  }, []);

  const setLocale = useCallback((next: AdminLocale) => {
    setLocaleState(next);
    localStorage.setItem(ADMIN_LOCALE_KEY, next);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === 'fa' ? 'rtl' : 'ltr';
    root.dataset.locale = locale;
  }, [locale, ready]);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      dict: getAdminDictionary(locale),
      setLocale,
      dir: locale === 'fa' ? 'rtl' : 'ltr',
    }),
    [locale, setLocale],
  );

  return (
    <AdminLocaleContext.Provider value={value}>{children}</AdminLocaleContext.Provider>
  );
}

export function useAdminLocale() {
  const ctx = useContext(AdminLocaleContext);
  if (!ctx) throw new Error('useAdminLocale must be used within AdminLocaleProvider');
  return ctx;
}
