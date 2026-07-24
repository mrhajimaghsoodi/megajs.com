'use client';

import Link from 'next/link';
import { useAdminLocale } from '@/i18n/locale-context';

export default function ToolsHubPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const links = [
    { href: '/tools/site-health', label: d.siteHealth, desc: d.siteHealthDesc },
    { href: '/tools/export', label: d.export, desc: d.exportDesc },
    { href: '/tools/import', label: d.import, desc: d.importDesc },
  ];
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.toolsTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.toolsSubtitle}</p>
      </div>
      <div className="space-y-3">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="block rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 hover:border-[var(--mj-accent)]">
            <div className="font-display text-lg font-semibold">{l.label}</div>
            <p className="mt-1 text-sm text-[var(--mj-muted-fg)]">{l.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
