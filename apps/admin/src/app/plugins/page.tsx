'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { useAdminLocale } from '@/i18n/locale-context';

export default function PluginsIndexPage() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const plugins = [
    { href: '/plugins/rankmath', name: 'Rank Math SEO', desc: d.pluginRankmath },
    { href: '/plugins/wordfence', name: 'Wordfence Security', desc: d.pluginWordfence },
    { href: '/plugins/wprocket', name: 'WP Rocket', desc: d.pluginRocket },
    { href: '/plugins/smush', name: 'Smush', desc: d.pluginSmush },
    { href: '/plugins/elementor', name: 'Elementor', desc: d.pluginElementor },
    {
      href: '/plugins/my-account',
      name: 'Customize My Account',
      desc: d.pluginMyAccount,
    },
    { href: '/woocommerce', name: 'WooCommerce', desc: d.pluginWoo },
  ];
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.pluginsTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.pluginsSubtitle}</p>
      </div>
      <div className="space-y-3">
        {plugins.map((p) => (
          <Link key={p.href} href={p.href} className="flex items-start justify-between gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4 hover:border-[var(--mj-accent)]">
            <div>
              <div className="font-display text-lg font-semibold">{p.name}</div>
              <p className="mt-1 text-sm text-[var(--mj-muted-fg)]">{p.desc}</p>
            </div>
            <Badge variant="secondary">{d.active}</Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
