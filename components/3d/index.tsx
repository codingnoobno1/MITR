"use client";

import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import { SceneOrchestrator } from "./core/SceneOrchestrator";
import { PCBBoard, PCBGrid } from "./board/Infrastructure";
import { CPUChip, Capacitor } from "./hardware/Components";
import { CopperTrace, ElectronPulse, AmbientDust } from "./fx/Effects";
import { generatePCBPath } from "./utils/generators";
import { CameraRig, LightingRig, EnvironmentFog } from "./core/Environment";

function Sector({ position, count = 5, color = "#2563eb" }: { position: [number, number, number], count?: number, color?: string }) {
  const traces = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const start = new THREE.Vector3(
        position[0] + (Math.random() - 0.5) * 5,
        position[1],
        position[2] + (Math.random() - 0.5) * 5
      );
      return generatePCBPath(start, 3, 4);
    });
  }, [count, position]);

  return (
    <group>
      {traces.map((path, i) => (
        <React.Fragment key={i}>
          <CopperTrace path={path} active={Math.random() > 0.5} />
          <ElectronPulse path={path} delay={i * 2} />
        </React.Fragment>
      ))}
    </group>
  );
}

export function MITRHeroScene() {
  return (
    <div className="absolute inset-0 z-0 bg-[#eef2f7]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 10, 25]} fov={45} />
        
        <EnvironmentFog />
        <LightingRig />
        <CameraRig />
        
        <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.1}>
          <PCBBoard />
          <PCBGrid />
          
          {/* Main AI Core Sector */}
          <group position={[0, 0, 0]}>
             <CPUChip position={[0, 0, 0]} size={[4, 0.8, 4]} label="MITR-CORE-AI" />
             <Sector position={[0, 0, 0]} count={12} />
          </group>

          {/* Operational Sector */}
          <group position={[-12, 0, -8]}>
             <CPUChip position={[0, 0, 0]} size={[2.5, 0.5, 2.5]} label="RUNTIME-BUS" />
             <Sector position={[0, 0, 0]} count={8} color="#64748b" />
             <Capacitor position={[2, 0.4, 2]} />
             <Capacitor position={[2.8, 0.4, 2]} />
          </group>

          {/* Infrastructure Sector */}
          <group position={[14, 0, 10]}>
             <CPUChip position={[0, 0, 0]} size={[3, 0.6, 3]} label="INFRA-MESH" />
             <Sector position={[0, 0, 0]} count={10} />
             {[...Array(6)].map((_, i) => (
               <Capacitor key={i} position={[i * 0.8 - 2, 0.4, 2.5]} />
             ))}
          </group>

          <AmbientDust />
        </Float>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef2f7]/50 via-transparent to-[#eef2f7]/80 pointer-events-none" />
    </div>
  );
}
