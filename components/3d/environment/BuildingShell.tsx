"use client";

import React from "react";
import * as THREE from "three";

export function BuildingShell() {
  return (
    <group>
      {/* Massive Outer Hull - creating the silhouette of a megastructure */}
      <mesh position={[0, 50, -300]}>
        <boxGeometry args={[2000, 200, 20]} />
        <meshStandardMaterial color="#05070a" roughness={0.9} />
      </mesh>

      {/* Structural Framing - visible in the distance */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={`hull-rib-${i}`} position={[i * 200 - 1000, 50, -280]}>
          <boxGeometry args={[10, 220, 30]} />
          <meshStandardMaterial color="#0a0f1b" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Room Sectors - layered volumes beyond the main aisle */}
      <group position={[400, 20, -150]}>
        <mesh>
          <boxGeometry args={[400, 100, 200]} />
          <meshStandardMaterial color="#070b14" transparent opacity={0.8} />
        </mesh>
        {/* Distant industrial lights inside sectors */}
        <pointLight position={[0, 20, 0]} intensity={2} color="#f59e0b" distance={100} />
      </group>

      <group position={[-400, 20, -150]}>
        <mesh>
          <boxGeometry args={[400, 100, 200]} />
          <meshStandardMaterial color="#070b14" transparent opacity={0.8} />
        </mesh>
        <pointLight position={[0, 20, 0]} intensity={2} color="#315b9c" distance={100} />
      </group>
    </group>
  );
}
