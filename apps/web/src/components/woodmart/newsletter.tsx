'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterBand({
  title,
  body,
  placeholder,
  cta,
  success,
}: {
  title: string;
  body: string;
  placeholder: string;
  cta: string;
  success: string;
}) {
  const [done, setDone] = useState(false);

  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-white/75">{body}</p>
        </div>
        {done ? (
          <p className="rounded-xl bg-[var(--mj-brand)] px-4 py-2 text-sm font-semibold text-[var(--mj-ink)]">
            {success}
          </p>
        ) : (
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <Input
              type="email"
              required
              placeholder={placeholder}
              className="h-12 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/50"
            />
            <Button
              type="submit"
              className="h-12 shrink-0 rounded-xl bg-[var(--mj-brand)] px-5 font-semibold text-[var(--mj-ink)] hover:bg-[var(--mj-brand)]/90"
            >
              {cta}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
