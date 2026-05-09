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
    desc: "How Karya used modular intelligence to consolidate 200+ fragmented vendors into a single synchronized procurement layer.",
    icon: <Building2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "AI Operations",
    title: "Agentic Task Orchestration",
    impact: "10k+ Tasks/Hour",
    desc: "Deploying Syncro Desktop Agents to automate complex developer and operational workflows across distributed teams.",
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Community SaaS",
    title: "Modernizing Student Living",
    impact: "25% ROI Increase",
    desc: "Transforming traditional student accommodation into an intelligent ecosystem through the PG Connect infrastructure.",
    icon: <Users className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1555854817-5b2260d538bb?auto=format&fit=crop&q=80&w=800"
  }
];

export function IndustrialCaseStudies() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4"
            >
              Real-World Impact
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none"
            >
              INDUSTRIAL <br />
              <span className="text-blue-600">CASE STUDIES</span>
            </motion.h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium text-lg leading-relaxed text-left md:text-right">
            Concrete evidence of how the MITR modular layer transforms operational 
            inefficiency into scalable industrial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[3rem] border border-slate-200 overflow-hidden hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col"
            >
              {/* Case Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                  {item.category}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-xl font-black tracking-tighter uppercase">{item.impact}</span>
                </div>
                
                <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors uppercase">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed font-medium mb-10 flex-1">
                  {item.desc}
                </p>

                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                        {item.icon}
                     </div>
                     <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Impact Brief</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                     <ArrowUpRight className="w-6 h-6" />
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
