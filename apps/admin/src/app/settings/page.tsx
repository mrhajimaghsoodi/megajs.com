'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdminLocale } from '@/i18n/locale-context';

const GROUPS = [
  'general',
  'writing',
  'reading',
  'discussion',
  'media',
  'permalinks',
  'privacy',
  'woocommerce',
  'emails',
  'accounts',
] as const;

type Group = (typeof GROUPS)[number];

function SettingsInner() {
  const { dict } = useAdminLocale();
  const d = dict.wp;
  const params = useSearchParams();
  const group = (params.get('tab') as Group) || 'general';
  const [all, setAll] = useState<Record<string, any> | null>(null);
  const [form, setForm] = useState<Record<string, any>>({});
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/wp/settings')
      .then((s) => {
        setAll(s);
        setForm(s[group] ?? {});
      })
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    if (all) setForm(all[group] ?? {});
  }, [group, all]);

  const labels = useMemo(
    () => ({
      general: d.settingsGeneral,
      writing: d.settingsWriting,
      reading: d.settingsReading,
      discussion: d.settingsDiscussion,
      media: d.settingsMedia,
      permalinks: d.settingsPermalinks,
      privacy: d.settingsPrivacy,
      woocommerce: d.settingsWoo,
      emails: d.settingsEmails,
      accounts: d.settingsAccounts,
    }),
    [d],
  );

  const set = (key: string, value: unknown) => setForm((prev) => ({ ...prev, [key]: value }));

  const save = async () => {
    try {
      const next = await adminFetch(`/admin/wp/settings/${group}`, {
        method: 'PUT',
        body: JSON.stringify(form),
      });
      setAll((prev) => ({ ...(prev ?? {}), [group]: next }));
      setMsg(d.saved);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const field = (key: string, label: string, opts?: { dir?: 'ltr' | 'rtl'; type?: string }) => (
    <div className="space-y-2" key={key}>
      <Label>{label}</Label>
      <Input
        dir={opts?.dir}
        type={opts?.type ?? 'text'}
        value={String(form[key] ?? '')}
        onChange={(e) =>
          set(
            key,
            opts?.type === 'number' ? Number(e.target.value) : e.target.value,
          )
        }
      />
    </div>
  );

  const check = (key: string, label: string) => (
    <label key={key} className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={Boolean(form[key])}
        onChange={(e) => set(key, e.target.checked)}
      />
      {label}
    </label>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{d.settingsTitle}</h1>
        <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{d.settingsSubtitle}</p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-[var(--mj-border)] pb-3">
        {GROUPS.map((g) => (
          <Link
            key={g}
            href={`/settings?tab=${g}`}
            className={`rounded-md px-3 py-1.5 text-sm ${
              group === g
                ? 'bg-[var(--mj-accent)] font-semibold text-[var(--mj-accent-fg)]'
                : 'border border-[var(--mj-border)] hover:border-[var(--mj-accent)]'
            }`}
          >
            {labels[g]}
          </Link>
        ))}
      </div>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <div className="mx-auto grid max-w-2xl gap-3 rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] p-4">
        <h2 className="font-display text-lg font-semibold">{labels[group]}</h2>

        {group === 'general' ? (
          <>
            {field('siteName', d.siteTitle)}
            {field('tagline', d.tagline)}
            {field('adminEmail', d.adminEmail, { dir: 'ltr' })}
            {field('timezone', d.timezone, { dir: 'ltr' })}
            {field('dateFormat', d.dateFormat, { dir: 'ltr' })}
            {field('timeFormat', d.timeFormat, { dir: 'ltr' })}
            {field('siteLanguage', d.siteLanguage, { dir: 'ltr' })}
          </>
        ) : null}

        {group === 'writing' ? (
          <>
            {field('defaultPostCategory', d.defaultPostCategory)}
            {field('defaultPostFormat', d.defaultPostFormat)}
            {check('requireNameEmail', d.requireNameEmail)}
          </>
        ) : null}

        {group === 'reading' ? (
          <>
            {field('postsPerPage', d.postsPerPage, { type: 'number', dir: 'ltr' })}
            {field('homepage', d.homepage)}
            {field('homepagePageId', d.homepagePageId, { dir: 'ltr' })}
            {field('postsPageId', d.postsPageId, { dir: 'ltr' })}
            {check('searchEngineVisible', d.searchEngineVisible)}
          </>
        ) : null}

        {group === 'discussion' ? (
          <>
            {check('commentsOpen', d.commentsOpen)}
            {check('moderateNew', d.moderateNew)}
            {check('threadComments', d.threadComments)}
            {field('threadDepth', d.threadDepth, { type: 'number', dir: 'ltr' })}
            {field('commentOrder', d.commentOrder)}
          </>
        ) : null}

        {group === 'media' ? (
          <>
            {field('thumbnailWidth', 'Thumbnail width', { type: 'number', dir: 'ltr' })}
            {field('thumbnailHeight', 'Thumbnail height', { type: 'number', dir: 'ltr' })}
            {field('mediumWidth', 'Medium width', { type: 'number', dir: 'ltr' })}
            {field('mediumHeight', 'Medium height', { type: 'number', dir: 'ltr' })}
            {field('largeWidth', 'Large width', { type: 'number', dir: 'ltr' })}
            {field('largeHeight', 'Large height', { type: 'number', dir: 'ltr' })}
            {check('uploadsOrganize', d.uploadsOrganize)}
          </>
        ) : null}

        {group === 'permalinks' ? (
          <>
            {field('structure', d.permalinkStructure, { dir: 'ltr' })}
            {field('categoryBase', d.categoryBase, { dir: 'ltr' })}
            {field('tagBase', d.tagBase, { dir: 'ltr' })}
            {field('productBase', d.productBase, { dir: 'ltr' })}
          </>
        ) : null}

        {group === 'privacy' ? (
          <>
            {field('policyPageId', d.policyPageId, { dir: 'ltr' })}
            {field('policyPageSlug', d.policyPageSlug, { dir: 'ltr' })}
          </>
        ) : null}

        {group === 'woocommerce' ? (
          <>
            {field('storeAddress', d.storeAddress)}
            {field('storeCity', d.storeCity)}
            {field('storeCountry', d.storeCountry, { dir: 'ltr' })}
            {field('currency', d.currency, { dir: 'ltr' })}
            {field('currencyPos', d.currencyPos)}
            {field('thousandSep', d.thousandSep, { dir: 'ltr' })}
            {field('decimalSep', d.decimalSep, { dir: 'ltr' })}
            {field('numDecimals', d.numDecimals, { type: 'number', dir: 'ltr' })}
            {check('enableTaxes', d.enableTaxes)}
            {check('calcTaxes', d.calcTaxes)}
          </>
        ) : null}

        {group === 'emails' ? (
          <>
            {field('fromName', d.fromName)}
            {field('fromAddress', d.fromAddress, { dir: 'ltr' })}
            {field('headerImage', d.headerImage, { dir: 'ltr' })}
            {field('footerText', d.footerText)}
            {check('newOrder', d.mailNewOrder)}
            {check('cancelledOrder', d.mailCancelled)}
            {check('failedOrder', d.mailFailed)}
            {check('customerInvoice', d.mailInvoice)}
          </>
        ) : null}

        {group === 'accounts' ? (
          <>
            {check('guestCheckout', d.guestCheckout)}
            {check('accountCreation', d.accountCreation)}
            {check('loginReminder', d.loginReminder)}
          </>
        ) : null}

        <Button className="mt-2 w-fit cursor-pointer" onClick={() => void save()}>
          {dict.save}
        </Button>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Suspense fallback={null}>
      <SettingsInner />
    </Suspense>
  );
}
