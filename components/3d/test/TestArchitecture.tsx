"use client";

import React from "react";
import * as THREE from "three";

export function TestArchitecture() {
  const WORLD_WIDTH = 420;
  const WORLD_HEIGHT = 120;
  const WORLD_DEPTH = 340;

  return (
    <group>
      {/* 1. 🛡️ MASTER FLOOR SYSTEM */}
      <group position={[0, -0.5, 0]}>
        {/* Base Floor Plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[WORLD_WIDTH, WORLD_DEPTH]} />
          <meshStandardMaterial 
            color="#1e293b" 
            roughness={0.82} 
            metalness={0.22} 
          />
        </mesh>

        {/* 🧱 FLOOR TILE SYSTEM (35 x 28 grid of 12x12 tiles) */}
        {Array.from({ length: 35 }).map((_, i) => (
          Array.from({ length: 28 }).map((_, j) => {
            const x = i * 12.4 - (35 * 12.4) / 2;
            const z = j * 12.4 - (28 * 12.4) / 2;
            return (
              <group key={`tile-${i}-${j}`} position={[x, 0.05, z]}>
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                   <planeGeometry args={[12, 12]} />
                   <meshStandardMaterial color="#1e293b" roughness={0.7} />
                </mesh>
                {/* 💡 FLOOR LIGHT STRIPS (Blue seams) */}
                <mesh position={[6.2, 0.01, 0]}>
                   <boxGeometry args={[0.08, 0.05, 12.4]} />
                   <meshBasicMaterial color="#60a5fa" transparent opacity={0.25} />
                </mesh>
                <mesh position={[0, 0.01, 6.2]}>
                   <boxGeometry args={[12.4, 0.05, 0.08]} />
                   <meshBasicMaterial color="#60a5fa" transparent opacity={0.25} />
                </mesh>
              </group>
            );
          })
        ))}
      </group>

      {/* 2. 🛡️ MASTER SIDE WALL SYSTEM (z = ±160) */}
      {[-160, 160].map((zPos, i) => (
        <group key={`wall-group-${i}`} position={[0, WORLD_HEIGHT / 2, zPos]}>
          {/* Main Wall Hull (layered) */}
          <mesh>
            <boxGeometry args={[WORLD_WIDTH, WORLD_HEIGHT, 8]} />
            <meshStandardMaterial color="#111827" roughness={0.9} />
          </mesh>

          {/* WALL SEGMENTS (Every 24 units) */}
          {Array.from({ length: Math.floor(WORLD_WIDTH / 24) }).map((_, j) => (
            <group key={`segment-${j}`} position={[j * 24 - WORLD_WIDTH / 2, 0, i === 0 ? 4.1 : -4.1]}>
               {/* Recessed Panel Layer 1 */}
               <mesh>
                  <boxGeometry args={[22, WORLD_HEIGHT - 10, 1]} />
                  <meshStandardMaterial color="#0f172a" />
               </mesh>
               {/* Detail Layer 2 (Maintenance Hatch) */}
               <mesh position={[0, -30, 0.5]}>
                  <boxGeometry args={[18, 20, 0.5]} />
                  <meshStandardMaterial color="#1e293b" />
               </mesh>
               {/* Telemetry Screens */}
               <mesh position={[0, 20, 0.6]}>
                  <planeGeometry args={[16, 12]} />
                  <meshStandardMaterial color="#0f172a" emissive="#3b82f6" emissiveIntensity={0.2} />
               </mesh>
            </group>
          ))}

          {/* LOWER SERVER WALLS (Embedded towers 8x24x8) */}
          {Array.from({ length: 15 }).map((_, j) => (
            <mesh key={`lower-server-${j}`} position={[j * 28 - WORLD_WIDTH / 2, -40, i === 0 ? 6 : -6]}>
               <boxGeometry args={[8, 24, 8]} />
               <meshStandardMaterial color="#0b1120" metalness={0.5} />
            </mesh>
          ))}
        </group>
      ))}

      {/* 3. 🛡️ UPPER CATWALKS (y = 48) */}
      {[-140, 90].map((zPos, i) => (
        <group key={`catwalk-${i}`} position={[0, 48, zPos]}>
           {/* Walkway Base */}
           <mesh>
              <boxGeometry args={[WORLD_WIDTH, 2, 14]} />
              <meshStandardMaterial color="#0f172a" />
           </mesh>
           {/* Railings (Height 4) */}
           {[-6.8, 6.8].map((xOff, j) => (
             <mesh key={`rail-${j}`} position={[0, 3, xOff]}>
                <boxGeometry args={[WORLD_WIDTH, 0.2, 0.2]} />
                <meshStandardMaterial color="#475569" />
             </mesh>
           ))}
           {/* Support Braces (Every 40 units) */}
           {Array.from({ length: 10 }).map((_, j) => (
             <mesh key={`brace-${j}`} position={[j * 40 - 200, -5, 0]}>
                <boxGeometry args={[2, 10, 12]} />
                <meshStandardMaterial color="#334155" />
             </mesh>
           ))}
        </group>
      ))}

      {/* 4. 🛡️ CEILING SYSTEM (y = 90) */}
      <group position={[0, 90, 0]}>
        {/* Layer 1: Main Industrial Plates */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[WORLD_WIDTH, WORLD_DEPTH]} />
          <meshStandardMaterial color="#111827" roughness={0.9} />
        </mesh>

        {/* Layer 2: Support Beams (Every 20 units) */}
        {Array.from({ length: Math.floor(WORLD_WIDTH / 20) }).map((_, i) => (
           <mesh key={`beam-${i}`} position={[i * 20 - WORLD_WIDTH / 2, -2, 0]}>
              <boxGeometry args={[4, 2, WORLD_DEPTH]} />
              <meshStandardMaterial color="#1e293b" />
           </mesh>
        ))}

        {/* Layer 3: Lighting Troughs (5 parallel rows) */}
        {[-80, -40, 0, 40, 80].map((z, i) => (
          <group key={`light-row-${i}`} position={[0, -2.5, z]}>
             {Array.from({ length: 15 }).map((_, j) => (
               <mesh key={`light-${j}`} position={[j * 26 - 180, 0, 0]}>
                  <boxGeometry args={[16, 0.4, 1]} />
                  <meshStandardMaterial 
                    color={j % 5 === 0 ? "#60a5fa" : "#f8fafc"} 
                    emissive={j % 5 === 0 ? "#60a5fa" : "#f8fafc"} 
                    emissiveIntensity={1.5} 
                  />
               </mesh>
             ))}
          </group>
        ))}
      </group>

      {/* 5. 🏢 BRANDING PANELS (KARYA / SANKALAP) */}
      {/* Left: KARYA */}
      <group position={[-150, 52, -100]}>
         <mesh>
            <planeGeometry args={[40, 24]} />
            <meshStandardMaterial color="#0b1120" emissive="#22d3ee" emissiveIntensity={0.2} transparent opacity={0.9} />
         </mesh>
         {/* Holographic Frame */}
         <mesh position={[0, 0, 0.1]}>
            <boxGeometry args={[42, 26, 0.1]} />
            <meshBasicMaterial color="#22d3ee" wireframe />
         </mesh>
      </group>

      {/* Right: SANKALAP */}
      <group position={[150, 52, -100]}>
         <mesh>
            <planeGeometry args={[40, 24]} />
            <meshStandardMaterial color="#0b1120" emissive="#60a5fa" emissiveIntensity={0.2} transparent opacity={0.9} />
         </mesh>
         {/* Holographic Frame */}
         <mesh position={[0, 0, 0.1]}>
            <boxGeometry args={[42, 26, 0.1]} />
            <meshBasicMaterial color="#60a5fa" wireframe />
         </mesh>
      </group>
    </group>
  );
}
