import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const pr = dict.pricing;

  const tiers = [
    {
      name: dict.sections.free,
      price: pr.freePrice,
      body: pr.freeDesc,
    },
    {
      name: dict.sections.sub,
      price: pr.subPrice,
      body: pr.subDesc,
    },
    {
      name: dict.sections.paid,
      price: pr.paidPrice,
      body: pr.paidDesc,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{pr.title}</h1>
      <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">{dict.sections.pricingTitle}</p>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-6"
          >
            <h2 className="font-display text-2xl font-bold">{tier.name}</h2>
            <p className="mt-3 font-mono text-sm">{tier.price}</p>
            <p className="mt-4 text-sm text-[var(--mj-muted-fg)]">{tier.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
