'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { config } from '@/config';

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
        'fixed top-0 right-0 left-0 z-[100] transition-all duration-500',
        isScrolled
          ? 'bg-background/80 border-border/40 border-b py-4 shadow-sm backdrop-blur-xl'
          : 'bg-transparent py-6'
      )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-105">
              <span className="font-serif text-lg font-bold text-white">
                {config.personal.initials}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground text-sm leading-none font-bold">
                {config.personal.name}
              </span>
              <span className="text-muted-foreground mt-1 text-[10px] tracking-wider uppercase">
                {config.personal.title}
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary group relative text-xs font-medium tracking-widest uppercase transition-colors">
                {link.name}
                <span className="bg-primary absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-primary-light hover:shadow-primary/20 flex items-center gap-2 rounded-full px-6 py-2 text-xs font-bold tracking-widest uppercase shadow-lg transition-all">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-background border-border space-y-4 overflow-hidden border-t px-6 py-6 shadow-xl md:hidden">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-primary block py-2 text-sm font-medium tracking-widest uppercase transition-colors">
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-primary-foreground flex w-full items-center justify-center rounded-xl py-4 text-xs font-bold tracking-widest uppercase">
              {config.nav.cta}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
