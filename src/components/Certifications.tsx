"use client";

import { motion, useInView } from "framer-motion";
import {
  Award,
  BarChart3,
  BookOpen,
  Calculator,
  FileSpreadsheet,
} from "lucide-react";
import { useRef } from "react";

const tools = [
  { name: "ICAI", icon: Award, category: "Certification" },
  { name: "GST", icon: FileSpreadsheet, category: "Tax" },
  { name: "Tally", icon: Calculator, category: "Accounting" },
  { name: "Excel", icon: BarChart3, category: "Analysis" },
  { name: "Power BI", icon: BarChart3, category: "Visualization" },
  { name: "QuickBooks", icon: BookOpen, category: "Accounting" },
  { name: "Zoho Books", icon: BookOpen, category: "Accounting" },
  { name: "SAP", icon: Calculator, category: "ERP" },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
            Competencies
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-medium mb-6">
            Certifications & Systems
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Industry-standard credentials and deep technical proficiency in
            modern financial ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-8 bg-muted/20 border border-transparent hover:border-border hover:bg-card hover:shadow-xl hover:shadow-primary/5 rounded-[2rem] transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                <tool.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold tracking-tight text-foreground mb-1">
                {tool.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
