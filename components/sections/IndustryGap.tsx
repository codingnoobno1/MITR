"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, FileText, Phone, Users, BarChart3, AlertCircle } from "lucide-react";

export function IndustryGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative bg-white py-32 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-heading font-black text-slate-900 tracking-tighter leading-none mb-12"
        >
          TRADITIONAL INDUSTRIES <br />
          <span className="text-slate-300">WERE NEVER BUILT</span> <br />
          FOR DIGITAL <span className="text-blue-600 italic">SCALE</span>
        </motion.h2>
        <p className="text-2xl text-slate-500 max-w-3xl font-medium leading-relaxed">
          Critical sectors remain technologically underdeveloped despite massive economic scale, 
          relying on fragmented communication and manual coordination.
        </p>
      </div>

      {/* Horizontal Scroll Content */}
      <div className="flex gap-12 px-6 overflow-x-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {[...Array(2)].map((_, j) => (
            <React.Fragment key={j}>
              <div className="w-[400px] h-[500px] rounded-[3rem] bg-slate-50 border border-slate-100 p-12 flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-500 shadow-sm">
                <AlertCircle className="w-12 h-12 text-slate-300 group-hover:text-blue-600 transition-colors" />
                <div>
                   <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Operational Inefficiency</h3>
                   <p className="text-slate-500 text-lg">Fragmented systems create massive trust gaps and scaling limitations.</p>
                </div>
              </div>
              
              <div className="w-[600px] h-[500px] rounded-[3rem] bg-gradient-to-br from-blue-50 to-white border border-slate-100 p-12 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-150 transition-transform duration-1000">
                    <BarChart3 className="w-64 h-64 text-blue-600" />
                 </div>
                 <div className="h-full flex flex-col justify-end relative z-10">
                    <h3 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">The Infrastructure Gap</h3>
                    <div className="space-y-4">
                       {["Manual Coordination", "Offline Workflows", "Unstructured Operations"].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-widest text-xs">
                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                            {item}
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Synchronizing Nodes Animation Mock */}
      <div className="mt-32 container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden p-12 flex items-center justify-center">
               {/* Disconnected Nodes */}
               {[...Array(12)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-4 h-4 rounded-full bg-slate-300"
                   animate={{ 
                     x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                     y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                     opacity: [0.1, 0.3, 0.1]
                   }}
                   transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
                 />
               ))}
               <div className="text-xs font-black text-slate-400 uppercase tracking-widest text-center relative z-10">FRAGMENTED DATA NODES</div>
            </div>

            <div className="relative aspect-square rounded-[3rem] bg-white border border-blue-100 overflow-hidden p-12 flex items-center justify-center shadow-xl shadow-blue-500/5">
               {/* Synchronized Nodes */}
               <div className="absolute inset-0 bg-blue-500/[0.02] blur-3xl" />
               <svg className="absolute inset-0 w-full h-full p-20 opacity-[0.05]">
                  <motion.path
                    d="M 50,50 L 150,150 L 250,50 L 350,150"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-blue-600"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
               </svg>
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-8 h-8 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20 flex items-center justify-center"
                   animate={{ 
                     scale: [1, 1.1, 1],
                   }}
                   transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                 >
                    <div className="w-2 h-2 rounded-full bg-white" />
                 </motion.div>
               ))}
               <div className="text-xs font-black text-blue-600 uppercase tracking-widest text-center relative z-10">INTELLIGENT SYNC</div>
            </div>
         </div>
      </div>
    </section>
  );
}
