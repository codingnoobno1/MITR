"use client";

import React from "react";
import { motion } from "framer-motion";

export function DashboardPulse() {
  return (
    <div className="relative w-full aspect-video bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
          backgroundSize: '2rem 2rem',
        }} 
      />

      {/* Pulsing Nodes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/30"
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: "150%", height: "150%", opacity: 0 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Floating UI Elements */}
      <div className="relative z-10 p-12 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
             <motion.div 
               animate={{ opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-32 h-3 bg-primary/20 rounded-full" 
             />
             <motion.div 
               animate={{ opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
               className="w-48 h-3 bg-primary/10 rounded-full" 
             />
          </div>
          <div className="flex gap-2">
             {[1, 2, 3].map(i => (
               <div key={i} className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700" />
             ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
           {[...Array(4)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: i * 0.1 }}
               className="h-32 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-4"
             >
                <div className="w-8 h-8 rounded-lg bg-primary/10 mb-4" />
                <div className="w-full h-2 bg-slate-700 rounded-full mb-2" />
                <div className="w-2/3 h-2 bg-slate-700/50 rounded-full" />
             </motion.div>
           ))}
        </div>
      </div>

      {/* Scanning Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-primary/50 z-20 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
