import type { Metadata } from 'next';
import { IBM_Plex_Sans, JetBrains_Mono, Vazirmatn } from 'next/font/google';
import { AdminShell } from '@/components/admin-shell';
import { AdminLocaleProvider } from '@/i18n/locale-context';
import { cn } from '@/lib/utils';
import './globals.css';

const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});
const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], variable: '--font-persian' });

export const metadata: Metadata = {
  title: 'MEGA JS Admin',
  description: 'SEO-first operations console for MEGA JS',
  icons: { icon: '/logo-mark.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      style={{ ['--font-display' as string]: 'var(--font-mono)' }}
      className={cn('dark', jetbrains.variable, ibmPlex.variable, vazirmatn.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <AdminLocaleProvider>
          <AdminShell>{children}</AdminShell>
        </AdminLocaleProvider>
      </body>
    </html>
  );
}
