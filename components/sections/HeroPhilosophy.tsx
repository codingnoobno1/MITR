"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ThreeHero } from "@/components/animations/ThreeHero";
import { FloatingFiles } from "@/components/animations/FloatingFiles";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingKeywords = [
  "Construction Intelligence", "Workforce Infrastructure", "Agentic Systems",
  "Open Innovation", "Infrastructure SaaS", "Vendor Networks",
  "Digital Coordination", "Student Ecosystems", "AI Operations"
];

export function HeroPhilosophy() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col items-center justify-center pt-20">
      {/* Background Layer */}
      <ThreeHero />
      <FloatingFiles />
      
      {/* Glowing Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }} 
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-12"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">
            Modular Intelligence Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[10rem] font-heading font-black tracking-tighter leading-[0.8] mb-12 text-white"
        >
          MODULAR <br />
          <span className="text-primary italic">INTELLIGENT</span> <br />
          TECH RESOURCES
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium"
          >
            MITR is a modular intelligence ecosystem focused on transforming fragmented and unorganized industries through scalable digital infrastructure, intelligent systems, and AI-powered operational platforms.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 py-8"
          >
            <Button size="lg" className="rounded-2xl px-12 py-9 text-xl bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/40 transition-all font-black uppercase tracking-widest group">
              Build The Future <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Floating Keywords */}
        <div className="mt-24 relative h-12 overflow-hidden w-full">
           <div className="flex animate-marquee whitespace-nowrap gap-12">
              {[...floatingKeywords, ...floatingKeywords].map((word, i) => (
                <div key={i} className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 hover:text-primary transition-colors cursor-default">
                  {word}
                </div>
              ))}
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
