"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Brain, Cpu, Share2, Zap } from "lucide-react";

const layers = [
  {
    id: "intelligence",
    title: "Layer 3: Intelligence",
    subtitle: "Agentic AI Orchestration",
    desc: "The cross-module brain that performs autonomous coordination, predictive analytics, and system-wide optimization.",
    icon: <Brain className="w-10 h-10" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: ["Autonomous Agents", "Predictive ML", "Neural Routing"]
  },
  {
    id: "nodes",
    title: "Layer 2: Nodes",
    subtitle: "Modular Product Units",
    desc: "Individual operational modules (BuildLink, Syncro, Karya) that handle specific industrial workflows independently.",
    icon: <Layout className="w-10 h-10" />,
    color: "text-slate-900",
    bgColor: "bg-slate-50",
    features: ["Independent Scaling", "Modular API", "Workflow Specific"]
  },
  {
    id: "infrastructure",
    title: "Layer 1: Infrastructure",
    subtitle: "Foundational Data Mesh",
    desc: "The universal data and authentication layer that provides a secure, single source of truth for all connected modules.",
    icon: <Database className="w-10 h-10" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: ["Unified Auth", "Data Persistence", "Security Layer"]
  }
];

export function ArchitectureDeepDive() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4"
          >
            Technical Foundation
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none uppercase"
          >
            THE MODULAR <br />
            <span className="text-blue-600">ARCHITECTURE</span> STACK
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-12 items-center p-12 rounded-[4rem] bg-slate-50 border border-slate-100 hover:border-blue-500/20 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-700"
            >
              <div className={`w-32 h-32 rounded-3xl ${layer.bgColor} ${layer.color} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                {layer.icon}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">{layer.subtitle}</div>
                <h3 className="text-3xl font-heading font-black text-slate-900 mb-4 uppercase tracking-tighter">{layer.title}</h3>
                <p className="text-xl text-slate-500 leading-relaxed font-medium mb-8">
                  {layer.desc}
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {layer.features.map(feature => (
                    <div key={feature} className="px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Neural Connection Line Mock */}
              {i < layers.length - 1 && (
                <div className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-blue-200 to-transparent z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Integration Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 rounded-[4rem] bg-slate-900 text-center relative overflow-hidden"
        >
           <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at center, #2563eb 0%, transparent 70%)` }} 
           />
           <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter relative z-10">
             Cross-Layer Orchestration
           </h3>
           <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
             MITR's unique advantage lies in how these layers communicate. Data from Layer 1 
             is processed by Layer 2 modules and orchestrated by Layer 3 agents in real-time.
           </p>
           <div className="mt-12 flex justify-center gap-12 relative z-10">
              {[Zap, Share2, Cpu].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500">
                      <Icon className="w-6 h-6" />
                   </div>
                   <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Active</span>
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
