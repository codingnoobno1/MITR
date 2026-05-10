"use client";

import React from "react";
import * as THREE from "three";

export function WallMechanicalLayers() {
  const WORLD_WIDTH = 420;
  const WORLD_HEIGHT = 120;
  const WALL_Z = [-160, 160];

  return (
    <group>
      {WALL_Z.map((zPos, i) => (
        <group key={`wall-group-${i}`} position={[0, WORLD_HEIGHT / 2, zPos]}>
          
          {/* 🛡️ LAYER 1: OUTER STRUCTURAL SHELL */}
          <mesh>
            <boxGeometry args={[WORLD_WIDTH, WORLD_HEIGHT, 8]} />
            <meshStandardMaterial color="#020617" roughness={1} />
          </mesh>

          {/* 🛡️ LAYER 2: RECESSED CAVITIES (Every 40 units) */}
          {Array.from({ length: Math.floor(WORLD_WIDTH / 40) }).map((_, j) => (
            <group key={`segment-${j}`} position={[j * 40 - WORLD_WIDTH / 2 + 20, 0, i === 0 ? 3 : -3]}>
               
               {/* 🛡️ LAYER 3: MECHANICAL INFRASTRUCTURE (Pipes, Relays) */}
               <group position={[0, 0, 0]}>
                  {/* Recessed Pocket */}
                  <mesh>
                     <boxGeometry args={[36, WORLD_HEIGHT - 20, 2]} />
                     <meshStandardMaterial color="#0b1120" />
                  </mesh>
                  
                  {/* Vertical Pipes */}
                  {[-12, 0, 12].map((xOff, k) => (
                    <mesh key={`pipe-${k}`} position={[xOff, 0, 0.5]}>
                       <cylinderGeometry args={[0.5, 0.5, WORLD_HEIGHT - 20, 8]} />
                       <meshStandardMaterial color="#334155" metalness={0.8} />
                    </mesh>
                  ))}

                  {/* Horizontal Cable Trays */}
                  {[20, -20].map((yOff, k) => (
                    <mesh key={`tray-${k}`} position={[0, yOff, 0.6]}>
                       <boxGeometry args={[34, 1.5, 0.8]} />
                       <meshStandardMaterial color="#1e293b" />
                    </mesh>
                  ))}
               </group>

               {/* 🛡️ LAYER 4: EMBEDDED SERVER TOWERS */}
               {[-16, 16].map((xOff, k) => (
                 <mesh key={`tower-${k}`} position={[xOff, -25, 1.2]}>
                    <boxGeometry args={[6, 30, 4]} />
                    <meshStandardMaterial color="#020617" metalness={0.6} />
                 </mesh>
               ))}

               {/* 🛡️ LAYER 5: TELEMETRY SCREENS & LIGHT STRIPS */}
               <mesh position={[0, 35, 1.5]}>
                  <planeGeometry args={[28, 12]} />
                  <meshStandardMaterial color="#05070a" emissive="#3b82f6" emissiveIntensity={0.3} />
               </mesh>
               {/* Rim Light */}
               <mesh position={[0, 35, 1.6]}>
                  <boxGeometry args={[30, 14, 0.1]} />
                  <meshBasicMaterial color="#60a5fa" wireframe />
               </mesh>
            </group>
          ))}

          {/* 🛡️ LAYER 6: LONGITUDINAL CABLE RUNS */}
          {[10, -10].map((yOff, j) => (
            <mesh key={`main-cable-${j}`} position={[0, yOff, i === 0 ? 4.5 : -4.5]}>
               <boxGeometry args={[WORLD_WIDTH, 0.4, 0.4]} />
               <meshStandardMaterial color="#020617" />
            </mesh>
          ))}

          {/* 🛡️ LAYER 7: WALL CONTACT LIGHTING (Rim lights) */}
          <mesh position={[0, WORLD_HEIGHT / 2 - 1, i === 0 ? 4.2 : -4.2]}>
             <boxGeometry args={[WORLD_WIDTH, 0.5, 0.5]} />
             <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
