"use client";

import React from "react";
import * as THREE from "three";

export function StructuralColumns() {
  return (
    <group>
      {/* Primary Structural Grid */}
      {Array.from({ length: 15 }).map((_, i) => {
        const x = i * 80 - 560;
        return (
          <group key={`col-pair-${i}`} position={[x, 11, -20]}>
            {/* Left Column */}
            <mesh position={[0, 0, -80]} castShadow>
              <boxGeometry args={[3, 22, 3]} />
              <meshStandardMaterial color="#1a2233" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* Right Column */}
            <mesh position={[0, 0, 80]} castShadow>
              <boxGeometry args={[3, 22, 3]} />
              <meshStandardMaterial color="#1a2233" metalness={0.7} roughness={0.3} />
            </mesh>
            
            {/* Horizontal Brace Connectors */}
            <mesh position={[0, 9, 0]}>
               <boxGeometry args={[4, 0.5, 160]} />
               <meshStandardMaterial color="#0f172a" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
