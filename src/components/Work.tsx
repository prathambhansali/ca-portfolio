'use client';

import { config } from '@/config';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const caseStudies = config.work.items;

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="work" className="relative overflow-hidden py-20 md:py-20" ref={ref}>
      <div className="bg-secondary/5 dark:bg-secondary/2 pointer-events-none absolute bottom-0 left-0 -mb-[300px] -ml-[300px] h-[600px] w-[600px] rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-16 text-center md:mb-16">
          <h2 className="text-primary mb-4 text-[10px] font-bold tracking-[0.3em] uppercase md:mb-6">
            {config.work.heading}
          </h2>
          <h3 className="mb-6 font-serif text-3xl leading-[1.1] font-medium tracking-tight md:mb-8 md:text-4xl lg:text-5xl">
            {config.work.subheading}
          </h3>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed font-light md:text-base">
            {config.work.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map(study => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center md:mt-20">
          <Link href="/work">
            <button className="border-border hover:bg-muted group relative overflow-hidden rounded-full border px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all active:scale-95 md:px-12 md:py-5">
              <span className="relative z-10">{config.work.cta}</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: (typeof caseStudies)[0] }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as any },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-card group border-border/50 hover:border-primary/20 relative flex flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl">
      <Link href={`/work/${study.slug}`} className="flex h-full flex-col">
        <div className="flex-grow p-6 md:p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {study.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <h4 className="group-hover:text-primary mb-6 font-serif text-2xl leading-[1.2] font-medium tracking-tight transition-colors md:text-3xl">
            {study.title}
          </h4>

          <div className="space-y-6 md:space-y-10">
            <div>
              <p className="text-muted-foreground/40 mb-2 text-[10px] font-bold tracking-[0.3em] uppercase">
                Challenge
              </p>
              <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed font-light md:text-base">
                {study.problem}
              </p>
            </div>
            <div>
              <p className="text-secondary mb-2 text-[10px] font-bold tracking-[0.3em] uppercase">
                Success Metric
              </p>
              <p className="text-foreground text-lg font-medium tracking-tight md:text-2xl">
                {study.result}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 border-border/20 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-between border-t px-8 py-5 transition-all duration-500 md:px-12 md:py-8">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Deep Dive</span>
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>
    </motion.div>
  );
}
