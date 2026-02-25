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
    <section id="blog" className="bg-muted/10 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
                {config.blog.heading}
              </h2>
              <h3 className="text-foreground font-serif text-3xl leading-tight font-medium md:text-5xl">
                {config.blog.subheading}
              </h3>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed font-light">
              {config.blog.description}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.title} blog={blog} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center">
          <Link href="/blog">
            <button className="bg-primary hover:bg-primary-light shadow-primary/10 rounded-full px-8 py-4 text-[10px] font-bold tracking-widest text-white uppercase shadow-lg transition-all">
              {config.blog.cta}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({
  blog,
  index,
  isInView,
}: {
  blog: (typeof blogs)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer">
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="bg-muted relative mb-8 aspect-[16/10] overflow-hidden rounded-[2rem]">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${blog.gradient || config.blog.items[index].gradient} opacity-50 transition-transform duration-700 group-hover:scale-105`}
          />
          <div className="absolute top-6 left-6">
            <span className="bg-card/80 text-primary border-border/20 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              {blog.tags[0]}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-muted-foreground flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            <span>{blog.date}</span>
            <span className="bg-border h-1 w-1 rounded-full" />
            <span>{blog.readTime}</span>
          </div>

          <h4 className="group-hover:text-primary font-serif text-2xl leading-tight font-medium transition-colors duration-300">
            {blog.title}
          </h4>

          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed font-light">
            {blog.excerpt}
          </p>

          <div className="text-foreground group-hover:text-primary flex items-center gap-2 pt-4 text-[10px] font-bold tracking-widest uppercase transition-colors">
            Read Manuscript{' '}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
