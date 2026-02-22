"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, TrendingUp, Briefcase, Building2 } from "lucide-react";

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

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
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
    <section id="about" className="py-24 bg-navy-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-4 bg-gradient-to-br from-indigo-500/20 to-gold/20 rounded-2xl" />
              <div className="absolute inset-8 border-2 border-indigo-500/30 rounded-2xl" />
              <div className="relative w-full h-full bg-navy rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="w-3/4 h-3/4 bg-gradient-to-br from-navy-light to-navy rounded-xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-gold flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">PB</span>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border border-dashed border-indigo-500/30 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-medium text-indigo-400 mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Turning complex numbers into clear business decisions
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am Prachiti Bhansali, a qualified Chartered Accountant with expertise in
              GST advisory, startup CFO services, financial modeling, and strategic tax
              planning. With over 3 years of experience serving diverse industries, I help
              businesses navigate complex financial landscapes with practical, actionable
              insights.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach combines technical expertise with a deep understanding of business
              dynamics. I believe in empowering entrepreneurs with clear, jargon-free
              financial guidance that drives growth and profitability.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass-light rounded-xl p-4 hover-lift"
                >
                  <stat.icon className="w-6 h-6 text-indigo-400 mb-2" />
                  <div className="text-2xl font-bold text-gradient">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                  className="px-4 py-2 bg-navy border border-indigo-500/30 rounded-full text-sm text-foreground hover:border-indigo-500 transition-colors cursor-default"
                >
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
