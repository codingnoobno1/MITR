"use client";

import React from "react";
import { motion } from "framer-motion";
import { Milestone, Flag, Rocket, Globe } from "lucide-react";

const roadmap = [
  {
    period: "2024 / Q3",
    title: "Solution Suite Expansion",
    desc: "Beta release of our centralized management dashboard for existing industrial partners.",
    status: "Current Phase",
    icon: <Flag className="w-5 h-5" />
  },
  {
    period: "2024 / Q4",
    title: "Market Expansion",
    desc: "Deploying the KARYA and BuildLink platforms across secondary industrial markets and regions.",
    status: "Coming Soon",
    icon: <Globe className="w-5 h-5" />
  },
  {
    period: "2025 / Q1",
    title: "Operational Automation",
    desc: "Full integration of automated workflow coordination tools across all platform modules.",
    status: "Future Vision",
    icon: <Rocket className="w-5 h-5" />
  }
];

export function EcosystemRoadmap() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4"
          >
            Product Development
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-black text-slate-950 tracking-tighter leading-none uppercase"
          >
            OUR STRATEGIC <br />
            <span className="text-blue-600">ROADMAP</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {roadmap.map((phase, i) => (
            <motion.div
              key={phase.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: -0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 pb-16 last:pb-0 group"
            >
              {/* Timeline Line */}
              {i < roadmap.length - 1 && (
                <div className="absolute left-[19px] top-[40px] bottom-0 w-px bg-slate-100 group-hover:bg-blue-100 transition-colors" />
              )}
              
              {/* Timeline Node */}
              <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 transition-all z-10 shadow-sm">
                {phase.icon}
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                 <div className="shrink-0 pt-1">
                    <div className="text-xl font-black text-blue-600 tracking-tighter mb-1 uppercase">{phase.period}</div>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{phase.status}</div>
                 </div>
                 
                 <div className="flex-1 p-8 rounded-[2rem] bg-slate-50 border border-slate-200 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                    <h3 className="text-xl font-heading font-black text-slate-950 mb-3 uppercase tracking-tight">{phase.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {phase.desc}
                    </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
