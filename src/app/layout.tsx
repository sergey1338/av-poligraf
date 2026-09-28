import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avpoligraf.md'),
  title: {
    default: 'A&V Poligraf — Типография в Комрате',
    template: '%s | A&V Poligraf',
  },
  description:
    'Типография A&V Poligraf в Комрате (Гагаузия). Цифровая и широкоформатная печать, визитки, баннеры, дизайн. С 2008 года.',
  openGraph: {
    type: 'website',
    locale: 'ru_MD',
    siteName: 'A&V Poligraf',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
