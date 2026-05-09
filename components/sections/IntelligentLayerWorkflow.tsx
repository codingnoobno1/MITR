"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Database, Cpu, Activity } from "lucide-react";

const steps = [
  {
    title: "01. Data Ingestion",
    desc: "Consolidating fragmented industrial data from phone calls, spreadsheets, and informal communication channels.",
    icon: <Search className="w-8 h-8" />
  },
  {
    title: "02. Node Structuring",
    desc: "Converting raw data into structured modular intelligence using our Layer 1 Infrastructure Mesh.",
    icon: <Database className="w-8 h-8" />
  },
  {
    title: "03. Agentic Orchestration",
    desc: "Deploying autonomous Layer 3 agents to coordinate workflows and optimize resource allocation in real-time.",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: "04. Autonomous Action",
    desc: "The system executes complex industrial operations with zero-touch automation and full digital visibility.",
    icon: <Activity className="w-8 h-8" />
  }
];

export function IntelligentLayerWorkflow() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4"
          >
            Operational Logic
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none uppercase"
          >
            THE INTELLIGENT <br />
            <span className="text-blue-600">LAYER FLOW</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-blue-500/20 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 mb-8 transition-all shadow-sm">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Connecting Arrow (Desktop Only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-slate-200">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
