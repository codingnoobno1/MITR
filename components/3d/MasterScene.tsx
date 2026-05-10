"use client";

import React, { useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";
import { Atmosphere, ServerRoomEnclosure } from "./core/WorldSystems";
import { ServerRack, DynamicInfrastructure } from "./infrastructure/Districts";
import { DataFlow, AmbientDust } from "./fx/Effects";
import { divisions } from "@/data/divisions";
import { Maximize2, Minimize2 } from "lucide-react";
import * as THREE from "three";

const allProducts = divisions.flatMap(d => d.products);

function CinematicCamera() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Subtle breathing/floating movement
    state.camera.position.y += Math.sin(t * 0.5) * 0.005;
    state.camera.position.x += Math.cos(t * 0.3) * 0.005;
    
    // Slight roll/tilt for handheld feel
    state.camera.rotation.z = Math.sin(t * 0.2) * 0.01;
  });
  return null;
}

export function MITRInfrastructureWorld() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 z-0 bg-[#0c1222] transition-all duration-500 ${isFullscreen ? 'fixed inset-0 z-[999]' : ''}`}
    >
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        shadows
      >
        <PerspectiveCamera makeDefault position={[0, 8, 50]} fov={45} />
        <CinematicCamera />
        
        <OrbitControls 
          enablePan
          enableZoom
          enableRotate
          minDistance={10}
          maxDistance={200}
          minPolarAngle={0.1}
          maxPolarAngle={Math.PI / 2.05}
          target={[10, 5, -20]}
          autoRotate
          autoRotateSpeed={0.2}
          enableDamping
          dampingFactor={0.03}
          makeDefault
        />
        
        <Atmosphere />
        
        <group>
          <ServerRoomEnclosure />
          
          {/* Deepened Aisle Layout for more perspective depth */}
          <group position={[0, 0, -10]}>
            {/* === AWS AISLE === */}
            <group position={[-30, 0, 0]}>
              {[-60, -40, -20, 0, 20, 40].map((z, i) => (
                <ServerRack 
                  key={`aws-${i}`} 
                  position={[0, 5, z]} 
                  label={`AWS-CLUSTER-${i + 1}`} 
                  active={i % 2 === 0} 
                  provider={0}
                />
              ))}
            </group>

            {/* === AZURE AISLE === */}
            <group position={[15, 0, 0]}>
              {[-60, -40, -20, 0, 20, 40].map((z, i) => (
                <ServerRack 
                  key={`az-${i}`} 
                  position={[0, 5, z]} 
                  label={`AZURE-NODE-${i + 1}`} 
                  active={i % 3 !== 0} 
                  provider={1}
                />
              ))}
            </group>

            {/* === K8S AISLE === */}
            <group position={[60, 0, 0]}>
              {[-60, -40, -20, 0, 20, 40].map((z, i) => (
                <ServerRack 
                  key={`k8s-${i}`} 
                  position={[0, 5, z]} 
                  label={`K8S-UNIT-${i + 1}`} 
                  active 
                  provider={2}
                />
              ))}
            </group>
          </group>

          {/* === DYNAMIC PRODUCT SERVERS (Scattered for organic depth) === */}
          <group position={[10, 0, -80]}>
            <DynamicInfrastructure products={allProducts} />
          </group>

          {/* === COMPLEX DATA FLOWS === */}
          <DataFlow from={[-30, 8, -20]} to={[15, 8, -20]}  count={4} color="#FF9900" label="SYNC_01" />
          <DataFlow from={[15, 9, -40]}  to={[60, 9, -40]}  count={4} color="#0078D4" label="DEPLOY_X" />
          <DataFlow from={[60, 7, 0]}    to={[15, 7, -80]}  count={5} color="#326CE5" label="ROUTING_PROD" />
          <DataFlow from={[-30, 10, 20]} to={[60, 10, 20]}  count={6} color="#315b9c" label="GLOBAL_BUS" />

          <AmbientDust />
        </group>

        <PerformanceMonitor />
      </Canvas>
      
      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-50">
        <button
          onClick={toggleFullscreen}
          className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 text-white p-3 rounded-xl shadow-2xl hover:scale-110 active:scale-95 transition-all"
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>

      {/* HUD Overlay with better styling */}
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <div className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <span className="text-[12px] font-bold text-white uppercase tracking-widest">System Operational</span>
          </div>
          <div className="space-y-2">
            {[
              { label: "AWS INFRA", color: "bg-orange-500", val: "ACTIVE" },
              { label: "AZURE CORE", color: "bg-blue-500", val: "SYNCING" },
              { label: "K8S MESH", color: "bg-blue-400", val: "STABLE" },
            ].map(p => (
              <div key={p.label} className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${p.color}`} />
                  <span className="text-[10px] font-bold text-slate-300 tracking-wider">{p.label}</span>
                </div>
                <span className="text-[9px] font-mono text-slate-500">{p.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-40">
        <div className="flex items-center gap-4 text-[10px] text-white font-medium tracking-[0.2em] uppercase">
          <span>Explore</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span>Zoom</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span>Pan</span>
        </div>
      </div>

      {/* Dynamic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(12,18,34,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
