import type { Metadata } from 'next';
import { IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk, Vazirmatn } from 'next/font/google';
import { AdminShell } from '@/components/admin-shell';
import { AdminLocaleProvider } from '@/i18n/locale-context';
import { cn } from '@/lib/utils';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});
const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], variable: '--font-persian' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

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
      className={cn(
        'dark',
        spaceGrotesk.variable,
        ibmPlex.variable,
        vazirmatn.variable,
        jetbrains.variable,
      )}
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
