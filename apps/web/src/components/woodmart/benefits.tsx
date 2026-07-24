import type { LucideIcon } from 'lucide-react';
import { Award, CalendarDays, Code2, Headphones } from 'lucide-react';

const ICONS: LucideIcon[] = [CalendarDays, Code2, Award, Headphones];

export function BenefitsStrip({
  items,
}: {
  items: Array<{ title: string; body: string }>;
}) {
  return (
    <div className="border-y border-border bg-card py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={item.title} className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--mj-accent-soft)] text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
