"use client";

import React, { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Atmosphere } from "./core/WorldSystems";
import { BuildingShell } from "./environment/BuildingShell";
import { InteriorArchitecture } from "./environment/InteriorArchitecture";
import { FloorSystem } from "./environment/FloorSystem";
import { CeilingSystem } from "./environment/CeilingSystem";
import { WallPanels } from "./environment/WallPanels";
import { StructuralColumns } from "./environment/StructuralColumns";
import { MaintenanceWalkways } from "./environment/MaintenanceWalkways";
import { CableInfrastructure } from "./environment/CableInfrastructure";
import { CoolingSystem } from "./environment/CoolingSystem";
import { ColumnInfrastructure } from "./environment/ColumnInfrastructure";
import { StructuralConnectors } from "./environment/StructuralConnectors";
import { UtilityModules } from "./environment/UtilityModules";
import { VerticalRouting } from "./environment/VerticalRouting";
import { OverheadInfrastructure } from "./environment/OverheadInfrastructure";
import { ServerCorridor } from "./environment/ServerCorridor";
import { AIOrchestratorChamber } from "./environment/AIOrchestratorChamber";
import { SecurityOperationsZone } from "./environment/SecurityOperationsZone";
import { CloudIntegrationLayer } from "./environment/CloudIntegrationLayer";
import { CinematicCameraRail } from "./environment/CinematicCameraRail";
import { DataFlow, AmbientDust } from "./fx/Effects";
import { Maximize2, Minimize2 } from "lucide-react";

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
      className={`absolute inset-0 z-0 bg-[#111827] transition-all duration-500 ${isFullscreen ? 'fixed inset-0 z-[999]' : ''}`}
    >
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ 
          antialias: true, 
          alpha: false, 
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1
        }}
        shadows
      >
        <PerspectiveCamera makeDefault position={[0, 12, 80]} fov={45} />
        <CinematicCameraRail />
        
        {/* User can still override for manual exploration */}
        <OrbitControls 
          enablePan
          enableZoom
          enableRotate
          minDistance={10}
          maxDistance={300}
          minPolarAngle={0.1}
          maxPolarAngle={Math.PI / 2.05}
          target={[0, 5, -20]}
          enableDamping
          dampingFactor={0.03}
        />
        
        <Atmosphere />
        
        <group>
          {/* Layered Architectural Environment */}
          <BuildingShell />
          <InteriorArchitecture />
          <FloorSystem />
          <CeilingSystem />
          <WallPanels />
          <StructuralColumns />
          
          {/* INTERACTION LAYERS (Systems Design) */}
          <ColumnInfrastructure />
          <StructuralConnectors />
          <UtilityModules />
          <VerticalRouting />
          <OverheadInfrastructure />
          
          {/* Mid-scale Infrastructure */}
          <MaintenanceWalkways />
          <CableInfrastructure />
          <CoolingSystem />
          
          {/* Operational Infrastructure */}
          <ServerCorridor />
          
          {/* Key Facility Zones */}
          <AIOrchestratorChamber />
          <SecurityOperationsZone />
          <CloudIntegrationLayer />

          {/* Environmental FX */}
          <DataFlow from={[-40, 8, -20]} to={[40, 8, -20]}  count={4} color="#e5e7eb" label="SYNC_01" />
          <DataFlow from={[40, 9, -40]}  to={[120, 9, -40]} count={4} color="#94a3b8" label="DEPLOY_X" />
          <DataFlow from={[120, 7, 0]}   to={[40, 7, -80]}  count={5} color="#315b9c" label="ROUTING_PROD" />
          
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

      {/* HUD Overlay */}
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <div className="bg-slate-900/40 backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-[12px] font-bold text-white uppercase tracking-widest font-mono">Infrastructure Network</span>
          </div>
          <div className="space-y-1.5">
             <div className="flex items-center gap-2">
                <span className="text-[9px] text-slate-500 font-mono">STATUS:</span>
                <span className="text-[10px] text-blue-400 font-bold">SYNCHRONIZED</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[9px] text-slate-500 font-mono">LATENCY:</span>
                <span className="text-[10px] text-green-400 font-bold">1.2ms</span>
             </div>
          </div>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-40">
        <div className="flex items-center gap-4 text-[10px] text-white font-medium tracking-[0.2em] uppercase">
          <span>Move Mouse to Explore</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span>Scroll to Zoom</span>
        </div>
      </div>
    </div>
  );
}
