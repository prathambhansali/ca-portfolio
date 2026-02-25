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
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="work" className="bg-background relative overflow-hidden py-24" ref={ref}>
      {/* Decorative background element */}
      <div className="bg-secondary/2 pointer-events-none absolute bottom-0 left-0 -mb-[300px] -ml-[300px] h-[600px] w-[600px] rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center">
          <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            {config.work.heading}
          </h2>
          <h3 className="mb-6 font-serif text-3xl font-medium md:text-5xl">
            {config.work.subheading}
          </h3>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed font-light">
            {config.work.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} isInView={isInView} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center">
          <Link href="/work">
            <button className="border-border hover:bg-muted rounded-full border px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300">
              {config.work.cta}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
  isInView,
}: {
  study: (typeof caseStudies)[0];
  index: number;
  isInView: boolean;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-card border-border/60 hover:shadow-primary/5 group flex h-full cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <Link href={`/work/${study.slug}`} className="flex h-full flex-col">
        <div className="flex-grow p-10">
          <div className="mb-8 flex flex-wrap gap-2">
            {study.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <h4 className="group-hover:text-primary mb-6 font-serif text-2xl leading-tight font-medium transition-colors">
            {study.title}
          </h4>

          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground/60 mb-2 text-[10px] font-bold tracking-[0.2em] uppercase">
                {config.work.problem}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {study.problem}
              </p>
            </div>
            <div>
              <p className="text-secondary mb-2 text-[10px] font-bold tracking-[0.2em] uppercase">
                {config.work.result}
              </p>
              <p className="text-foreground text-lg font-medium tracking-tight">{study.result}</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 border-border/40 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-between border-t px-10 py-6 transition-all duration-500">
          <span className="text-xs font-bold tracking-widest uppercase">Deep Dive</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>
    </motion.div>
  );
}
