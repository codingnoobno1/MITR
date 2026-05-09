"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { divisions } from "@/data/divisions";

const IconMap: Record<string, React.ReactNode> = {
  building2: <Building2 className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
};

export function DivisionsSection() {
  return (
    <section id="ecosystem" className="py-32 relative bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4"
            >
              The MITR Ecosystem
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none"
            >
              CORE <span className="text-blue-600">DIVISIONS</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md text-slate-500 font-medium text-lg leading-relaxed text-left md:text-right"
          >
            Powering industrial transformation through two primary intelligence clusters 
            focused on construction and agentic SaaS systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {divisions.map((dept, index) => (
            <Link key={dept.id} href={`/divisions/${dept.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >
                <div className="relative bg-slate-50 h-full p-12 rounded-[3.5rem] border border-slate-100 group-hover:border-blue-500/20 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden">
                  <div className={cn(
                    "w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-sm transition-all duration-500",
                    index === 0 ? "bg-blue-600 text-white shadow-blue-600/20" : "bg-slate-900 text-white shadow-slate-900/20"
                  )}>
                    {IconMap[dept.icon] || <Zap className="w-8 h-8" />}
                  </div>
                  
                  <div className="mb-10">
                    <h3 className="text-4xl font-heading font-black mb-3 tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                      {dept.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-blue-600 mb-6 font-black">
                      {dept.subtitle}
                    </p>
                    <p className="text-slate-500 mb-0 leading-relaxed text-xl font-medium">
                      {dept.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-12">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block">Division Products</span>
                    <div className="flex flex-wrap gap-2">
                      {dept.products.map(product => (
                        <span key={product.id} className="text-xs font-bold px-5 py-2.5 rounded-xl bg-white text-slate-600 border border-slate-100 group-hover:border-blue-500/10 transition-colors shadow-sm">
                          {product.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:border-blue-500/10 transition-colors">
                    <span className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase">Initialize Division</span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                       <ArrowUpRight className="w-6 h-6" />
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
