"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Cpu, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreeHero } from "@/components/animations/ThreeHero";
import { FloatingFiles } from "@/components/animations/FloatingFiles";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Backgrounds */}
      <ThreeHero />
      <FloatingFiles />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900/5 backdrop-blur-xl border border-slate-900/10 mb-12 shadow-2xl shadow-primary/5"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
            Intelligent Infrastructure ecosystem
          </span>
        </motion.div>

        <div className="relative mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-heading font-black tracking-tighter leading-[0.85] text-slate-900"
          >
            MODULAR <br />
            <span className="text-primary italic">INTELLIGENT</span> <br />
            TECH RESOURCES
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 mb-16 font-medium leading-relaxed"
        >
          An interconnected intelligence engine for construction, 
          infrastructure, and digital-first traditional industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="rounded-2xl px-12 py-9 text-xl bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/20 transition-all group font-black uppercase tracking-widest">
            Explore Ecosystem
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-2xl px-12 py-9 text-xl bg-white border-slate-200 text-slate-900 hover:bg-slate-50 transition-all font-black uppercase tracking-widest">
            View Projects
          </Button>
        </motion.div>

        {/* Hero Meta Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex flex-wrap justify-center gap-16 pt-12 border-t border-slate-100"
        >
          {[
            { label: "AI Engines", value: "Active", color: "text-primary" },
            { label: "Deployment", value: "Global", color: "text-slate-900" },
            { label: "Uptime", value: "99.9%", color: "text-green-500" },
            { label: "Nodes", value: "Modular", color: "text-slate-900" },
          ].map((item, i) => (
            <div key={i} className="text-left group cursor-default">
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black mb-1 group-hover:text-primary transition-colors">{item.label}</div>
              <div className={`text-2xl font-black font-heading ${item.color} tracking-tighter`}>{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
