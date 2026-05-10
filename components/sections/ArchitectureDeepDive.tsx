"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Brain, Circle, CheckCircle2 } from "lucide-react";

const layers = [
  {
    id: "intelligence",
    title: "Layer 03 / Operations",
    subtitle: "Automated Workflow Systems",
    desc: "The coordination layer that handles cross-module business logic and operational scheduling.",
    icon: <Brain className="w-7 h-7" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    details: ["Standardized Logic", "Operational Monitoring", "Task Routing"]
  },
  {
    id: "nodes",
    title: "Layer 02 / Products",
    subtitle: "Modular Functional Units",
    desc: "Individual software solutions that manage specific business functions independently.",
    icon: <Layout className="w-7 h-7" />,
    color: "text-slate-900",
    bgColor: "bg-slate-50",
    details: ["Service Scalability", "Grounded API Access", "Domain-Specific Tools"]
  },
  {
    id: "infrastructure",
    title: "Layer 01 / Platform",
    subtitle: "Core Data Infrastructure",
    desc: "The secure, foundational data layer providing a single source of truth for the entire platform.",
    icon: <Database className="w-7 h-7" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    details: ["Centralized Auth", "Distributed Persistence", "Enterprise Security"]
  }
];

export function ArchitectureDeepDive() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100 font-sans">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Sticky Intro */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-blue-600" />
              Technical Foundation
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-8"
            >
              Our System <br />
              <span className="text-blue-600">Architecture</span>
            </motion.h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed mb-10">
              The platform is built on a robust, multi-layer architecture 
              designed for enterprise reliability and operational efficiency.
            </p>
            
            <div className="space-y-4">
               {[
                 { l: "Security", v: "Industry Standard" },
                 { l: "Performance", v: "High Availability" },
                 { l: "Uptime", v: "99.9% SLA" }
               ].map((spec, i) => (
                 <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{spec.l}</span>
                    <span className="text-sm font-bold text-slate-900">{spec.v}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Layer Cards */}
          <div className="lg:w-2/3 space-y-6">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group p-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/30 hover:bg-white hover:shadow-lg transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className={`w-14 h-14 rounded-lg ${layer.bgColor} ${layer.color} border border-slate-200 flex items-center justify-center shrink-0 transition-all duration-500`}>
                    {layer.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">{layer.subtitle}</div>
                          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{layer.title}</h3>
                       </div>
                       <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                          0{i+1}
                       </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
                      {layer.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {layer.details.map(detail => (
                        <div key={detail} className="flex items-center gap-2 p-3 rounded-lg bg-white/50 border border-slate-100 group-hover:bg-white transition-all">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          <span className="text-[11px] font-semibold text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
