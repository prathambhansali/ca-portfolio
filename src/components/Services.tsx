"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  LineChart,
  FileText,
  Calculator,
  TrendingUp,
  Rocket,
  Shield,
  BarChart3,
  Search,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Virtual CFO Services",
    description:
      "Full-spectrum financial leadership including strategy, planning, and stakeholder management.",
    colSpan: "lg:col-span-2",
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
    colSpan: "lg:col-span-2",
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
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-indigo-400 mb-2">Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Financial Solutions
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored services designed to meet the unique financial needs of modern
            businesses and startups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`card-gradient-border p-6 hover-lift group ${service.colSpan || ""}`}
    >
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
          <service.icon className="w-6 h-6 text-indigo-400" />
        </div>
        <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          className="flex items-center gap-2 text-indigo-400 text-sm font-medium"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}
