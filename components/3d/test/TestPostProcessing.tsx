"use client";

import React from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

export function TestPostProcessing() {
  return (
    <EffectComposer>
      {/* Tight, controlled bloom — makes fluorescent strips and holograms pop */}
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.8}
        luminanceSmoothing={0.3}
        kernelSize={KernelSize.MEDIUM}
        mipmapBlur
      />
    </EffectComposer>
  );
}
