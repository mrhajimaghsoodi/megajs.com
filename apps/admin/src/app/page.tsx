import Image from 'next/image';

const modules = [
  { title: 'SEO Hub', body: 'Meta, slug, canonical, schema, sitemap, redirects' },
  { title: 'Catalog', body: 'Tracks, courses, modules, lessons, MDX assets' },
  { title: 'Users', body: 'Identities, phone sync, roles, support tools' },
  { title: 'Billing', body: 'Plans, orders, token redemptions' },
  { title: 'Practice', body: 'Challenges, test cases, scoring rules' },
  { title: 'Live Ops', body: 'Webinars · site + YouTube + Aparat + Instagram' },
];

export default function AdminHome() {
  return (
    <>
      <header className="border-b border-[var(--mj-border)] bg-[var(--mj-card)]">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Image src="/logo.svg" alt="MEGA JS" width={160} height={36} className="h-9 w-auto" />
          <span className="rounded-full bg-[var(--mj-accent)] px-3 py-1 text-xs font-semibold text-[var(--mj-accent-fg)]">
            Admin
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-bold">پنل ادمین MEGA JS</h1>
        <p className="mt-3 max-w-2xl text-[var(--mj-muted-fg)]">
          کنسول عملیات محتوا، SEO، کاربران، پرداخت، Practice و لایو — آماده برای توسعه ماژول‌به‌ماژول.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((m) => (
            <article
              key={m.title}
              className="rounded-[var(--mj-radius-md)] border border-[var(--mj-border)] bg-[var(--mj-card)] p-5"
            >
              <h2 className="font-display text-xl font-semibold">{m.title}</h2>
              <p className="mt-2 text-sm text-[var(--mj-muted-fg)]">{m.body}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
