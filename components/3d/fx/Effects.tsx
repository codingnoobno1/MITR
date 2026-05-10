"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { palette } from "../materials/palette";

export function CopperTrace({ path, active = false }: { path: THREE.Vector3[], active?: boolean }) {
  return (
    <Line
      points={path}
      color={active ? palette.cobalt : palette.slate}
      lineWidth={active ? 1.2 : 0.8}
      transparent
      opacity={active ? 0.22 : 0.07}
    />
  );
}

export function ElectronPulse({ path, delay = 0 }: { path: THREE.Vector3[], delay?: number }) {
  const pulseRef = useRef<THREE.Mesh>(null!);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(path, false, 'catmullrom', 0), [path]);

  useFrame((state) => {
    const t = ((state.clock.getElapsedTime() + delay) * 0.1) % 1;
    const position = curve.getPointAt(t);
    pulseRef.current.position.copy(position);
  });

  return (
    <mesh ref={pulseRef}>
      <sphereGeometry args={[0.04, 12, 12]} />
      <meshBasicMaterial color={palette.cobalt} />
      <pointLight color={palette.cobalt} intensity={1.5} distance={3} />
    </mesh>
  );
}

export function AmbientDust() {
  const points = useMemo(() => {
    const p = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = Math.random() * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return p;
  }, []);

  return (
    <Points positions={points}>
      <PointMaterial
        transparent
        color={palette.silver}
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.03}
      />
    </Points>
  );
}
