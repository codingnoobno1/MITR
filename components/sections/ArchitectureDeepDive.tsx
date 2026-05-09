"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Brain, Cpu, Share2, Zap, Circle } from "lucide-react";

const layers = [
  {
    id: "intelligence",
    title: "Layer 03 / Intelligence",
    subtitle: "Agentic AI Orchestration",
    desc: "The cross-module brain that performs autonomous coordination and predictive analytics.",
    icon: <Brain className="w-12 h-12" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: ["Autonomous Agents", "Predictive ML", "Neural Routing"]
  },
  {
    id: "nodes",
    title: "Layer 02 / Nodes",
    subtitle: "Modular Product Units",
    desc: "Individual operational modules that handle specific industrial workflows independently.",
    icon: <Layout className="w-12 h-12" />,
    color: "text-slate-900",
    bgColor: "bg-slate-50",
    features: ["Independent Scaling", "Modular API", "Workflow Specific"]
  },
  {
    id: "infrastructure",
    title: "Layer 01 / Infrastructure",
    subtitle: "Foundational Data Mesh",
    desc: "The universal data layer providing a secure, single source of truth for all modules.",
    icon: <Database className="w-12 h-12" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: ["Unified Auth", "Data Persistence", "Security Layer"]
  }
];

export function ArchitectureDeepDive() {
  return (
    <section className="py-40 bg-white relative overflow-hidden border-y border-slate-100">
      {/* Decorative Technical Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none z-0">
         <div className="text-[30rem] font-black text-slate-900 rotate-90 translate-x-1/2">TECH</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-8 flex items-center gap-4"
            >
              <Circle className="w-2 h-2 fill-blue-600" />
              Technical Foundation
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-8xl font-heading font-black text-slate-950 tracking-tighter leading-[0.8] mb-12 uppercase"
            >
              THE <br />
              <span className="text-blue-600">STACK</span> <br />
              VISION
            </motion.h2>
            <p className="text-2xl text-slate-400 font-medium leading-tight mb-12">
              Every system is built on a unified intelligence architecture that ensures seamless modular growth.
            </p>
            
            {/* Visual Indicator */}
            <div className="flex gap-2">
               {[1, 2, 3].map(i => (
                 <div key={i} className="w-12 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: i * 0.2, duration: 1 }}
                      className="h-full bg-blue-600" 
                    />
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group p-12 md:p-20 rounded-[4rem] bg-white border-2 border-slate-900 shadow-[15px_15px_0px_#f8fafc] hover:shadow-[15px_15px_0px_rgba(37,99,235,0.1)] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-700"
              >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className={`w-32 h-32 rounded-[2.5rem] ${layer.bgColor} ${layer.color} border-2 border-slate-900 flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-700`}>
                    {layer.icon}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">{layer.subtitle}</div>
                    <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-950 mb-6 uppercase tracking-tighter leading-none">{layer.title}</h3>
                    <p className="text-2xl text-slate-500 leading-snug font-medium mb-10 tracking-tight">
                      {layer.desc}
                    </p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      {layer.features.map(feature => (
                        <div key={feature} className="px-6 py-3 rounded-2xl border-2 border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 group-hover:border-blue-600/20 group-hover:text-slate-600 transition-all">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cinematic Integration Summary */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-40 p-20 md:p-32 rounded-[5rem] bg-slate-950 text-center relative overflow-hidden group"
        >
           {/* Animated Background Mesh */}
           <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000" 
             style={{ backgroundImage: `radial-gradient(circle at center, #2563eb 0%, transparent 70%)` }} 
           />
           <div className="absolute inset-0 noise z-0" />

           <div className="relative z-10">
             <h3 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 uppercase tracking-tighter leading-none">
               CROSS-LAYER <br />
               <span className="text-blue-600 italic">ORCHESTRATION</span>
             </h3>
             <p className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium tracking-tight mb-16">
               Data from Layer 01 is processed by Layer 02 nodes and orchestrated by Layer 03 agents in a seamless intelligence feedback loop.
             </p>
             <div className="flex justify-center gap-20">
                {[Zap, Share2, Cpu].map((Icon, i) => (
                  <motion.div 
                    key={i} 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-4"
                  >
                     <div className="w-16 h-16 rounded-2xl bg-white/5 border-2 border-white/10 flex items-center justify-center text-blue-500 hover:text-white hover:border-blue-600 transition-all cursor-pointer">
                        <Icon className="w-8 h-8" />
                     </div>
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Link 0{i+1}</span>
                  </motion.div>
                ))}
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
