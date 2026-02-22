"use client";

import { motion, useInView } from "framer-motion";
import { Clock, DollarSign, Lightbulb, MessageSquare } from "lucide-react";
import { useRef } from "react";

const usps = [
  {
    icon: Lightbulb,
    title: "Practical, not just theoretical",
    description:
      "I translate complex financial concepts into actionable strategies that drive real business results.",
  },
  {
    icon: MessageSquare,
    title: "Plain language, no jargon",
    description:
      "No confusing accounting speak. I explain everything in clear, understandable terms.",
  },
  {
    icon: DollarSign,
    title: "Startup-friendly pricing",
    description:
      "Flexible engagement models designed for startups and growing businesses at every stage.",
  },
  {
    icon: Clock,
    title: "Always available, proactive approach",
    description:
      "I'm just a call away. Plus, I anticipate issues before they become problems.",
  },
];

export default function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
              Value Proposition
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-8">
              Expertise that moves the needle.
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              My commitment to client success goes beyond traditional
              accounting. I provide the strategic oversight needed to scale
              responsibly in today's dynamic economy.
            </p>
            <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border border-border shadow-sm max-w-sm">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-foreground">
                Currently onboarding select clients
              </span>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-card rounded-[2.5rem] border border-border/60 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <usp.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-lg font-medium mb-3 tracking-tight">
                  {usp.title}
                </h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed hover:text-foreground transition-colors">
                  {usp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
