"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircuitBackground } from "@/components/animations/CircuitBackground";
import { FloatingFiles } from "@/components/animations/FloatingFiles";
import { ArrowRight, Zap, Globe, Cpu, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingKeywords = [
  "Construction Tech", "Workflow Automation", "Project Management",
  "Open Source", "Infrastructure SaaS", "Digital Logistics",
  "Asset Coordination", "Facility Systems", "Enterprise Software"
];

export function HeroPhilosophy() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 font-sans">
      {/* Background Layers */}
      <div className="absolute inset-0 mesh-gradient opacity-30 z-0" />
      <div className="absolute inset-0 noise z-10" />
      
      <CircuitBackground />
      <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
        <FloatingFiles />
      </div>

      <div className="container relative z-30 mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100 mb-8"
            >
              <Zap className="w-3.5 h-3.5 fill-blue-700" />
              <span className="text-[10px] font-bold tracking-wider uppercase">
                Next-Gen Industrial Software
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-8"
            >
              Modular <br />
              <span className="text-blue-600">Intelligent</span> <br />
              Tech Resources
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-10 max-w-xl"
            >
              We build scalable digital infrastructure for industries that lack 
              standardized technological coordination. Our platform unifies 
              fragmented workflows into efficient, automated systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-md px-8 py-6 text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all font-semibold group">
                Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-md px-8 py-6 text-sm border-slate-200 text-slate-900 hover:bg-slate-50 transition-all font-semibold">
                View Solutions
              </Button>
            </motion.div>

            {/* Professional Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-slate-100 max-w-lg">
               {[
                 { label: "Active Systems", val: "1.2k+" },
                 { label: "Data Uptime", val: "99.9%" },
                 { label: "Key Sectors", val: "2 Main" }
               ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-xl font-bold text-slate-900 leading-none mb-1">{stat.val}</div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:w-2/5 w-full"
          >
             <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Cpu className="w-32 h-32 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  Platform Capabilities
                </h3>
                
                <div className="space-y-4">
                   {[
                     { t: "Scalable Infrastructure", d: "Robust data systems for high-volume workflows." },
                     { t: "Automated Operations", d: "Efficient software coordination across business units." },
                     { t: "Modular Deployment", d: "Scale functional modules independently as needed." },
                     { t: "Enterprise Security", d: "Standardized protocols for all platform services." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                           <div className="text-xs font-bold text-slate-900 mb-1">{item.t}</div>
                           <p className="text-xs text-slate-600 font-normal leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                   <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Operational Excellence</span>
                   <div className="flex gap-1">
                      {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors" style={{ transitionDelay: `${i * 100}ms` }} />)}
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden py-3 bg-white/50 backdrop-blur-sm z-40 border-y border-slate-100">
         <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...floatingKeywords, ...floatingKeywords].map((word, i) => (
              <div key={i} className="text-[10px] font-medium uppercase tracking-wider text-slate-400 flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-blue-600/20" />
                {word}
              </div>
            ))}
         </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
