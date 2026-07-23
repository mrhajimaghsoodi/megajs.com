import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
