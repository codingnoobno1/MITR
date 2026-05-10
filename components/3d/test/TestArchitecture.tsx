"use client";

import React from "react";
import * as THREE from "three";
import { WallMechanicalLayers } from "./WallMechanicalLayers";
import { CeilingCassettes } from "./CeilingCassettes";
import { BrandSignage } from "./BrandSignage";
import { TestFloor } from "./TestFloor";

export function TestArchitecture() {
  const WORLD_WIDTH = 420;
  const WORLD_DEPTH = 340;

  return (
    <group>
      {/* 🛡️ MODULAR CEILING SUPERSTRUCTURE */}
      <CeilingCassettes />

      {/* 🛡️ MECHANICAL WALL INFRASTRUCTURE */}
      <WallMechanicalLayers />

      {/* 🛡️ BRAND SIGNAGE */}
      <BrandSignage />

      {/* 🛡️ HIGH-REFLECTIVITY ENGINEERED FLOOR */}
      <TestFloor />

      {/* 🛡️ SIDE MEZZANINES & GREENERY */}
      {[-180, 180].map((xPos, i) => (
        <group key={`maint-deck-${i}`} position={[xPos, 48, 0]}>
           <mesh>
              <boxGeometry args={[40, 1.5, WORLD_DEPTH]} />
              <meshStandardMaterial color="#f1f5f9" metalness={0.5} />
           </mesh>
           {/* Glass Railing on inner edge */}
           <mesh position={[i === 0 ? 19.5 : -19.5, 3.5, 0]}>
              <boxGeometry args={[0.5, 6, WORLD_DEPTH]} />
              <meshStandardMaterial color="#e2e8f0" transparent opacity={0.3} metalness={0.9} roughness={0.1} />
           </mesh>
           {/* Railing Top Handrail (White Metal) */}
           <mesh position={[i === 0 ? 19.5 : -19.5, 6.5, 0]}>
              <boxGeometry args={[0.8, 0.5, WORLD_DEPTH]} />
              <meshStandardMaterial color="#ffffff" metalness={1} />
           </mesh>
           
           {/* 🌿 GREENERY PASS (Potted Plants) */}
           {Array.from({ length: 16 }).map((_, j) => (
             <group key={`plant-${j}`} position={[i === 0 ? 15 : -15, 0.8, j * 20 - 150]}>
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
      {/* 🛡️ FOREGROUND OBSERVATION DECK */}
      <group position={[0, 0, 140]}>
        {/* Glass Barrier */}
        <mesh position={[0, 3, -15]}>
           <boxGeometry args={[120, 6, 0.5]} />
           <meshStandardMaterial color="#e2e8f0" transparent opacity={0.22} roughness={0.08} metalness={0.9} />
        </mesh>
        {/* Command Rail */}
        <mesh position={[0, 6, -15]} rotation={[0, 0, Math.PI / 2]}>
           <cylinderGeometry args={[0.3, 0.3, 120, 16]} />
           <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 6, -15]}>
           <boxGeometry args={[120, 0.5, 1.5]} />
           <meshStandardMaterial color="#334155" metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
}
