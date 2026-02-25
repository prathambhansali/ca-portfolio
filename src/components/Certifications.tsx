'use client';

import { motion, useInView } from 'framer-motion';
import { Award, BarChart3, BookOpen, Calculator, FileSpreadsheet } from 'lucide-react';
import { useRef } from 'react';
import { config } from '@/config';

const iconMap: Record<string, React.ElementType> = {
  ICAI: Award,
  GST: FileSpreadsheet,
  Tally: Calculator,
  Excel: BarChart3,
  'Power BI': BarChart3,
  QuickBooks: BookOpen,
  'Zoho Books': BookOpen,
  SAP: Calculator,
};

const tools = config.certifications.items.map(item => ({
  ...item,
  icon: iconMap[item.name] || Award,
}));

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center">
          <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            {config.certifications.heading}
          </h2>
          <h3 className="mb-6 font-serif text-3xl font-medium md:text-5xl">
            {config.certifications.subheading}
          </h3>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed font-light">
            {config.certifications.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-muted/20 hover:border-border hover:bg-card hover:shadow-primary/5 flex flex-col items-center rounded-[2rem] border border-transparent p-8 text-center transition-all duration-500 hover:shadow-xl">
              <div className="bg-card border-border group-hover:bg-primary mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border shadow-sm transition-all duration-500 group-hover:text-white">
                <tool.icon className="h-5 w-5" />
              </div>
              <span className="text-foreground mb-1 text-sm font-bold tracking-tight">
                {tool.name}
              </span>
              <span className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
