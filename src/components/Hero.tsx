'use client';

import { config } from '@/config';
import { useLoading } from '@/context/LoadingContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const words = config.hero.heading.split(' ');

export default function Hero() {
  const { isFinished } = useLoading();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleDownloadResume = () => {
    window.open(config.personal.resumeUrl, '_blank');
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0">
        <div className="bg-gradient-radial absolute inset-0 opacity-60" />
        <motion.div
          style={{ y }}
          className="bg-primary/25 animate-pulse-glow dark:bg-primary/15 absolute top-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']) }}
          className="bg-secondary/25 animate-float dark:bg-secondary/15 absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:3rem_3rem]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-12 text-center md:py-20">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mt-3 mb-6">
            <span className="bg-card/40 border-border/40 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-sm">
              <Sparkles className="text-secondary h-3 w-3" />
              {config.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate={isFinished ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            className="text-foreground mb-6 font-serif text-5xl leading-[1.1] font-medium tracking-tight md:text-6xl lg:text-7xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
                  },
                }}
                className="mr-3 inline-block md:mr-4">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }} // Delayed after heading finishes
            className="text-muted-foreground mb-6 max-w-2xl text-base leading-relaxed font-light md:text-xl">
            {config.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }} // Delayed after subtitle
            className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
            <Link
              href="#work"
              className="bg-primary text-primary-foreground hover:bg-primary-light relative overflow-hidden rounded-full px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase shadow-2xl transition-all hover:scale-105 active:scale-95 md:px-10 md:py-5 md:text-xs">
              <span className="relative z-10">{config.hero.ctaPrimary}</span>
            </Link>
            <button
              onClick={handleDownloadResume}
              className="text-foreground hover:text-primary group flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all md:text-xs">
              {config.hero.ctaSecondary}
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="from-border h-16 w-px bg-gradient-to-b to-transparent" />
      </motion.div>
    </section>
  );
}
