"use client";

import React from "react";
import * as THREE from "three";

export function FloorSystem() {
  return (
    <group>
      {/* Primary Floor Substrate - Industrial gray */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -20]} receiveShadow>
        <planeGeometry args={[1200, 260]} />
        <meshStandardMaterial color="#111827" roughness={0.72} metalness={0.18} />
      </mesh>

      {/* Segmented Maintenance Tiles - Value separation */}
      {Array.from({ length: 40 }).map((_, i) => (
        <group key={`floor-seg-${i}`} position={[i * 30 - 600, -0.48, -20]}>
          {/* Main Tile Panel */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[28, 258]} />
            <meshStandardMaterial color="#182131" roughness={0.5} metalness={0.2} />
          </mesh>
          
          {/* Recessed Maintenance Channels */}
          <mesh position={[14.5, -0.01, 0]}>
            <boxGeometry args={[1, 0.1, 260]} />
            <meshStandardMaterial color="#0f1724" />
          </mesh>
        </group>
      ))}

      {/* Central Navigation Aisle / Reflective Maintenance Strips */}
      <mesh position={[0, -0.47, -20]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1200, 4]} />
        <meshStandardMaterial 
          color="#315b9c" 
          emissive="#315b9c" 
          emissiveIntensity={0.4} 
          transparent 
          opacity={0.3} 
        />
      </mesh>

      {/* Worn/Textured Overlay Patches */}
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh 
          key={`wear-${i}`} 
          position={[(Math.random() - 0.5) * 1000, -0.46, (Math.random() - 0.5) * 200 - 20]} 
          rotation={[-Math.PI / 2, 0, Math.random() * Math.PI]}
        >
          <planeGeometry args={[8, 12]} />
          <meshStandardMaterial color="#334155" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  );
}
