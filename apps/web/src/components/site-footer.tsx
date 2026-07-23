import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/utils';
import { Logo } from './logo';

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="mt-auto border-t border-[var(--mj-border)] bg-[var(--mj-muted)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo href={`/${locale}`} />
        <p className="max-w-xl text-sm text-[var(--mj-muted-fg)]">{dict.footer}</p>
        <Link
          href={`/${locale}/profile`}
          className="cursor-pointer text-sm font-medium underline-offset-4 hover:underline"
        >
          {dict.nav.profile}
        </Link>
      </div>
    </footer>
  );
}
