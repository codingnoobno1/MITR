"use client";

import React from "react";
import * as THREE from "three";

export function CeilingCassettes() {
  const WORLD_WIDTH = 420;
  const WORLD_DEPTH = 340;
  const CEILING_Y = 100;

  const colors = {
    beam: "#0f172a",
    duct: "#1e293b",
    tray: "#334155",
    accent: "#020617",
    glow: "#2563eb",
  };

  return (
    <group position={[0, CEILING_Y, 0]}>
      {/* 🛡️ MAIN LONGITUDINAL BEAMS (Structural Depth) */}
      {[-120, -60, 0, 60, 120].map((x) => (
        <mesh key={`beam-${x}`} position={[x, 4, 0]}>
          <boxGeometry args={[8, 12, WORLD_DEPTH]} />
          <meshStandardMaterial color={colors.beam} metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* 🛡️ CROSS-RUNNING HVAC DUCTS (Industrial Detail) */}
      {[-120, -40, 40, 120].map((z) => (
        <group key={`duct-group-${z}`} position={[0, -2, z]}>
           <mesh>
              <boxGeometry args={[WORLD_WIDTH, 6, 8]} />
              <meshStandardMaterial color={colors.duct} metalness={0.8} roughness={0.2} />
           </mesh>
           {/* Support Straps */}
           {[-180, -90, 0, 90, 180].map((sx) => (
             <mesh key={`strap-${sx}`} position={[sx, 3, 0]}>
                <boxGeometry args={[1, 6, 8.2]} />
                <meshStandardMaterial color={colors.accent} />
             </mesh>
           ))}
        </group>
      ))}

      {/* 🛡️ CENTRAL CABLE TRAYS (Data Infrastructure) */}
      {[-20, 20].map((x) => (
        <group key={`tray-${x}`} position={[x, -8, 0]}>
           <mesh>
              <boxGeometry args={[2, 0.4, WORLD_DEPTH]} />
              <meshStandardMaterial color={colors.tray} metalness={0.9} />
           </mesh>
           {/* Tray Ribs */}
           {Array.from({ length: 40 }).map((_, r) => (
             <mesh key={`rib-${r}`} position={[0, 0, r * 8 - WORLD_DEPTH / 2]}>
                <boxGeometry args={[4, 0.2, 0.4]} />
                <meshStandardMaterial color={colors.tray} />
             </mesh>
           ))}
        </group>
      ))}

      {/* 🛡️ RECESSED INDUSTRIAL LIGHTING (Mood Only) */}
      {[-150, -80, 80, 150].map((x) => (
        <group key={`light-row-${x}`}>
           {[-100, 0, 100].map((z) => (
             <mesh key={`light-${z}`} position={[x, 0, z]}>
                <boxGeometry args={[12, 0.5, 4]} />
                <meshStandardMaterial 
                  color="#ffffff" 
                  emissive={colors.glow} 
                  emissiveIntensity={0.25} 
                />
             </mesh>
           ))}
        </group>
      ))}

      {/* 🛡️ MAINTENANCE RAILS (Scale Reference) */}
      {[-190, 190].map((x) => (
        <mesh key={`m-rail-${x}`} position={[x, -6, 0]}>
           <boxGeometry args={[0.6, 0.6, WORLD_DEPTH]} />
           <meshStandardMaterial color={colors.accent} />
        </mesh>
      ))}
    </group>
  );
}
