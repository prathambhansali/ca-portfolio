"use client";

import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-light/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-gold flex items-center justify-center">
                <span className="text-white font-bold text-lg">PB</span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                Prachiti Bhansali
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Turning complex numbers into clear business decisions.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>prachitibhansali@gmail.com</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Prachiti Bhansali. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with intention. Powered by expertise.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
