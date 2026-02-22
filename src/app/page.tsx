import About from "@/components/About";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhyMe from "@/components/WhyMe";
import Work from "@/components/Work";
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
  title:
    "Prachiti Bhansali | CA Final | Virtual CFO | Tax & Finance Strategist",
  description:
    "Chartered Accountant specializing in GST Advisory, Startup CFO Services, Financial Modeling, and Tax Planning. Turning complex numbers into clear business decisions.",
  keywords: [
    "Chartered Accountant",
    "CA",
    "Virtual CFO",
    "GST Advisory",
    "Tax Planning",
    "Financial Modeling",
    "Startup CFO",
    "Tax Consultant",
    "India",
  ],
  authors: [{ name: "Prachiti Bhansali" }],
  openGraph: {
    title: "Prachiti Bhansali | CA Final | Virtual CFO",
    description: "Turning complex numbers into clear business decisions.",
    type: "website",
    locale: "en_IN",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prachiti Bhansali | CA Final | Virtual CFO",
    description: "Turning complex numbers into clear business decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <ThemeProvider>
      <main
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-background text-foreground`}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyMe />
        <Work />
        <Testimonials />
        <Certifications />
        <Blog />
        <Contact />
        <Footer />
        <FloatingButtons />
      </main>
    </ThemeProvider>
  );
}
