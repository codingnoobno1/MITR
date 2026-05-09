"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ArrowRight, Zap, Activity, ShieldCheck, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPulse } from "@/components/animations/DashboardPulse";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-32 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/10 mb-6"
            >
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Neural Control Center</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-heading font-black mb-8 text-slate-900 tracking-tighter leading-[0.9]"
            >
              INTELLIGENT <br />
              <span className="text-primary">DASHBOARD</span> <br />
              SYSTEM
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 mb-10 leading-relaxed font-medium"
            >
              A unified command center to monitor, orchestrate, and optimize your 
              entire modular tech stack in real-time. Experience the future of 
              infrastructure management.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { icon: <Activity className="w-5 h-5" />, label: "Active Nodes", value: "1,240+" },
                { icon: <Zap className="w-5 h-5" />, label: "Throughput", value: "850 GB/s" },
                { icon: <ShieldCheck className="w-5 h-5" />, label: "Health", value: "99.9%" },
                { icon: <Database className="w-5 h-5" />, label: "Data Points", value: "2.4B+" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3"
                >
                  <div className="text-primary">{stat.icon}</div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    <div className="text-sm font-black text-slate-900">{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="rounded-2xl px-10 py-8 text-xl bg-slate-900 text-white font-black uppercase tracking-widest shadow-2xl shadow-slate-900/10 group">
              Access Neural Link <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div className="flex-1 w-full lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <DashboardPulse />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
