'use client';

import { config } from '@/config';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = config.testimonials.items;

export default function Testimonials() {
  return (
    <section className="bg-muted/10 overflow-hidden py-16 md:py-20">
      <div className="mx-auto mb-16 max-w-7xl px-6 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center">
          <h2 className="text-primary mb-4 text-[10px] font-bold tracking-[0.3em] uppercase md:mb-6">
            {config.testimonials.heading}
          </h2>
          <h3 className="mb-6 font-serif text-3xl leading-[1.1] font-medium tracking-tight md:mb-8 md:text-4xl lg:text-5xl">
            {config.testimonials.subheading}
          </h3>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed font-light md:text-base">
            {config.testimonials.description}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="from-background via-background/90 pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent md:w-32 lg:w-96" />
        <div className="from-background via-background/90 pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l to-transparent md:w-32 lg:w-96" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="animate-marquee flex py-10 hover:[animation-play-state:paused] md:py-16">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as any },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-card group border-border/50 hover:border-primary/20 relative mx-4 w-[300px] flex-shrink-0 overflow-hidden rounded-[2.5rem] border p-6 transition-all duration-500 hover:shadow-2xl md:mx-8 md:w-[24rem] md:p-8">
      <div className="bg-primary/5 absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-bl-[3rem] transition-all duration-500 md:-mt-12 md:-mr-12 md:h-40 md:w-40 md:rounded-bl-[5rem]" />

      <div className="relative z-10 mb-8 flex gap-1 md:mb-12">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="text-secondary fill-secondary h-3.5 w-3.5 md:h-4 md:w-4" />
        ))}
      </div>

      <p className="text-foreground relative z-10 mb-10 font-serif text-base leading-relaxed md:text-lg lg:text-xl">
        &quot;{testimonial.text}&quot;
      </p>

      <div className="relative z-10 flex items-center gap-4 md:gap-6">
        <div className="bg-primary shadow-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl shadow-xl md:h-16 md:w-16">
          <span className="font-serif text-xl font-bold text-white md:text-2xl">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-foreground text-sm font-bold tracking-tight md:text-base lg:text-lg">
            {testimonial.name}
          </div>
          <div className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase md:text-xs">
            {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
