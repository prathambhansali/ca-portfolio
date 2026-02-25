import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { config } from '@/config';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = config.blog.items.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${post.title} | ${config.personal.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = config.blog.items.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-primary mb-12 inline-flex items-center gap-2 text-sm transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>

          <div className="mb-12">
            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-6 font-serif text-4xl leading-tight font-medium md:text-5xl">
              {post.title}
            </h1>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{post.excerpt}</p>

            <div className="text-muted-foreground flex flex-wrap items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <button className="text-muted-foreground hover:text-primary ml-auto flex items-center gap-2 transition-colors">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>

          <div className={`bg-gradient-to-r ${post.gradient} mb-12 h-1 rounded-full`} />

          <article className="prose prose-slate dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          </article>

          <div className="border-border/60 mt-20 border-t pt-12">
            <div className="bg-muted/30 rounded-3xl p-6 md:p-8">
              <h3 className="mb-4 font-serif text-2xl font-medium">
                Need help with {post.tags[0]}?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss how I can help your business navigate these challenges.
              </p>
              <Link
                href="/#contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
