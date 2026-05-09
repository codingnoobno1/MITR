"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Cpu, Layers, Workflow, Share2 } from "lucide-react";

const areas = [
  {
    icon: <Building2 />,
    title: "Construction & Real Estate",
    desc: "Digitizing fragmented infrastructure workflows, vendor coordination, and industrial operations.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Users />,
    title: "Workforce & Labor Systems",
    desc: "Building scalable workforce coordination systems with intelligent matching and operational visibility.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Cpu />,
    title: "Agentic Desktop Infrastructure",
    desc: "Developing AI-powered desktop orchestration environments for automation and developer workflows.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Share2 />,
    title: "Open Innovation Ecosystems",
    desc: "Creating collaborative technology infrastructure powered by open-source communities.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }
];

export function MitrApproach() {
  return (
    <section className="relative bg-white py-32 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-heading font-black text-slate-900 tracking-tighter leading-none mb-8"
            >
              BUILDING <br />
              <span className="text-blue-600">INTELLIGENT</span> <br />
              INFRASTRUCTURE
            </motion.h2>
            <p className="text-2xl text-slate-500 font-medium leading-relaxed">
              Instead of building isolated applications, MITR develops modular operational layers 
              that scale across multiple industries and workflows.
            </p>
          </div>
          
          <div className="relative w-full md:w-1/3 aspect-square bg-slate-50 rounded-[3rem] border border-slate-100 p-12 flex items-center justify-center">
             {/* Modular Blocks Assembly Mock */}
             <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-20 h-20 bg-blue-100 border border-blue-200 rounded-2xl"
                    animate={{ 
                      scale: [0.8, 1, 0.8],
                      rotate: [0, 90, 0],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  />
                ))}
             </div>
             <Layers className="absolute w-12 h-12 text-blue-600" />
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
              className="group p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:border-blue-500/20 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-700 relative overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl ${area.bgColor} ${area.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {area.icon}
              </div>
              <h3 className="text-3xl font-heading font-black text-slate-900 mb-6 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                {area.desc}
              </p>
              
              <div className="flex gap-4">
                {[1, 2, 3].map(j => (
                  <div key={j} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                ))}
              </div>

              {/* Glassmorphism Highlight */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/[0.03] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
