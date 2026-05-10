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
      {/* 🛡️ MODULAR CEILING SUPERSTRUCTURE (Light Pass) */}
      <CeilingCassettes lightTheme />

      {/* 🛡️ MECHANICAL WALL INFRASTRUCTURE (Light Pass) */}
      <WallMechanicalLayers lightTheme />

      {/* 🛡️ HIGH-REFLECTIVITY ENGINEERED FLOOR */}
      <group position={[0, -0.5, 0]}>
        {/* Mirror-like Substrate */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[WORLD_WIDTH, WORLD_DEPTH]} />
          <meshStandardMaterial 
            color="#f1f5f9" 
            roughness={0.05} 
            metalness={0.9} 
          />
        </mesh>

        {/* 🧱 FLOOR DETAILS */}
        {Array.from({ length: 30 }).map((_, i) => (
          Array.from({ length: 24 }).map((_, j) => {
            const x = i * 14.4 - (30 * 14.4) / 2;
            const z = j * 14.4 - (24 * 14.4) / 2;
            return (
              <group key={`floor-tile-${i}-${j}`} position={[x, 0.05, z]}>
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                   <planeGeometry args={[14, 14]} />
                   <meshStandardMaterial color="#f8fafc" roughness={0.1} metalness={0.2} />
                </mesh>
                
                {/* Metallic Strips */}
                <mesh position={[7.2, 0, 0]}>
                   <boxGeometry args={[0.2, 0.1, 14.4]} />
                   <meshStandardMaterial color="#cbd5e1" metalness={1} />
                </mesh>
                <mesh position={[0, 0, 7.2]}>
                   <boxGeometry args={[14.4, 0.1, 0.2]} />
                   <meshStandardMaterial color="#cbd5e1" metalness={1} />
                </mesh>
              </group>
            );
          })
        ))}
      </group>

      {/* 🛡️ MAINTENANCE DECKS & GREENERY */}
      {[-140, 140].map((zPos, i) => (
        <group key={`maint-deck-${i}`} position={[0, 48, zPos]}>
           <mesh>
              <boxGeometry args={[WORLD_WIDTH, 1.5, 20]} />
              <meshStandardMaterial color="#f1f5f9" metalness={0.5} />
           </mesh>
           {/* Railings (White Metal) */}
           {[-9.5, 9.5].map((xOff, j) => (
             <mesh key={`rail-${j}`} position={[0, 3.5, xOff]}>
                <boxGeometry args={[WORLD_WIDTH, 0.3, 0.3]} />
                <meshStandardMaterial color="#ffffff" metalness={1} />
             </mesh>
           ))}
           
           {/* 🌿 GREENERY PASS (Potted Plants) */}
           {Array.from({ length: 12 }).map((_, j) => (
             <group key={`plant-${j}`} position={[j * 40 - 200, 0.8, i === 0 ? 6 : -6]}>
                {/* Pot */}
                <mesh position={[0, 0.5, 0]}>
                   <cylinderGeometry args={[1.5, 1, 2, 16]} />
                   <meshStandardMaterial color="#ffffff" />
                </mesh>
                {/* Low-poly Foliage */}
                <mesh position={[0, 3, 0]}>
                   <sphereGeometry args={[2, 8, 8]} />
                   <meshStandardMaterial color="#16a34a" roughness={1} />
                </mesh>
             </group>
           ))}
        </group>
      ))}
    </group>
  );
}
