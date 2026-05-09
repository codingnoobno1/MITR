"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050816]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }} 
        />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium tracking-wider uppercase text-white/70">
            Next Generation Intelligent Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-heading font-black mb-6 tracking-tighter leading-none"
        >
          MODULAR <br />
          <span className="text-gradient">INTELLIGENT</span> <br />
          TECH RESOURCES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 font-sans leading-relaxed"
        >
          Building futuristic AI-powered systems, modular developer tools, 
          and scalable technology experiences for the next era of construction and infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary text-background hover:bg-primary/90 glow-primary transition-all group">
            Explore Ecosystem
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg glass border-white/10 hover:bg-white/5 transition-all">
            View Projects
          </Button>
        </motion.div>

        {/* Hero Stats/Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-10 border-t border-white/5"
        >
          {[
            { icon: <Cpu className="w-5 h-5" />, label: "AI Labs", value: "Active" },
            { icon: <Globe className="w-5 h-5" />, label: "Ecosystem", value: "Global" },
            { icon: <Sparkles className="w-5 h-5" />, label: "Innovation", value: "Continuous" },
            { icon: <ChevronRight className="w-5 h-5" />, label: "Nodes", value: "Decentralized" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="text-primary/50 mb-1">{item.icon}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">{item.label}</div>
              <div className="text-sm font-bold font-heading">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent z-10" />
    </section>
  );
}
