'use client';

import { config } from '@/config';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = config.testimonials.items;

export default function Testimonials() {
  return (
    <section className="bg-muted/10 overflow-hidden py-24">
      <div className="mx-auto mb-20 max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center">
          <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            {config.testimonials.heading}
          </h2>
          <h3 className="mb-6 font-serif text-3xl font-medium md:text-5xl">
            {config.testimonials.subheading}
          </h3>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed font-light">
            {config.testimonials.description}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="from-background via-background/80 pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r to-transparent md:w-64" />
        <div className="from-background via-background/80 pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l to-transparent md:w-64" />

        <div className="animate-marquee flex py-10 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="bg-card border-border/60 hover:shadow-primary/5 group mx-6 w-80 flex-shrink-0 rounded-[2.5rem] border p-10 transition-all duration-500 hover:shadow-2xl md:w-[28rem]">
      <div className="mb-8 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="text-secondary fill-secondary h-3 w-3" />
        ))}
      </div>
      <p className="text-foreground mb-10 font-serif text-lg leading-relaxed italic">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="flex items-center gap-4">
        <div className="bg-primary shadow-primary/10 flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg">
          <span className="font-serif text-lg font-bold text-white">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-foreground text-sm font-bold tracking-tight">{testimonial.name}</div>
          <div className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase">
            {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}
