import type { LucideIcon } from 'lucide-react';
import { Award, CalendarDays, Code2, Headphones } from 'lucide-react';

const ICONS: LucideIcon[] = [CalendarDays, Code2, Award, Headphones];

export function BenefitsStrip({
  items,
}: {
  items: Array<{ title: string; body: string }>;
}) {
  return (
    <div className="grid gap-6 border-y border-border bg-muted/40 py-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div key={item.title} className="flex gap-4 px-4 sm:px-6">
            <div className="flex size-12 shrink-0 items-center justify-center bg-primary text-[var(--mj-ink)]">
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
  );
}
