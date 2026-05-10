"use client";

import React from "react";
import * as THREE from "three";

export function SecurityOperationsZone() {
  return (
    <group position={[-180, 5, -50]}>
      {/* Monitoring Station Hub - Industrial gray */}
      <mesh castShadow>
        <boxGeometry args={[15, 10, 15]} />
        <meshStandardMaterial color="#182131" roughness={0.7} />
      </mesh>

      {/* Red Security Alert Lighting - rhythmic pulsing */}
      <pointLight intensity={2.5} color="#ef4444" distance={50} />
      
      {/* Station Fill Light (Indirect bounce feel) */}
      <pointLight position={[0, -2, 0]} intensity={0.5} color="#cbd5e1" distance={20} />

      {/* Holographic Monitoring Displays */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`screen-${i}`} position={[i * 2 - 3, 4, 7.6]} rotation={[0.2, 0, 0]}>
           <planeGeometry args={[1.5, 1]} />
           <meshStandardMaterial 
            color="#ef4444" 
            transparent 
            opacity={0.5} 
            emissive="#ef4444" 
            emissiveIntensity={1.2} 
          />
        </mesh>
      ))}

      {/* Security Scanning Laser Array */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`laser-${i}`} position={[0, 15, i * 2 - 5]} rotation={[Math.PI / 2, 0, 0]}>
           <cylinderGeometry args={[0.02, 0.02, 30, 8]} />
           <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={3} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}
