"use client";

import React from "react";
import * as THREE from "three";
import { WallMechanicalLayers } from "./WallMechanicalLayers";
import { CeilingCassettes } from "./CeilingCassettes";

export function TestArchitecture() {
  const WORLD_WIDTH = 420;
  const WORLD_DEPTH = 340;

  return (
    <group>
      {/* 🛡️ MODULAR CEILING SUPERSTRUCTURE */}
      <CeilingCassettes />

      {/* 🛡️ MECHANICAL WALL INFRASTRUCTURE */}
      <WallMechanicalLayers />

      {/* 🛡️ ENGINEERED FLOOR SYSTEM */}
      <group position={[0, -0.5, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[WORLD_WIDTH, WORLD_DEPTH]} />
          <meshStandardMaterial 
            color="#1e293b" 
            roughness={0.82} 
            metalness={0.22} 
          />
        </mesh>

        {Array.from({ length: 30 }).map((_, i) => (
          Array.from({ length: 24 }).map((_, j) => {
            const x = i * 14.4 - (30 * 14.4) / 2;
            const z = j * 14.4 - (24 * 14.4) / 2;
            return (
              <group key={`floor-tile-${i}-${j}`} position={[x, 0.05, z]}>
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                   <planeGeometry args={[14, 14]} />
                   <meshStandardMaterial color="#1e293b" roughness={0.7} />
                </mesh>
                
                <mesh position={[7.2, 0, 0]}>
                   <boxGeometry args={[0.2, 0.1, 14.4]} />
                   <meshStandardMaterial color="#020617" />
                </mesh>
                <mesh position={[0, 0, 7.2]}>
                   <boxGeometry args={[14.4, 0.1, 0.2]} />
                   <meshStandardMaterial color="#020617" />
                </mesh>

                {i % 6 === 0 && (
                  <mesh position={[0, -0.1, 0]}>
                     <boxGeometry args={[2, 0.2, 14.4]} />
                     <meshStandardMaterial color="#0f172a" />
                  </mesh>
                )}

                {i % 4 === 0 && j % 4 === 0 && (
                  <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                     <planeGeometry args={[1, 1]} />
                     <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
                  </mesh>
                )}
              </group>
            );
          })
        ))}
      </group>

      {[-140, 140].map((zPos, i) => (
        <group key={`maint-deck-${i}`} position={[0, 48, zPos]}>
           <mesh>
              <boxGeometry args={[WORLD_WIDTH, 1.5, 20]} />
              <meshStandardMaterial color="#111827" />
           </mesh>
           {[-9.5, 9.5].map((xOff, j) => (
             <mesh key={`rail-${j}`} position={[0, 3.5, xOff]}>
                <boxGeometry args={[WORLD_WIDTH, 0.3, 0.3]} />
                <meshStandardMaterial color="#334155" />
             </mesh>
           ))}
           {Array.from({ length: 8 }).map((_, j) => (
             <mesh key={`mount-${j}`} position={[j * 50 - 175, -5, 0]}>
                <cylinderGeometry args={[1, 1.5, 10, 8]} />
                <meshStandardMaterial color="#1e293b" metalness={0.7} />
             </mesh>
           ))}
        </group>
      ))}

      {[-210, 210].map((xPos, i) => (
        <mesh key={`closure-${i}`} position={[xPos, 60, 0]}>
          <boxGeometry args={[8, 120, 340]} />
          <meshStandardMaterial color="#020617" />
        </mesh>
      ))}
    </group>
  );
}
