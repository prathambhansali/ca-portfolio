import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prachiti Bhansali | CA Final | Virtual CFO | Tax & Finance Strategist",
  description:
    "Chartered Accountant specializing in GST Advisory, Startup CFO Services, Financial Modeling, and Tax Planning.",
  keywords: [
    "Chartered Accountant",
    "CA",
    "Virtual CFO",
    "GST Advisory",
    "Tax Planning",
    "Financial Modeling",
    "Startup CFO",
    "India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
