"use client";

import React from "react";
import * as THREE from "three";

export function UtilityModules() {
  return (
    <group>
      {/* 3. UTILITY NODES & SERVICE PANELS */}
      {Array.from({ length: 7 }).map((_, i) => {
        const x = i * 180 - 500; // Scattered rhythm
        return (
          <group key={`utility-${i}`} position={[x, 0, 0]}>
            {/* Freestanding Monitoring Terminal */}
            <group position={[10, 0, -40]}>
               <mesh position={[0, 4, 0]}>
                  <boxGeometry args={[2, 8, 2]} />
                  <meshStandardMaterial color="#1e293b" roughness={0.5} />
               </mesh>
               {/* Terminal Screen */}
               <mesh position={[0, 7, 1.1]} rotation={[-0.2, 0, 0]}>
                  <planeGeometry args={[1.5, 1]} />
                  <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={0.5} />
               </mesh>
               {/* Tiny Maintenance Decal Strip */}
               <mesh position={[0, 3, 1.01]}>
                  <planeGeometry args={[1.8, 0.2]} />
                  <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1} />
               </mesh>
            </group>

            {/* Emergency Service Panel (Attached to wall or column) */}
            <group position={[-20, 10, 104]}>
               <mesh>
                  <boxGeometry args={[4, 5, 1]} />
                  <meshStandardMaterial color="#334155" />
               </mesh>
               <mesh position={[0, 0, 0.51]}>
                  <planeGeometry args={[3, 3]} />
                  <meshStandardMaterial color="#ef4444" transparent opacity={0.8} />
               </mesh>
            </group>
          </group>
        );
      })}
    </group>
  );
}
