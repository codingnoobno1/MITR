"use client";

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { ChevronLeft, ChevronRight, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TestEnvironment } from "./TestEnvironment";
import { TestArchitecture } from "./TestArchitecture";
import { TestHardware } from "./TestHardware";
import { TestPostProcessing } from "./TestPostProcessing";
import { CameraRig } from "./CameraRig";
import { Button } from "@/components/ui/button";

export default function TestSceneContainer() {
  const [index, setIndex] = useState(0);
  const totalWaypoints = 5;

  const next = () => setIndex((prev) => (prev + 1) % totalWaypoints);
  const prev = () => setIndex((prev) => (prev - 1 + totalWaypoints) % totalWaypoints);

  const CONTENT = [
    {
      tag: "Infrastructure_OS",
      title: "Modular Intelligent Tech Resources",
      desc: "Architecting standardized digital coordination for fragmented industrial workflows.",
      stats: [{ l: "Active_Nodes", v: "1.2k+" }, { l: "Sync_Latency", v: "0.02ms" }]
    },
    {
      tag: "Operational_Depth",
      title: "Orchestration Chamber",
      desc: "Real-time hardware-level synchronization for enterprise scalability.",
      stats: [{ l: "Cluster_Load", v: "84%" }, { l: "Health_Index", v: "Nominal" }]
    },
    {
      tag: "Compute_Fabric",
      title: "MLOps Precision",
      desc: "High-performance compute clusters optimized for zero-trust data processing.",
      stats: [{ l: "TF/s_Output", v: "84.2" }, { l: "Temp_Core", v: "42°C" }]
    },
    {
      tag: "Security_Shield",
      title: "Zero-Trust Architecture",
      desc: "Layer 7 packet inspection and automated intrusion protocol enforcement.",
      stats: [{ l: "Threat_Level", v: "Zero" }, { l: "Auth_Status", v: "Verified" }]
    },
    {
      tag: "Global_Reach",
      title: "Distributed Cloud Edge",
      desc: "Stateless core infrastructure deployed across major global financial hubs.",
      stats: [{ l: "Exit_Nodes", v: "340" }, { l: "Uptime", v: "99.999%" }]
    }
  ];

  return (
    <div className="relative w-screen h-screen bg-[#020617] overflow-hidden">
      {/* 🛡️ MAIN 3D CANVAS */}
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4
        }}
        shadows
        className="z-0"
      >
        <CameraRig index={index} />
        
        <Suspense fallback={null}>
          <group>
            <TestEnvironment />
            <TestArchitecture />
            <TestHardware />
          </group>
        </Suspense>

        <TestPostProcessing />
        <PerformanceMonitor />
      </Canvas>

      {/* 🛡️ TOP RIGHT: PREMIUM BRAND HEADER (Enhanced & Beautified) */}
      <div className="absolute top-10 right-10 z-30 pointer-events-none select-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-6 px-8 py-5 rounded-sm bg-white/[0.02] border border-white/5 backdrop-blur-2xl shadow-2xl"
        >
          <div className="text-right space-y-1">
             <div className="flex items-center justify-end gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                <div className="text-blue-400 text-[9px] font-mono tracking-[0.4em] uppercase leading-none">Mitr_Core_System</div>
             </div>
             <div className="text-slate-400 text-[11px] font-extralight tracking-[0.05em] uppercase opacity-40">Status: Orchestration_Active</div>
          </div>
          
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          
          <div className="relative group">
            {/* Subtle glow behind logo */}
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.img 
              key={`logo-${index}`}
              src="/MITR.png"
              alt="MITR"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 1.0 }}
              className="h-14 w-auto object-contain invert grayscale brightness-150 relative z-10"
            />
          </div>
        </motion.div>
      </div>

      {/* 🛡️ MAIN CONTENT OVERLAY (Diagonal Layout) */}
      <div className="absolute inset-0 pointer-events-none z-20 flex items-center px-12 md:px-24">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="max-w-2xl space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Zap className="w-3 h-3 text-blue-400 fill-blue-400/20" />
              <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-blue-400 uppercase">
                {CONTENT[index].tag}
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white uppercase leading-none">
                {CONTENT[index].title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-blue-500 block' : 'block'}>
                    {word}
                  </span>
                ))}
              </h2>
              <p className="text-lg text-slate-400 font-extralight max-w-md leading-relaxed">
                {CONTENT[index].desc}
              </p>
            </div>

            <div className="flex gap-12 pt-8 border-t border-white/5">
              {CONTENT[index].stats.map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-extralight text-white">{s.v}</div>
                  <div className="text-[9px] font-mono tracking-widest text-slate-600 uppercase">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="pt-8 pointer-events-auto">
              <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-xs font-bold tracking-widest uppercase gap-4 shadow-xl shadow-blue-900/20">
                Explore Module <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🛡️ NAVIGATION ARROWS (Right Side) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        <button 
          onClick={prev}
          className="group p-6 rounded-full border border-white/5 bg-white/[0.02] hover:bg-blue-600/20 hover:border-blue-500/30 transition-all pointer-events-auto backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
        </button>

        <div className="flex flex-col items-center gap-3 py-4">
          {Array.from({ length: totalWaypoints }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1 rounded-full transition-all duration-500 pointer-events-auto ${i === index ? 'h-12 bg-blue-500' : 'h-3 bg-slate-800 hover:bg-slate-700'}`}
            />
          ))}
        </div>

        <button 
          onClick={next}
          className="group p-6 rounded-full border border-white/5 bg-white/[0.02] hover:bg-blue-600/20 hover:border-blue-500/30 transition-all pointer-events-auto backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
        </button>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute top-12 left-12 flex gap-4 items-center opacity-40">
         <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
         <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">System_Active_04</div>
      </div>
    </div>
  );
}
