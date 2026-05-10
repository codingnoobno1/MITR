"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { TestEnvironment } from "@/components/3d/test/TestEnvironment";
import { TestArchitecture } from "@/components/3d/test/TestArchitecture";
import { TestHardware } from "@/components/3d/test/TestHardware";
import { TestPostProcessing } from "@/components/3d/test/TestPostProcessing";

export default function TestPage() {
  return (
    <main className="relative w-full h-screen bg-[#f8fafc] overflow-hidden">
      {/* HUD OVERLAY */}
      <div className="absolute top-10 left-10 z-50 pointer-events-none">
        <div className="space-y-1">
          <h1 className="text-slate-800 text-2xl font-bold tracking-tighter font-mono">MITR_CENTRAL_ORCHESTRATION</h1>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">MASTER BLUEPRINT ACTIVE</span>
          </div>
        </div>
      </div>

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
      >
        {/* 🎥 MASTER CAMERA BLUEPRINT */}
        <PerspectiveCamera 
          makeDefault 
          position={[0, 38, 130]} 
          fov={42} 
        />
        
        <OrbitControls 
          enablePan={false}
          maxDistance={250}
          minDistance={40}
          target={[0, 24, -80]}
          enableDamping
          dampingFactor={0.08}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={0.1}
        />

        <Suspense fallback={null}>
          <group>
            <TestEnvironment />
            <TestArchitecture />
            <TestHardware />
          </group>
        </Suspense>

        {/* 🌸 POST-PROCESSING (Bloom) */}
        <TestPostProcessing />

        <PerformanceMonitor />
      </Canvas>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[9px] text-slate-400 uppercase tracking-[0.4em] pointer-events-none">
        Orchestration Chamber Protocol Verified
      </div>
    </main>
  );
}
