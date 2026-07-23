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

  const tiers = [
    {
      name: dict.sections.free,
      price: locale === 'fa' ? '۰ تومان' : 'Free',
      body:
        locale === 'fa'
          ? 'مقالات، پادکست، پیش‌نمایش درس‌ها، چالش‌های روزانه محدود'
          : 'Articles, podcasts, lesson previews, limited daily challenges',
    },
    {
      name: dict.sections.sub,
      price: locale === 'fa' ? '۹۹۰٬۰۰۰ تومان / ماه' : 'Subscription / month',
      body:
        locale === 'fa'
          ? 'مسیرهای اشتراکی + به‌روزرسانی‌ها + وبینارها'
          : 'Subscription tracks + updates + webinars',
    },
    {
      name: dict.sections.paid,
      price: locale === 'fa' ? 'خرید تکی دوره' : 'One-time course',
      body:
        locale === 'fa'
          ? 'مالکیت دوره + امکان پرداخت جزئی با توکن'
          : 'Own the course + optional partial token payment',
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{dict.nav.pricing}</h1>
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
