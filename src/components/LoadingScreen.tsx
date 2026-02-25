'use client';

import { config } from '@/config';
import { useLoading } from '@/context/LoadingContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const { markAsFinished } = useLoading();

  if (!isLoading) return null;

  return (
    <motion.div
      className="bg-background fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={() => {
        setIsLoading(false);
        markAsFinished();
      }}>
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="bg-primary relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-[2rem] shadow-2xl"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}>
          <div className="absolute inset-0 -translate-x-full skew-x-12 animate-[shimmer_2s_infinite] bg-white/10" />
          <span className="relative z-10 font-serif text-4xl font-bold text-white">
            {config.personal.initials}
          </span>
        </motion.div>
        <div className="flex gap-1">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="bg-primary h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(var(--primary),0.3)]"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
