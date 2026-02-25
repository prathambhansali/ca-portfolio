'use client';

import { config } from '@/config';
import Link from 'next/link';

const quickLinks = config.nav.links;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border/40 border-t pt-20 pb-4">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10 flex items-center gap-4 md:mb-12">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-2xl shadow-xl">
                <span className="font-serif text-xl font-bold text-white">
                  {config.personal.initials}
                </span>
              </div>
              <span className="text-foreground text-2xl font-bold tracking-tight md:text-3xl">
                {config.personal.name}
              </span>
            </div>
            <p className="text-muted-foreground/80 mb-10 max-w-sm text-base leading-relaxed font-light md:mb-14 md:text-lg">
              {config.footer.tagline}
            </p>
            <div className="flex gap-4"></div>
          </div>

          <div>
            <h4 className="text-primary mb-6 text-[10px] font-bold tracking-[0.3em] uppercase">
              {config.footer.resources}
            </h4>
            <ul className="space-y-4 md:space-y-6">
              {quickLinks.slice(1, 4).map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary relative text-base font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary mb-6 text-[10px] font-bold tracking-[0.3em] uppercase">
              {config.footer.access}
            </h4>
            <ul className="space-y-4 md:space-y-6">
              {quickLinks.slice(4).map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary relative text-base font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border/40 flex flex-col items-center justify-between gap-4 border-t pt-4 md:gap-6">
          <div className="flex flex-col gap-1 text-center md:gap-2 md:text-left">
            <p className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase">
              {config.footer.copyright
                .replace('{year}', currentYear.toString())
                .replace('{name}', config.personal.name)}
            </p>
          </div>
          <div className="flex items-center gap-6 md:gap-8">
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
