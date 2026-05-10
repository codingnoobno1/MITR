"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import { palette } from "../materials/palette";

// Data Packet — glowing cube flowing along path
export function DataPacket({ path, delay = 0, color = "#315b9c", speed = 0.08 }: { 
  path: THREE.Vector3[]; 
  delay?: number; 
  color?: string;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(path, false, 'catmullrom', 0), [path]);

  useFrame((state) => {
    const t = ((state.clock.getElapsedTime() * speed + delay) % 1);
    const pos = curve.getPointAt(t);
    ref.current.position.copy(pos);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={4} />
      <pointLight color={color} intensity={1.5} distance={6} />
    </mesh>
  );
}

// Data Flow line with packets
export function DataFlow({ 
  from, 
  to, 
  count = 3, 
  color = "#315b9c",
  label
}: { 
  from: [number, number, number]; 
  to: [number, number, number]; 
  count?: number;
  color?: string;
  label?: string;
}) {
  const midY = Math.max(from[1], to[1]) + 4;
  const path = useMemo(() => [
    new THREE.Vector3(...from),
    new THREE.Vector3((from[0] + to[0]) / 2, midY, (from[2] + to[2]) / 2),
    new THREE.Vector3(...to),
  ], [from, to, midY]);

  return (
    <group>
      <Line points={path} color={color} lineWidth={1} transparent opacity={0.2} />
      {Array.from({ length: count }).map((_, i) => (
        <DataPacket key={i} path={path} delay={i * (1 / count)} color={color} speed={0.06} />
      ))}
      {label && (
        <Text
          position={[(from[0] + to[0]) / 2, midY + 0.8, (from[2] + to[2]) / 2]}
          fontSize={0.3}
          color={palette.silver}
          anchorX="center"
        >
          {label}
        </Text>
      )}
    </group>
  );
}

// Subtle dust
export function AmbientDust() {
  const points = useMemo(() => {
    const p = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      p[i * 3] = (Math.random() - 0.5) * 300;
      p[i * 3 + 1] = Math.random() * 14;
      p[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return p;
  }, []);

  return (
    <Points positions={points}>
      <PointMaterial
        transparent
        color="#94a3b8"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.06}
      />
    </Points>
  );
}
