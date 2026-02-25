import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { config } from '@/config';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `${config.blog.heading} | ${config.personal.name}`,
  description: config.blog.description,
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
              {config.blog.heading}
            </h2>
            <h1 className="mb-6 font-serif text-4xl leading-tight font-medium md:text-6xl">
              {config.blog.subheading}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {config.blog.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {config.blog.items.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card border-border/60 shadow-primary/5 hover:border-primary/20 hover:shadow-primary/10 flex flex-col rounded-3xl border p-6 shadow-sm transition-all duration-500">
                <div className={`bg-gradient-to-br ${post.gradient} mb-6 h-32 rounded-2xl`} />

                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="group-hover:text-primary mb-4 font-serif text-xl font-medium transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed font-light">
                  {post.excerpt}
                </p>

                <div className="text-muted-foreground flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <div className="group/btn text-primary mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                  <span className="transition-transform group-hover/btn:translate-x-1">
                    {config.blog.readMore}
                  </span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
