"use client";

import React from "react";
import { MITRInfrastructureWorld } from "@/components/3d/MasterScene";
import { FloatingFiles } from "@/components/animations/FloatingFiles";
import { MousePointer2 } from "lucide-react";

export function HeroPhilosophy() {
  return (
    <section className="relative h-screen w-full bg-[#111827] overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* 3D World takes the entire viewport as the MAIN content */}
      <div className="absolute inset-0 z-0">
        <MITRInfrastructureWorld interactive={true} />
      </div>

      {/* Subtle overlays that don't block interaction */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <FloatingFiles />
      </div>

      {/* Interaction prompt */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-4">
        <div className="px-6 py-3 rounded-full bg-blue-600/10 border border-blue-500/20 backdrop-blur-md flex items-center gap-3">
          <MousePointer2 className="w-4 h-4 text-blue-400 animate-bounce" />
          <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
            Fully Interactive Infrastructure World
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Scroll to Begin</span>
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Floating stats or labels could be here, but keeping it clear as requested */}
    </section>
  );
}
