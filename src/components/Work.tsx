"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    industry: "E-Commerce",
    service: "Virtual CFO",
    title: "Series A Funding Preparation",
    problem: "A D2C brand struggling with financial clarity needed to prepare for Series A funding.",
    solution:
      "Implemented robust financial modeling, created investor-ready dashboards, and streamlined bookkeeping.",
    result: "Successfully raised ₹15Cr with 3x valuation.",
    tags: ["E-Commerce", "Virtual CFO", "Fundraising"],
  },
  {
    industry: "Manufacturing",
    service: "Tax Planning",
    title: "Tax Optimization for Growth",
    problem: "A mid-sized manufacturing unit facing high tax liabilities due to inefficient structure.",
    solution:
      "Restructured business entities, implemented GST optimization, and utilized available tax incentives.",
    result: "Achieved 40% reduction in tax outflow.",
    tags: ["Manufacturing", "Tax Planning", "GST"],
  },
  {
    industry: "SaaS",
    service: "Startup Advisory",
    title: "From Bootstrapped to Profitable",
    problem: "A B2B SaaS company needed guidance on financial systems before scaling.",
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
    <section id="work" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-indigo-400 mb-2">Case Studies</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Selected Work
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. Here&apos;s how I&apos;ve helped businesses transform
            their finances.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/50 hover:border-indigo-500 text-foreground font-medium rounded-lg transition-all duration-300 hover-lift">
            View All Work
            <ArrowUpRight className="w-5 h-5" />
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
      className="glass rounded-xl overflow-hidden hover-lift group"
    >
      <div className="h-40 bg-gradient-to-br from-indigo-500/20 to-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.3),transparent)]" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          {study.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-navy/80 backdrop-blur-sm rounded-full text-xs text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
          {study.title}
        </h4>

        <div className="space-y-3 mt-4">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Problem
            </span>
            <p className="text-sm text-muted-foreground mt-1">{study.problem}</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Solution
            </span>
            <p className="text-sm text-muted-foreground mt-1">{study.solution}</p>
          </div>
          <div>
            <span className="text-xs text-gold uppercase tracking-wider">Result</span>
            <p className="text-sm font-medium text-foreground mt-1">{study.result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
