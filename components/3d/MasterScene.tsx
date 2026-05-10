"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Atmosphere, CameraRail, ServerRoomEnclosure } from "./core/WorldSystems";
import { ReflectionPlane, InfrastructureCity } from "./infrastructure/Districts";
import { SignalHighway, ComputeCluster } from "./infrastructure/Compute";
import { PerformanceMonitor } from "@react-three/drei";
import { AmbientDust } from "./fx/Effects";

export function MITRInfrastructureWorld() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0f172a]">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: false }}
      >
        <Atmosphere />
        <CameraRail />
        
        {/* WORLD LAYERS */}
        <group>
          {/* Indoor Enclosure */}
          <ServerRoomEnclosure />
          
          {/* Base Environment */}
          <ReflectionPlane />
          
          {/* Infrastructure Aisle Districts */}
          <InfrastructureCity />
          
          {/* High-Level Orchestration Highways (Data Cable Trays) */}
          <SignalHighway startX={-300} endX={600} z={-22} count={8} />
          <SignalHighway startX={-300} endX={600} z={5} count={4} />
          
          {/* Core Computational Units */}
          <ComputeCluster position={[50, 2, -22]} label="CENTRAL-DB-UNIT" />
          <ComputeCluster position={[200, 2, -22]} label="PIPELINE-ORCHESTRATOR" />
          <ComputeCluster position={[350, 2, -22]} label="CLOUD-GATEWAY" />
          
          {/* Ceiling Cable Structures (Depth realization) */}
          {[...Array(15)].map((_, i) => (
            <mesh key={i} position={[(Math.random() - 0.5) * 800, 9.8, -10]}>
               <boxGeometry args={[40, 0.1, 0.2]} />
               <meshStandardMaterial color="#334155" />
            </mesh>
          ))}

          <AmbientDust />
        </group>

        <PerformanceMonitor />
      </Canvas>
      
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)] pointer-events-none" />
    </div>
  );
}
