"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function DataFlowFloor() {
  const lineCount = 40;
  const meshRef = useRef<THREE.Group>(null!);

  const lines = useMemo(() => {
    return Array.from({ length: lineCount }).map((_, i) => ({
      x: (Math.random() - 0.5) * 400,
      zStart: (Math.random() - 0.5) * 300,
      speed: 10 + Math.random() * 20,
      length: 10 + Math.random() * 40,
      color: Math.random() > 0.5 ? "#38bdf8" : "#2563eb",
    }));
  }, []);

  return (
    <group ref={meshRef} position={[0, 0.1, 0]}>
      {lines.map((line, i) => (
        <DataLine key={i} {...line} />
      ))}
    </group>
  );
}

function DataLine({ x, zStart, speed, length, color }: any) {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      // Loop movement along Z
      let z = (zStart + t * speed) % 340;
      if (z > 170) z -= 340;
      ref.current.position.z = z;
      
      // Pulse opacity
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.1 + Math.sin(t * 5 + x) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={[x, 0, zStart]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[0.2, length]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
}
