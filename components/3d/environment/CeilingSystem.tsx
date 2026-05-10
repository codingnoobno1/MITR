"use client";

import React from "react";
import * as THREE from "three";

export function CeilingSystem() {
  const CEILING_Y = 50;
  // 🛡️ FIX: Intentional geometry penetration (Ceiling overlaps walls by 10 units each side)
  const CEILING_DEPTH = 280; 

  return (
    <group>
      {/* 🛡️ FIX: INTERIOR SHADOW CANOPY (Dense shadow mass to hide intersections) */}
      <mesh position={[0, 47, -20]}>
        <boxGeometry args={[1600, 8, 300]} />
        <meshStandardMaterial
          color="#020617"
          roughness={1}
        />
      </mesh>

      {/* MAIN STRUCTURAL CEILING (Lowered slightly for intentional intersection) */}
      <mesh position={[0, CEILING_Y + 0.5, -20]}>
        <boxGeometry args={[1500, 4, CEILING_DEPTH]} />
        <meshStandardMaterial color="#1e293b" roughness={0.85} side={THREE.DoubleSide} />
      </mesh>

      {/* RECESSED MAINTENANCE CAVITIES */}
      {Array.from({ length: 7 }).map((_, i) => (
        <group key={`recess-${i}`} position={[i * 200 - 600, CEILING_Y + 4, -20]}>
           <mesh>
              <boxGeometry args={[40, 6, CEILING_DEPTH - 20]} />
              <meshStandardMaterial color="#0f172a" /> 
           </mesh>
           <mesh position={[0, 2, 0]}>
              <boxGeometry args={[10, 2, CEILING_DEPTH - 40]} />
              <meshStandardMaterial color="#1e293b" metalness={0.5} /> 
           </mesh>
           
           {/* EDGE HIGHLIGHTS */}
           {[-1, 1].map((side) => (
             <mesh key={`highlight-${side}`} position={[side * 20, -3.1, 0]}>
                <boxGeometry args={[0.5, 0.1, CEILING_DEPTH - 20]} />
                <meshStandardMaterial color="#334155" emissive="#334155" emissiveIntensity={0.3} />
             </mesh>
           ))}
        </group>
      ))}

      {/* CEILING-TO-WALL INTEGRATION RAILS */}
      {[-150, 110].map((zPos, i) => (
        <mesh key={`perimeter-rail-${i}`} position={[0, CEILING_Y, zPos]}>
           <boxGeometry args={[1500, 3, 4]} />
           <meshStandardMaterial color="#1e293b" metalness={0.6} />
        </mesh>
      ))}

      {/* INDUSTRIAL LIGHTING (🛡️ FIX: Reduced Intensity to prevent leakage) */}
      {[-40, 40].map((xPos, i) => (
        <group key={`tube-row-${i}`} position={[xPos, CEILING_Y - 6, -20]}>
          
          <rectAreaLight
            width={220}
            height={12}
            intensity={3} // Reduced from 8
            position={[0, -2, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />

          {Array.from({ length: 10 }).map((_, j) => {
            const state = (j + i) % 5;
            const isActive = state !== 2;
            const intensityMult = state === 0 ? 1.5 : state === 1 ? 0.7 : 0.3;
            // 🛡️ FIX: Capped emissive intensity
            const finalEmissive = 0.8 + 0.4 * intensityMult; 

            return (
              <group key={`tube-${j}`} position={[0, 0, j * 24 - 110]}>
                <mesh>
                   <boxGeometry args={[12, 0.4, 0.4]} />
                   <meshStandardMaterial color="#475569" metalness={0.5} />
                </mesh>
                
                <mesh position={[0, -0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
                   <cylinderGeometry args={[0.15, 0.15, 10, 8]} />
                   <meshStandardMaterial 
                    color="#ffffff" 
                    emissive="#ffffff" 
                    emissiveIntensity={isActive ? finalEmissive : 0.1} 
                    transparent
                    opacity={isActive ? 1 : 0.2}
                  />
                </mesh>

                {isActive && (
                  <group>
                    <spotLight
                      position={[0, -1, 0]}
                      angle={0.35}
                      penumbra={1}
                      intensity={1.5 * intensityMult} // Reduced from 2.5
                      distance={100}
                      color="#e5e7eb"
                    />
                    
                    <mesh position={[0, -15, 0]}>
                       <cylinderGeometry args={[1, 8, 30, 32]} />
                       <meshStandardMaterial 
                        color="#ffffff" 
                        transparent 
                        opacity={0.01 * intensityMult} // Reduced from 0.02
                        depthWrite={false}
                      />
                    </mesh>
                  </group>
                )}
              </group>
            );
          })}
        </group>
      ))}

      {/* PRIMARY SUPPORT BEAMS */}
      {Array.from({ length: 28 }).map((_, i) => (
        <group key={`primary-beam-${i}`} position={[i * 50 - 700, CEILING_Y - 4, -20]}>
          <mesh castShadow>
            <boxGeometry args={[3, 6, CEILING_DEPTH]} />
            <meshStandardMaterial color="#334155" metalness={0.35} roughness={0.55} />
          </mesh>
        </group>
      ))}
    </group>
  );
}