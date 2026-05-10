"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, ArrowUpRight, Plus, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { divisions } from "@/data/divisions";

const IconMap: Record<string, React.ReactNode> = {
  building2: <Building2 className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
};

export function DivisionsSection() {
  return (
    <section id="ecosystem" className="py-24 relative bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-blue-600" />
              Core Intelligence Clusters
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-black text-slate-950 tracking-tighter uppercase leading-[0.9]"
            >
              INDUSTRIAL <br />
              <span className="text-blue-600">DIVISIONS</span>
            </motion.h2>
          </div>
          <p className="max-w-md text-sm text-slate-500 font-medium leading-relaxed text-left lg:text-right">
            We operate through two specialized intelligence hubs, each designed to modernize 
            traditionally fragmented sectors through modular digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((dept, index) => (
            <Link key={dept.id} href={`/divisions/${dept.slug}`} className="group h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-full bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 group-hover:border-blue-500/30 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-blue-500/5 transition-all duration-500 flex flex-col"
              >
                {/* Header: Icon & Subtitle */}
                <div className="flex items-center justify-between mb-8">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 transition-all duration-500",
                    index === 0 ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" : "bg-white text-slate-900"
                  )}>
                    {IconMap[dept.icon] || <Zap className="w-6 h-6" />}
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Phase 0{index + 1} / {dept.id}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-3xl font-heading font-black mb-3 tracking-tighter text-slate-950 group-hover:text-blue-600 transition-colors uppercase">
                    {dept.name}
                  </h3>
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">
                    {dept.subtitle}
                  </div>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">
                    {dept.description}
                  </p>
                </div>
                
                {/* Detailed Product List */}
                <div className="space-y-4 mb-10 pt-8 border-t border-slate-200/50">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Solutions</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dept.products.map(product => (
                      <div key={product.id} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-100 group-hover:border-blue-600/10 transition-all">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{product.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Footer */}
                <div className="pt-8 mt-auto flex items-center justify-between border-t border-slate-200/50">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Network Status</span>
                    <span className="text-xs font-bold text-slate-900">Synchronized</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-300 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 group-hover:rotate-45 transition-all duration-500 shadow-sm">
                     <ArrowUpRight className="w-6 h-6" />
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
