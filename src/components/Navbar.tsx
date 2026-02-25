'use client';

import { config } from '@/config';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = config.nav.links;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 right-0 left-0 z-[100] transition-all duration-700',
        isScrolled
          ? 'bg-background/40 border-border/20 border-b py-2 shadow-[var(--shadow-sm)] backdrop-blur-2xl md:py-3'
          : 'bg-transparent py-5 md:py-4'
      )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 md:gap-3">
            <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-lg transition-transform group-hover:scale-105 md:h-10 md:w-10 md:rounded-xl">
              <span className="font-serif text-base font-bold text-white md:text-lg">
                {config.personal.initials}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground text-sm leading-none font-bold">
                {config.personal.name}
              </span>
              <span className="text-muted-foreground mt-0.5 hidden text-[8px] tracking-wider uppercase sm:block md:mt-1 md:text-[10px]">
                {config.personal.title}
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary group relative text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">
                  {link.name}
                  <span className="bg-primary cubic-bezier(0.2, 0.8, 0.2, 1) absolute -bottom-1.5 left-0 h-[1.5px] w-0 transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href={config.personal.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary-light hover:shadow-primary/20 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase shadow-lg transition-all md:px-6 md:py-3">
              {config.nav.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2 md:hidden">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-background/95 border-border fixed inset-x-0 top-[73px] z-[90] h-screen space-y-8 overflow-hidden border-t px-8 py-12 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}>
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary block font-serif text-2xl font-medium transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>
              <Link
                href={config.personal.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-primary-foreground flex w-full items-center justify-center rounded-2xl py-4 text-xs font-bold tracking-widest uppercase shadow-xl transition-transform active:scale-95">
                {config.nav.cta}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
