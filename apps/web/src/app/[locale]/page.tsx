import Link from 'next/link';
import { BookOpen, Check, Minus } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CtaLink } from '@/components/marketing';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, type Locale } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'fa';
  const dict = getDictionary(locale);
  return {
    title: dict.brand,
    description: dict.tagline,
    alternates: {
      canonical: `/${locale}`,
      languages: { fa: '/fa', en: '/en' },
    },
  };
}

function CodeSnippet({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="overflow-hidden border-border bg-card py-0">
      <div className="flex items-center justify-between border-b border-border bg-muted/60 px-4 py-2">
        <span className="font-mono text-[11px] text-muted-foreground">{title}</span>
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-[var(--mj-syn-property)]/80" />
          <span className="size-2 rounded-full bg-[var(--mj-syn-number)]/80" />
          <span className="size-2 rounded-full bg-[var(--mj-syn-string)]/80" />
        </span>
      </div>
      <CardContent className="p-0">
        <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 sm:text-[13px]">
          {children}
        </pre>
      </CardContent>
    </Card>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const L = dict.landing;
  const docsHref = `/${locale}/curriculum`;

  const compareRows = [
    { feature: L.compare.rows.daily, free: true, pro: true, team: true },
    { feature: L.compare.rows.practice, free: true, pro: true, team: true },
    { feature: L.compare.rows.tokens, free: false, pro: true, team: true },
    { feature: L.compare.rows.live, free: false, pro: true, team: true },
    { feature: L.compare.rows.admin, free: false, pro: false, team: true },
  ];

  const integrations = L.integrations.items;

  return (
    <>
      {/* 1. Minimal hero + docs link */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 mj-code-plane opacity-[0.55]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(800px 420px at 80% 10%, color-mix(in oklab, var(--mj-accent) 18%, transparent), transparent 55%)',
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="mj-fade-up flex flex-col gap-6">
            <Badge variant="secondary" className="w-fit font-mono text-[10px] uppercase tracking-[0.18em]">
              {L.badge}
            </Badge>
            <p className="font-display text-[clamp(2.75rem,8vw,4.75rem)] font-bold leading-[0.95] tracking-tight text-foreground">
              {dict.brand}
              <span className="mj-caret" aria-hidden />
            </p>
            <h1 className="max-w-xl text-xl font-medium leading-snug text-muted-foreground sm:text-2xl">
              {dict.tagline}
            </h1>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              {dict.heroSupport}
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaLink href={`/${locale}/login`} primary>
                {dict.ctaStart}
              </CtaLink>
              <Button asChild variant="outline" size="lg" className="h-12 gap-2 px-5">
                <Link href={docsHref}>
                  <BookOpen data-icon="inline-start" />
                  {L.docsCta}
                </Link>
              </Button>
            </div>
          </div>

          <div className="mj-fade-up">
            <CodeSnippet title="today.ts">
              <code>
                <span className="syn-cmt">{'// daily learning loop'}</span>
                {'\n'}
                <span className="syn-kw">const</span> <span className="syn-prop">session</span>{' '}
                <span className="syn-op">=</span> <span className="syn-pun">{'{'}</span>
                {'\n'}
                {'  '}
                <span className="syn-prop">track</span>
                <span className="syn-pun">:</span> <span className="syn-str">&quot;javascript&quot;</span>
                <span className="syn-pun">,</span>
                {'\n'}
                {'  '}
                <span className="syn-prop">streak</span>
                <span className="syn-pun">:</span> <span className="syn-num">7</span>
                <span className="syn-pun">,</span>
                {'\n'}
                {'  '}
                <span className="syn-prop">challenge</span>
                <span className="syn-pun">:</span> <span className="syn-str">&quot;sum(a, b)&quot;</span>
                <span className="syn-pun">,</span>
                {'\n'}
                <span className="syn-pun">{'}'}</span>
                <span className="syn-pun">;</span>
                {'\n\n'}
                <span className="syn-kw">await</span> <span className="syn-fn">learn</span>
                <span className="syn-pun">(</span>
                <span className="syn-prop">session</span>
                <span className="syn-pun">);</span>
              </code>
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* 2. Code snippet previews */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{L.snippets.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {L.snippets.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{L.snippets.body}</p>
          </div>
          <div className="mj-stagger grid gap-4 lg:grid-cols-2">
            <CodeSnippet title="practice.submit.ts">
              <code>
                <span className="syn-kw">export</span> <span className="syn-kw">async</span>{' '}
                <span className="syn-kw">function</span> <span className="syn-fn">submit</span>
                <span className="syn-pun">(</span>
                <span className="syn-prop">code</span>
                <span className="syn-pun">:</span> <span className="syn-fn">string</span>
                <span className="syn-pun">)</span> <span className="syn-pun">{'{'}</span>
                {'\n'}
                {'  '}
                <span className="syn-kw">const</span> <span className="syn-prop">result</span>{' '}
                <span className="syn-op">=</span> <span className="syn-kw">await</span>{' '}
                <span className="syn-fn">judge</span>
                <span className="syn-pun">(</span>
                <span className="syn-prop">code</span>
                <span className="syn-pun">);</span>
                {'\n'}
                {'  '}
                <span className="syn-kw">return</span> <span className="syn-pun">{'{'}</span>{' '}
                <span className="syn-prop">passed</span>
                <span className="syn-pun">:</span> <span className="syn-prop">result</span>
                <span className="syn-pun">.</span>
                <span className="syn-prop">ok</span>
                <span className="syn-pun">,</span> <span className="syn-prop">tokens</span>
                <span className="syn-pun">:</span> <span className="syn-num">12</span>{' '}
                <span className="syn-pun">{'}'}</span>
                <span className="syn-pun">;</span>
                {'\n'}
                <span className="syn-pun">{'}'}</span>
              </code>
            </CodeSnippet>
            <CodeSnippet title="api.health.json">
              <code>
                <span className="syn-pun">{'{'}</span>
                {'\n'}
                {'  '}
                <span className="syn-str">&quot;ok&quot;</span>
                <span className="syn-pun">:</span> <span className="syn-kw">true</span>
                <span className="syn-pun">,</span>
                {'\n'}
                {'  '}
                <span className="syn-str">&quot;service&quot;</span>
                <span className="syn-pun">:</span> <span className="syn-str">&quot;megajs-api&quot;</span>
                <span className="syn-pun">,</span>
                {'\n'}
                {'  '}
                <span className="syn-str">&quot;version&quot;</span>
                <span className="syn-pun">:</span> <span className="syn-str">&quot;0.1.0&quot;</span>
                {'\n'}
                <span className="syn-pun">{'}'}</span>
              </code>
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* 3. Feature comparison table */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{L.compare.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {L.compare.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{L.compare.body}</p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50 text-start">
                  <th className="px-4 py-3 font-mono text-xs font-medium text-muted-foreground">
                    {L.compare.feature}
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium">{L.compare.free}</th>
                  <th className="px-4 py-3 font-mono text-xs font-medium text-primary">
                    {L.compare.pro}
                  </th>
                  <th className="px-4 py-3 font-mono text-xs font-medium">{L.compare.team}</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-foreground">{row.feature}</td>
                    {[row.free, row.pro, row.team].map((ok, i) => (
                      <td key={i} className="px-4 py-3">
                        {ok ? (
                          <Check className="size-4 text-primary" aria-label="yes" />
                        ) : (
                          <Minus className="size-4 text-muted-foreground" aria-label="no" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <CtaLink href={`/${locale}/pricing`} primary>
              {dict.nav.pricing}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* 4. Integration logos */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {L.integrations.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {L.integrations.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{L.integrations.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {integrations.map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-center rounded-lg border border-border bg-card font-mono text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Documentation CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Card className="border-border bg-card">
            <CardHeader className="gap-2">
              <CardTitle className="font-display text-2xl sm:text-3xl">{L.docs.title}</CardTitle>
              <CardDescription className="max-w-xl text-base">{L.docs.body}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 gap-2 px-5">
                <Link href={docsHref}>
                  <BookOpen data-icon="inline-start" />
                  {L.docsCta}
                </Link>
              </Button>
              <CtaLink href={`/${locale}/about`}>{dict.nav.about}</CtaLink>
            </CardContent>
          </Card>
          <Separator className="my-12" />
          <p className="font-mono text-xs text-muted-foreground">{L.footnote}</p>
        </div>
      </section>
    </>
  );
}
