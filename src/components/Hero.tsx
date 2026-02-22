"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Sparkles } from "lucide-react";
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      <div
        className="cursor-glow hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <div className="absolute top-1/4 -left-20 md:left-10 w-64 md:w-72 h-64 md:h-72 bg-primary/10 md:bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }} />
      <div
        className="absolute bottom-1/4 -right-20 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-secondary/5 md:bg-gold/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s", animationDuration: '10s' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm text-primary">
            <Sparkles className="w-4 h-4 text-secondary" />
            Open to Freelance Projects
            <span className="text-secondary">✦</span>
          </span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-1 sm:px-0">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="inline-block mr-1 sm:mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-xl md:max-w-2xl mx-auto"
        >
          CA Final | Virtual CFO | Finance Strategist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="#work"
            className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full glass cursor-pointer"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
