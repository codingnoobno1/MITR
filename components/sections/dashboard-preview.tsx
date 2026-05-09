"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Server, ShieldCheck, Database, Zap } from "lucide-react";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Live Insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight text-slate-900">
                INTELLIGENT <br />
                <span className="text-primary">CONTROL</span> CENTER
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Monitor operations across the entire ecosystem. Our unified dashboard provides 
                real-time visibility into construction progress, resource allocation, and system health.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Activity className="w-5 h-5" />, label: "Active Projects", value: "24 Active" },
                  { icon: <Cpu className="w-5 h-5" />, label: "AI Optimization", value: "Optimized" },
                  { icon: <ShieldCheck className="w-5 h-5" />, label: "Security Status", value: "Fully Secure" },
                  { icon: <Database className="w-5 h-5" />, label: "System Uptime", value: "99.99%" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-primary">{stat.icon}</div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{stat.label}</div>
                      <div className="text-sm font-bold text-slate-900">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-2xl shadow-slate-200/50 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="text-[10px] font-black tracking-widest text-slate-300 uppercase">MITR OS // OPERATIONAL</div>
              </div>

              <div className="space-y-6">
                <div className="h-32 w-full bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Resource Load</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-1 h-3 rounded-full ${i <= 3 ? 'bg-primary' : 'bg-slate-200'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-12">
                    {[40, 70, 45, 90, 65, 80, 55, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/10 rounded-t-lg relative group">
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all" 
                          style={{ height: `${h}%` }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Network</span>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl font-black text-slate-900 leading-none">12</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Nodes</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Latency</span>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent shadow-sm">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl font-black text-slate-900 leading-none">2ms</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Real-time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
