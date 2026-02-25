'use client';

import Link from 'next/link';
import { config } from '@/config';

const quickLinks = config.nav.links;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border/60 border-t pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-16 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 flex items-center gap-3">
              <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl">
                <span className="font-serif text-lg font-bold text-white">
                  {config.personal.initials}
                </span>
              </div>
              <span className="text-foreground text-lg font-bold tracking-tight">
                {config.personal.name}
              </span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed font-light">
              {config.footer.tagline}
            </p>
            <div className="flex gap-4">
              {/* Minimal social links could go here if needed, or kept simple */}
            </div>
          </div>

          <div>
            <h4 className="text-muted-foreground mb-8 text-[10px] font-bold tracking-widest uppercase">
              {config.footer.resources}
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
              {config.footer.access}
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
            {config.footer.copyright
              .replace('{year}', currentYear.toString())
              .replace('{name}', config.personal.name)}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-muted-foreground/60 hover:text-primary text-[10px] font-bold tracking-widest uppercase transition-colors">
              {config.footer.privacy}
            </Link>
            <Link
              href="#"
              className="text-muted-foreground/60 hover:text-primary text-[10px] font-bold tracking-widest uppercase transition-colors">
              {config.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
