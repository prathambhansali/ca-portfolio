'use client';

import { config } from '@/config';
import { motion, useInView } from 'framer-motion';
import { Award, BarChart3, BookOpen, Calculator, FileSpreadsheet } from 'lucide-react';
import { useRef } from 'react';

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
    <section className="bg-background py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-20">
          <h2 className="text-muted-foreground mb-2 text-[10px] font-bold tracking-[0.2em] uppercase md:mb-4">
            {config.certifications.heading}
          </h2>
          <h3 className="mb-4 font-serif text-2xl font-medium md:mb-6 md:text-3xl lg:text-5xl">
            {config.certifications.subheading}
          </h3>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed font-light md:text-base">
            {config.certifications.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
          {tools.map(tool => (
            <motion.div
              key={tool.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as any },
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-card group border-border/50 hover:border-primary/20 relative flex flex-col items-center overflow-hidden rounded-[2rem] border p-6 text-center transition-all duration-500 hover:shadow-2xl md:p-10">
              <div className="bg-primary/5 group-hover:bg-primary absolute top-0 right-0 -mt-6 -mr-6 h-16 w-16 rounded-bl-[2rem] transition-all duration-500 md:-mt-10 md:-mr-10 md:h-24 md:w-24 md:rounded-bl-[3rem]" />

              <div className="bg-muted group-hover:bg-primary relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:text-white md:mb-8 md:h-16 md:w-16">
                <tool.icon className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <div className="relative z-10">
                <span className="text-foreground mb-1 block text-sm font-bold tracking-tight md:mb-2 md:text-base">
                  {tool.name}
                </span>
                <span className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase md:text-xs">
                  {tool.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
