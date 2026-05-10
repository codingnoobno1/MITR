"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function useCameraDrift(intensity = 0.5) {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.x += Math.sin(t * 0.2) * 0.002 * intensity;
    state.camera.position.y += Math.cos(t * 0.3) * 0.002 * intensity;
    state.camera.lookAt(0, 0, 0);
  });
}

export function usePulseAnimation(path: THREE.Vector3[], speed = 0.1, delay = 0) {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(path, false, 'catmullrom', 0), [path]);
  const progress = useRef(0);

  useFrame((state, delta) => {
    progress.current = (progress.current + delta * speed + delay) % 1;
  });

  return {
    getPosition: (tOffset = 0) => curve.getPointAt((progress.current + tOffset) % 1),
    curve
  };
}
