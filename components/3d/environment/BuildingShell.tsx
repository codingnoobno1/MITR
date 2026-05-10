"use client";

import React from "react";
import * as THREE from "three";

export function BuildingShell() {
  return (
    <group>
      {/* Massive Outer Hull - Scaled for taller room */}
      <mesh position={[0, 100, -300]}>
        <boxGeometry args={[2000, 400, 20]} />
        <meshStandardMaterial color="#111827" roughness={0.9} transparent opacity={0.6} />
      </mesh>

      {/* Structural Framing */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={`hull-rib-${i}`} position={[i * 200 - 1000, 100, -280]}>
          <boxGeometry args={[10, 420, 30]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* Room Sectors - Increased volume */}
      <group position={[400, 40, -150]}>
        <mesh>
          <boxGeometry args={[400, 160, 200]} />
          <meshStandardMaterial color="#1f2937" transparent opacity={0.5} />
        </mesh>
        <pointLight position={[0, 40, 0]} intensity={6} color="#e5e7eb" distance={200} />
      </group>

      <group position={[-400, 40, -150]}>
        <mesh>
          <boxGeometry args={[400, 160, 200]} />
          <meshStandardMaterial color="#1f2937" transparent opacity={0.5} />
        </mesh>
        <pointLight position={[0, 40, 0]} intensity={6} color="#94a3b8" distance={200} />
      </group>
    </group>
  );
}
