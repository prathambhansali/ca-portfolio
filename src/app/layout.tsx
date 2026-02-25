import CursorGlow from '@/components/CursorGlow';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollManager from '@/components/ScrollManager';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LoadingProvider } from '@/context/LoadingContext';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prachitibhansali.com'),
  title: {
    default: 'Prachiti Bhansali | CA Final | Virtual CFO | Tax & Finance Strategist',
    template: '%s | Prachiti Bhansali',
  },
  description:
    'Chartered Accountant specializing in GST Advisory, Startup CFO Services, Financial Modeling, and Tax Planning. Turning complex numbers into clear business decisions.',
  keywords: [
    'Chartered Accountant',
    'CA',
    'CA Final',
    'Virtual CFO',
    'GST Advisory',
    'Tax Planning',
    'Financial Modeling',
    'Startup CFO',
    'India',
    'Amravati',
    'Tax Consultant',
    'Finance Strategist',
  ],
  authors: [{ name: 'Prachiti Bhansali' }],
  creator: 'Prachiti Bhansali',
  publisher: 'Prachiti Bhansali',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://prachitibhansali.com',
    siteName: 'Prachiti Bhansali',
    title: 'Prachiti Bhansali | CA Final | Virtual CFO | Tax & Finance Strategist',
    description:
      'Chartered Accountant specializing in GST Advisory, Startup CFO Services, Financial Modeling, and Tax Planning.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Prachiti Bhansali - CA Final & Virtual CFO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prachiti Bhansali | CA Final | Virtual CFO',
    description:
      'Turning complex numbers into clear business decisions. CA Finalist & Virtual CFO specializing in GST Advisory and Tax Planning.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} text-foreground selection:bg-primary/10 selection:text-primary font-sans antialiased`}>
        <div className="noise-overlay" />
        <LoadingProvider>
          <Suspense fallback={null}>
            <ScrollManager />
          </Suspense>
          <CursorGlow />
          <LoadingScreen />
          <ThemeProvider>{children}</ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
