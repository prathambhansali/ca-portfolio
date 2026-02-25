import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { config } from '@/config';
import { ArrowRight, Briefcase } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `${config.work.heading} | ${config.personal.name}`,
  description: config.work.description,
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="text-muted-foreground mb-4 text-[10px] font-bold tracking-[0.2em] uppercase">
              {config.work.heading}
            </h2>
            <h1 className="mb-6 font-serif text-4xl leading-tight font-medium md:text-6xl">
              {config.work.subheading}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {config.work.description}
            </p>
          </div>

          <div className="grid gap-8">
            {config.work.items.map((caseStudy, index) => (
              <Link
                key={caseStudy.slug}
                href={`/work/${caseStudy.slug}`}
                className="group bg-card border-border/60 shadow-primary/5 hover:border-primary/20 hover:shadow-primary/10 flex flex-col rounded-3xl border p-6 shadow-sm transition-all duration-500 md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12">
                  <div className="text-muted-foreground/50 mb-6 font-serif text-6xl font-bold">
                    0{index + 1}
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                      {caseStudy.industry}
                    </span>
                    <span className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                      {caseStudy.service}
                    </span>
                  </div>
                  <h3 className="group-hover:text-primary mb-4 font-serif text-2xl font-medium transition-colors md:text-3xl">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="md:border-border/60 mt-8 md:mt-0 md:w-1/2 md:border-l md:pl-12">
                  <div className="mb-4 flex items-center gap-2">
                    <Briefcase className="text-primary h-4 w-4" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">
                      {config.work.result}
                    </span>
                  </div>
                  <p className="mb-6 text-lg font-medium">{caseStudy.result}</p>
                  <div className="group/btn text-primary flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                    <span className="transition-transform group-hover/btn:translate-x-1">
                      View Case Study
                    </span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </div>
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
