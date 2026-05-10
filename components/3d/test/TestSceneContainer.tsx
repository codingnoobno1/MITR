"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerformanceMonitor, ScrollControls, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { TestEnvironment } from "./TestEnvironment";
import { TestArchitecture } from "./TestArchitecture";
import { TestHardware } from "./TestHardware";
import { TestPostProcessing } from "./TestPostProcessing";
import { CameraRig } from "./CameraRig";
import { OverlayHUD } from "@/components/overlay/OverlayHUD";

export default function TestSceneContainer() {
  const hudRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-screen h-screen bg-[#020617] overflow-hidden">
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
        className="z-0"
      >
        <ScrollControls pages={5} damping={0.2} distance={1}>
          <CameraRig />
          <ScrollSync hudRef={hudRef} />
          
          <Suspense fallback={null}>
            <group>
              <TestEnvironment />
              <TestArchitecture />
              <TestHardware />
            </group>
          </Suspense>

          <TestPostProcessing />
        </ScrollControls>

        <PerformanceMonitor />
      </Canvas>

      {/* Manual Overlay HUD - Fixed position, synced via direct DOM manipulation */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div 
          ref={hudRef}
          className="will-change-transform"
          style={{ transform: `translateY(0vh)` }}
        >
          <OverlayHUD />
        </div>
      </div>
    </div>
  );
}

function ScrollSync({ hudRef }: { hudRef: React.RefObject<HTMLDivElement | null> }) {
  const scroll = useScroll();
  useFrame(() => {
    if (hudRef.current) {
      hudRef.current.style.transform = `translateY(-${scroll.offset * 400}vh)`;
    }
  });
  return null;
}
