"use client";

import { motion, useInView } from "framer-motion";
import { Briefcase, Building2, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, value: 50, suffix: "+", label: "Clients Served" },
  { icon: TrendingUp, value: 10, suffix: "Cr+", label: "Tax Savings" },
  { icon: Briefcase, value: 3, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 15, suffix: "+", label: "Industries" },
];

const skills = [
  "GST",
  "ITR",
  "Tally",
  "QuickBooks",
  "Excel",
  "Power BI",
  "Zoho Books",
  "SAP",
];

function Counter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="relative aspect-[4/5] bg-muted rounded-[3rem] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <div className="w-full h-full flex items-center justify-center bg-background">
                <div className="w-48 h-48 rounded-full border border-primary/10 flex items-center justify-center">
                  <span className="text-6xl font-serif text-primary/20">
                    PB
                  </span>
                </div>
              </div>
              <div className="absolute bottom-10 left-10">
                <div className="bg-card/80 backdrop-blur-md px-6 py-4 rounded-3xl border border-border/40">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">
                    Experience
                  </p>
                  <p className="text-xl font-medium">3+ Years Professional</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 border border-dashed border-primary/5 rounded-full pointer-events-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
              The Strategist
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              Precision in numbers, clarity in strategy.
            </h3>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed mb-12">
              <p>
                I am Prachiti Bhansali, a qualified Chartered Accountant
                dedicated to empowering entrepreneurs with actionable financial
                insights. With a specialization in GST advisory and virtual CFO
                services, I bridge the gap between technical compliance and
                business growth.
              </p>
              <p>
                My approach is rooted in the belief that financial data should
                be a roadmap, not an obstacle. I translate complex numbers into
                clear strategies that drive profitability and ensure long-term
                stability for startups and established ventures alike.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col">
                  <div className="text-3xl font-serif font-medium text-foreground mb-1">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                  className="px-4 py-2 bg-muted/20 rounded-full text-xs font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-default">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
