"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Zap, 
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { divisions } from "@/data/divisions";

// Helper to map icon names to Lucide components
const IconMap: Record<string, React.ReactNode> = {
  building2: <Building2 className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
};

export function DepartmentsSection() {
  return (
    <section id="ecosystem" className="py-24 relative bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-4 text-slate-900"
          >
            CORE <span className="text-primary">DEPARTMENTS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-500"
          >
            An interconnected intelligent infrastructure ecosystem solving 
            real-world organizational and technological challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {divisions.map((dept, index) => (
            <Link key={dept.id} href={`/${dept.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative bg-white h-full p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all overflow-hidden">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform bg-opacity-10",
                    index === 0 ? "bg-primary text-primary" : "bg-accent text-accent"
                  )}>
                    {IconMap[dept.icon] || <Zap className="w-6 h-6" />}
                  </div>
                  
                  <h3 className="text-3xl font-heading font-black mb-2 tracking-tighter text-slate-900 group-hover:text-primary transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6 font-black">
                    {dept.subtitle}
                  </p>
                  <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                    {dept.description}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-4">Department Products</span>
                    <div className="flex flex-wrap gap-2">
                      {dept.products.map(product => (
                        <span key={product.id} className="text-xs font-bold px-4 py-2 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 group-hover:border-primary/10 transition-colors">
                          {product.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-slate-50 mt-auto flex items-center justify-between group-hover:border-primary/10 transition-colors">
                    <span className="text-xs font-black tracking-widest text-slate-400 uppercase">View Division</span>
                    <ArrowUpRight className="w-6 h-6 text-slate-200 group-hover:text-primary transition-all" />
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
