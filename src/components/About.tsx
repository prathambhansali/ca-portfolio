'use client';

import { motion, useInView } from 'framer-motion';
import { Briefcase, Building2, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: Users, value: 50, suffix: '+', label: 'Clients Served' },
  { icon: TrendingUp, value: 10, suffix: 'Cr+', label: 'Tax Savings' },
  { icon: Briefcase, value: 3, suffix: '+', label: 'Years Experience' },
  { icon: Building2, value: 15, suffix: '+', label: 'Industries' },
];

const skills = ['GST', 'ITR', 'Tally', 'QuickBooks', 'Excel', 'Power BI', 'Zoho Books', 'SAP'];

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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-background py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="bg-muted group relative aspect-[4/5] overflow-hidden rounded-[3rem]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="bg-background flex h-full w-full items-center justify-center">
                <div className="border-primary/10 flex h-48 w-48 items-center justify-center rounded-full border">
                  <span className="text-primary/20 font-serif text-6xl">PB</span>
                </div>
              </div>
              <div className="absolute bottom-10 left-10">
                <div className="bg-card/80 border-border/40 rounded-3xl border px-6 py-4 backdrop-blur-md">
                  <p className="text-muted-foreground mb-1 text-[10px] font-bold tracking-widest uppercase">
                    Experience
                  </p>
                  <p className="text-xl font-medium">3+ Years Professional</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="border-primary/5 pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full border border-dashed"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
              The Strategist
            </h2>
            <h3 className="mb-8 font-serif text-3xl leading-tight font-medium md:text-5xl">
              Precision in numbers, clarity in strategy.
            </h3>
            <div className="text-muted-foreground mb-12 space-y-6 leading-relaxed font-light">
              <p>
                I am Prachiti Bhansali, a qualified Chartered Accountant dedicated to empowering
                entrepreneurs with actionable financial insights. With a specialization in GST
                advisory and virtual CFO services, I bridge the gap between technical compliance and
                business growth.
              </p>
              <p>
                My approach is rooted in the belief that financial data should be a roadmap, not an
                obstacle. I translate complex numbers into clear strategies that drive profitability
                and ensure long-term stability for startups and established ventures alike.
              </p>
            </div>

            <div className="mb-12 grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col">
                  <div className="text-foreground mb-1 font-serif text-3xl font-medium">
                    <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>
                  <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
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
                  className="bg-muted/20 text-primary hover:bg-primary cursor-default rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 hover:text-white">
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
