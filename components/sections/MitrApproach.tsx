"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Cpu, Layers, Workflow, Share2 } from "lucide-react";

const areas = [
  {
    icon: <Building2 />,
    title: "Construction & Real Estate",
    desc: "Digitizing fragmented infrastructure workflows, vendor coordination, and industrial operations.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: <Users />,
    title: "Workforce & Labor Systems",
    desc: "Building scalable workforce coordination systems with intelligent matching and operational visibility.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: <Cpu />,
    title: "Agentic Desktop Infrastructure",
    desc: "Developing AI-powered desktop orchestration environments for automation and developer workflows.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: <Share2 />,
    title: "Open Innovation Ecosystems",
    desc: "Creating collaborative technology infrastructure powered by open-source communities.",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  }
];

export function MitrApproach() {
  return (
    <section className="relative bg-slate-950 py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter leading-none mb-8"
            >
              BUILDING <br />
              <span className="text-primary">INTELLIGENT</span> <br />
              INFRASTRUCTURE
            </motion.h2>
            <p className="text-2xl text-slate-400 font-medium leading-relaxed">
              Instead of building isolated applications, MITR develops modular operational layers 
              that scale across multiple industries and workflows.
            </p>
          </div>
          
          <div className="relative w-full md:w-1/3 aspect-square bg-slate-900 rounded-[3rem] border border-white/5 p-12 flex items-center justify-center">
             {/* Modular Blocks Assembly Mock */}
             <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-20 h-20 bg-primary/20 border border-primary/50 rounded-2xl"
                    animate={{ 
                      scale: [0.8, 1, 0.8],
                      rotate: [0, 90, 0],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  />
                ))}
             </div>
             <Layers className="absolute w-12 h-12 text-primary" />
          </div>
        </div>
      </div>

      {/* Core Operational Areas Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 rounded-[3.5rem] bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/[0.07] transition-all duration-700 relative overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl ${area.bgColor} ${area.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {area.icon}
              </div>
              <h3 className="text-3xl font-heading font-black text-white mb-6 uppercase tracking-tighter group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium mb-8">
                {area.desc}
              </p>
              
              <div className="flex gap-4">
                {[1, 2, 3].map(j => (
                  <div key={j} className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                ))}
              </div>

              {/* Glassmorphism Highlight */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Dynamic Workflow Mock */}
      <div className="container mx-auto px-6 mt-32">
        <div className="p-16 rounded-[4rem] bg-slate-900/50 border border-white/5 backdrop-blur-xl relative overflow-hidden">
           <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30">
              <Workflow className="w-20 h-20" />
              <div className="h-px w-32 bg-slate-700 hidden md:block" />
              <Cpu className="w-20 h-20" />
              <div className="h-px w-32 bg-slate-700 hidden md:block" />
              <Layers className="w-20 h-20" />
           </div>
           <div className="mt-12 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Intelligent Orchestration Engine</span>
           </div>
        </div>
      </div>
    </section>
  );
}
