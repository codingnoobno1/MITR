"use client";

import React, { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";
import { Atmosphere, ServerRoomEnclosure } from "./core/WorldSystems";
import { ServerRack, DynamicInfrastructure } from "./infrastructure/Districts";
import { DataFlow, AmbientDust } from "./fx/Effects";
import { divisions } from "@/data/divisions";
import { Maximize2, Minimize2 } from "lucide-react";

const allProducts = divisions.flatMap(d => d.products);

export function MITRInfrastructureWorld() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 z-0 bg-[#0c1222] ${isFullscreen ? 'fixed inset-0 z-[999]' : ''}`}
    >
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        flat
      >
        <PerspectiveCamera makeDefault position={[0, 8, 35]} fov={50} />
        
        {/* Full user control — drag, zoom, pan */}
        <OrbitControls 
          enablePan
          enableZoom
          enableRotate
          minDistance={8}
          maxDistance={150}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.1}
          target={[20, 4, -15]}
          autoRotate
          autoRotateSpeed={0.15}
          enableDamping
          dampingFactor={0.05}
        />
        
        <Atmosphere />
        
        <group>
          <ServerRoomEnclosure />
          
          {/* Dark floor (no reflection — removes blur) */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -10]} receiveShadow>
            <planeGeometry args={[600, 150]} />
            <meshStandardMaterial color="#0c1222" roughness={0.3} metalness={0.4} />
          </mesh>
          
          {/* === AWS AISLE (left) — spaced out along Z === */}
          {[-30, -15, 0, 15, 30].map((z, i) => (
            <ServerRack 
              key={`aws-${i}`} 
              position={[-25, 5, z - 20]} 
              label={`AWS-${i + 1}`} 
              active={i % 2 === 0} 
              provider={0}
            />
          ))}

          {/* === AZURE AISLE (center) === */}
          {[-30, -15, 0, 15, 30].map((z, i) => (
            <ServerRack 
              key={`az-${i}`} 
              position={[10, 5, z - 20]} 
              label={`AZURE-${i + 1}`} 
              active={i % 3 !== 0} 
              provider={1}
            />
          ))}

          {/* === K8S AISLE (right) === */}
          {[-30, -15, 0, 15, 30].map((z, i) => (
            <ServerRack 
              key={`k8s-${i}`} 
              position={[45, 5, z - 20]} 
              label={`K8S-${i + 1}`} 
              active 
              provider={2}
            />
          ))}

          {/* === DYNAMIC PRODUCT SERVERS (far back row) === */}
          <group position={[10, 0, -55]}>
            <DynamicInfrastructure products={allProducts} />
          </group>

          {/* === DATA FLOW ANIMATIONS === */}
          <DataFlow from={[-25, 8, -20]} to={[10, 8, -20]}  count={3} color="#FF9900" label="SYNC" />
          <DataFlow from={[10, 9, -20]}  to={[45, 9, -20]}  count={3} color="#0078D4" label="DEPLOY" />
          <DataFlow from={[45, 7, -20]}  to={[10, 7, -55]}  count={4} color="#326CE5" label="ROUTING" />
          <DataFlow from={[-25, 10, -5]} to={[45, 10, -5]}  count={5} color="#315b9c" label="ORCHESTRATION" />

          {/* Cable trays */}
          {Array.from({ length: 6 }).map((_, i) => (
            <mesh key={`cable-${i}`} position={[i * 20 - 50, 13.5, -15]}>
              <boxGeometry args={[0.1, 0.1, 120]} />
              <meshStandardMaterial color="#334155" metalness={0.5} />
            </mesh>
          ))}

          <AmbientDust />
        </group>

        <PerformanceMonitor />
      </Canvas>
      
      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-50">
        <button
          onClick={toggleFullscreen}
          className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 p-2.5 rounded-lg hover:bg-slate-700 hover:text-white transition-all"
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* HUD */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live Infrastructure</span>
        </div>
        <div className="flex gap-4">
          {[
            { label: "AWS", color: "bg-orange-500" },
            { label: "AZURE", color: "bg-blue-500" },
            { label: "K8S", color: "bg-blue-400" },
          ].map(p => (
            <div key={p.label} className="flex items-center gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${p.color}`} />
              <span className="text-[9px] font-bold text-slate-500 tracking-wider">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hint */}
      <div className="absolute bottom-4 left-4 z-50 pointer-events-none">
        <span className="text-[9px] text-slate-600 font-medium">
          Drag to rotate · Scroll to zoom · Right-click to pan
        </span>
      </div>

      {/* Lighter vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(12,18,34,0.4)_100%)] pointer-events-none" />
    </div>
  );
}
