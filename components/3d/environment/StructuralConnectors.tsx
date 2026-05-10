"use client";

import React from "react";
import * as THREE from "three";

export function StructuralConnectors() {
  const CONNECT_Y = 46; // Matches new ceiling/pillar height

  return (
    <group>
      {/* 1. COLUMN-TO-CEILING INTEGRATION */}
      {Array.from({ length: 14 }).map((_, i) => {
        const x = i * 90 - 600;
        return (
          <group key={`connector-sector-${i}`} position={[x, CONNECT_Y, 0]}>
            {/* Left Anchor Assembly */}
            <group position={[0, -2, -95]}>
              <mesh position={[0, 4, 0]}>
                 <boxGeometry args={[8, 1, 8]} />
                 <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.4} />
              </mesh>
              <mesh position={[0, 3.5, 0]}>
                 <cylinderGeometry args={[4, 5, 2, 32]} />
                 <meshStandardMaterial color="#334155" metalness={0.8} />
              </mesh>
              {[...Array(4)].map((_, j) => (
                <mesh key={`bracket-${j}`} rotation={[0, j * Math.PI / 2, 0]} position={[0, 2.5, 3.5]}>
                   <boxGeometry args={[2, 4, 1]} />
                   <meshStandardMaterial color="#111827" />
                </mesh>
              ))}
            </group>

            {/* Right Anchor Assembly */}
            <group position={[0, -2, 95]}>
              <mesh position={[0, 4, 0]}>
                 <boxGeometry args={[8, 1, 8]} />
                 <meshStandardMaterial color="#1e293b" metalness={0.5} />
              </mesh>
              <mesh position={[0, 3.5, 0]}>
                 <cylinderGeometry args={[4, 5, 2, 32]} />
                 <meshStandardMaterial color="#334155" metalness={0.8} />
              </mesh>
            </group>

            {/* Diagonal Support Braces */}
            <group position={[0, -4, -95]}>
               <mesh rotation={[0, 0, Math.PI / 4]}>
                  <boxGeometry args={[1, 12, 1]} />
                  <meshStandardMaterial color="#475569" />
               </mesh>
            </group>
          </group>
        );
      })}
    </group>
  );
}
