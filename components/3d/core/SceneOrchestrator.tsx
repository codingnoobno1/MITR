"use client";

import React from "react";
import { EnvironmentFog, LightingRig, CameraRig } from "./Environment";
import { PerformanceMonitor } from "@react-three/drei";

export function SceneOrchestrator({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EnvironmentFog />
      <LightingRig />
      <CameraRig />
      <PerformanceMonitor />
      {children}
    </>
  );
}
