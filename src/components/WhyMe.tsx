'use client';

import { config } from '@/config';
import { motion, useInView } from 'framer-motion';
import { Clock, DollarSign, Lightbulb, MessageSquare } from 'lucide-react';
import { useRef } from 'react';

const iconMap: Record<string, React.ElementType> = {
  'Practical, not just theoretical': Lightbulb,
  'Plain language, no jargon': MessageSquare,
  'Startup-friendly pricing': DollarSign,
  'Always available, proactive approach': Clock,
};

const usps = config.whyMe.items.map(item => ({
  ...item,
  icon: iconMap[item.title] || Lightbulb,
}));

export default function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-muted/30 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5">
            <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
              {config.whyMe.heading}
            </h2>
            <h3 className="mb-8 font-serif text-3xl leading-tight font-medium md:text-5xl">
              {config.whyMe.tagline}
            </h3>
            <p className="text-muted-foreground mb-10 leading-relaxed font-light">
              {config.whyMe.description}
            </p>
            <div className="bg-card border-border flex max-w-sm items-center gap-3 rounded-2xl border p-4 shadow-sm">
              <div className="bg-secondary h-2 w-2 animate-pulse rounded-full" />
              <span className="text-foreground text-xs font-bold tracking-widest uppercase">
                {config.whyMe.badge}
              </span>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border-border/60 hover:shadow-primary/5 group rounded-[2.5rem] border p-8 transition-all duration-500 hover:shadow-xl">
                <div className="bg-muted group-hover:bg-primary mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-500">
                  <usp.icon className="text-primary h-5 w-5 transition-colors duration-500 group-hover:text-white" />
                </div>
                <h4 className="mb-3 text-lg font-medium tracking-tight">{usp.title}</h4>
                <p className="text-muted-foreground hover:text-foreground text-sm leading-relaxed font-light transition-colors">
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
