"use client";

import React from "react";
import * as THREE from "three";

export function WallMechanicalLayers({ lightTheme = false }: { lightTheme?: boolean }) {
  const WORLD_WIDTH = 420;
  const WORLD_DEPTH = 340;
  const WORLD_HEIGHT = 120;

export function WallMechanicalLayers() {
  const WORLD_WIDTH = 420;
  const WORLD_DEPTH = 340;
  const WORLD_HEIGHT = 120;

  const colors = {
    base: "#020617",
    structure: "#0f172a",
    detail: "#1e293b",
    accent: "#334155",
    glow: "#2563eb",
  };

  return (
    <group>
      {/* 🛡️ BACK WALL (Z = -170) */}
      <group position={[0, WORLD_HEIGHT / 2, -170]}>
        {/* Layer 1: The Shell */}
        <mesh>
          <boxGeometry args={[WORLD_WIDTH, WORLD_HEIGHT, 10]} />
          <meshStandardMaterial color={colors.base} roughness={0.8} />
        </mesh>

        {/* Layer 2: Mid-Structure (Vertical Ribs) */}
        {Array.from({ length: 12 }).map((_, i) => (
          <group key={`back-rib-${i}`} position={[i * 40 - WORLD_WIDTH / 2 + 20, 0, 5]}>
             {/* Support Pillars */}
             <mesh>
                <boxGeometry args={[6, WORLD_HEIGHT, 4]} />
                <meshStandardMaterial color={colors.structure} metalness={0.6} roughness={0.4} />
             </mesh>
             {/* Recessed Pocket */}
             <mesh position={[0, 0, -2]}>
                <boxGeometry args={[34, WORLD_HEIGHT - 20, 4]} />
                <meshStandardMaterial color="#000000" roughness={1} />
             </mesh>
             {/* Vertical Pipes in Pocket */}
             {[-6, 0, 6].map((x, j) => (
               <mesh key={`pipe-${j}`} position={[x, 0, -1]}>
                  <cylinderGeometry args={[0.4, 0.4, WORLD_HEIGHT - 20, 8]} />
                  <meshStandardMaterial color={colors.accent} metalness={0.9} />
               </mesh>
             ))}
          </group>
        ))}

        {/* Layer 3: Foreground Detailing (Cable Rails) */}
        {[-30, 0, 30].map((y) => (
          <mesh key={`rail-${y}`} position={[0, y, 10]}>
             <boxGeometry args={[WORLD_WIDTH, 1.2, 0.8]} />
             <meshStandardMaterial color={colors.detail} metalness={0.7} />
          </mesh>
        ))}
      </group>

      {/* 🛡️ SIDE WALLS (X = -210 and X = 210) */}
      {[-210, 210].map((xPos, i) => (
        <group key={`side-wall-${i}`} position={[xPos, WORLD_HEIGHT / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
          {/* Main Shell */}
          <mesh>
            <boxGeometry args={[WORLD_DEPTH, WORLD_HEIGHT, 12]} />
            <meshStandardMaterial color={colors.base} roughness={0.8} />
          </mesh>

          {/* Depth Layering */}
          {Array.from({ length: 8 }).map((_, j) => (
            <group key={`side-segment-${j}`} position={[j * 45 - WORLD_DEPTH / 2 + 22, 0, 6]}>
               {/* Mid Panel */}
               <mesh>
                  <boxGeometry args={[40, WORLD_HEIGHT - 30, 2]} />
                  <meshStandardMaterial color={colors.structure} roughness={0.4} metalness={0.6} />
               </mesh>
               
               {/* Recessed Maintenance Bay */}
               <mesh position={[0, -10, -3]}>
                  <boxGeometry args={[36, 70, 6]} />
                  <meshStandardMaterial color="#000000" />
               </mesh>

               {/* Maintenance Ladders (Scale Reference) */}
               <group position={[16, 0, 1]}>
                  {Array.from({ length: 20 }).map((_, l) => (
                    <mesh key={`rung-${l}`} position={[0, l * 3 - 30, 0]}>
                       <boxGeometry args={[2, 0.2, 0.2]} />
                       <meshStandardMaterial color={colors.accent} />
                    </mesh>
                  ))}
                  <mesh position={[-1, 0, 0]}>
                     <boxGeometry args={[0.2, 70, 0.2]} />
                     <meshStandardMaterial color={colors.accent} />
                  </mesh>
                  <mesh position={[1, 0, 0]}>
                     <boxGeometry args={[0.2, 70, 0.2]} />
                     <meshStandardMaterial color={colors.accent} />
                  </mesh>
               </group>

               {/* Foreground Support Rails */}
               <mesh position={[0, 40, 4]}>
                  <boxGeometry args={[45, 2, 2]} />
                  <meshStandardMaterial color={colors.detail} metalness={0.8} />
               </mesh>
            </group>
          ))}

          {/* Lower Maintenance Catwalk (Scale Reference) */}
          <group position={[0, -50, 12]}>
             <mesh>
                <boxGeometry args={[WORLD_DEPTH, 2, 10]} />
                <meshStandardMaterial color={colors.detail} roughness={0.2} metalness={0.9} />
             </mesh>
             {/* Railing */}
             <mesh position={[0, 4, 4]}>
                <boxGeometry args={[WORLD_DEPTH, 0.4, 0.4]} />
                <meshStandardMaterial color={colors.accent} />
             </mesh>
             {Array.from({ length: 20 }).map((_, r) => (
               <mesh key={`post-${r}`} position={[r * 20 - WORLD_DEPTH / 2 + 10, 2, 4]}>
                  <boxGeometry args={[0.4, 4, 0.4]} />
                  <meshStandardMaterial color={colors.accent} />
               </mesh>
             ))}
          </group>
        </group>
      ))}
    </group>
  );
}
  );
}
