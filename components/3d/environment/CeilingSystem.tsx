"use client";

import React from "react";
import * as THREE from "three";

export function CeilingSystem() {
  return (
    <group>
      {/* MAIN STRUCTURAL CEILING - Industrial gray */}
      <mesh position={[0, 30, -20]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[1400, 320]} />
        <meshStandardMaterial color="#1f2937" roughness={0.85} />
      </mesh>

      {/* PRIMARY SUPPORT BEAMS */}
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

      {/* INDUSTRIAL TUBE LIGHT ARRAY (Over Server Area) */}
      {/* Positioned row-wise evenly */}
      {[-40, 40].map((xPos, i) => (
        <group key={`tube-row-${i}`} position={[xPos, 24, -20]}>
          {Array.from({ length: 12 }).map((_, j) => (
            <group key={`tube-${j}`} position={[0, 0, j * 30 - 180]}>
              {/* Tube Housing */}
              <mesh>
                 <boxGeometry args={[12, 0.4, 0.4]} />
                 <meshStandardMaterial color="#475569" metalness={0.5} />
              </mesh>
              {/* The Tube Light itself - Neutral White */}
              <mesh position={[0, -0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
                 <cylinderGeometry args={[0.15, 0.15, 10, 8]} />
                 <meshStandardMaterial 
                  color="#ffffff" 
                  emissive="#ffffff" 
                  emissiveIntensity={2.5} 
                />
              </mesh>
              {/* Local Area Light for the Tube */}
              <pointLight intensity={0.8} distance={30} color="#ffffff" />
            </group>
          ))}
        </group>
      ))}

      {/* RECESSED LIGHT CHANNELS (Ambient Fill) */}
      {[-100, 0, 100].map((z, i) => (
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
                <meshStandardMaterial color="#e5e7eb" emissive="#e5e7eb" emissiveIntensity={0.8} />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      {/* DARK OVERHEAD SILHOUETTES */}
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