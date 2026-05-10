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
import { IntelligenceCore } from "./environment/IntelligenceCore";
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
        {/* 🎬 OFFSET CAMERA - Breaking the visual slicing lines */}
        <PerspectiveCamera makeDefault position={[10, 22, 60]} fov={45} />
        {!isFullscreen && !interactive ? <CinematicCameraRail /> : null}
        
        <OrbitControls 
          enablePan={false}
          enableZoom={interactive || isFullscreen}
          enableRotate={interactive || isFullscreen}
          minDistance={30}
          maxDistance={120} 
          minPolarAngle={0.3}
          maxPolarAngle={Math.PI / 2.15}
          target={[0, 18, -60]} 
          enableDamping
          dampingFactor={0.12}
          rotateSpeed={0.5}
        />
        
        <Atmosphere />
        
        <group>
          {/* Indoor Environment */}
          <InteriorArchitecture />
          <FloorSystem />
          <CeilingSystem />
          <WallPanels />
          <StructuralColumns />
          
          <ColumnInfrastructure />
          <StructuralConnectors />
          <UtilityModules />
          <VerticalRouting />
          <OverheadInfrastructure />
          
          {/* Central Infrastructure Anchor */}
          <IntelligenceCore />
          
          {/* Hero Branding */}
          <HeroLogo />

          {/* 🛠️ AIRTIGHT FACILITY ENCLOSURE */}
          {/* 1. GIANT BLACKOUT CAP (Seals upper world volume / blocks environment bleed) */}
          <mesh position={[0, 90, -20]}>
            <boxGeometry args={[2200, 120, 600]} />
            <meshBasicMaterial color="#000000" side={THREE.BackSide} />
          </mesh>

          <mesh position={[0, 25, -155]}>
             <boxGeometry args={[1600, 110, 10]} />
             <meshStandardMaterial color="#0f172a" roughness={1} />
          </mesh>
          
          <mesh position={[0, 25, 115]}>
             <boxGeometry args={[1600, 110, 10]} />
             <meshStandardMaterial color="#0f172a" roughness={1} />
          </mesh>
          
          <MaintenanceWalkways />
          <CableInfrastructure />
          <CoolingSystem />
          <ServerMegastructure />
          
          <AIOrchestratorChamber />
          <SecurityOperationsZone />
          <CloudIntegrationLayer />

          <DataFlow from={[-40, 8, -20]} to={[40, 8, -20]}  count={4} color="#e5e7eb" label="SYNC_01" />
          <DataFlow from={[40, 9, -40]}  to={[120, 9, -40]} count={4} color="#94a3b8" label="DEPLOY_X" />
          <DataFlow from={[120, 7, 0]}   to={[40, 7, -80]}  count={5} color="#315b9c" label="ROUTING_PROD" />
          
          <AmbientDust />
        </group>

        <PerformanceMonitor />
      </Canvas>
      
      {/* Controls & HUD Overlay kept same */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-50">
        <button
          onClick={toggleFullscreen}
          className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 text-white p-3 rounded-xl shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <div className="bg-slate-900/40 backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[12px] font-bold text-white uppercase tracking-widest font-mono">Infrastructure Network</span>
          </div>
        </div>
      </div>
    </div>
  );
}
