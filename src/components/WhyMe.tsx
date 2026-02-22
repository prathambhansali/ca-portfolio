"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, MessageSquare, DollarSign, Clock } from "lucide-react";

const usps = [
  {
    icon: Lightbulb,
    title: "Practical, not just theoretical",
    description:
      "I translate complex financial concepts into actionable strategies that drive real business results.",
  },
  {
    icon: MessageSquare,
    title: "Plain language, no jargon",
    description:
      "No confusing accounting speak. I explain everything in clear, understandable terms.",
  },
  {
    icon: DollarSign,
    title: "Startup-friendly pricing",
    description:
      "Flexible engagement models designed for startups and growing businesses at every stage.",
  },
  {
    icon: Clock,
    title: "Always available, proactive approach",
    description:
      "I'm just a call away. Plus, I anticipate issues before they become problems.",
  },
];

export default function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-medium text-primary mb-2">Why Choose Me</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What Sets Me Apart
          </h3>
          <p className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
            My commitment to client success goes beyond traditional accounting services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-6 glass rounded-xl hover-lift"
            >
              <div className="flex-shrink-0">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <usp.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">{usp.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
