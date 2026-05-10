"use client";

import React from "react";
import * as THREE from "three";

export function MaintenanceWalkways() {
  return (
    <group>
      {/* Elevated Perimeter Walkways */}
      {[-120, 80].map((z, i) => (
        <group key={`walkway-${i}`} position={[0, 6, z]}>
          {/* Grated Floor Surface */}
          <mesh>
            <boxGeometry args={[1200, 0.2, 12]} />
            <meshStandardMaterial 
              color="#1e293b" 
              metalness={0.9} 
              roughness={0.4} 
              transparent 
              opacity={0.9} 
            />
          </mesh>
          
          {/* Safety Handrails */}
          <mesh position={[0, 1.2, i === 0 ? 5.8 : -5.8]}>
             <boxGeometry args={[1200, 0.1, 0.1]} />
             <meshStandardMaterial color="#475569" />
          </mesh>
          {Array.from({ length: 40 }).map((_, j) => (
             <mesh key={`post-${j}`} position={[j * 30 - 600, 0.6, i === 0 ? 5.8 : -5.8]}>
                <boxGeometry args={[0.1, 1.2, 0.1]} />
                <meshStandardMaterial color="#475569" />
             </mesh>
          ))}
          
          {/* Vertical Access Ladders */}
          {[-400, 0, 400].map((x, k) => (
             <group key={`ladder-${k}`} position={[x, -3, i === 0 ? 5.8 : -5.8]}>
                <mesh>
                  <boxGeometry args={[1, 6, 0.1]} />
                  <meshStandardMaterial color="#334155" />
                </mesh>
             </group>
          ))}
        </group>
      ))}
    </group>
  );
}
