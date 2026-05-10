"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThreeHero } from "@/components/animations/ThreeHero";
import { FloatingFiles } from "@/components/animations/FloatingFiles";
import { Sparkles, ArrowRight, Zap, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingKeywords = [
  "Construction Intelligence", "Workforce Infrastructure", "Agentic Systems",
  "Open Innovation", "Infrastructure SaaS", "Vendor Networks",
  "Digital Coordination", "Student Ecosystems", "AI Operations"
];

export function HeroPhilosophy() {
  return (
    <section className="relative min-h-[110vh] bg-white overflow-hidden flex flex-col items-center justify-center pt-32 pb-20">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 mesh-gradient opacity-60 z-0" />
      <div className="absolute inset-0 noise z-10" />
      
      <ThreeHero />
      <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
        <FloatingFiles />
      </div>

      {/* Large Artistic Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-[20rem] md:text-[30rem] font-black text-slate-900 tracking-tighter"
        >
          MITR
        </motion.div>
      </div>

      <div className="container relative z-30 mx-auto px-6 text-center">
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-slate-900 mb-16 shadow-[8px_8px_0px_#000] group cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          <span className="text-xs font-black tracking-[0.3em] uppercase text-slate-900">
            Intelligence Layer 01
          </span>
        </motion.div>

        {/* Artistic Heading */}
        <div className="relative mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.9] text-slate-950"
          >
            MODULAR <br />
            <span className="relative">
              <span className="text-blue-600 italic">INTELLIGENT</span>
              {/* Decorative Red Accent */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-4 left-0 h-4 bg-crimson-600/20 -z-10 skew-x-12" 
              />
            </span>
            <br />
            TECH RESOURCES
          </motion.h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl text-slate-500 leading-relaxed font-medium tracking-tight"
          >
            Engineering modular digital infrastructure for industries that traditionally lack centralized coordination.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-8 py-8"
          >
            <Button size="lg" className="rounded-[2rem] px-16 py-12 text-2xl bg-slate-950 text-white hover:bg-blue-600 shadow-[12px_12px_0px_rgba(37,99,235,0.2)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all font-black uppercase tracking-widest group border-none">
              Initialize Core <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-3 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-[2rem] px-16 py-12 text-2xl bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-50 transition-all font-black uppercase tracking-widest shadow-[12px_12px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
              The Blueprint
            </Button>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto opacity-50 hover:opacity-100 transition-opacity">
           {[
             { icon: <Zap />, text: "Zero Latency Orchestration" },
             { icon: <Globe />, text: "Global Node Distribution" },
             { icon: <Cpu />, text: "Agentic AI Core" }
           ].map((feat, i) => (
             <div key={i} className="flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
                <div className="text-blue-600">{feat.icon}</div>
                {feat.text}
             </div>
           ))}
        </div>
      </div>

      {/* Floating Keywords Marquee - Updated Styling */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden py-4 border-y border-slate-100 bg-white/50 backdrop-blur-sm z-40">
         <div className="flex animate-marquee whitespace-nowrap gap-16">
            {[...floatingKeywords, ...floatingKeywords].map((word, i) => (
              <div key={i} className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 hover:text-blue-600 transition-colors cursor-default flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600/30" />
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
          animation: marquee 40s linear infinite;
        }
        .text-crimson-600 { color: #dc143c; }
        .bg-crimson-600\/20 { background-color: rgba(220, 20, 60, 0.2); }
      `}</style>
    </section>
  );
}
