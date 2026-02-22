"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, FileSpreadsheet, Calculator, BarChart3, BookOpen } from "lucide-react";

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
    <section className="py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-2">
            Certifications & Tools
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Professional Expertise
          </h3>
          <p className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
            Industry-recognized certifications and proficiency in modern financial tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center hover-lift group"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <tool.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm">{tool.name}</span>
              <span className="text-xs text-muted-foreground mt-1">{tool.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
