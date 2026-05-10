"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThreeHero } from "@/components/animations/ThreeHero";
import { FloatingFiles } from "@/components/animations/FloatingFiles";
import { Sparkles, ArrowRight, Zap, Globe, Cpu, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingKeywords = [
  "Construction Intelligence", "Workforce Infrastructure", "Agentic Systems",
  "Open Innovation", "Infrastructure SaaS", "Vendor Networks",
  "Digital Coordination", "Student Ecosystems", "AI Operations"
];

export function HeroPhilosophy() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center pt-24 pb-16">
      {/* Background Layers */}
      <div className="absolute inset-0 mesh-gradient opacity-40 z-0" />
      <div className="absolute inset-0 noise z-10" />
      
      <ThreeHero />
      <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
        <FloatingFiles />
      </div>

      <div className="container relative z-30 mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content: Condensed Heading & Description */}
          <div className="lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[9px] font-black tracking-[0.2em] uppercase text-slate-500">
                Industrial Intelligence v2.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-none text-slate-950 mb-8 uppercase"
            >
              MODULAR <br />
              <span className="text-blue-600">INTELLIGENT</span> <br />
              TECH RESOURCES
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium tracking-tight mb-10 max-w-xl"
            >
              Building the foundational intelligence layer for fragmented industries. 
              We engineer scalable digital infrastructure through modular nodes 
              and autonomous orchestration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-xl px-8 py-6 text-sm bg-slate-950 text-white hover:bg-blue-600 shadow-lg shadow-slate-200 transition-all font-black uppercase tracking-widest group border-none">
                Initialize System <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 py-6 text-sm bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all font-black uppercase tracking-widest">
                The Architecture
              </Button>
            </motion.div>

            {/* Quick Stats/Details */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-slate-100 max-w-lg">
               {[
                 { label: "Nodes Active", val: "1.2k+" },
                 { label: "Sync Latency", val: "<5ms" },
                 { label: "Industries", val: "2 Main" }
               ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-xl font-black text-slate-900 leading-none mb-1">{stat.val}</div>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Content: Detailed Feature Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:w-2/5 w-full"
          >
             <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Cpu className="w-32 h-32 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-black text-slate-950 mb-6 uppercase tracking-tight flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  System Capabilities
                </h3>
                
                <div className="space-y-4">
                   {[
                     { t: "Neural Infrastructure", d: "Scalable data mesh for industrial workflows." },
                     { t: "Agentic Orchestration", d: "Autonomous AI coordination across nodes." },
                     { t: "Modular Scaling", d: "Independent deployment of functional units." },
                     { t: "Integrated Auth", d: "Unified security layer for all ecosystems." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                           <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">{item.t}</div>
                           <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Status: System Optimal</span>
                   <div className="flex gap-1">
                      {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-blue-600 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee - Condensed */}
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden py-3 bg-white/50 backdrop-blur-sm z-40 border-y border-slate-100">
         <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...floatingKeywords, ...floatingKeywords].map((word, i) => (
              <div key={i} className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
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
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
