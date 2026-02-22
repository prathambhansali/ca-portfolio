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
    <footer className="bg-background border-t border-border/60 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">
                  PB
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Prachiti Bhansali
              </span>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm mb-8">
              Elevating financial ecosystems through strategic oversight and
              precision-based compliance.
            </p>
            <div className="flex gap-4">
              {/* Minimal social links could go here if needed, or kept simple */}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-8">
              Resources
            </h4>
            <ul className="space-y-4">
              {quickLinks.slice(1, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-8">
              Access
            </h4>
            <ul className="space-y-4">
              {quickLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
            &copy; {currentYear} Prachiti Bhansali. Precision In Finance.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60 hover:text-primary transition-colors">
              Privacy Protocol
            </Link>
            <Link
              href="#"
              className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60 hover:text-primary transition-colors">
              Service Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
