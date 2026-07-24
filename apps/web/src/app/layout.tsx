import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import { JetBrains_Mono, Vazirmatn } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

/** Project-wide UI font */
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://megajs.com'),
  title: {
    default: 'MEGA JS',
    template: '%s · MEGA JS',
  },
  description:
    'Daily JavaScript ecosystem learning — courses, challenges, podcasts, live webinars.',
  icons: {
    icon: '/logo-mark.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="fa"
      suppressHydrationWarning
      className={`${vazirmatn.variable} ${jetbrains.variable}`}
      style={fontVars}
    >
      <body className="min-h-dvh font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
