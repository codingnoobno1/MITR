"use client";

import React from "react";

export function OverlayHUD() {
  return (
    <div className="w-screen pointer-events-none text-slate-300 font-light selection:bg-blue-500/30">
      {/* SECTION 1: ORCHESTRATION */}
      <section className="h-screen w-full relative flex items-center justify-center">
        <div className="absolute top-12 left-12">
          <div className="text-blue-400 text-[10px] font-mono tracking-[0.4em] mb-2">SYSTEM_OPERATIONAL_01</div>
          <h1 className="text-slate-100 text-2xl font-extralight tracking-[0.2em] uppercase">Mitr Central</h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Node Sync: Active</span>
          </div>
        </div>
        <div className="absolute top-12 right-12 text-right">
          <div className="text-[10px] font-mono tracking-[0.2em] text-blue-500/60 mb-1">RX_TX_LATENCY</div>
          <div className="text-xl font-extralight tracking-tighter text-slate-100">0.0024ms</div>
        </div>
      </section>

      {/* SECTION 2: DEVOPS */}
      <section className="h-screen w-full relative flex items-center">
        <div className="absolute left-20 space-y-12">
          <div className="text-[10px] font-mono tracking-[0.5em] text-blue-400 opacity-50">PIPELINE_ENGINE</div>
          <div className="flex flex-col gap-8">
            {["BUILD", "TEST", "DEPLOY"].map((stage, i) => (
              <div key={stage} className="group flex items-center gap-6">
                <div className="w-px h-8 bg-blue-500/20 group-hover:bg-blue-400 transition-colors" />
                <div className="text-xs tracking-[0.4em] text-slate-400 group-hover:text-slate-100 transition-colors">{stage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MLOPS */}
      <section className="h-screen w-full relative flex items-center justify-end">
        <div className="absolute right-20 text-right space-y-10">
          <div className="text-[10px] font-mono tracking-[0.5em] text-green-400 opacity-50">COMPUTE_FABRIC</div>
          <div className="space-y-4">
            <div className="text-3xl font-extralight tracking-tighter text-slate-100">84.2<span className="text-xs tracking-normal text-slate-500 ml-2">TFLOPS</span></div>
            <div className="text-[10px] tracking-[0.3em] text-slate-500 uppercase">H100_CLUSTER_LOAD</div>
          </div>
          <div className="flex gap-1.5 justify-end items-end h-8">
            {Array.from({length: 24}).map((_, i) => (
              <div 
                key={i} 
                className="w-[1px] bg-green-500/40" 
                style={{ 
                  height: `${20 + Math.random() * 80}%`,
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SECURITY */}
      <section className="h-screen w-full relative flex items-center justify-center">
        <div className="p-12 border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-sm">
          <div className="text-[10px] font-mono tracking-[0.5em] text-red-500/70 mb-10 text-center">ZERO_TRUST_VERIFIED</div>
          <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-[10px] tracking-[0.2em] font-mono uppercase text-slate-500">
            <div>Security: <span className="text-slate-200">Enforced</span></div>
            <div>Threats: <span className="text-slate-200">0</span></div>
            <div>Uptime: <span className="text-slate-200">99.999%</span></div>
            <div>Bypass: <span className="text-red-500">Blocked</span></div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOUD FABRIC */}
      <section className="h-screen w-full relative flex flex-col items-center justify-center">
        <div className="text-[10px] font-mono tracking-[0.8em] text-blue-400/40 mb-12">GLOBAL_DISTRIBUTION</div>
        <div className="flex gap-20 items-center">
          {["LON", "NYC", "SIN", "TOK"].map((loc) => (
            <div key={loc} className="flex flex-col items-center gap-4 group">
              <div className="text-[10px] tracking-[0.3em] text-slate-500 group-hover:text-blue-400 transition-colors">{loc}</div>
              <div className="w-1 h-1 rounded-full bg-blue-500/20 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_#3b82f6] transition-all" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
