"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "GST Compliance Checklist for Startups in 2026",
    excerpt:
      "A comprehensive guide to understanding GST requirements and staying compliant from day one.",
    tags: ["GST", "Startups", "Compliance"],
    readTime: "5 min read",
    date: "Feb 20, 2026",
    image: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "5 Tax Saving Strategies for Growing Businesses",
    excerpt:
      "Maximize your tax savings with these proven strategies tailored for Indian businesses.",
    tags: ["Tax Planning", "Finance", "Growth"],
    readTime: "7 min read",
    date: "Feb 15, 2026",
    image: "from-gold-500/20 to-orange-500/20",
  },
  {
    title: "Financial Metrics Every Startup Founder Should Track",
    excerpt:
      "The essential KPIs and metrics that define startup success and attract investors.",
    tags: ["Startup", "Metrics", "Fundraising"],
    readTime: "6 min read",
    date: "Feb 10, 2026",
    image: "from-green-500/20 to-teal-500/20",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-12 md:py-24 bg-navy-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-indigo-400 mb-2">Blog</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Insights
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert perspectives on finance, taxation, and business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.title} blog={blog} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/50 hover:border-indigo-500 text-foreground font-medium rounded-lg transition-all duration-300 hover-lift">
            Read All Articles
            <ArrowRight className="w-5 h-5" />
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
      className="glass rounded-xl overflow-hidden hover-lift group cursor-pointer"
    >
      <div className={`h-40 bg-gradient-to-br ${blog.image} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <h4 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
          {blog.title}
        </h4>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </div>
          <span>{blog.date}</span>
        </div>
      </div>
    </motion.article>
  );
}
