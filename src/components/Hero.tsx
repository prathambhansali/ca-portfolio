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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      {/* Refined Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/3 rounded-full blur-[100px] animate-float" />
      <div
        className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-secondary/3 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground border border-border">
            <Sparkles className="w-3 h-3 text-secondary" />
            Strategic Financial Leadership
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-[1.1] tracking-tight text-foreground">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.05 * i,
                ease: [0.21, 0.45, 0.32, 0.9],
              }}
              className="inline-block mr-3">
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center">
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-light leading-relaxed">
            CA Finalist & Virtual CFO helping startups and growing businesses
            turn complex financial data into high-impact growth strategies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#work"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-widest font-bold hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/20">
              Explore Solutions
            </Link>
            <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors group">
              Download Portfolio
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
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
