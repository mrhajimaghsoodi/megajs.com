import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import { JetBrains_Mono, Vazirmatn } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo';
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MEGA JS',
    template: '%s · MEGA JS',
  },
  description:
    'Daily JavaScript ecosystem learning — courses, challenges, podcasts, live webinars.',
  applicationName: 'MEGA JS',
  authors: [{ name: 'MEGA JS' }],
  creator: 'MEGA JS',
  publisher: 'MEGA JS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo-mark.svg',
    apple: '/logo-mark.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'MEGA JS',
    title: 'MEGA JS',
    description:
      'Daily JavaScript ecosystem learning — courses, challenges, podcasts, live webinars.',
    images: [{ url: DEFAULT_OG_IMAGE, alt: 'MEGA JS' }],
    locale: 'fa_IR',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEGA JS',
    description:
      'Daily JavaScript ecosystem learning — courses, challenges, podcasts, live webinars.',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="fa"
      suppressHydrationWarning
      className={`dark ${vazirmatn.variable} ${jetbrains.variable}`}
      style={fontVars}
    >
      <body className="min-h-dvh font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
