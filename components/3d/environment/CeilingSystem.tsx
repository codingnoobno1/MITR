"use client";

import React from "react";
import * as THREE from "three";

export function CeilingSystem() {
  return (
    <group>
      {/* MAIN STRUCTURAL CEILING */}
      <mesh position={[0, 30, -20]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[1400, 320]} />
        <meshStandardMaterial color="#1f2937" roughness={0.85} />
      </mesh>

      {/* 3. RECESSED MAINTENANCE CAVITIES (Vertical Depth Layering) */}
      {Array.from({ length: 7 }).map((_, i) => (
        <group key={`recess-${i}`} position={[i * 200 - 600, 31, -20]}>
           <mesh>
              <boxGeometry args={[40, 6, 260]} />
              <meshStandardMaterial color="#0b1120" />
           </mesh>
           {/* Internal mechanical detail in recess */}
           <mesh position={[0, 2, 0]}>
              <boxGeometry args={[10, 2, 240]} />
              <meshStandardMaterial color="#111827" metalness={0.5} />
           </mesh>
        </group>
      ))}

      {/* 4. CEILING-TO-WALL INTEGRATION (Perimeter Reinforcement Rails) */}
      {[-150, 110].map((zPos, i) => (
        <mesh key={`perimeter-rail-${i}`} position={[0, 29, zPos]}>
           <boxGeometry args={[1400, 1.5, 3]} />
           <meshStandardMaterial color="#111827" metalness={0.6} />
        </mesh>
      ))}

      {/* 1, 2, 6. INDUSTRIAL LIGHTING OVERHAUL (Area Lights & Directionality) */}
      {[-40, 40].map((xPos, i) => (
        <group key={`tube-row-${i}`} position={[xPos, 24, -20]}>
          
          {/* ONE LARGE RECT AREA LIGHT PER ROW (Performance & Coherence) */}
          <rectAreaLight
            width={260}
            height={12}
            intensity={8}
            position={[0, -2, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />

          {Array.from({ length: 12 }).map((_, j) => {
            // 2. LIGHTING RHYTHM VARIATION
            const state = (j + i) % 5; // bright, medium, off, etc.
            const isActive = state !== 2;
            const intensityMult = state === 0 ? 1.5 : state === 1 ? 0.7 : 0.3;
            const finalEmissive = 1.4 + (Math.random() * 0.5) * intensityMult;

            return (
              <group key={`tube-${j}`} position={[0, 0, j * 30 - 180]}>
                {/* Tube Housing */}
                <mesh>
                   <boxGeometry args={[12, 0.4, 0.4]} />
                   <meshStandardMaterial color="#475569" metalness={0.5} />
                </mesh>
                
                {/* Tube Light - With Rhythm */}
                <mesh position={[0, -0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
                   <cylinderGeometry args={[0.15, 0.15, 10, 8]} />
                   <meshStandardMaterial 
                    color="#ffffff" 
                    emissive="#ffffff" 
                    emissiveIntensity={isActive ? finalEmissive : 0.2} 
                    transparent
                    opacity={isActive ? 1 : 0.3}
                  />
                </mesh>

                {/* 6. DIRECTIONAL LIGHTING (Downward Weighted) */}
                {isActive && (
                  <group>
                    <spotLight
                      position={[0, -1, 0]}
                      angle={0.35}
                      penumbra={1}
                      intensity={2.5 * intensityMult}
                      distance={60}
                      color="#e5e7eb"
                    />
                    
                    {/* 8. ATMOSPHERIC LIGHT FALLOFF (Subtle Haze Cones) */}
                    <mesh position={[0, -10, 0]}>
                       <cylinderGeometry args={[1, 5, 20, 32]} />
                       <meshStandardMaterial 
                        color="#ffffff" 
                        transparent 
                        opacity={0.03 * intensityMult} 
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
        <group key={`primary-beam-${i}`} position={[i * 50 - 700, 26, -20]}>
          <mesh castShadow>
            <boxGeometry args={[3, 6, 320]} />
            <meshStandardMaterial color="#334155" metalness={0.35} roughness={0.55} />
          </mesh>
        </group>
      ))}

      {/* 7. OVERHEAD SILHOUETTES (Reduced weight) */}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh 
          key={`silhouette-${i}`} 
          position={[i * 100 - 700, 34 + Math.random() * 10, -40 + Math.random() * 80]}
        >
          <boxGeometry args={[20 + Math.random() * 20, 12 + Math.random() * 8, 20 + Math.random() * 20]} />
          <meshStandardMaterial color="#1e293b" roughness={1} transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
  );
}