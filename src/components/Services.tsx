'use client';

import { config } from '@/config';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  Calculator,
  FileText,
  LineChart,
  Rocket,
  Search,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { useRef } from 'react';

const iconMap: Record<string, React.ElementType> = {
  'Virtual CFO Services': LineChart,
  'GST Advisory & Filing': FileText,
  'Income Tax Planning': Calculator,
  'Financial Modeling': TrendingUp,
  'Startup Advisory': Rocket,
  'Audit & Assurance': Shield,
  'MIS & Reporting': BarChart3,
  'Due Diligence': Search,
};

const services = config.services.items.map(item => ({
  ...item,
  icon: iconMap[item.title] || LineChart,
}));

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="services"
      className="bg-muted/10 relative overflow-hidden py-16 md:py-20"
      ref={ref}>
      <div className="bg-primary/2 pointer-events-none absolute top-0 right-0 -mt-[400px] -mr-[400px] h-[800px] w-[800px] rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-primary mb-4 text-[10px] font-bold tracking-[0.3em] uppercase md:mb-6">
                {config.services.heading}
              </h2>
              <h3 className="font-serif text-3xl leading-[1.1] font-medium tracking-tight md:text-4xl lg:text-5xl">
                {config.services.subheading}
              </h3>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed font-light md:text-base">
              {config.services.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className={cn(
        'bg-card group border-border/50 hover:border-primary/20 relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-6 transition-all duration-500 hover:shadow-2xl md:p-8',
        service.colSpan
      )}>
      <div className="bg-primary/5 group-hover:bg-primary absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-bl-[3rem] transition-all duration-500 md:-mt-12 md:-mr-12 md:h-40 md:w-40 md:rounded-bl-[5rem]" />

      <div className="relative z-10 space-y-6">
        <div className="bg-muted group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:text-white md:h-16 md:w-16">
          <service.icon className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        <div>
          <h4 className="group-hover:text-primary mb-3 text-xl font-medium tracking-tight transition-colors md:text-2xl">
            {service.title}
          </h4>
          <p className="text-muted-foreground group-hover:text-foreground line-clamp-3 text-sm leading-relaxed font-light transition-colors duration-300 md:text-base">
            {service.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:mt-12 md:text-xs">
        <span className="text-primary">Learn More</span>
        <ArrowUpRight className="text-primary h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
}
