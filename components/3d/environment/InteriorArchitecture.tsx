"use client";

import React from "react";
import * as THREE from "three";

export function InteriorArchitecture() {
  return (
    <group>
      {/* Structural Ribs / Room Segmentation */}
      {Array.from({ length: 12 }).map((_, i) => {
        const x = i * 100 - 550;
        return (
          <group key={`arch-rib-${i}`} position={[x, 11, -20]}>
            {/* Main Arch Frame */}
            <mesh>
              <boxGeometry args={[4, 25, 265]} />
              <meshStandardMaterial color="#111827" roughness={0.6} metalness={0.4} />
            </mesh>
            
            {/* Recessed Detail / Shadow Pockets */}
            <mesh position={[0, 0, 133]}>
              <boxGeometry args={[5, 26, 2]} />
              <meshStandardMaterial color="#070b14" />
            </mesh>
            
            {/* Structural Support Cross-Beams */}
            <mesh position={[0, 10, 0]}>
              <boxGeometry args={[6, 1, 265]} />
              <meshStandardMaterial color="#1a2233" />
            </mesh>
          </group>
        );
      })}

      {/* Side Chambers / Transition Zones */}
      {[-140, 100].map((z, i) => (
        <group key={`chamber-${i}`} position={[0, 10, z]}>
           {/* Corridor Openings */}
           {Array.from({ length: 6 }).map((_, j) => (
             <mesh key={`door-${j}`} position={[j * 200 - 500, 0, 0]}>
                <boxGeometry args={[20, 30, 2]} />
                <meshStandardMaterial color="#0b1220" />
             </mesh>
           ))}
        </group>
      ))}

      {/* Support Brackets / Architectural Details */}
      {Array.from({ length: 24 }).map((_, i) => (
        <mesh key={`bracket-${i}`} position={[i * 50 - 575, 20, -50]}>
          <boxGeometry args={[1, 4, 10]} />
          <meshStandardMaterial color="#334155" metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}
