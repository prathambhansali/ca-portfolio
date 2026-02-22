"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechVentures Pvt Ltd",
    text: "Prachiti transformed our financial混乱into clarity. Her virtual CFO services were instrumental in our Series A success.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "FashionFirst E-Commerce",
    text: "The tax planning expertise saved us significant money. Professional, responsive, and extremely knowledgeable.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "ManufacturePro",
    text: "Finally, an accountant who speaks business language. She helped us understand our numbers and make better decisions.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    company: "CloudSync SaaS",
    text: "Startup advisory at its best. She helped us set up financial systems that scaled with our growth.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "GreenEnergy Solutions",
    text: "Exceptional GST advisory. Made complex compliance simple and saved us from potential penalties.",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    company: "RetailHub",
    text: "The financial modeling was detailed and investor-ready. We secured funding within 3 months of engagement.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
            Accolades
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-medium mb-6">
            Voices of Partnership
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Trusted by founders and entrepreneurs to navigate their most
            critical financial milestones.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused] py-10">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-80 md:w-[28rem] bg-card border border-border/60 rounded-[2.5rem] p-10 mx-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group">
      <div className="flex gap-1 mb-8">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-secondary fill-secondary" />
        ))}
      </div>
      <p className="text-lg font-serif italic text-foreground mb-10 leading-relaxed">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/10">
          <span className="text-white font-serif font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-sm font-bold tracking-tight text-foreground">
            {testimonial.name}
          </div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
            {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}
