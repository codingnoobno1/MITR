"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Atmosphere, CameraRail } from "./core/WorldSystems";
import { ReflectionPlane, InfrastructureCity } from "./infrastructure/Districts";
import { SignalHighway, ComputeCluster } from "./infrastructure/Compute";
import { PerformanceMonitor, Stars } from "@react-three/drei";

export function MITRInfrastructureWorld() {
  return (
    <div className="absolute inset-0 z-0 bg-[#eef2f7]">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: false }}
      >
        <Atmosphere />
        <CameraRail />
        
        {/* WORLD LAYERS */}
        <group>
          {/* Base Environment */}
          <ReflectionPlane />
          <Stars radius={300} depth={60} count={1000} factor={2} saturation={0} fade speed={1} />
          
          {/* Infrastructure Districts */}
          <InfrastructureCity />
          
          {/* Orchestration Highways (Connecting the world) */}
          <SignalHighway startX={-200} endX={500} z={-20} count={10} />
          <SignalHighway startX={-100} endX={400} z={0} count={5} />
          
          {/* Key Infrastructure Nodes */}
          <ComputeCluster position={[50, 2, -10]} label="PRIMARY-CLUSTER-A" />
          <ComputeCluster position={[200, 2, -15]} label="DEVSECOPS-ENGINE" />
          <ComputeCluster position={[350, 2, -5]} label="CLOUD-FABRIC-NODE" />
          
          {/* Distant Silhouettes (Depth realization) */}
          {[...Array(10)].map((_, i) => (
            <mesh key={i} position={[(Math.random() - 0.5) * 800, 20, -100]}>
               <boxGeometry args={[20, 100, 2]} />
               <meshStandardMaterial color="#cbd5e1" transparent opacity={0.05} />
            </mesh>
          ))}
        </group>

        <PerformanceMonitor />
      </Canvas>
      
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(238,242,247,0.4)_100%)] pointer-events-none" />
    </div>
  );
}
