"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const caseStudies = [
  {
    industry: "E-Commerce",
    service: "Virtual CFO",
    title: "Series A Funding Preparation",
    problem:
      "A D2C brand struggling with financial clarity needed to prepare for Series A funding.",
    solution:
      "Implemented robust financial modeling, created investor-ready dashboards, and streamlined bookkeeping.",
    result: "Successfully raised ₹15Cr with 3x valuation.",
    tags: ["E-Commerce", "Virtual CFO", "Fundraising"],
  },
  {
    industry: "Manufacturing",
    service: "Tax Planning",
    title: "Tax Optimization for Growth",
    problem:
      "A mid-sized manufacturing unit facing high tax liabilities due to inefficient structure.",
    solution:
      "Restructured business entities, implemented GST optimization, and utilized available tax incentives.",
    result: "Achieved 40% reduction in tax outflow.",
    tags: ["Manufacturing", "Tax Planning", "GST"],
  },
  {
    industry: "SaaS",
    service: "Startup Advisory",
    title: "From Bootstrapped to Profitable",
    problem:
      "A B2B SaaS company needed guidance on financial systems before scaling.",
    solution:
      "Set up complete finance stack, implemented revenue recognition policies, and created KPIs.",
    result: "Achieved 200% YoY growth with clear unit economics.",
    tags: ["SaaS", "Startup Advisory", "Financial Modeling"],
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-medium mb-6">
            Selected Case Studies
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Real results from real clients. Here&apos;s how I&apos;ve helped
            businesses scale through strategic financial leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.title}
              study={study}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16">
          <button className="px-8 py-4 border border-border rounded-full text-xs uppercase tracking-widest font-bold hover:bg-muted transition-all duration-300">
            View Archive
          </button>
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border/60 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group flex flex-col h-full">
      <div className="p-10 flex-grow">
        <div className="flex flex-wrap gap-2 mb-8">
          {study.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-muted rounded-full text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <h4 className="text-2xl font-serif font-medium mb-6 leading-tight group-hover:text-primary transition-colors">
          {study.title}
        </h4>

        <div className="space-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 mb-2">
              Challenge
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              {study.problem}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary mb-2 uppercase">
              Outcome
            </p>
            <p className="text-lg font-medium text-foreground tracking-tight">
              {study.result}
            </p>
          </div>
        </div>
      </div>

      <div className="px-10 py-6 bg-muted/30 border-t border-border/40 flex items-center justify-between group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <span className="text-xs uppercase tracking-widest font-bold">
          Deep Dive
        </span>
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}
