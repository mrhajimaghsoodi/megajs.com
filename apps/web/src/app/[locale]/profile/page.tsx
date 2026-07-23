import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  const blocks =
    locale === 'fa'
      ? [
          'پروفایل و تنظیمات زبان/تم',
          'سینک شماره موبایل و OTP',
          'اتصال Google / GitHub',
          'پیشرفت یادگیری و استریک',
          'کیف‌پول توکن و Ledger',
          'اشتراک، سفارش‌ها، ثبت‌نام لایو',
        ]
      : [
          'Profile + locale/theme',
          'Phone sync + OTP',
          'Google / GitHub linking',
          'Learning progress & streak',
          'Token wallet & ledger',
          'Subscriptions, orders, live registrations',
        ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold">{dict.nav.profile}</h1>
      <p className="mt-3 text-[var(--mj-muted-fg)]">
        {locale === 'fa'
          ? 'پنل کاربری کامل — هویت واحد برای وب، موبایل و دسکتاپ'
          : 'Full user panel — one identity for web, mobile, and desktop'}
      </p>
      <ul className="mt-8 space-y-3">
        {blocks.map((item) => (
          <li
            key={item}
            className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
