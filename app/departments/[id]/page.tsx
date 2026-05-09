import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { ContactSection } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Zap, Shield, BarChart } from "lucide-react";
import Link from "next/link";

const departmentData = {
  karya: {
    title: "KARYA",
    subtitle: "Construction Intelligence OS",
    description: "The ultimate operating system for modern construction. KARYA brings intelligence to every stage of your building process.",
    features: [
      "AI-Powered Site Monitoring",
      "Real-time Workforce Analytics",
      "Automated Material Tracking",
      "Predictive Delay Analysis"
    ],
    accent: "text-primary"
  },
  buildlink: {
    title: "BuildLink",
    subtitle: "Infrastructure Marketplace",
    description: "A connected ecosystem for construction services and materials. BuildLink bridges the gap between vision and reality.",
    features: [
      "Verified Vendor Network",
      "Smart Procurement Engine",
      "Integrated Logistics",
      "Contractor Matching AI"
    ],
    accent: "text-accent"
  }
};

export default function DepartmentProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = departmentData[id as keyof typeof departmentData];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Ecosystem
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className={`text-6xl font-heading font-black mb-4 tracking-tighter ${data.accent}`}>
              {data.title}
            </h1>
            <p className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest">
              {data.subtitle}
            </p>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {data.description}
            </p>
            
            <div className="space-y-4 mb-12">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className={`w-5 h-5 ${data.accent}`} />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className={`rounded-xl px-8 py-7 text-lg ${id === 'karya' ? 'bg-primary' : 'bg-accent'} text-white`}>
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 py-7 text-lg border-slate-200">
                Download Specs
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 ${id === 'karya' ? 'bg-primary/10' : 'bg-accent/10'} rounded-[3rem] blur-3xl`} />
            <div className="relative bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 aspect-square flex items-center justify-center overflow-hidden">
               {/* Visual representation placeholder */}
               <div className="grid grid-cols-2 gap-4 w-full h-full opacity-40">
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between">
                    <BarChart className={`w-8 h-8 ${data.accent}`} />
                    <div className="h-2 w-3/4 bg-slate-100 rounded" />
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between">
                    <Zap className={`w-8 h-8 ${data.accent}`} />
                    <div className="h-2 w-1/2 bg-slate-100 rounded" />
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between">
                    <Shield className={`w-8 h-8 ${data.accent}`} />
                    <div className="h-2 w-2/3 bg-slate-100 rounded" />
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between">
                    <div className={`w-8 h-8 rounded-full ${data.accent} opacity-20`} />
                    <div className="h-2 w-full bg-slate-100 rounded" />
                  </div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-9xl font-black opacity-10 ${data.accent}`}>{data.title[0]}</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
