"use client";

import React from "react";
import * as THREE from "three";

export function WallMechanicalLayers({ lightTheme = false }: { lightTheme?: boolean }) {
  const WORLD_WIDTH = 420;
  const WORLD_HEIGHT = 120;
  const WALL_Z = [-160, 160];

  const colors = {
    shell: lightTheme ? "#f8fafc" : "#020617",
    pocket: lightTheme ? "#f1f5f9" : "#0b1120",
    metal: lightTheme ? "#cbd5e1" : "#334155",
    trim: lightTheme ? "#ffffff" : "#1e293b"
  };

  return (
    <group>
      {WALL_Z.map((zPos, i) => (
        <group key={`wall-group-${i}`} position={[0, WORLD_HEIGHT / 2, zPos]}>
          
          {/* LAYER 1: OUTER STRUCTURAL SHELL */}
          <mesh>
            <boxGeometry args={[WORLD_WIDTH, WORLD_HEIGHT, 8]} />
            <meshStandardMaterial color={colors.shell} roughness={0.5} metalness={0.2} />
          </mesh>

          {/* LAYER 2: RECESSED CAVITIES */}
          {Array.from({ length: Math.floor(WORLD_WIDTH / 40) }).map((_, j) => (
            <group key={`segment-${j}`} position={[j * 40 - WORLD_WIDTH / 2 + 20, 0, i === 0 ? 3 : -3]}>
               
               {/* LAYER 3: MECHANICAL INFRASTRUCTURE */}
               <group position={[0, 0, 0]}>
                  <mesh>
                     <boxGeometry args={[36, WORLD_HEIGHT - 20, 2]} />
                     <meshStandardMaterial color={colors.pocket} />
                  </mesh>
                  
                  {[-12, 0, 12].map((xOff, k) => (
                    <mesh key={`pipe-${k}`} position={[xOff, 0, 0.5]}>
                       <cylinderGeometry args={[0.5, 0.5, WORLD_HEIGHT - 20, 8]} />
                       <meshStandardMaterial color={colors.metal} metalness={0.8} />
                    </mesh>
                  ))}

                  {[20, -20].map((yOff, k) => (
                    <mesh key={`tray-${k}`} position={[0, yOff, 0.6]}>
                       <boxGeometry args={[34, 1.5, 0.8]} />
                       <meshStandardMaterial color={colors.trim} />
                    </mesh>
                  ))}
               </group>

               {/* LAYER 4: EMBEDDED SERVER TOWERS */}
               {[-16, 16].map((xOff, k) => (
                 <mesh key={`tower-${k}`} position={[xOff, -25, 1.2]}>
                    <boxGeometry args={[6, 30, 4]} />
                    <meshStandardMaterial color={colors.shell} metalness={0.3} />
                 </mesh>
               ))}

               {/* LAYER 5: TELEMETRY SCREENS (Brightened) */}
               <mesh position={[0, 35, 1.5]}>
                  <planeGeometry args={[28, 12]} />
                  <meshStandardMaterial color={lightTheme ? "#f1f5f9" : "#05070a"} emissive="#3b82f6" emissiveIntensity={0.2} />
               </mesh>
               {/* 💡 RIM LIGHTING (Stronger highlights) */}
               <mesh position={[0, 35, 1.6]}>
                  <boxGeometry args={[30, 14, 0.1]} />
                  <meshBasicMaterial color={lightTheme ? "#ffffff" : "#60a5fa"} wireframe />
               </mesh>
            </group>
          ))}

          {/* LAYER 7: WALL EDGE LIGHTING (Pure White) */}
          <mesh position={[0, WORLD_HEIGHT / 2 - 1, i === 0 ? 4.2 : -4.2]}>
             <boxGeometry args={[WORLD_WIDTH, 0.5, 0.5]} />
             <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
