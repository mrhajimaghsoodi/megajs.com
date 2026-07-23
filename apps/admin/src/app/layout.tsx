import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk, Vazirmatn } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${vazirmatn.variable}`}
    >
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
