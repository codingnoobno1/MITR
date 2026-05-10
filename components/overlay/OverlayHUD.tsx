"use client";

import React from "react";
import { motion } from "framer-motion";

export function OverlayHUD() {
  return (
    <div className="w-screen pointer-events-none text-slate-300 font-light selection:bg-blue-500/30">
      {/* SECTION 1: CENTRAL ORCHESTRATION */}
      <section className="h-screen w-full relative flex items-center justify-center p-12">
        {/* Corner Brackets */}
        <div className="absolute top-12 left-12 w-32 h-32 border-t border-l border-blue-500/30" />
        <div className="absolute top-12 right-12 w-32 h-32 border-t border-r border-blue-500/30" />
        <div className="absolute bottom-12 left-12 w-32 h-32 border-b border-l border-blue-500/30" />
        <div className="absolute bottom-12 right-12 w-32 h-32 border-b border-r border-blue-500/30" />

        {/* Top Left: System ID */}
        <div className="absolute top-16 left-16 space-y-1">
          <div className="text-blue-400 text-[10px] font-mono tracking-[0.5em] uppercase opacity-80">Orchestration_Chamber_V.04</div>
          <h1 className="text-slate-100 text-4xl font-extralight tracking-widest uppercase">Mitr OS</h1>
          <div className="flex items-center gap-4 pt-2">
            <div className="h-[1px] w-12 bg-blue-500/50" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-mono">Status: Nominal</span>
          </div>
        </div>

        {/* Top Right: Global Telemetry */}
        <div className="absolute top-16 right-16 text-right font-mono">
          <div className="text-[9px] tracking-[0.2em] text-blue-500/40 mb-2 uppercase">Global_Pulse_Monitoring</div>
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-extralight tracking-tighter text-slate-100">0.0024<span className="text-[10px] ml-1 opacity-40">ms</span></div>
            <div className="text-[8px] tracking-[0.1em] text-slate-600">PKT_LOSS: 0.000%</div>
          </div>
        </div>

        {/* Center Focal: Scanning Ring UI (CSS Only) */}
        <div className="relative flex items-center justify-center">
           <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/5 animate-[spin_20s_linear_infinite]" />
           <div className="absolute w-[580px] h-[580px] rounded-full border-t border-blue-400/20 animate-[spin_12s_linear_infinite_reverse]" />
           <div className="text-center space-y-6">
              <div className="text-[10px] font-mono tracking-[1em] text-blue-400/30 uppercase">Infrastructure_Core</div>
              <div className="w-1 h-32 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent mx-auto" />
           </div>
        </div>

        {/* Bottom Left: Rack Health */}
        <div className="absolute bottom-16 left-16 max-w-xs space-y-6">
           <div className="text-[9px] font-mono tracking-[0.4em] text-slate-500 uppercase border-l-2 border-blue-500/40 pl-3">Module_Diagnostics</div>
           <div className="grid grid-cols-4 gap-2">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className={`h-1 rounded-full ${i < 12 ? 'bg-blue-500/30' : 'bg-slate-800'}`} />
              ))}
           </div>
           <p className="text-[10px] leading-relaxed text-slate-500 tracking-wider font-extralight">
             Real-time synchronization active across 1,240 edge nodes. Neural fabric integrity at 99.98%.
           </p>
        </div>
      </section>

      {/* SECTION 2: DEVOPS PIPELINES */}
      <section className="h-screen w-full relative flex items-center p-24 bg-slate-950/40 backdrop-blur-[2px]">
        <div className="space-y-20 w-full max-w-2xl">
          <div className="space-y-4">
            <div className="text-blue-400 text-[10px] font-mono tracking-[0.8em] uppercase">Pipeline_Efficiency_Metrics</div>
            <h2 className="text-3xl font-extralight tracking-tight text-slate-100 italic">Continuous_Flow</h2>
          </div>

          <div className="space-y-12">
            {[
              { label: "BUILD_ENGINE", value: 94, status: "READY" },
              { label: "AUTOMATED_TEST", value: 88, status: "RUNNING" },
              { label: "GLOBAL_DEPLOY", value: 72, status: "PENDING" }
            ].map((item, i) => (
              <div key={item.label} className="space-y-4">
                 <div className="flex justify-between items-end">
                    <span className="text-[10px] font-mono tracking-[0.4em] text-slate-400">{item.label}</span>
                    <span className="text-[8px] font-mono text-blue-500/60 uppercase tracking-widest">{item.status}</span>
                 </div>
                 <div className="h-[2px] w-full bg-slate-800 relative overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: `${item.value - 100}%` }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400" 
                    />
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Data Panels */}
        <div className="absolute right-32 top-1/2 -translate-y-1/2 space-y-8">
           {[1, 2, 3].map(p => (
             <div key={p} className="w-48 p-4 bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-sm space-y-3">
                <div className="text-[8px] font-mono text-slate-600 uppercase">Packet_Flow_V0{p}</div>
                <div className="h-8 flex items-end gap-1">
                   {Array.from({length: 12}).map((_, i) => (
                     <div key={i} className="flex-1 bg-blue-500/20" style={{ height: `${20 + Math.random() * 80}%` }} />
                   ))}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* SECTION 3: MLOPS & COMPUTE */}
      <section className="h-screen w-full relative flex items-center justify-end p-24">
        <div className="text-right space-y-16">
          <div className="space-y-4">
             <div className="text-green-400 text-[10px] font-mono tracking-[0.8em] uppercase">Compute_Fabric_Load</div>
             <div className="flex items-center justify-end gap-6">
                <div className="h-px w-24 bg-green-500/20" />
                <div className="text-6xl font-thin tracking-tighter text-slate-100 uppercase">84.2 <span className="text-xs tracking-normal text-green-500 font-mono italic">TF/s</span></div>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-12 max-w-md ml-auto">
             {[
               { title: "VRAM_UTIL", val: "92.4GB" },
               { title: "CORE_TEMP", val: "42°C" },
               { title: "POWER_DRAW", val: "1.2kW" },
               { title: "COOLING", val: "68%" }
             ].map(stat => (
               <div key={stat.title} className="space-y-2">
                  <div className="text-[9px] font-mono text-slate-600 tracking-[0.2em]">{stat.title}</div>
                  <div className="text-lg font-extralight text-slate-300">{stat.val}</div>
               </div>
             ))}
          </div>

          {/* Hex Grid Telemetry Detail */}
          <div className="flex justify-end gap-2 h-12">
             {Array.from({length: 40}).map((_, i) => (
               <div 
                 key={i} 
                 className={`w-px transition-all duration-1000 ${i % 3 === 0 ? 'bg-green-500/40 h-full' : 'bg-green-500/10 h-1/2'}`}
               />
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SECURITY & ZERO TRUST */}
      <section className="h-screen w-full relative flex items-center justify-center">
        <div className="relative group p-1 w-full max-w-xl">
          {/* Animated Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 animate-pulse" />
          
          <div className="relative bg-slate-950/80 backdrop-blur-3xl border border-white/5 p-16 rounded-sm space-y-12">
            <div className="flex justify-between items-start">
               <div className="space-y-2">
                  <div className="text-red-500 text-[10px] font-mono tracking-[0.6em] uppercase">Security_Protocol_Z.0</div>
                  <h3 className="text-2xl font-extralight tracking-[0.2em] text-slate-100 uppercase">Shield_Active</h3>
               </div>
               <div className="w-12 h-12 rounded-full border-2 border-red-500/40 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-red-500 animate-pulse" />
               </div>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 font-mono text-[9px] tracking-[0.15em] uppercase text-slate-500">
               <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Encrypted_Link</span>
                  <span className="text-red-400">Verified</span>
               </div>
               <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Packet_Inspect</span>
                  <span className="text-red-400">Layer_7</span>
               </div>
               <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Auth_Token</span>
                  <span className="text-red-400">Valid</span>
               </div>
               <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Intrusion_Prot</span>
                  <span className="text-red-400">Auto_Block</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL CLOUD FABRIC */}
      <section className="h-screen w-full relative flex flex-col items-center justify-end pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
           <div className="w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative space-y-16 text-center">
           <div className="space-y-4">
              <div className="text-blue-400 text-[10px] font-mono tracking-[1em] uppercase opacity-60 italic">Global_Infrastructure_Fabric</div>
              <h4 className="text-5xl font-thin tracking-[0.3em] text-white uppercase">Stateless_Core</h4>
           </div>

           <div className="flex gap-16 items-center justify-center">
             {["LON_01", "NYC_04", "SIN_02", "TOK_01", "FRA_03"].map((node, i) => (
               <div key={node} className="space-y-6 group">
                  <div className="text-[9px] font-mono tracking-[0.2em] text-slate-600 group-hover:text-blue-400 transition-colors">{node}</div>
                  <div className="relative">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse mx-auto" />
                    <div className="absolute inset-0 w-8 h-8 -left-3.5 -top-3.5 rounded-full border border-blue-500/10 group-hover:border-blue-500/40 transition-colors" />
                  </div>
                  <div className="text-[8px] font-mono text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">LAT: {12 + i * 4}ms</div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
