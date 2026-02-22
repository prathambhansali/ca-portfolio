"use client";

import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const headingText =
  "I help startups & businesses make smarter financial decisions.";

const words = headingText.split(" ");

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      {/* Advanced Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-float-slow" />

      {/* Financial Motif - Modern Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground border border-border">
              <Sparkles className="w-3 h-3 text-secondary" />
              Strategic Financial Leadership
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-[1.1] tracking-tight text-foreground">
            {words.map((word, i) => (
              <span key={i} className="inline-block mr-3">
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-light leading-relaxed">
            CA Finalist & Virtual CFO helping startups and growing businesses
            turn complex financial data into high-impact growth strategies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#work"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-widest font-bold hover:bg-primary-light hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-primary/20">
              Explore Solutions
            </Link>
            <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors group">
              Download Portfolio
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
      </motion.div>
    </section>
  );
}
