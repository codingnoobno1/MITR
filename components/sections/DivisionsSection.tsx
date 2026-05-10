"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { divisions } from "@/data/divisions";

const IconMap: Record<string, React.ReactNode> = {
  building2: <Building2 className="w-10 h-10" />,
  zap: <Zap className="w-10 h-10" />,
};

export function DivisionsSection() {
  return (
    <section id="ecosystem" className="py-40 relative bg-white overflow-hidden">
      {/* Artistic Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson-600/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-8"
          >
            <div className="w-12 h-px bg-blue-600" />
            Core Intelligence Clusters
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading font-black text-slate-950 tracking-tighter leading-[0.9] uppercase"
          >
            THE TWO <br />
            <span className="text-blue-600">CENTERS</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col md:flex-row gap-12 items-start"
          >
             <p className="text-3xl text-slate-400 font-medium leading-tight max-w-xl">
               Fragmented industries require centralized intelligence. We focus on two primary operational pillars.
             </p>
             <div className="w-20 h-20 rounded-full border-2 border-slate-900 flex items-center justify-center rotate-45">
                <Plus className="w-10 h-10 text-slate-900" />
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {divisions.map((dept, index) => (
            <Link key={dept.id} href={`/divisions/${dept.slug}`} className={cn(
              "block relative group",
              index === 1 && "lg:mt-32" // Asymmetrical offset
            )}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative h-full"
              >
                {/* Large Background Initials/Number */}
                <div className="absolute -top-10 -right-10 text-[12rem] md:text-[18rem] font-black text-slate-900/[0.02] pointer-events-none select-none tracking-tighter leading-none group-hover:text-blue-600/[0.03] transition-colors duration-700">
                  0{index + 1}
                </div>

                <div className="relative bg-white h-full p-16 rounded-[4rem] border-2 border-slate-900 shadow-[20px_20px_0px_#f1f5f9] group-hover:shadow-[20px_20px_0px_rgba(37,99,235,0.1)] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Icon Module */}
                  <div className={cn(
                    "w-24 h-24 rounded-[2rem] flex items-center justify-center mb-12 shadow-2xl transition-all duration-700 border-2 border-slate-900",
                    index === 0 ? "bg-blue-600 text-white" : "bg-white text-slate-900"
                  )}>
                    {IconMap[dept.icon] || <Zap className="w-10 h-10" />}
                  </div>
                  
                  <div className="mb-12 flex-1">
                    <h3 className="text-5xl font-heading font-black mb-6 tracking-tighter text-slate-950 group-hover:text-blue-600 transition-colors uppercase leading-[0.9]">
                      {dept.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-blue-600 mb-8 font-black flex items-center gap-3">
                      <span className="w-8 h-0.5 bg-blue-600" />
                      {dept.subtitle}
                    </p>
                    <p className="text-slate-500 leading-relaxed text-2xl font-medium tracking-tight">
                      {dept.description}
                    </p>
                  </div>
                  
                  <div className="space-y-6 mb-16">
                    <div className="flex flex-wrap gap-3">
                      {dept.products.map(product => (
                        <span key={product.id} className="text-xs font-black px-6 py-3 rounded-2xl bg-slate-50 text-slate-400 border-2 border-slate-100 group-hover:border-blue-600/20 group-hover:text-slate-600 transition-all uppercase tracking-widest">
                          {product.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-12 border-t-2 border-slate-100 mt-auto flex items-center justify-between group-hover:border-blue-600/20 transition-all">
                    <span className="text-sm font-black tracking-[0.4em] text-slate-900 uppercase">Explore Division</span>
                    <div className="w-20 h-20 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-45 transition-all duration-500 shadow-2xl">
                       <ArrowUpRight className="w-10 h-10" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
