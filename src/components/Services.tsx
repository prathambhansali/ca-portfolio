'use client';

import { config } from '@/config';
import { motion, useInView } from 'framer-motion';
import {
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
    <section id="services" className="bg-muted/10 relative overflow-hidden py-24" ref={ref}>
      {/* Subtle Background Detail */}
      <div className="bg-primary/2 pointer-events-none absolute top-0 right-0 -mt-[400px] -mr-[400px] h-[800px] w-[800px] rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
                {config.services.heading}
              </h2>
              <h3 className="font-serif text-3xl leading-tight font-medium md:text-5xl">
                {config.services.subheading}
              </h3>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed font-light">
              {config.services.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid auto-rows-[240px] grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
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
      className={`bg-card border-border/60 hover:shadow-primary/5 group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-10 transition-all duration-500 hover:shadow-2xl ${
        service.colSpan || ''
      }`}>
      <div className="bg-primary/5 group-hover:bg-primary absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-bl-[5rem] transition-colors duration-500" />
      <div className="space-y-4">
        <div className="bg-muted group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover:rotate-6 group-hover:text-white">
          <service.icon className="h-5 w-5" />
        </div>
        <h4 className="group-hover:text-primary text-lg font-medium tracking-tight transition-colors">
          {service.title}
        </h4>
      </div>

      <p className="text-muted-foreground group-hover:text-foreground text-sm leading-relaxed font-light transition-colors duration-300">
        {service.description}
      </p>
    </motion.div>
  );
}
