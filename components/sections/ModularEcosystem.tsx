"use client";

import React from "react";
import { motion } from "framer-motion";
import { Share2, Zap, Layout, Cpu, Users, Globe, Building, Code } from "lucide-react";

const nodes = [
  { name: "KARYA", icon: <Building /> },
  { name: "SYNCRO", icon: <Cpu /> },
  { name: "BUILDLINK", icon: <Layout /> },
  { name: "VENDOR CONNECT", icon: <Share2 /> },
  { name: "HOUSE HELPERS", icon: <Users /> },
  { name: "PG CONNECT", icon: <Globe /> },
  { name: "SANKALAP", icon: <Zap /> },
  { name: "AI LABS", icon: <Code /> },
];

export function ModularEcosystem() {
  return (
    <section className="relative bg-slate-950 py-40 overflow-hidden">
      {/* Background Neural Lines Animation */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
         <svg className="w-full h-full">
            <motion.path
              d="M 100,100 Q 500,300 900,100 T 1300,500"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-primary"
              animate={{ 
                pathOffset: [0, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
         </svg>
      </div>

      <div className="container mx-auto px-6 text-center mb-32 relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter leading-none mb-12 uppercase"
        >
          AN INTERCONNECTED <br />
          <span className="text-primary italic">MODULAR</span> ECOSYSTEM
        </motion.h2>
        <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
          Every MITR system functions as an independent operational module while remaining 
          connected to a larger intelligent infrastructure layer.
        </p>
      </div>

      {/* Circular Interactive UI */}
      <div className="relative flex items-center justify-center h-[800px]">
        {/* Central Hub */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-48 h-48 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center z-20 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse" />
          <div className="text-xl font-black text-white tracking-widest text-center relative">MITR<br/>CORE</div>
        </motion.div>

        {/* Orbiting Nodes */}
        {nodes.map((node, i) => {
          const angle = (i / nodes.length) * (2 * Math.PI);
          const radius = 300;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1, x, y }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 50 }}
              className="absolute group cursor-pointer"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-24 h-24 rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center gap-2 group-hover:border-primary group-hover:bg-primary/10 transition-all shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                <div className="text-slate-400 group-hover:text-primary transition-colors">
                  {node.icon}
                </div>
                <div className="text-[10px] font-black text-slate-500 group-hover:text-white uppercase tracking-widest text-center">
                   {node.name}
                </div>
              </motion.div>

              {/* Connecting Line to Core */}
              <svg className="absolute top-1/2 left-1/2 -z-10 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                <motion.line
                   x1="200" y1="200"
                   x2={200 + (-x * 0.5)} y2={200 + (-y * 0.5)}
                   stroke="currentColor"
                   strokeWidth="1"
                   className="text-primary"
                />
              </svg>
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 mt-32">
         <div className="max-w-4xl mx-auto p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm text-center">
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">THE NETWORK ADVANTAGE</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              MITR is designed less like a traditional startup and more like an adaptive digital infrastructure network where operational data flows intelligently across departments.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               {["Seamless Communication", "AI Orchestration", "Modular Scaling"].map((item, i) => (
                 <div key={i} className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                   {item}
                 </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}
