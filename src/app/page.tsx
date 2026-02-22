import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
    <main className={`${inter.variable} ${playfair.variable} min-h-screen bg-navy text-foreground`}>
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
  );
}
