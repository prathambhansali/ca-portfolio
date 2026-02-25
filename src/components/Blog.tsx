'use client';

import { config } from '@/config';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const blogs = config.blog.items;

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="bg-muted/10 py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-primary mb-4 text-[10px] font-bold tracking-[0.3em] uppercase md:mb-6">
                {config.blog.heading}
              </h2>
              <h3 className="text-foreground font-serif text-3xl leading-[1.1] font-medium tracking-tight md:text-4xl lg:text-5xl">
                {config.blog.subheading}
              </h3>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed font-light md:text-base">
              {config.blog.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.title} blog={blog} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center md:mt-20">
          <Link href="/blog">
            <button className="bg-primary hover:bg-primary-light shadow-primary/20 relative overflow-hidden rounded-full px-10 py-4 text-[11px] font-bold tracking-[0.2em] text-white uppercase shadow-xl transition-all hover:scale-105 active:scale-95 md:px-12 md:py-5">
              <span className="relative z-10">{config.blog.cta}</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ blog, index }: { blog: (typeof blogs)[0]; index: number }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
        },
      }}
      className="group cursor-pointer">
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="bg-muted relative mb-8 aspect-[16/10] overflow-hidden rounded-[2rem]">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${blog.gradient || config.blog.items[index].gradient} opacity-40 transition-transform duration-700 group-hover:scale-110`}
          />
          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <span className="bg-card/60 text-primary border-border/20 rounded-full border px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-xl">
              {blog.tags[0]}
            </span>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="text-muted-foreground flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase">
            <span>{blog.date}</span>
            <span className="bg-primary/30 h-1.5 w-1.5 rounded-full" />
            <span>{blog.readTime}</span>
          </div>

          <h4 className="group-hover:text-primary font-serif text-2xl leading-[1.2] font-medium tracking-tight transition-colors duration-300 md:text-3xl">
            {blog.title}
          </h4>

          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed font-light md:text-base">
            {blog.excerpt}
          </p>

          <div className="text-primary flex items-center gap-3 pt-4 text-[10px] font-bold tracking-[0.3em] uppercase md:pt-6">
            Read Manuscript
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
