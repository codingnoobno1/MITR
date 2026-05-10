"use client";

import React from "react";
import * as THREE from "three";

export function SecurityOperationsZone() {
  return (
    <group position={[-180, 5, -50]}>
      {/* Monitoring Station Hub */}
      <mesh castShadow>
        <boxGeometry args={[15, 10, 15]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Red Security Alert Lighting */}
      <pointLight intensity={2} color="#ef4444" distance={40} />
      
      {/* Holographic Monitoring Displays */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`screen-${i}`} position={[i * 2 - 3, 4, 7.6]} rotation={[0.2, 0, 0]}>
           <planeGeometry args={[1.5, 1]} />
           <meshStandardMaterial color="#ef4444" transparent opacity={0.4} emissive="#ef4444" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Security Scanning Laser Array */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`laser-${i}`} position={[0, 15, i * 2 - 5]} rotation={[Math.PI / 2, 0, 0]}>
           <cylinderGeometry args={[0.02, 0.02, 30, 8]} />
           <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={2} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}
