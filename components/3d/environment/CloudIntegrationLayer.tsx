"use client";

import React from "react";
import * as THREE from "three";

export function CloudIntegrationLayer() {
  return (
    <group position={[120, 10, -20]}>
      {/* Cloud Uplink Array */}
      {Array.from({ length: 4 }).map((_, i) => (
        <group key={`uplink-${i}`} position={[0, i * 4 - 6, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[8 + i * 2, 0.1, 16, 100]} />
            <meshStandardMaterial color="#315b9c" transparent opacity={0.3} emissive="#315b9c" />
          </mesh>
        </group>
      ))}

      {/* Vertical Data Stream visualization */}
      <mesh position={[0, 10, 0]}>
         <cylinderGeometry args={[0.5, 0.5, 40, 16]} />
         <meshStandardMaterial color="#60a5fa" transparent opacity={0.2} emissive="#60a5fa" emissiveIntensity={2} />
      </mesh>

      {/* Maintenance Hub Detail */}
      <mesh position={[0, -5, 0]}>
         <boxGeometry args={[10, 2, 10]} />
         <meshStandardMaterial color="#1e293b" />
      </mesh>
      <pointLight intensity={1.5} color="#f59e0b" distance={30} />
    </group>
  );
}
