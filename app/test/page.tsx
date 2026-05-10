"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { TestEnvironment } from "@/components/3d/test/TestEnvironment";
import { TestArchitecture } from "@/components/3d/test/TestArchitecture";
import { TestHardware } from "@/components/3d/test/TestHardware";

export default function TestPage() {
  return (
    <main className="relative w-full h-screen bg-[#020617] overflow-hidden">
      {/* HUD OVERLAY */}
      <div className="absolute top-10 left-10 z-50 pointer-events-none">
        <div className="space-y-1">
          <h1 className="text-white text-2xl font-bold tracking-tighter font-mono">MITR_INFRA_V2</h1>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Experimental Build: 0.9.2</span>
          </div>
        </div>
      </div>

      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        shadows
      >
        <PerspectiveCamera makeDefault position={[15, 25, 70]} fov={40} />
        
        <OrbitControls 
          enablePan={false}
          maxDistance={140}
          minDistance={20}
          target={[0, 20, -40]}
          enableDamping
          dampingFactor={0.08}
        />

        <Suspense fallback={null}>
          <group>
            {/* 1. Global Scene Calibration */}
            <TestEnvironment />
            
            {/* 2. Structural Envelope */}
            <TestArchitecture />
            
            {/* 3. Operational Density */}
            <TestHardware />
          </group>
        </Suspense>

        <PerformanceMonitor />
      </Canvas>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[9px] text-white/20 uppercase tracking-[0.4em] pointer-events-none">
        Interactive Infrastructure Protocol Active
      </div>
    </main>
  );
}
