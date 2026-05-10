"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Cpu, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const cases = [
  {
    category: "Construction",
    title: "Streamlining Vendor Procurement",
    impact: "40% Time Reduction",
    desc: "Implementing automated procurement layers to consolidate fragmented industrial supply chains.",
    icon: <Building2 className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "AI Operations",
    title: "Automated Task Coordination",
    impact: "10k+ Tasks/Hour",
    desc: "Deploying desktop automation agents to manage complex workflows across distributed teams.",
    icon: <Cpu className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Community SaaS",
    title: "Modernizing Facility Living",
    impact: "25% ROI Increase",
    desc: "Transforming traditional facility management into an integrated digital ecosystem.",
    icon: <Users className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1555854817-5b2260d538bb?auto=format&fit=crop&q=80&w=800"
  }
];

export function IndustrialCaseStudies() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100 font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-4"
            >
              Case Studies
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none"
            >
              Real-World <span className="text-blue-600">Impact</span>
            </motion.h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 font-normal leading-relaxed text-left lg:text-right">
            Concrete evidence of how the platform transforms operational 
            inefficiency into scalable digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-500/30 hover:shadow-lg transition-all duration-500 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold text-white uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-lg font-bold tracking-tight">{item.impact}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8 flex-1">
                  {item.desc}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                        {item.icon}
                     </div>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Performance Brief</span>
                  </div>
                  <div className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:border-blue-600 transition-all shadow-sm">
                     <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
