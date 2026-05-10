"use client";

import React, { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";
import { Atmosphere, ServerRoomEnclosure } from "./core/WorldSystems";
import { ServerRack, ReflectionPlane, DynamicInfrastructure } from "./infrastructure/Districts";
import { DataFlow, AmbientDust } from "./fx/Effects";
import { divisions } from "@/data/divisions";
import { Maximize2, Minimize2, RotateCcw } from "lucide-react";

// Gather all products from divisions data
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
        shadows 
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: false }}
      >
        <PerspectiveCamera makeDefault position={[0, 8, 30]} fov={55} />
        
        {/* User-controllable orbit camera */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={80}
          minPolarAngle={0.3}
          maxPolarAngle={Math.PI / 2.2}
          target={[0, 5, -10]}
          autoRotate
          autoRotateSpeed={0.3}
        />
        
        <Atmosphere />
        
        <group>
          <ServerRoomEnclosure />
          <ReflectionPlane />
          
          {/* === STATIC CLOUD INFRASTRUCTURE AISLES === */}
          
          {/* AISLE LEFT — AWS Cluster */}
          <group position={[-50, 0, 0]}>
            {[-16, -8, 0, 8, 16].map((x, i) => (
              <ServerRack 
                key={`aws-${i}`} 
                position={[x, 6, -20]} 
                label={`AWS-NODE-${i + 1}`} 
                active={i % 2 === 0} 
                provider={0}
              />
            ))}
          </group>

          {/* AISLE CENTER — Azure Cluster */}
          <group position={[0, 0, 0]}>
            {[-16, -8, 0, 8, 16].map((x, i) => (
              <ServerRack 
                key={`az-${i}`} 
                position={[x, 6, -35]} 
                label={`AZURE-NODE-${i + 1}`} 
                active={i % 3 !== 0} 
                provider={1}
              />
            ))}
          </group>

          {/* AISLE RIGHT — K8S Cluster */}
          <group position={[50, 0, 0]}>
            {[-16, -8, 0, 8, 16].map((x, i) => (
              <ServerRack 
                key={`k8s-${i}`} 
                position={[x, 6, -20]} 
                label={`K8S-POD-${i + 1}`} 
                active 
                provider={2}
              />
            ))}
          </group>

          {/* === DYNAMIC PRODUCT SERVERS (from divisions.ts) === */}
          <group position={[0, 0, 5]}>
            <DynamicInfrastructure products={allProducts} />
          </group>

          {/* === DATA FLOW ANIMATIONS === */}
          {/* AWS → Azure data transfer */}
          <DataFlow 
            from={[-50, 8, -20]} 
            to={[0, 8, -35]} 
            count={4} 
            color="#FF9900" 
            label="DATA SYNC" 
          />
          {/* Azure → K8S deployment */}
          <DataFlow 
            from={[0, 10, -35]} 
            to={[50, 10, -20]} 
            count={3} 
            color="#0078D4" 
            label="DEPLOY PIPELINE" 
          />
          {/* K8S → Products routing */}
          <DataFlow 
            from={[50, 6, -20]} 
            to={[0, 6, 5]} 
            count={5} 
            color="#326CE5" 
            label="K8S ROUTING" 
          />
          {/* Cross-cloud orchestration */}
          <DataFlow 
            from={[-50, 12, -20]} 
            to={[50, 12, -20]} 
            count={6} 
            color="#315b9c" 
            label="ORCHESTRATION BUS" 
          />

          {/* Ceiling cable trays — structured */}
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh key={`cable-${i}`} position={[i * 25 - 100, 14.5, -15]}>
              <boxGeometry args={[0.15, 0.15, 80]} />
              <meshStandardMaterial color="#334155" metalness={0.6} />
            </mesh>
          ))}

          <AmbientDust />
        </group>

        <PerformanceMonitor />
      </Canvas>
      
      {/* Controls Overlay */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-50">
        <button
          onClick={toggleFullscreen}
          className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 p-2.5 rounded-lg hover:bg-slate-700 hover:text-white transition-all"
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* HUD Labels */}
      <div className="absolute top-4 left-4 z-50 pointer-events-none">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Infrastructure Live</span>
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

      {/* Soft vignette — lighter than before */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(12,18,34,0.5)_100%)] pointer-events-none" />
    </div>
  );
}
