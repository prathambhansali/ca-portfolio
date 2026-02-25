import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { config } from '@/config';
import { ArrowLeft, Briefcase, Lightbulb, Target, Trophy } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = config.work.items.find(w => w.slug === slug);

  if (!caseStudy) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${caseStudy.title} | ${config.personal.name}`,
    description: caseStudy.problem,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = config.work.items.find(w => w.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/work"
            className="text-muted-foreground hover:text-primary mb-12 inline-flex items-center gap-2 text-sm transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to all case studies
          </Link>

          <div className="mb-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                {caseStudy.industry}
              </span>
              <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                {caseStudy.service}
              </span>
            </div>
            <h1 className="mb-6 font-serif text-4xl leading-tight font-medium md:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{caseStudy.problem}</p>
          </div>

          <div className="space-y-12">
            <div className="bg-muted/30 rounded-3xl p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-destructive/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Target className="text-destructive h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {config.work.problem}
                </span>
              </div>
              <p className="text-foreground leading-relaxed">{caseStudy.problem}</p>
            </div>

            <div className="bg-muted/30 rounded-3xl p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Lightbulb className="text-primary h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {config.work.solution}
                </span>
              </div>
              <p className="text-foreground leading-relaxed">{caseStudy.solution}</p>
            </div>

            <div className="bg-primary/10 rounded-3xl p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {config.work.result}
                </span>
              </div>
              <p className="text-foreground text-xl leading-relaxed font-medium">
                {caseStudy.result}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {caseStudy.tags.map(tag => (
              <span
                key={tag}
                className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>

          <div className="border-border/60 mt-20 border-t pt-12">
            <div className="bg-muted/30 rounded-3xl p-6 md:p-8">
              <h3 className="mb-4 font-serif text-2xl font-medium">
                Interested in similar results?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss how I can help your {caseStudy.industry.toLowerCase()} business
                achieve its financial goals.
              </p>
              <Link
                href="/#contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors">
                <Briefcase className="h-4 w-4" />
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
