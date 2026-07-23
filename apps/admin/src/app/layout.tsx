import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Space_Grotesk, Vazirmatn } from 'next/font/google';
import { AdminShell } from '@/components/admin-shell';
import { AdminLocaleProvider } from '@/i18n/locale-context';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
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
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${vazirmatn.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh bg-[var(--mj-bg)] text-[var(--mj-fg)] antialiased">
        <AdminLocaleProvider>
          <AdminShell>{children}</AdminShell>
        </AdminLocaleProvider>
      </body>
    </html>
  );
}
