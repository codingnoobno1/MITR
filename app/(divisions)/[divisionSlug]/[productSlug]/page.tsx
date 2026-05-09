import { divisions } from '@/data/divisions';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Globe, Zap, Cpu, Shield, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from 'next/navigation';
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const params: { divisionSlug: string; productSlug: string }[] = [];
  
  divisions.forEach(division => {
    division.products?.forEach(product => {
      params.push({
        divisionSlug: division.slug,
        productSlug: product.slug
      });
    });
  });
  
  return params;
}

export default function ProductPage({ 
  params 
}: { 
  params: { divisionSlug: string; productSlug: string } 
}) {
  const division = divisions.find(d => d.slug === params.divisionSlug);
  const product = division?.products?.find(p => p.slug === params.productSlug);
  
  if (!product || !division) notFound();

  const isKarya = division.id === 'karya';
  const accentColorClass = isKarya ? "text-primary" : "text-accent";
  const bgColorClass = isKarya ? "bg-primary/5" : "bg-accent/5";
  const buttonColorClass = isKarya ? "bg-primary" : "bg-accent";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <Link href={`/${division.slug}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-12 transition-colors group font-bold">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to {division.name}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgColorClass} mb-6`}>
              <span className={`text-[10px] font-black uppercase tracking-widest ${accentColorClass}`}>
                {product.status || 'Active'}
              </span>
            </div>
            <h1 className={`text-6xl md:text-7xl font-heading font-black mb-6 tracking-tighter text-slate-900`}>
              {product.name}
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed font-medium mb-8">
              {product.description}
            </p>
            
            {product.details?.longDescription && (
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                {product.details.longDescription}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {product.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className={`w-5 h-5 shrink-0 ${accentColorClass}`} />
                  <span className="font-bold text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className={`rounded-xl px-10 py-8 text-xl font-black ${buttonColorClass} text-white shadow-xl`}>
                {product.details?.cta?.text || "Get Started"}
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-10 py-8 text-xl font-bold border-slate-200">
                Documentation
              </Button>
            </div>
          </div>

          <div className="relative aspect-square bg-slate-50 rounded-[3rem] border border-slate-100 p-12 overflow-hidden flex items-center justify-center">
            <div className={`absolute inset-0 ${bgColorClass} opacity-50 blur-3xl`} />
            <div className="relative z-10 text-center">
              {/* Product Visual Placeholder */}
              <div className={`w-32 h-32 rounded-3xl ${buttonColorClass} flex items-center justify-center text-white mb-8 mx-auto shadow-2xl`}>
                {i === 0 ? <Globe className="w-16 h-16" /> : <Zap className="w-16 h-16" />}
              </div>
              <h3 className="text-3xl font-heading font-black text-slate-900 mb-4">Intelligence Platform</h3>
              <div className="flex justify-center gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full ${buttonColorClass} w-2/3 animate-pulse`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
