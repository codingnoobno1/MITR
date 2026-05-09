"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Server, ShieldCheck, Database, Zap } from "lucide-react";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden bg-black/20">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

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
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Live Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
                THE CONTROL <br />
                <span className="text-gradient">CENTER</span> OF FUTURE
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Experience the JARVIS-inspired neural dashboard. Monitor every node, 
                track real-time construction progress, and orchestrate AI agents 
                from a single modular interface.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Activity className="w-5 h-5" />, label: "Real-time Metrics", value: "99.9% Up" },
                  { icon: <Cpu className="w-5 h-5" />, label: "AI Neural Load", value: "12.4 TFLOPS" },
                  { icon: <ShieldCheck className="w-5 h-5" />, label: "Security Protocol", value: "L-9 Active" },
                  { icon: <Database className="w-5 h-5" />, label: "Data Integrity", value: "Verified" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-primary">{stat.icon}</div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{stat.label}</div>
                      <div className="text-sm font-bold text-white/90">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            {/* Dashboard Mockup UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video w-full glass rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden"
            >
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-10" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, #00F5FF 1px, transparent 1px), linear-gradient(to bottom, #00F5FF 1px, transparent 1px)`,
                  backgroundSize: '2rem 2rem'
                }} 
              />

              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="ml-4 text-[10px] uppercase tracking-widest text-white/30">MITR.OS // v2.0.4-beta</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[10px] text-primary/80 animate-pulse">SYSTEM SECURE</div>
                  <div className="w-10 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="h-full bg-primary" 
                    />
                  </div>
                </div>
              </div>

              {/* Mockup Content Grid */}
              <div className="grid grid-cols-12 gap-4 h-full relative z-10">
                <div className="col-span-8 flex flex-col gap-4">
                  <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold text-white/50">NEURAL ACTIVITY</span>
                      <Activity className="w-3 h-3 text-primary" />
                    </div>
                    {/* Fake Chart Lines */}
                    <div className="flex items-end gap-1 h-32">
                      {[40, 70, 45, 90, 65, 80, 55, 75, 40, 85, 60, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.05, duration: 1 }}
                          className="flex-1 bg-primary/40 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-24 bg-white/5 rounded-xl border border-white/10 p-4 flex gap-4">
                    <div className="flex-1 flex flex-col justify-center">
                      <span className="text-[10px] text-white/40 mb-1">CPU THREADS</span>
                      <div className="text-xl font-heading font-black text-primary">128.0</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center border-l border-white/10 pl-4">
                      <span className="text-[10px] text-white/40 mb-1">LATENCY</span>
                      <div className="text-xl font-heading font-black text-secondary">0.02ms</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 flex flex-col gap-4">
                  <div className="flex-1 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-white/10 p-4">
                    <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4 mx-auto animate-spin-slow">
                      <Server className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-center text-[10px] text-white/60 mb-2 uppercase">Core Status</div>
                    <div className="h-1 bg-white/10 rounded-full mb-1">
                      <div className="w-3/4 h-full bg-primary" />
                    </div>
                    <div className="h-1 bg-white/10 rounded-full">
                      <div className="w-1/2 h-full bg-secondary" />
                    </div>
                  </div>
                  <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-4 overflow-hidden">
                    <span className="text-[10px] text-white/30 block mb-2">SYSTEM LOGS</span>
                    <div className="text-[8px] font-mono text-white/40 space-y-1">
                      <div>&gt; Initializing KARYA.node_01</div>
                      <div className="text-primary">&gt; Verification Successful</div>
                      <div>&gt; syncro_daemon: active</div>
                      <div>&gt; listening on port 8080</div>
                      <div className="animate-pulse">&gt; _</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circular HUD */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border-4 border-primary/10 rounded-full" />
              <div className="absolute -bottom-16 -right-16 w-56 h-56 border border-secondary/10 rounded-full animate-spin-slow" />
            </motion.div>

            {/* Floating UI Bits */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl border border-primary/30 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-widest text-white/40">Encryption</div>
                  <div className="text-[10px] font-bold">SHA-512 ACTIVE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
