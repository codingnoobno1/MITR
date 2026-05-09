import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { ContactSection } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Zap, Shield, BarChart, Code2, Globe, Cpu } from "lucide-react";
import Link from "next/link";

const departmentData = {
  karya: {
    title: "KARYA",
    subtitle: "Construction Intelligence OS",
    description: "Solving the challenges of a disorganized construction and real estate industry through modular intelligent systems.",
    accent: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/10",
    products: [
      {
        name: "Vendor Connect",
        description: "Intelligent B2B supplier network for seamless procurement and material management.",
        icon: <Globe className="w-6 h-6 text-primary" />
      },
      {
        name: "BuildLink",
        description: "Connecting contractors, architects, and customers in a unified infrastructure marketplace.",
        icon: <Zap className="w-6 h-6 text-primary" />
      }
    ],
    features: ["Industrial Blueprint UI", "Real-time Site Monitoring", "Automated Quotations", "Site Progress Tracker"]
  },
  "sankalap-community": {
    title: "SANKALAP COMMUNITY",
    subtitle: "Innovation & Open-Source Backbone",
    description: "Empowering traditional computing with Agentic AI systems and student-led software innovation.",
    accent: "text-accent",
    bg: "bg-accent/5",
    border: "border-accent/10",
    products: [
      {
        name: "SYNCRO Desktop Agent",
        description: "AI-powered workstation orchestration for developers and autonomous task management.",
        icon: <Cpu className="w-6 h-6 text-accent" />
      },
      {
        name: "PG CONNECT",
        description: "Smart accommodation ecosystem for students and professionals with digital rental management.",
        icon: <Globe className="w-6 h-6 text-accent" />
      },
      {
        name: "House Helpers",
        description: "Intelligent home workforce platform for verification, safety, and smart hiring.",
        icon: <Shield className="w-6 h-6 text-accent" />
      }
    ],
    features: ["Agentic AI Workflows", "SaaS Modernization", "Open-Source Hub", "Student Collaboration Network"]
  }
};

export default function DepartmentProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = departmentData[id as keyof typeof departmentData];

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

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6">
        <Link href="/#ecosystem" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-12 transition-colors group font-bold">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Ecosystem
        </Link>

        <div className="max-w-4xl mb-20">
          <h1 className={`text-6xl md:text-8xl font-heading font-black mb-6 tracking-tighter ${data.accent}`}>
            {data.title}
          </h1>
          <p className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-[0.3em]">
            {data.subtitle}
          </p>
          <p className="text-2xl text-slate-600 leading-relaxed font-medium">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-heading font-black mb-10 text-slate-900 flex items-center gap-3">
              <span className={`w-2 h-8 rounded-full ${id === 'karya' ? 'bg-primary' : 'bg-accent'}`} />
              CORE PRODUCTS
            </h2>
            
            <div className="space-y-6">
              {data.products.map((product, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`p-10 rounded-[2.5rem] ${data.bg} border ${data.border}`}>
              <h2 className="text-xl font-heading font-black mb-8 text-slate-900 uppercase tracking-widest">Division Features</h2>
              <div className="space-y-6">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-800">
                    <CheckCircle2 className={`w-6 h-6 shrink-0 ${data.accent}`} />
                    <span className="font-bold text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-10 border-t border-slate-200/50">
                <Button size="lg" className={`w-full rounded-2xl py-8 text-xl font-black ${id === 'karya' ? 'bg-primary shadow-primary/20' : 'bg-accent shadow-accent/20'} text-white shadow-xl hover:scale-[1.02] transition-transform`}>
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
