"use client";

import React from "react";
import * as THREE from "three";

export function StructuralColumns() {
  return (
    <group>
      {/* 5. ARCHITECTURAL RHYTHM VARIATION */}
      {Array.from({ length: 14 }).map((_, i) => {
        const x = i * 90 - 600;
        const isMegaSupport = i % 3 === 0;
        const isGateway = x > -100 && x < 100;

        return (
          <group key={`col-rhythm-${i}`} position={[x, 0, 0]}>
            {/* Primary Pillar Structures */}
            {[-95, 95].map((zPos, j) => {
              const height = isMegaSupport ? 48 : 40; // Increased from 28/22
              const width = isMegaSupport ? 6 : 4;

              return (
                <group key={`pillar-${j}`} position={[0, height / 2, zPos]}>
                  {/* MAIN ARCHITECTURAL FRAME */}
                  <mesh castShadow receiveShadow>
                    <boxGeometry args={[width, height, width]} />
                    <meshStandardMaterial 
                      color={isGateway ? "#475569" : "#334155"} 
                      metalness={0.4} 
                      roughness={0.5} 
                    />
                  </mesh>

                  {/* 4. GEOMETRY SILHOUETTE ENHANCEMENT */}
                  <mesh position={[0, 0, width / 2 + 0.1]}>
                    <boxGeometry args={[width - 1, height - 4, 0.2]} />
                    <meshStandardMaterial color="#111827" />
                  </mesh>

                  {/* 5. SCALE INDICATORS */}
                  <group position={[width / 2 + 0.2, -height / 2 + 3, 0]}>
                    {Array.from({ length: 16 }).map((_, k) => (
                      <mesh key={`rung-${k}`} position={[0, k * 2, 0]}>
                        <boxGeometry args={[0.05, 0.05, 1.2]} />
                        <meshStandardMaterial color="#475569" />
                      </mesh>
                    ))}
                    <mesh position={[0, 15, 0]}>
                       <boxGeometry args={[0.05, 30, 0.05]} />
                       <meshStandardMaterial color="#475569" />
                    </mesh>
                  </group>

                  {/* Warning Decal Strips */}
                  <mesh position={[0, -height / 2 + 1, width / 2 + 0.15]}>
                    <planeGeometry args={[width - 0.5, 0.3]} />
                    <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.5} />
                  </mesh>
                </group>
              );
            })}
          </group>
        );
      })}
    </group>
  );
}