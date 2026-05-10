"use client";

import React from "react";
import * as THREE from "three";

export function CeilingSystem() {
  return (
    <group>
      {/* MAIN STRUCTURAL CEILING - Industrial gray, not black void */}
      <mesh position={[0, 30, -20]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[1400, 320]} />
        <meshStandardMaterial color="#1f2937" roughness={0.85} />
      </mesh>

      {/* PRIMARY SUPPORT BEAMS - Metallic response for edge highlights */}
      {Array.from({ length: 28 }).map((_, i) => (
        <group key={`primary-beam-${i}`} position={[i * 50 - 700, 26, -20]}>
          <mesh castShadow>
            <boxGeometry args={[3, 6, 320]} />
            <meshStandardMaterial 
              color="#334155" 
              metalness={0.35} 
              roughness={0.55} 
            />
          </mesh>
          <mesh position={[0, -3.5, 0]}>
            <boxGeometry args={[4.5, 1.2, 320]} />
            <meshStandardMaterial color="#0f1724" roughness={0.95} />
          </mesh>
        </group>
      ))}

      {/* RECESSED LIGHT CHANNELS */}
      {[-70, 0, 70].map((z, i) => (
        <group key={`light-channel-${i}`}>
          <mesh position={[0, 24.5, z]}>
            <boxGeometry args={[1400, 3, 10]} />
            <meshStandardMaterial color="#0f1724" roughness={1} />
          </mesh>

          {Array.from({ length: 18 }).map((_, j) => (
            <group key={`light-panel-${j}`} position={[j * 75 - 650, 23.4, z]}>
              <mesh>
                <boxGeometry args={[18, 1.2, 4]} />
                <meshStandardMaterial color="#475569" metalness={0.4} roughness={0.6} />
              </mesh>
              <mesh position={[0, -0.2, 0]}>
                <planeGeometry args={[14, 2]} />
                <meshStandardMaterial color="#e5e7eb" emissive="#e5e7eb" emissiveIntensity={1.2} />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      {/* DARK OVERHEAD SILHOUETTES - atmospheric mass, not void */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh 
          key={`silhouette-${i}`} 
          position={[i * 120 - 700, 34 + Math.random() * 10, -40 + Math.random() * 80]}
        >
          <boxGeometry args={[20 + Math.random() * 20, 12 + Math.random() * 8, 20 + Math.random() * 20]} />
          <meshStandardMaterial color="#111827" roughness={1} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}