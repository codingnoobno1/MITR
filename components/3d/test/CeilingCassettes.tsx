"use client";

import React from "react";
import * as THREE from "three";

export function CeilingCassettes() {
  const WORLD_WIDTH = 420;
  const WORLD_DEPTH = 340;
  const CEILING_Y = 90;

  return (
    <group position={[0, CEILING_Y, 0]}>
      {/* 🛡️ MODULAR CEILING CASSETTES (Grid of sections) */}
      {Array.from({ length: 12 }).map((_, i) => (
        Array.from({ length: 8 }).map((_, j) => {
          const x = i * 36 - 216 + 18;
          const z = j * 42 - 168 + 21;
          return (
            <group key={`cassette-${i}-${j}`} position={[x, 0, z]}>
              {/* 🛡️ LAYER 1: SECTION FRAME */}
              <mesh>
                 <boxGeometry args={[34, 4, 40]} />
                 <meshStandardMaterial color="#111827" roughness={0.8} />
              </mesh>
              
              {/* 🛡️ LAYER 2: RECESSED CENTER */}
              <mesh position={[0, 1.5, 0]}>
                 <boxGeometry args={[30, 2, 36]} />
                 <meshStandardMaterial color="#0f172a" />
              </mesh>

              {/* 🛡️ LAYER 3: SUPPORT RIBS */}
              {[-12, 0, 12].map((xOff, k) => (
                <mesh key={`rib-${k}`} position={[xOff, -0.5, 0]}>
                   <boxGeometry args={[1, 1, 38]} />
                   <meshStandardMaterial color="#1e293b" />
                </mesh>
              ))}

              {/* 🛡️ LAYER 4: EMBEDDED LIGHT TROUGHS */}
              {[-15, 15].map((zOff, k) => (
                <mesh key={`light-${k}`} position={[0, -1.8, zOff]}>
                   <boxGeometry args={[28, 0.2, 1]} />
                   <meshStandardMaterial 
                    color={i % 3 === 0 ? "#60a5fa" : "#f8fafc"} 
                    emissive={i % 3 === 0 ? "#60a5fa" : "#f8fafc"} 
                    emissiveIntensity={1.5} 
                  />
                </mesh>
              ))}

              {/* 🛡️ LAYER 5: ACCESS HATCHES (Micro-detail) */}
              <mesh position={[12, 1.8, 14]}>
                 <boxGeometry args={[4, 0.1, 4]} />
                 <meshStandardMaterial color="#1e293b" />
              </mesh>
            </group>
          );
        })
      ))}

      {/* 🛡️ STRUCTURAL CHANNELS (Deep background superstructure) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`channel-${i}`} position={[0, 4, i * 60 - 150]}>
           <boxGeometry args={[WORLD_WIDTH, 8, 12]} />
           <meshStandardMaterial color="#020617" />
        </mesh>
      ))}
    </group>
  );
}
