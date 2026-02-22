'use client';

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
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-card border-border hover:shadow-primary/10 group fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border shadow-xl transition-all duration-300"
          aria-label="Contact on WhatsApp">
          <MessageCircle className="text-primary h-6 w-6 transition-transform group-hover:scale-110" />
        </motion.a>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={scrollToTop}
              className="bg-card border-border hover:shadow-primary/10 group fixed right-8 bottom-28 z-50 flex h-14 w-14 items-center justify-center rounded-full border shadow-xl transition-all duration-300"
              aria-label="Back to top">
              <ArrowUp className="text-primary h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </motion.button>
          )}
        </AnimatePresence>
      </>
    </>
  );
}
