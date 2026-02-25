'use client';

import { motion, useInView } from 'framer-motion';
import { Briefcase, Building2, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { config } from '@/config';

const iconMap: Record<string, React.ElementType> = {
  'Clients Served': Users,
  'Tax Savings': TrendingUp,
  'Years Experience': Briefcase,
  Industries: Building2,
};

const stats = config.about.stats.map((stat, i) => ({
  ...stat,
  icon: Object.values(iconMap)[i],
}));

const skills = config.about.skills;

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
                  <span className="text-primary/20 font-serif text-6xl">
                    {config.personal.initials}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-10 left-10">
                <div className="bg-card/80 border-border/40 rounded-3xl border px-6 py-4 backdrop-blur-md">
                  <p className="text-muted-foreground mb-1 text-[10px] font-bold tracking-widest uppercase">
                    Experience
                  </p>
                  <p className="text-xl font-medium">{config.about.experience}</p>
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
              {config.about.heading}
            </h2>
            <h3 className="mb-8 font-serif text-3xl leading-tight font-medium md:text-5xl">
              {config.about.tagline}
            </h3>
            <div className="text-muted-foreground mb-12 space-y-6 leading-relaxed font-light">
              {config.about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
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
