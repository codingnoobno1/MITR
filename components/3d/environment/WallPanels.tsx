"use client";

import React from "react";
import * as THREE from "three";

export function WallPanels() {
  const WALL_HEIGHT = 50;
  const WALL_Z_POSITIONS = [-150, 110]; // Exactly matching floor bounds

  return (
    <group>
      {/* Side Wall Architecture */}
      {WALL_Z_POSITIONS.map((z, i) => (
        <group key={`wall-${i}`} position={[0, WALL_HEIGHT / 2, z]}>
          
          {/* Main Structural Backdrop */}
          <mesh rotation={[0, i === 0 ? 0 : Math.PI, 0]}>
            <planeGeometry args={[1400, WALL_HEIGHT]} />
            <meshStandardMaterial color="#0b1120" roughness={1} />
          </mesh>

          {/* 🛠️ JOINT SEALS: BASE AND TOP TRIMS (Ensures 'Closed Packed' look) */}
          {/* Baseboard Girder */}
          <mesh position={[0, -WALL_HEIGHT / 2 + 1, i === 0 ? 0.4 : -0.4]}>
            <boxGeometry args={[1400, 2.5, 1]} />
            <meshStandardMaterial color="#1e293b" metalness={0.6} />
          </mesh>
          {/* Crown/Ceiling Girder */}
          <mesh position={[0, WALL_HEIGHT / 2 - 1, i === 0 ? 0.4 : -0.4]}>
            <boxGeometry args={[1400, 2.5, 1]} />
            <meshStandardMaterial color="#1e293b" metalness={0.6} />
          </mesh>

          {/* Modular Industrial Panels */}
          {Array.from({ length: 36 }).map((_, j) => {
            const x = j * 40 - 700;
            return (
              <group key={`panel-${j}`} position={[x, 0, i === 0 ? 0.2 : -0.2]}>
                {/* Panel Frame */}
                <mesh>
                  <boxGeometry args={[40.4, WALL_HEIGHT - 4, 0.5]} />
                  <meshStandardMaterial color="#1e293b" metalness={0.4} roughness={0.7} />
                </mesh>
                
                {/* Technical Insets */}
                <mesh position={[0, 0, 0.3]}>
                   <boxGeometry args={[38, WALL_HEIGHT - 8, 0.2]} />
                   <meshStandardMaterial color="#111827" />
                </mesh>

                {/* Vertical Support Beams between panels */}
                <mesh position={[20, 0, 0.4]}>
                   <boxGeometry args={[1, WALL_HEIGHT, 1]} />
                   <meshStandardMaterial color="#0f172a" />
                </mesh>
              </group>
            );
          })}
        </group>
      ))}

      {/* 🛠️ CORNER VERTICAL PILLARS (Airtight structural joints) */}
      {[[-700, -150], [700, -150], [-700, 110], [700, 110]].map((pos, i) => (
        <mesh key={`corner-pillar-${i}`} position={[pos[0], WALL_HEIGHT / 2, pos[1]]}>
          <boxGeometry args={[4, WALL_HEIGHT, 4]} />
          <meshStandardMaterial color="#111827" metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}
