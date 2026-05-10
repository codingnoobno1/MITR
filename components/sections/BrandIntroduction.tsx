"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Cpu, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BrandIntroduction() {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-slate-100 font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100 mb-8"
            >
              <Zap className="w-3.5 h-3.5 fill-blue-700" />
              <span className="text-[10px] font-bold tracking-wider uppercase">
                Next-Gen Industrial Software
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-8"
            >
              Modular <br />
              <span className="text-blue-600">Intelligent</span> <br />
              Tech Resources
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-10 max-w-xl"
            >
              We build scalable digital infrastructure for industries that lack 
              standardized technological coordination. Our platform unifies 
              fragmented workflows into efficient, automated systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-md px-8 py-6 text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all font-semibold group">
                Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-md px-8 py-6 text-sm border-slate-200 text-slate-900 hover:bg-slate-50 transition-all font-semibold">
                View Solutions
              </Button>
            </motion.div>

            {/* Professional Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-slate-100 max-w-lg">
               {[
                 { label: "Active Systems", val: "1.2k+" },
                 { label: "Data Uptime", val: "99.9%" },
                 { label: "Key Sectors", val: "2 Main" }
               ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-xl font-bold text-slate-900 leading-none mb-1">{stat.val}</div>
                    <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:w-2/5 w-full"
          >
             <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Cpu className="w-32 h-32 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  Platform Capabilities
                </h3>
                
                <div className="space-y-4">
                   {[
                     { t: "Scalable Infrastructure", d: "Robust data systems for high-volume workflows." },
                     { t: "Automated Operations", d: "Efficient software coordination across business units." },
                     { t: "Modular Deployment", d: "Scale functional modules independently as needed." },
                     { t: "Enterprise Security", d: "Standardized protocols for all platform services." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                           <div className="text-xs font-bold text-slate-900 mb-1">{item.t}</div>
                           <p className="text-xs text-slate-600 font-normal leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
