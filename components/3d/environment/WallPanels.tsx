"use client";

import React from "react";
import * as THREE from "three";

export function WallPanels() {
  return (
    <group>
      {/* Side Wall Architecture */}
      {[-145, 105].map((z, i) => (
        <group key={`wall-${i}`} position={[0, 10, z]}>
          
          {/* 3. WALL GRADIENT (Upper lighter, Lower darker) */}
          {/* Lower Section */}
          <mesh position={[0, -5, 0]} rotation={[0, i === 0 ? 0 : Math.PI, 0]}>
            <planeGeometry args={[1200, 20]} />
            <meshStandardMaterial color="#111827" roughness={0.95} />
          </mesh>
          {/* Upper Section */}
          <mesh position={[0, 15, 0]} rotation={[0, i === 0 ? 0 : Math.PI, 0]}>
            <planeGeometry args={[1200, 20]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} />
          </mesh>

          {/* Edge Emissive Trims for architectural readability */}
          <mesh position={[0, 5, i === 0 ? 0.1 : -0.1]}>
             <boxGeometry args={[1200, 0.05, 0.1]} />
             <meshStandardMaterial 
              color="#315b9c" 
              emissive="#315b9c" 
              emissiveIntensity={0.08} 
              transparent 
              opacity={0.5} 
            />
          </mesh>

          {/* Modular Industrial Panels */}
          {Array.from({ length: 30 }).map((_, j) => {
            const x = j * 40 - 580;
            return (
              <group key={`panel-${j}`} position={[x, 0, i === 0 ? 0.2 : -0.2]}>
                {/* Panel Frame */}
                <mesh>
                  <boxGeometry args={[38, 20, 0.5]} />
                  <meshStandardMaterial color="#1e293b" metalness={0.4} />
                </mesh>
                
                {/* Technical Accents */}
                {[...Array(4)].map((_, k) => (
                  <mesh key={`accent-${k}`} position={[k % 2 ? 18 : -18, k < 2 ? 9 : -9, 0.3]}>
                    <sphereGeometry args={[0.12, 8, 8]} />
                    <meshStandardMaterial color="#334155" metalness={1} />
                  </mesh>
                ))}

                {/* Vents - shadow pockets */}
                <mesh position={[0, -6, 0.3]}>
                  <boxGeometry args={[10, 4, 0.1]} />
                  <meshStandardMaterial color="#0f1724" />
                </mesh>
              </group>
            );
          })}
        </group>
      ))}
    </group>
  );
}
