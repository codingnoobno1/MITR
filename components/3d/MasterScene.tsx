"use client";

import React, { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Atmosphere } from "./core/WorldSystems";
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
import { ServerMegastructure } from "./environment/ServerMegastructure";
import { HeroLogo } from "./environment/HeroLogo";
import { AIOrchestratorChamber } from "./environment/AIOrchestratorChamber";
import { SecurityOperationsZone } from "./environment/SecurityOperationsZone";
import { CloudIntegrationLayer } from "./environment/CloudIntegrationLayer";
import { CinematicCameraRail } from "./environment/CinematicCameraRail";
import { DataFlow, AmbientDust } from "./fx/Effects";
import { Maximize2, Minimize2 } from "lucide-react";

export function MITRInfrastructureWorld({ interactive = true }: { interactive?: boolean }) {
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
      className={`absolute inset-0 z-0 bg-[#1e293b] transition-all duration-500 ${isFullscreen ? 'fixed inset-0 z-[999]' : ''}`}
    >
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ 
          antialias: true, 
          alpha: false, 
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.3
        }}
        shadows={{ type: THREE.PCFShadowMap }}
      >
        {/* 🎬 START CAMERA - Inside building middle, just before MITR logo */}
        <PerspectiveCamera makeDefault position={[0, 20, 60]} fov={45} />
        {!isFullscreen && !interactive ? <CinematicCameraRail /> : null}
        
        {/* 🎬 STABLE CAMERA CONTROLS - Tight and Focused */}
        <OrbitControls 
          enablePan={false}
          enableZoom={interactive || isFullscreen}
          enableRotate={interactive || isFullscreen}
          minDistance={30}
          maxDistance={150} // Restricted to stay INSIDE the building
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.15}
          target={[0, 18, -60]} // Locked onto the MITR Logo
          enableDamping
          dampingFactor={0.12}
          rotateSpeed={0.5}
        />
        
        <Atmosphere />
        
        <group>
          {/* Indoor-Only Architectural Environment (BuildingShell removed) */}
          <InteriorArchitecture />
          <FloorSystem />
          <CeilingSystem />
          <WallPanels />
          <StructuralColumns />
          
          {/* Interaction Layers */}
          <ColumnInfrastructure />
          <StructuralConnectors />
          <UtilityModules />
          <VerticalRouting />
          <OverheadInfrastructure />
          
          {/* Hero Branding - Directly in front of camera */}
          <HeroLogo />
          
          {/* Far Closure Wall - Ensures 'No Outside' view */}
          <mesh position={[0, 25, -280]}>
             <boxGeometry args={[1200, 100, 10]} />
             <meshStandardMaterial color="#0b1120" roughness={1} />
          </mesh>
          
          {/* Mid-scale Infrastructure */}
          <MaintenanceWalkways />
          <CableInfrastructure />
          <CoolingSystem />
          
          {/* Operational Hardware */}
          <ServerMegastructure />
          
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
          <span>Rotate to Explore</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span>Scroll to Zoom</span>
        </div>
      </div>
    </div>
  );
}
