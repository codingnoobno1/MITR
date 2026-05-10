"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor, ScrollControls, Scroll } from "@react-three/drei";
import * as THREE from "three";
import { TestEnvironment } from "@/components/3d/test/TestEnvironment";
import { TestArchitecture } from "@/components/3d/test/TestArchitecture";
import { TestHardware } from "@/components/3d/test/TestHardware";
import { TestPostProcessing } from "@/components/3d/test/TestPostProcessing";
import { CameraRig } from "@/components/3d/test/CameraRig";
import { OverlayHUD } from "@/components/overlay/OverlayHUD";

export default function TestPage() {
  return (
    <main className="relative w-full h-screen bg-[#020617] overflow-hidden">
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
      >
        <ScrollControls pages={5} damping={0.2} distance={1}>
          <CameraRig />
          
          <Suspense fallback={null}>
            <group>
              <TestEnvironment />
              <TestArchitecture />
              <TestHardware />
            </group>
          </Suspense>

          <TestPostProcessing />
          
          <Scroll html>
            <OverlayHUD />
          </Scroll>
        </ScrollControls>

        <PerformanceMonitor />
      </Canvas>
    </main>
  );
}
