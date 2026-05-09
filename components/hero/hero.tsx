"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        
        {/* Simple Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }} 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
            Intelligent Infrastructure Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-heading font-black mb-6 tracking-tighter leading-none text-slate-900"
        >
          MODULAR <br />
          <span className="text-gradient">INTELLIGENT</span> <br />
          TECH RESOURCES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-10 font-sans leading-relaxed"
        >
          Building connected ecosystems for construction, infrastructure, 
          and intelligent operations with a focus on modular efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-xl px-8 py-7 text-lg bg-primary text-white hover:bg-primary/90 glow-primary transition-all group font-bold">
            Explore Ecosystem
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl px-8 py-7 text-lg bg-white border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-bold">
            View Projects
          </Button>
        </motion.div>

        {/* Hero Stats/Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-10 border-t border-slate-100"
        >
          {[
            { icon: <Cpu className="w-5 h-5" />, label: "AI Labs", value: "Operational" },
            { icon: <Globe className="w-5 h-5" />, label: "Ecosystem", value: "Connected" },
            { icon: <Sparkles className="w-5 h-5" />, label: "Innovation", value: "Focused" },
            { icon: <ChevronRight className="w-5 h-5" />, label: "Response", value: "Adaptive" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="text-slate-300 mb-1">{item.icon}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{item.label}</div>
              <div className="text-sm font-bold font-heading text-slate-900">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
