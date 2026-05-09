import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { ContactSection } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Zap, Shield, Globe, Cpu, Building2 } from "lucide-react";
import Link from "next/link";
import { getDivisionBySlug } from "@/data/divisions";
import { cn } from "@/lib/utils";

// Icon mapping for products
const ProductIconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
};

// Map division icon name to Lucide for the header (optional, if we want an icon there)
const DivisionIconMap: Record<string, React.ReactNode> = {
  building2: <Building2 className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
};

export default function DepartmentProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = getDivisionBySlug(id);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Division Not Found</h1>
          <Link href="/" className="text-primary font-bold">Return to Ecosystem</Link>
        </div>
      </div>
    );
  }

  const isKarya = data.id === 'karya';
  const accentColorClass = isKarya ? "text-primary" : "text-accent";
  const bgColorClass = isKarya ? "bg-primary/5" : "bg-accent/5";
  const borderColorClass = isKarya ? "border-primary/10" : "border-accent/10";
  const buttonColorClass = isKarya ? "bg-primary shadow-primary/20" : "bg-accent shadow-accent/20";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <Link href="/#ecosystem" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-12 transition-colors group font-bold">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Ecosystem
        </Link>

        <div className="max-w-4xl mb-20">
          <h1 className={`text-6xl md:text-8xl font-heading font-black mb-6 tracking-tighter ${accentColorClass}`}>
            {data.name}
          </h1>
          <p className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-[0.3em]">
            {data.subtitle}
          </p>
          <p className="text-2xl text-slate-600 leading-relaxed font-medium">
            {data.description}
          </p>
          {data.longDescription && (
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-3xl">
              {data.longDescription}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-heading font-black mb-10 text-slate-900 flex items-center gap-3">
              <span className={`w-2 h-8 rounded-full ${isKarya ? 'bg-primary' : 'bg-accent'}`} />
              CORE PRODUCTS
            </h2>
            
            <div className="space-y-6">
              {data.products.map((product, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",
                      accentColorClass
                    )}>
                      {/* Using generic icons for now based on index or name, as data didn't have specific icon fields for products */}
                      {i === 0 ? <Globe className="w-6 h-6" /> : i === 1 ? <Zap className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {product.description}
                      </p>
                      {product.features && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {product.features.slice(0, 3).map((f, j) => (
                            <span key={j} className="text-[10px] font-bold px-2 py-1 rounded-md bg-white border border-slate-100 text-slate-400 uppercase tracking-widest">
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`p-10 rounded-[2.5rem] ${bgColorClass} border ${borderColorClass}`}>
              <h2 className="text-xl font-heading font-black mb-8 text-slate-900 uppercase tracking-widest">Division Insights</h2>
              <div className="grid grid-cols-1 gap-6 mb-10">
                {data.stats?.map((stat, i) => (
                  <div key={i} className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className={`text-2xl font-black ${accentColorClass}`}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {data.metadata && (
                <div className="mb-10">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Primary Focus</div>
                  <div className="text-lg font-bold text-slate-800">{data.metadata.focusArea}</div>
                </div>
              )}

              <div className="space-y-4">
                <Button size="lg" className={`w-full rounded-2xl py-8 text-xl font-black ${buttonColorClass} text-white shadow-xl hover:scale-[1.02] transition-transform`}>
                  Access Division
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
