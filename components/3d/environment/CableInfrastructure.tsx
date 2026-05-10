"use client";

import React from "react";
import * as THREE from "three";

export function CableInfrastructure() {
  return (
    <group>
      {/* Primary Overhead Cable Trays */}
      {[-25, 25].map((z, i) => (
        <group key={`tray-main-${i}`} position={[0, 18, z]}>
           <mesh>
             <boxGeometry args={[1200, 0.4, 2]} />
             <meshStandardMaterial color="#1e293b" metalness={0.9} />
           </mesh>
           {/* Transverse Cross-members */}
           {Array.from({ length: 60 }).map((_, j) => (
             <mesh key={`cross-${j}`} position={[j * 20 - 600, 0, 0]}>
                <boxGeometry args={[0.2, 0.5, 2.2]} />
                <meshStandardMaterial color="#0f172a" />
             </mesh>
           ))}
        </group>
      ))}

      {/* Vertical Conduit Drops - simulating connection to server clusters */}
      {Array.from({ length: 12 }).map((_, i) => (
        <group key={`drop-${i}`} position={[i * 80 - 440, 15, -25]}>
           <mesh>
             <cylinderGeometry args={[0.3, 0.3, 6, 8]} />
             <meshStandardMaterial color="#334155" metalness={0.8} />
           </mesh>
           {/* Mounting Bracket */}
           <mesh position={[0, 3, 0]}>
              <boxGeometry args={[1, 0.5, 1]} />
              <meshStandardMaterial color="#0b1220" />
           </mesh>
        </group>
      ))}
    </group>
  );
}
