'use client';

import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border/60 border-t pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-16 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 flex items-center gap-3">
              <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl">
                <span className="font-serif text-lg font-bold text-white">PB</span>
              </div>
              <span className="text-foreground text-lg font-bold tracking-tight">
                Prachiti Bhansali
              </span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed font-light">
              Elevating financial ecosystems through strategic oversight and precision-based
              compliance.
            </p>
            <div className="flex gap-4">
              {/* Minimal social links could go here if needed, or kept simple */}
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-8 text-[10px] font-bold tracking-widest uppercase">
              Resources
            </h4>
            <ul className="space-y-4">
              {quickLinks.slice(1, 4).map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-8 text-[10px] font-bold tracking-widest uppercase">
              Access
            </h4>
            <ul className="space-y-4">
              {quickLinks.slice(4).map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border/40 flex flex-col items-center justify-between gap-6 border-t pt-12 md:flex-row">
          <p className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase">
            &copy; {currentYear} Prachiti Bhansali. Precision In Finance.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-muted-foreground/60 hover:text-primary text-[10px] font-bold tracking-widest uppercase transition-colors">
              Privacy Protocol
            </Link>
            <Link
              href="#"
              className="text-muted-foreground/60 hover:text-primary text-[10px] font-bold tracking-widest uppercase transition-colors">
              Service Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
