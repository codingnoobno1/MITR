"use client";

import React from "react";
import * as THREE from "three";

export function BuildingShell() {
  return (
    <group>
      {/* Massive Outer Hull - Industrial gray for readability */}
      <mesh position={[0, 50, -300]}>
        <boxGeometry args={[2000, 200, 20]} />
        <meshStandardMaterial color="#111827" roughness={0.9} />
      </mesh>

      {/* Structural Framing - Value separation */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={`hull-rib-${i}`} position={[i * 200 - 1000, 50, -280]}>
          <boxGeometry args={[10, 220, 30]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* Room Sectors - layered volumes beyond the main aisle */}
      <group position={[400, 20, -150]}>
        <mesh>
          <boxGeometry args={[400, 100, 200]} />
          <meshStandardMaterial color="#0f1724" transparent opacity={0.6} />
        </mesh>
        <pointLight position={[0, 20, 0]} intensity={3} color="#f59e0b" distance={120} />
      </group>

      <group position={[-400, 20, -150]}>
        <mesh>
          <boxGeometry args={[400, 100, 200]} />
          <meshStandardMaterial color="#0f1724" transparent opacity={0.6} />
        </mesh>
        <pointLight position={[0, 20, 0]} intensity={3} color="#315b9c" distance={120} />
      </group>
    </group>
  );
}
