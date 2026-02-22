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

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 glass rounded-xl p-6 mx-4">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gold fill-gold" />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-gold flex items-center justify-center">
          <span className="text-white font-medium text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-medium text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-navy-light/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-medium text-indigo-400 mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across industries.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
