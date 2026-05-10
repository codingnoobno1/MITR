"use client";

import React from "react";
import * as THREE from "three";

export function WallPanels() {
  const WALL_HEIGHT = 50; // Increased to match new ceiling

  return (
    <group>
      {/* Side Wall Architecture */}
      {[-145, 105].map((z, i) => (
        <group key={`wall-${i}`} position={[0, WALL_HEIGHT / 2, z]}>
          
          {/* Main Structural Backdrop - ensures NO GAPS between modular panels */}
          <mesh rotation={[0, i === 0 ? 0 : Math.PI, 0]}>
            <planeGeometry args={[1400, WALL_HEIGHT]} />
            <meshStandardMaterial color="#0b1120" roughness={1} />
          </mesh>

          {/* Layered Wall Panels */}
          {Array.from({ length: 36 }).map((_, j) => {
            const x = j * 40 - 700;
            return (
              <group key={`panel-${j}`} position={[x, 0, i === 0 ? 0.2 : -0.2]}>
                {/* Panel Frame - tightly packed to remove visual gaps */}
                <mesh>
                  <boxGeometry args={[40.2, WALL_HEIGHT, 0.5]} />
                  <meshStandardMaterial color="#1e293b" metalness={0.4} roughness={0.7} />
                </mesh>
                
                {/* Technical Insets */}
                <mesh position={[0, 0, 0.3]}>
                   <boxGeometry args={[38, WALL_HEIGHT - 4, 0.2]} />
                   <meshStandardMaterial color="#111827" />
                </mesh>

                {/* Mid-level cabling / light trim */}
                <mesh position={[0, 0, 0.45]}>
                   <boxGeometry args={[40.2, 0.1, 0.1]} />
                   <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={0.5} />
                </mesh>
              </group>
            );
          })}
        </group>
      ))}
    </group>
  );
}
