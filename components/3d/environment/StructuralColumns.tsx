"use client";

import React from "react";
import * as THREE from "three";

export function StructuralColumns() {
  return (
    <group>
      {/* PRIMARY INFRASTRUCTURE GRID */}
      {Array.from({ length: 14 }).map((_, i) => {
        const x = i * 90 - 600;

        return (
          <group key={`column-sector-${i}`} position={[x, 0, 0]}>

            {/* LEFT MAIN COLUMN */}
            <group position={[0, 12, -95]}>
              {/* primary body - Value separation */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[4, 24, 4]} />
                <meshStandardMaterial color="#1e293b" roughness={0.45} metalness={0.65} />
              </mesh>

              {/* reinforced outer shell */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4.8, 25, 4.8]} />
                <meshStandardMaterial color="#111827" roughness={0.85} metalness={0.15} />
              </mesh>

              {/* foundation */}
              <mesh position={[0, -12.5, 0]}>
                <boxGeometry args={[7, 1.4, 7]} />
                <meshStandardMaterial color="#0f1724" roughness={1} />
              </mesh>

              {/* upper support cap */}
              <mesh position={[0, 12.8, 0]}>
                <boxGeometry args={[6, 1.2, 6]} />
                <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.5} />
              </mesh>

              {/* vertical maintenance strip */}
              <mesh position={[2.45, 0, 0]}>
                <planeGeometry args={[0.18, 16]} />
                <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={0.6} transparent opacity={0.3} />
              </mesh>
            </group>

            {/* RIGHT MAIN COLUMN */}
            <group position={[0, 12, 95]}>
              <mesh castShadow receiveShadow>
                <boxGeometry args={[4, 24, 4]} />
                <meshStandardMaterial color="#1e293b" roughness={0.45} metalness={0.65} />
              </mesh>
              <mesh>
                <boxGeometry args={[4.8, 25, 4.8]} />
                <meshStandardMaterial color="#111827" roughness={0.85} metalness={0.15} />
              </mesh>
              <mesh position={[0, -12.5, 0]}>
                <boxGeometry args={[7, 1.4, 7]} />
                <meshStandardMaterial color="#0f1724" roughness={1} />
              </mesh>
            </group>

            {/* MASSIVE OVERHEAD CONNECTOR */}
            <group position={[0, 20, 0]}>
              <mesh castShadow>
                <boxGeometry args={[5, 2.5, 190]} />
                <meshStandardMaterial color="#111827" roughness={0.6} metalness={0.35} />
              </mesh>
              <mesh position={[0, -1.8, 0]}>
                <boxGeometry args={[7, 0.6, 190]} />
                <meshStandardMaterial color="#0f1724" roughness={0.95} />
              </mesh>
            </group>

            {/* SHADOW BREAKUP PANELS - avoiding invisibility */}
            <mesh position={[0, 6, -130]}>
              <boxGeometry args={[18, 12, 2]} />
              <meshStandardMaterial color="#0f1724" roughness={1} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}