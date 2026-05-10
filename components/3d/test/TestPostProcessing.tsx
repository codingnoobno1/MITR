"use client";

import React from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

export function TestPostProcessing() {
  return (
    <EffectComposer>
      {/* Tight, controlled bloom — makes fluorescent strips and holograms pop */}
      <Bloom
        intensity={0.4}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.1}
        kernelSize={KernelSize.LARGE}
        mipmapBlur
      />
    </EffectComposer>
  );
}
