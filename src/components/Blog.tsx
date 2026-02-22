"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const blogs = [
  {
    title: "GST Compliance Checklist for Startups in 2026",
    excerpt:
      "A comprehensive guide to understanding GST requirements and staying compliant from day one.",
    tags: ["GST", "Startups", "Compliance"],
    readTime: "5 min read",
    date: "Feb 20, 2026",
    image: "from-primary/10 to-purple-500/10",
  },
  {
    title: "5 Tax Saving Strategies for Growing Businesses",
    excerpt:
      "Maximize your tax savings with these proven strategies tailored for Indian businesses.",
    tags: ["Tax Planning", "Finance", "Growth"],
    readTime: "7 min read",
    date: "Feb 15, 2026",
    image: "from-secondary/10 to-orange-500/10",
  },
  {
    title: "Financial Metrics Every Startup Founder Should Track",
    excerpt:
      "The essential KPIs and metrics that define startup success and attract investors.",
    tags: ["Startup", "Metrics", "Fundraising"],
    readTime: "6 min read",
    date: "Feb 10, 2026",
    image: "from-green-500/10 to-teal-500/10",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 md:py-32 bg-muted/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
                Mindshare
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-foreground">
                Perspectives on the economic landscape.
              </h3>
            </div>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
              Expert insights on taxation, fiscal planning, and strategic growth
              for modern enterprises.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <BlogCard
              key={blog.title}
              blog={blog}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20">
          <button className="px-8 py-4 bg-primary text-white rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/10">
            Access All Insights
          </button>
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
      <div className="relative aspect-[16/10] bg-muted rounded-[2rem] overflow-hidden mb-8">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${blog.image} opacity-50 group-hover:scale-105 transition-transform duration-700`}
        />
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-card/80 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-primary border border-border/20">
            {blog.tags[0]}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
          <span>{blog.date}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{blog.readTime}</span>
        </div>

        <h4 className="text-2xl font-serif font-medium leading-tight group-hover:text-primary transition-colors duration-300">
          {blog.title}
        </h4>

        <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground group-hover:text-primary transition-colors pt-4">
          Read Manuscript{" "}
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.article>
  );
}
