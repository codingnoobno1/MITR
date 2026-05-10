"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Database, Cpu, Activity } from "lucide-react";

const steps = [
  {
    title: "01. Data Consolidation",
    desc: "Unifying fragmented operational data from disparate sources into a standardized digital format.",
    icon: <Search className="w-8 h-8" />
  },
  {
    title: "02. Digital Structuring",
    desc: "Implementing modular data models to ensure consistency across all business units.",
    icon: <Database className="w-8 h-8" />
  },
  {
    title: "03. Workflow Automation",
    desc: "Deploying automated coordination tools to streamline resource allocation and project timelines.",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: "04. Operational Execution",
    desc: "Executing business processes with full digital transparency and real-time monitoring.",
    icon: <Activity className="w-8 h-8" />
  }
];

export function IntelligentLayerWorkflow() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4"
          >
            Our Operational Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-black text-slate-950 tracking-tighter leading-none uppercase"
          >
            HOW THE PLATFORM <br />
            <span className="text-blue-600">DELIVERS VALUE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-500/20 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 mb-8 transition-all shadow-sm">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-heading font-black text-slate-950 mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Connecting Indicator */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-200">
                   →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
