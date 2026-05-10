"use client";

import React from "react";
import * as THREE from "three";

export function FloorSystem() {
  return (
    <group>
      {/* Primary Floor Substrate — Matches wall bounds exactly */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -20]} receiveShadow>
        <planeGeometry args={[1500, 262]} />
        <meshStandardMaterial 
          color="#1e293b" 
          roughness={0.75} 
          metalness={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Segmented Maintenance Tiles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <group key={`floor-seg-${i}`} position={[i * 30 - 600, -0.48, -20]}>
          {/* Main Tile Panel */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[28, 258]} />
            <meshStandardMaterial color="#334155" roughness={0.65} metalness={0.15} />
          </mesh>
          
          {/* Recessed Maintenance Channels */}
          <mesh position={[14.5, -0.01, 0]}>
            <boxGeometry args={[1, 0.1, 260]} />
            <meshStandardMaterial color="#0f1724" />
          </mesh>

          {/* Contact shadow darkness for Column Grounding */}
          {[-95, 95].map((zPos, j) => (
            <mesh key={`col-ground-${j}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, zPos]}>
              <ringGeometry args={[2.8, 4.5, 32]} />
              <meshStandardMaterial color="#070b14" transparent opacity={0.6} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Central Navigation Aisle */}
      <mesh position={[0, -0.47, -20]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1500, 4]} />
        <meshStandardMaterial 
          color="#315b9c" 
          emissive="#315b9c" 
          emissiveIntensity={0.6} 
          transparent 
          opacity={0.3} 
        />
      </mesh>

      {/* Worn/Textured Overlay Patches (deterministic positions) */}
      {Array.from({ length: 25 }).map((_, i) => {
        // Deterministic positions using index math instead of Math.random
        const xPos = ((i * 73 + 17) % 1000) - 500;
        const zPos = ((i * 37 + 11) % 200) - 120;
        const rot = (i * 0.314);
        return (
          <mesh 
            key={`wear-${i}`} 
            position={[xPos, -0.46, zPos]} 
            rotation={[-Math.PI / 2, 0, rot]}
          >
            <planeGeometry args={[8, 12]} />
            <meshStandardMaterial color="#475569" transparent opacity={0.15} />
          </mesh>
        );
      })}
    </group>
  );
}
