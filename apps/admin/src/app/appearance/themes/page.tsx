'use client';

import { Badge } from '@/components/ui/badge';
import { useAdminLocale } from '@/i18n/locale-context';

export default function ThemesPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const themes = [
    { name: 'MEGA JS', version: '0.1.0', active: true, desc: d.themeMegajsDesc },
  ];
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.themes}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.themesDesc}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {themes.map((t) => (
          <article key={t.name} className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-display text-xl font-semibold">{t.name}</h2>
              {t.active ? <Badge variant="secondary">{d.active}</Badge> : null}
            </div>
            <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{t.desc}</p>
            <p className="mt-3 font-mono text-xs" dir="ltr">v{t.version}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
