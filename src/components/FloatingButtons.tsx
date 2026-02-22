"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
          aria-label="Contact on WhatsApp">
          <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
        </motion.a>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-28 right-8 z-50 w-14 h-14 bg-white border border-border rounded-full flex items-center justify-center shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
              aria-label="Back to top">
              <ArrowUp className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </>
    </>
  );
}
