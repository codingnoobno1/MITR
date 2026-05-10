"use client";

import React from "react";
import * as THREE from "three";

export function ColumnInfrastructure() {
  return (
    <group>
      {/* 2. ATTACHED CONDUITS & JUNCTION BOXES */}
      {Array.from({ length: 14 }).map((_, i) => {
        const x = i * 90 - 600;
        return (
          <group key={`col-infra-${i}`} position={[x, 0, 0]}>
            {/* Left Column Infrastructure */}
            <group position={[0, 0, -95]}>
              {/* Vertical Conduit Bundles running up the pillar side */}
              {[-1.8, 1.8].map((zPos, j) => (
                <mesh key={`conduit-${j}`} position={[2.5, 12, zPos]}>
                  <cylinderGeometry args={[0.15, 0.15, 24, 8]} />
                  <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.3} />
                </mesh>
              ))}

              {/* Junction Boxes / Power Nodes */}
              {[4, 12, 18].map((yPos, j) => (
                <mesh key={`jbox-${j}`} position={[2.8, yPos, 0]}>
                  <boxGeometry args={[1, 1.5, 1.2]} />
                  <meshStandardMaterial color="#334155" metalness={0.4} />
                </mesh>
              ))}

              {/* Maintenance Terminal Unit */}
              <group position={[3, 8, 1.5]}>
                <mesh>
                   <boxGeometry args={[0.8, 2, 1.2]} />
                   <meshStandardMaterial color="#1e293b" />
                </mesh>
                {/* Tiny Status LED */}
                <mesh position={[0.41, 0.5, 0]}>
                   <planeGeometry args={[0.2, 0.1]} />
                   <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} />
                </mesh>
              </group>
            </group>

            {/* Right Column Infrastructure */}
            <group position={[0, 0, 95]}>
              {/* Cooling Pipes attached with clamps */}
              <mesh position={[-2.8, 12, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 24, 8]} />
                <meshStandardMaterial color="#315b9c" metalness={0.9} />
              </mesh>
              {Array.from({ length: 6 }).map((_, j) => (
                <mesh key={`clamp-${j}`} position={[-2.8, j * 4 + 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[0.3, 0.05, 8, 16]} />
                  <meshStandardMaterial color="#64748b" />
                </mesh>
              ))}
            </group>
          </group>
        );
      })}
    </group>
  );
}
