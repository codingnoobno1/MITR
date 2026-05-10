"use client";

import React from "react";
import * as THREE from "three";

export function WallPanels() {
  return (
    <group>
      {/* Side Wall Architecture */}
      {[-145, 105].map((z, i) => (
        <group key={`wall-${i}`} position={[0, 10, z]}>
          {/* Main Wall Plane */}
          <mesh rotation={[0, i === 0 ? 0 : Math.PI, 0]}>
            <planeGeometry args={[1200, 40]} />
            <meshStandardMaterial color="#0b1220" roughness={0.95} />
          </mesh>

          {/* Modular Industrial Panels */}
          {Array.from({ length: 30 }).map((_, j) => {
            const x = j * 40 - 580;
            return (
              <group key={`panel-${j}`} position={[x, 0, i === 0 ? 0.2 : -0.2]}>
                {/* Panel Frame */}
                <mesh>
                  <boxGeometry args={[38, 20, 0.5]} />
                  <meshStandardMaterial color="#1a2233" metalness={0.4} />
                </mesh>
                
                {/* Rivets / Technical Accents */}
                {[...Array(4)].map((_, k) => (
                  <mesh key={`rivet-${k}`} position={[k % 2 ? 18 : -18, k < 2 ? 9 : -9, 0.3]}>
                    <sphereGeometry args={[0.1, 8, 8]} />
                    <meshStandardMaterial color="#334155" metalness={0.9} />
                  </mesh>
                ))}

                {/* Vents / Access Ports */}
                <mesh position={[0, -6, 0.3]}>
                  <boxGeometry args={[10, 4, 0.1]} />
                  <meshStandardMaterial color="#070b14" />
                </mesh>
              </group>
            );
          })}
        </group>
      ))}
    </group>
  );
}
