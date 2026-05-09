import { projects } from '@/data/projects';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Code2, Cpu, Database } from "lucide-react";
import Link from "next/link";
import { notFound } from 'next/navigation';

const IconMap: Record<string, React.ReactNode> = {
  'thunder': <Code2 className="w-8 h-8" />,
  'syncro': <Cpu className="w-8 h-8" />,
  'mitr-core': <Database className="w-8 h-8" />,
};

export async function generateStaticParams() {
  return projects.map(p => ({ projectSlug: p.slug }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ projectSlug: string }> 
}) {
  const { projectSlug } = await params;
  const project = projects.find(p => p.slug === projectSlug);
  
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-12 transition-colors group font-bold">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {project.category}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-heading font-black mb-8 tracking-tighter text-slate-900 leading-none">
                {project.title.toUpperCase()}
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed font-medium mb-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Button size="lg" className="rounded-xl px-10 py-8 text-xl font-black bg-slate-900 text-white shadow-xl flex items-center gap-2">
                  View Demo <ExternalLink className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl px-10 py-8 text-xl font-bold border-slate-200 flex items-center gap-2">
                  Source Code <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-[3rem] border border-slate-100 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative z-10 text-primary">
                  {IconMap[project.id] || <Code2 className="w-20 h-20" />}
                </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
