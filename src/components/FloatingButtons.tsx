'use client';

import { config } from '@/config';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <>
        <motion.a
          href={config.personal.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="bg-whatsapp hover:bg-whatsapp-dark border-whatsapp-dark group fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90"
          aria-label="Contact on WhatsApp">
          <MessageCircle className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
          <span className="bg-whatsapp absolute -top-8 right-0 scale-0 rounded-lg px-2 py-1 text-[10px] font-bold tracking-widest text-white uppercase opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
            WhatsApp
          </span>
        </motion.a>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={scrollToTop}
              className="bg-card border-border/60 hover:border-primary group fixed right-4 bottom-24 z-50 flex h-14 w-14 items-center justify-center rounded-full border shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90"
              aria-label="Back to top">
              <ArrowUp className="text-primary h-5 w-5 transition-transform group-hover:-translate-y-2" />
              <div className="bg-primary absolute inset-0 -z-10 scale-0 rounded-full opacity-0 transition-all group-hover:scale-100 group-hover:opacity-10" />
            </motion.button>
          )}
        </AnimatePresence>
      </>
    </>
  );
}
