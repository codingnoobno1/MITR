"use client";

import React, { useMemo } from "react";
import { Line, Float } from "@react-three/drei";
import * as THREE from "three";
import { palette } from "../materials/palette";

export function SignalHighway({ startX, endX, z = -10, count = 5 }: { startX: number, endX: number, z?: number, count?: number }) {
  const lines = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const y = -0.8;
      const offsetZ = z + (i - count / 2) * 2;
      return [
        new THREE.Vector3(startX, y, offsetZ),
        new THREE.Vector3(endX, y, offsetZ)
      ];
    });
  }, [startX, endX, z, count]);

  return (
    <group>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={palette.cobalt}
          lineWidth={0.5}
          transparent
          opacity={0.1}
        />
      ))}
    </group>
  );
}

export function ComputeCluster({ position, label }: { position: [number, number, number], label: string }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh castShadow>
          <boxGeometry args={[6, 4, 6]} />
          <meshStandardMaterial color={palette.graphite} roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Internal Glow */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[6.1, 0.2, 6.1]} />
          <meshStandardMaterial color={palette.cobalt} emissive={palette.cobalt} emissiveIntensity={5} />
        </mesh>
      </Float>
      {/* Cluster Label */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.4}
        color={palette.slate}
        anchorX="center"
      >
        {label}
      </Text>
    </group>
  );
}

import { Text } from "@react-three/drei";
