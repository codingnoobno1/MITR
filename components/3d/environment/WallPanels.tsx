"use client";

import React from "react";
import * as THREE from "three";

export function WallPanels() {
  const WALL_HEIGHT = 52; // Slight overshoot above ceiling (50) to seal top gap
  const WALL_Z_POSITIONS = [-150, 110]; // Exactly matching floor bounds

  return (
    <group>
      {/* ===== SIDE WALLS ===== */}
      {WALL_Z_POSITIONS.map((z, i) => (
        <group key={`wall-${i}`} position={[0, WALL_HEIGHT / 2 - 1, z]}>
          
          {/* PRIMARY SOLID BACKDROP (DoubleSide to be visible from both directions) */}
          <mesh>
            <boxGeometry args={[1500, WALL_HEIGHT, 2]} />
            <meshStandardMaterial color="#0b1120" roughness={1} side={THREE.DoubleSide} />
          </mesh>

          {/* Modular Industrial Panels */}
          {Array.from({ length: 38 }).map((_, j) => {
            const x = j * 40 - 740;
            return (
              <group key={`panel-${j}`} position={[x, 0, i === 0 ? 1.5 : -1.5]}>
                {/* Panel Frame */}
                <mesh>
                  <boxGeometry args={[40.4, WALL_HEIGHT - 4, 0.5]} />
                  <meshStandardMaterial color="#1e293b" metalness={0.4} roughness={0.7} />
                </mesh>
                
                {/* Technical Insets */}
                <mesh position={[0, 0, i === 0 ? 0.3 : -0.3]}>
                   <boxGeometry args={[38, WALL_HEIGHT - 8, 0.2]} />
                   <meshStandardMaterial color="#111827" />
                </mesh>

                {/* Vertical Support Beams between panels */}
                <mesh position={[20, 0, i === 0 ? 0.4 : -0.4]}>
                   <boxGeometry args={[1, WALL_HEIGHT, 1]} />
                   <meshStandardMaterial color="#0f172a" />
                </mesh>
              </group>
            );
          })}

          {/* Baseboard Girder (Floor joint seal) */}
          <mesh position={[0, -WALL_HEIGHT / 2 + 1.5, i === 0 ? 1.5 : -1.5]}>
            <boxGeometry args={[1500, 3, 2]} />
            <meshStandardMaterial color="#1e293b" metalness={0.6} />
          </mesh>

          {/* Crown/Ceiling Girder (Ceiling joint seal) */}
          <mesh position={[0, WALL_HEIGHT / 2 - 1.5, i === 0 ? 1.5 : -1.5]}>
            <boxGeometry args={[1500, 3, 2]} />
            <meshStandardMaterial color="#1e293b" metalness={0.6} />
          </mesh>
        </group>
      ))}

      {/* ===== CORNER VERTICAL PILLARS (Airtight structural joints) ===== */}
      {[[-750, -150], [750, -150], [-750, 110], [750, 110]].map((pos, i) => (
        <mesh key={`corner-pillar-${i}`} position={[pos[0], WALL_HEIGHT / 2 - 1, pos[1]]}>
          <boxGeometry args={[6, WALL_HEIGHT, 6]} />
          <meshStandardMaterial color="#111827" metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}
