'use client';

import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { config } from '@/config';

const words = config.hero.heading.split(' ');

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9] as any,
      },
    },
  };

  return (
    <section
      id="home"
      className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="bg-gradient-radial pointer-events-none absolute inset-0" />

      {/* Advanced Decorative Elements */}
      <div className="bg-primary/5 animate-pulse-glow absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-[120px]" />
      <div className="bg-secondary/5 animate-float-slow absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]" />

      {/* Financial Motif - Modern Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="bg-card/60 text-muted-foreground border-border inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
              <Sparkles className="text-secondary h-3 w-3" />
              {config.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-foreground mb-6 font-serif text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {words.map((word, i) => (
              <span key={i} className="mr-3 inline-block">
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-8 max-w-2xl text-lg leading-relaxed font-light md:text-xl">
            {config.hero.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#work"
              className="bg-primary text-primary-foreground hover:bg-primary-light hover:shadow-primary/20 rounded-full px-8 py-4 text-xs font-bold tracking-widest uppercase shadow-lg transition-all hover:scale-105 active:scale-95">
              {config.hero.ctaPrimary}
            </Link>
            <button className="text-foreground hover:text-primary group flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors">
              {config.hero.ctaSecondary}
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="from-border h-12 w-px bg-gradient-to-b to-transparent" />
      </motion.div>
    </section>
  );
}
