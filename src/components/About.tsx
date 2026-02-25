'use client';

import { config } from '@/config';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Building2, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
    <section id="about" className="bg-background relative py-20 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative">
            <div className="bg-muted group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl md:rounded-[3.5rem]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              <div className="bg-background flex h-full w-full items-center justify-center">
                <div className="border-primary/10 flex h-40 w-40 items-center justify-center rounded-full border-2 md:h-56 md:w-56">
                  <span className="text-primary/10 font-serif text-5xl font-medium tracking-tighter md:text-8xl">
                    {config.personal.initials}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="bg-card/60 border-border/20 rounded-2xl border px-5 py-4 backdrop-blur-xl md:rounded-3xl md:px-8 md:py-6">
                  <p className="text-muted-foreground mb-1.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                    Experience
                  </p>
                  <p className="text-xl font-medium tracking-tight md:text-3xl">
                    {config.about.experience}
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="border-primary/10 pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full border border-dashed md:-top-16 md:-right-16 md:h-56 md:w-56"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}>
            <h2 className="text-primary mb-4 text-[10px] font-bold tracking-[0.3em] uppercase md:mb-6">
              {config.about.heading}
            </h2>
            <h3 className="mb-8 font-serif text-3xl leading-[1.2] font-medium tracking-tight md:text-4xl lg:text-5xl">
              {config.about.tagline}
            </h3>
            <div className="text-muted-foreground mb-10 space-y-6 text-sm leading-relaxed font-light md:mb-16 md:text-base">
              {config.about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mb-12 grid grid-cols-2 gap-8 md:mb-20 md:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="border-primary/20 flex flex-col border-l pl-6">
                  <div className="text-foreground mb-2 font-serif text-3xl font-medium tracking-tight md:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>
                  <div className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-2.5 md:gap-4">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + i * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                  }}
                  className="bg-muted text-muted-foreground cursor-default rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all duration-300 md:px-6 md:py-2.5 md:text-sm">
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
