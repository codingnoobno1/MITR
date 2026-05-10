"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import { palette } from "../materials/palette";

// Data Packet — a glowing cube that flows along a path
export function DataPacket({ path, delay = 0, color = "#315b9c", speed = 0.15 }: { 
  path: THREE.Vector3[], 
  delay?: number, 
  color?: string,
  speed?: number 
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const trailRef = useRef<THREE.Mesh>(null!);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(path, false, 'catmullrom', 0), [path]);

  useFrame((state) => {
    const t = ((state.clock.getElapsedTime() * speed + delay) % 1);
    const pos = curve.getPointAt(t);
    ref.current.position.copy(pos);
    
    // Trail — slightly behind
    const trailT = ((state.clock.getElapsedTime() * speed + delay - 0.02) % 1 + 1) % 1;
    const trailPos = curve.getPointAt(trailT);
    trailRef.current.position.copy(trailPos);
  });

  return (
    <>
      {/* Main packet */}
      <mesh ref={ref}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={5} />
        <pointLight color={color} intensity={2} distance={5} />
      </mesh>
      {/* Trail glow */}
      <mesh ref={trailRef}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} transparent opacity={0.5} />
      </mesh>
    </>
  );
}

// Data Flow — animated data stream between two points
export function DataFlow({ 
  from, 
  to, 
  count = 3, 
  color = "#315b9c",
  label
}: { 
  from: [number, number, number], 
  to: [number, number, number], 
  count?: number,
  color?: string,
  label?: string 
}) {
  const midY = Math.max(from[1], to[1]) + 3;
  const path = useMemo(() => [
    new THREE.Vector3(...from),
    new THREE.Vector3((from[0] + to[0]) / 2, midY, (from[2] + to[2]) / 2),
    new THREE.Vector3(...to),
  ], [from, to, midY]);

  return (
    <group>
      {/* Visible cable */}
      <Line
        points={path}
        color={color}
        lineWidth={1}
        transparent
        opacity={0.15}
      />
      {/* Data packets flowing */}
      {Array.from({ length: count }).map((_, i) => (
        <DataPacket key={i} path={path} delay={i * (1 / count)} color={color} speed={0.12} />
      ))}
      {/* Label */}
      {label && (
        <Text
          position={[(from[0] + to[0]) / 2, midY + 0.5, (from[2] + to[2]) / 2]}
          fontSize={0.25}
          color={palette.silver}
          anchorX="center"
        >
          {label}
        </Text>
      )}
    </group>
  );
}

// Ambient Dust — subtle indoor particles
export function AmbientDust() {
  const points = useMemo(() => {
    const p = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 200;
      p[i * 3 + 1] = Math.random() * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return p;
  }, []);

  return (
    <Points positions={points}>
      <PointMaterial
        transparent
        color="#94a3b8"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.04}
      />
    </Points>
  );
}
