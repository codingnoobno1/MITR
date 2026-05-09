"use client";

import React from "react";
import { motion } from "framer-motion";
import { Milestone, Flag, Rocket, Globe } from "lucide-react";

const roadmap = [
  {
    period: "Q3 2024",
    title: "Neural Link Alpha",
    desc: "Beta launch of the Layer 3 Intelligence orchestration engine for early industrial partners.",
    status: "Current Phase",
    icon: <Flag className="w-6 h-6" />
  },
  {
    period: "Q4 2024",
    title: "Global Node Expansion",
    desc: "Scaling Karya and BuildLink nodes to 15+ international markets with localized operational logic.",
    status: "Coming Soon",
    icon: <Globe className="w-6 h-6" />
  },
  {
    period: "2025",
    title: "Autonomous Infrastructure",
    desc: "Full deployment of agentic AI systems capable of autonomous supply chain and labor coordination.",
    status: "Future Vision",
    icon: <Rocket className="w-6 h-6" />
  }
];

export function EcosystemRoadmap() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4"
          >
            Evolutionary Timeline
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none uppercase"
          >
            ECOSYSTEM <br />
            <span className="text-blue-600">ROADMAP</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {roadmap.map((phase, i) => (
            <motion.div
              key={phase.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-16 pb-24 last:pb-0 group"
            >
              {/* Timeline Line */}
              {i < roadmap.length - 1 && (
                <div className="absolute left-[27px] top-[60px] bottom-0 w-px bg-slate-100 group-hover:bg-blue-100 transition-colors" />
              )}
              
              {/* Timeline Node */}
              <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 transition-all z-10 shadow-sm group-hover:scale-110">
                {phase.icon}
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                 <div className="shrink-0 pt-2">
                    <div className="text-2xl font-black text-blue-600 tracking-tighter mb-1 uppercase">{phase.period}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{phase.status}</div>
                 </div>
                 
                 <div className="flex-1 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-blue-500/5 transition-all duration-500">
                    <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 uppercase tracking-tighter">{phase.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium">
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
