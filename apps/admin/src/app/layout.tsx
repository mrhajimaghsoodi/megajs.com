import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import { JetBrains_Mono, Vazirmatn } from 'next/font/google';
import { AdminShell } from '@/components/admin-shell';
import { AdminLocaleProvider } from '@/i18n/locale-context';
import { cn } from '@/lib/utils';
import './globals.css';

/** Project-wide UI font for the admin panel */
const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-persian',
  display: 'swap',
});

/** Code / mono only */
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const fontVars = {
  ['--font-body' as string]: 'var(--font-persian)',
  ['--font-display' as string]: 'var(--font-persian)',
  ['--font-sans' as string]: 'var(--font-persian)',
} as CSSProperties;

export const metadata: Metadata = {
  title: 'MEGA JS Admin',
  description: 'SEO-first operations console for MEGA JS',
  icons: { icon: '/logo-mark.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn(vazirmatn.variable, jetbrains.variable, 'dark')}
      style={fontVars}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <AdminLocaleProvider>
          <AdminShell>{children}</AdminShell>
        </AdminLocaleProvider>
      </body>
    </html>
  );
}
