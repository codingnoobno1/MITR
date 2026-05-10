"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Database, Cpu, Activity } from "lucide-react";

const steps = [
  {
    title: "01. Data Consolidation",
    desc: "Unifying fragmented operational data from disparate sources into a standardized digital format.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "02. Digital Structuring",
    desc: "Implementing modular data models to ensure consistency across all business units.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "03. Workflow Automation",
    desc: "Deploying automated coordination tools to streamline resource allocation and project timelines.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "04. Operational Execution",
    desc: "Executing business processes with full digital transparency and real-time monitoring.",
    icon: <Activity className="w-6 h-6" />
  }
];

export function IntelligentLayerWorkflow() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-4"
          >
            Our Operational Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none"
          >
            How the Platform <span className="text-blue-600">Delivers Value</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/20 hover:bg-white hover:shadow-lg transition-all duration-500 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-all shadow-sm">
                {step.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {step.desc}
              </p>

              {/* Connecting Indicator */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-slate-200">
                   <div className="w-4 h-px bg-slate-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
