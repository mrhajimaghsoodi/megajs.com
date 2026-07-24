'use client';

import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import type { FormEvent } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type LinkItem = { href: string; label: string };

/** Mobile drawer isolated so Radix Sheet is code-split from desktop header chrome. */
export function MobileNavSheet({
  locale,
  dict,
  links,
  open,
  onOpenChange,
  q,
  onQChange,
  onSearch,
}: {
  locale: Locale;
  dict: Dictionary;
  links: LinkItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  q: string;
  onQChange: (v: string) => void;
  onSearch: (e: FormEvent) => void;
}) {
  const w = dict.woodmart;
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-xl lg:hidden" aria-label={dict.menu}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={locale === 'fa' ? 'right' : 'left'} className="w-[min(100%,20rem)]">
        <SheetHeader>
          <SheetTitle>{dict.brand}</SheetTitle>
        </SheetHeader>
        <form onSubmit={onSearch} className="mt-4 md:hidden">
          <Input
            value={q}
            onChange={(e) => onQChange(e.target.value)}
            placeholder={w.searchPlaceholder}
            className="rounded-xl"
          />
        </form>
        <div className="mt-4 flex flex-col gap-1">
          {links.map((link) => (
            <Button key={link.href} asChild variant="ghost" className="justify-start rounded-xl">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
