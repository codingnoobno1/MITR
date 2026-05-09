"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Shield, Cloud, Workflow, BarChart3, Database } from "lucide-react";

const capabilities = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Neural Infrastructure",
    desc: "Implementing autonomous decision-making layers across fragmented industrial ecosystems."
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Modular Operations",
    desc: "Decoupled architecture that allows for rapid scaling and independent node reconfiguration."
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Edge Orchestration",
    desc: "Low-latency processing at the edge of the network for real-time infrastructure response."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Predictive Intelligence",
    desc: "Advanced forecasting engines to optimize resource allocation and prevent operational downtime."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quantum-Safe Security",
    desc: "Next-generation encryption protocols protecting critical infrastructure data."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Unified Data Mesh",
    desc: "Consolidating heterogeneous data streams into a single, high-fidelity source of truth."
  }
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4"
            >
              System Capabilities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none"
            >
              OUR STRATEGIC <br />
              <span className="text-slate-400 italic">ADVANTAGE</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md text-slate-500 font-medium text-lg leading-relaxed text-left md:text-right"
          >
            Deploying a modular intelligent layer that transforms traditional 
            industries into adaptive, data-driven ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                {item.icon}
              </div>
              <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
