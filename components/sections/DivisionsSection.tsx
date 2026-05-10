"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { divisions } from "@/data/divisions";

const IconMap: Record<string, React.ReactNode> = {
  building2: <Building2 className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
};

export function DivisionsSection() {
  return (
    <section id="ecosystem" className="py-24 relative bg-white overflow-hidden border-t border-slate-100 font-sans">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-4 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-blue-600" />
              Core Business Divisions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-none"
            >
              Industrial <span className="text-blue-600">Solutions</span>
            </motion.h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 font-normal leading-relaxed text-left lg:text-right">
            We operate through specialized hubs designed to modernize 
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
                className="relative h-full bg-slate-50 p-10 rounded-xl border border-slate-200 group-hover:border-blue-500/30 group-hover:bg-white group-hover:shadow-lg transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={cn(
                    "w-14 h-14 rounded-lg flex items-center justify-center border border-slate-200 transition-all duration-500",
                    index === 0 ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "bg-white text-slate-900"
                  )}>
                    {IconMap[dept.icon] || <Zap className="w-6 h-6" />}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Solution 0{index + 1}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {dept.name}
                  </h3>
                  <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wide mb-6">
                    {dept.subtitle}
                  </div>
                  <p className="text-slate-600 text-base font-normal leading-relaxed">
                    {dept.description}
                  </p>
                </div>
                
                <div className="space-y-4 mb-10 pt-8 border-t border-slate-200/50">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Operational Focus</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dept.products.map(product => (
                      <div key={product.id} className="flex items-center gap-2 p-3 rounded-lg bg-white border border-slate-100 group-hover:border-blue-600/10 transition-all">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-[11px] font-semibold text-slate-700">{product.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-8 mt-auto flex items-center justify-between border-t border-slate-200/50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
                    <span className="text-xs font-bold text-slate-900">Synchronized</span>
                  </div>
                  <div className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                     <ArrowUpRight className="w-5 h-5" />
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
