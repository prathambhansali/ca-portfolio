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
    <section className="bg-muted/30 py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-10 md:gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5">
            <h2 className="text-primary mb-4 text-[10px] font-bold tracking-[0.3em] uppercase md:mb-6">
              {config.whyMe.heading}
            </h2>
            <h3 className="mb-6 font-serif text-3xl leading-[1.1] font-medium tracking-tight md:mb-8 md:text-4xl lg:text-5xl">
              {config.whyMe.tagline}
            </h3>
            <p className="text-muted-foreground mb-10 text-sm leading-relaxed font-light md:mb-14 md:text-base">
              {config.whyMe.description}
            </p>
            <div className="bg-card border-border/60 flex max-w-sm items-center gap-4 rounded-full border px-6 py-4 shadow-xl md:p-5">
              <div className="bg-secondary h-2.5 w-2.5 animate-pulse rounded-full shadow-[0_0_15px_rgba(var(--secondary),0.5)]" />
              <span className="text-foreground text-[10px] font-bold tracking-[0.2em] uppercase md:text-xs">
                {config.whyMe.badge}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:col-span-7">
            {usps.map(usp => (
              <motion.div
                key={usp.title}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
                  },
                }}
                className="bg-card group border-border/50 hover:border-primary/20 relative overflow-hidden rounded-[2.5rem] border p-6 transition-all duration-500 hover:shadow-2xl md:p-10">
                <div className="bg-primary/5 group-hover:bg-primary absolute top-0 right-0 -mt-6 -mr-6 h-16 w-16 rounded-bl-[2rem] transition-all duration-500 md:-mt-8 md:-mr-8 md:h-24 md:w-24 md:rounded-bl-[3.5rem]" />

                <div className="bg-muted group-hover:bg-primary relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:text-white md:h-14 md:w-14">
                  <usp.icon className="h-6 w-6 transition-colors duration-500 group-hover:text-white md:h-7 md:w-7" />
                </div>
                <div className="relative z-10">
                  <h4 className="group-hover:text-primary mb-3 text-lg font-medium tracking-tight transition-colors md:text-xl">
                    {usp.title}
                  </h4>
                  <p className="text-muted-foreground group-hover:text-foreground text-sm leading-relaxed font-light transition-colors duration-300">
                    {usp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
