"use client";

import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  Calculator,
  FileText,
  LineChart,
  Rocket,
  Search,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: LineChart,
    title: "Virtual CFO Services",
    description:
      "Full-spectrum financial leadership including strategy, planning, and stakeholder management.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: FileText,
    title: "GST Advisory & Filing",
    description:
      "Expert guidance on GST compliance, registrations, and optimized filing strategies.",
  },
  {
    icon: Calculator,
    title: "Income Tax Planning",
    description:
      "Strategic tax planning to minimize liabilities while ensuring full compliance.",
  },
  {
    icon: TrendingUp,
    title: "Financial Modeling",
    description:
      "Custom financial models for fundraising, budgeting, and business valuation.",
  },
  {
    icon: Rocket,
    title: "Startup Advisory",
    description:
      "End-to-end financial setup for startups from incorporation to Series funding.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Shield,
    title: "Audit & Assurance",
    description:
      "Statutory and internal audits ensuring transparency and regulatory compliance.",
  },
  {
    icon: BarChart3,
    title: "MIS & Reporting",
    description:
      "Real-time management reports and KPIs tailored to your business needs.",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Comprehensive financial due diligence for mergers, acquisitions, and investments.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
                Specializations
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif font-medium leading-tight">
                Comprehensive financial solutions for modern ventures.
              </h3>
            </div>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
              Tailored services designed to navigate the complexities of modern
              business finance and regulatory landscapes.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`bg-card border border-border/60 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between ${
        service.colSpan || ""
      }`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary transition-colors duration-500 -mr-10 -mt-10" />
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
          <service.icon className="w-5 h-5" />
        </div>
        <h4 className="text-lg font-medium tracking-tight">{service.title}</h4>
      </div>

      <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-colors duration-300">
        {service.description}
      </p>
    </motion.div>
  );
}
