"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FutureVision() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden py-40 border-t border-slate-100">
      {/* Cinematic Background - Light Mode */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
        <div className="absolute inset-0 opacity-[0.03]">
           {/* Smart City Visualization Mock */}
           <div className="grid grid-cols-6 h-full gap-2">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-blue-600/20 border-x border-blue-600/10"
                  initial={{ height: "10%" }}
                  animate={{ height: [`${20 + Math.random() * 50}%`, `${30 + Math.random() * 40}%`] }}
                  transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
           </div>
        </div>
      </div>

      {/* Floating Sparkles - Crimson Accent */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-crimson-600 rounded-full blur-[1px]"
            initial={{ opacity: 0, x: Math.random() * 100 + "%", y: "100%" }}
            animate={{ opacity: [0, 0.5, 0], y: "-10%" }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
        >
          <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          <span className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Future Intelligence Layer</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[9rem] font-heading font-black text-slate-900 tracking-tighter leading-[0.85] mb-12 uppercase"
        >
          ENGINEERING <br />
          <span className="text-blue-600 italic">THE NEXT LAYER</span> <br />
          OF INFRASTRUCTURE
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-500 leading-relaxed font-medium"
          >
            MITR aims to become a foundational intelligence layer for the next generation 
            of operational and industrial ecosystems. Modernizing industries that have 
            historically remained disconnected.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 py-12"
          >
             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  "Infrastructure Intelligence", "Operational Scalability", 
                  "Ecosystem Orchestration", "Intelligent Coordination", 
                  "Digital Transformation", "Modular Evolution"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 font-black uppercase tracking-widest text-[10px] bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-crimson-600" />
                    {item}
                  </div>
                ))}
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-12"
          >
            <Button size="lg" className="rounded-2xl px-16 py-10 text-2xl bg-blue-600 text-white hover:bg-blue-700 shadow-2xl shadow-blue-600/20 transition-all font-black uppercase tracking-widest group border-none">
              Build The Future <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-3 transition-transform" />
            </Button>
            <p className="mt-12 text-slate-400 font-black uppercase tracking-[0.5em] text-xs">
              Build The Future With Intelligent Infrastructure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-blue-500/[0.03] to-transparent pointer-events-none" />

      <style jsx>{`
        .bg-crimson-600 { background-color: #dc143c; }
      `}</style>
    </section>
  );
}
