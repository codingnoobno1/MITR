"use client";

import React from "react";
import * as THREE from "three";

export function CoolingSystem() {
  return (
    <group>
      {/* Massive HVAC Ducts running parallel to the aisles */}
      {[-80, 80].map((z, i) => (
        <group key={`duct-${i}`} position={[0, 16, z]}>
           <mesh>
             <boxGeometry args={[1200, 3, 4]} />
             <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
           </mesh>
           {/* Duct Reinforcement Ribs */}
           {Array.from({ length: 30 }).map((_, j) => (
             <mesh key={`rib-${j}`} position={[j * 40 - 600, 0, 0]}>
                <boxGeometry args={[0.5, 3.2, 4.2]} />
                <meshStandardMaterial color="#1e293b" />
             </mesh>
           ))}
        </group>
      ))}

      {/* Visible Coolant Piping */}
      {[-70, 70].map((z, i) => (
        <mesh key={`pipe-${i}`} position={[0, 4, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 1200, 12]} />
          <meshStandardMaterial color="#315b9c" metalness={0.9} />
        </mesh>
      ))}

      {/* Thermal Management Floor Vents */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={`vent-${i}`} position={[i * 60 - 580, -0.49, -40]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8, 8]} />
          <meshStandardMaterial color="#070b14" />
        </mesh>
      ))}
    </group>
  );
}
