"use client";

import React from "react";
import * as THREE from "three";
import { ServerModule } from "./ServerModule";
import { MITRCoreSystem } from "./MITRCoreSystem";

export function TestHardware() {
  return (
    <group>
      {/* FOREGROUND COMMAND PLATFORM */}
      <group position={[0, 0, 120]}>
         <mesh position={[0, 1, 0]}>
            <boxGeometry args={[80, 2, 40]} />
            <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} />
         </mesh>
         <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[100, 0.8, 60]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.4} />
         </mesh>
         <mesh position={[0, 2.05, 0]}>
            <boxGeometry args={[80.4, 0.1, 40.4]} />
            <meshStandardMaterial color="#ffffff" emissive="#e0f2fe" emissiveIntensity={2} />
         </mesh>

         {/* 🛡️ SINGLE CENTRAL COMMAND TERMINAL */}
         <group position={[0, 2, -10]}>
            <mesh position={[0, 2, 0]}>
               <boxGeometry args={[4, 4, 2]} />
               <meshStandardMaterial color="#cbd5e1" metalness={0.7} />
            </mesh>
            <mesh position={[0, 4.5, 0]} rotation={[-Math.PI / 4, 0, 0]}>
               <boxGeometry args={[20, 1, 10]} />
               <meshStandardMaterial color="#f1f5f9" emissive="#2563eb" emissiveIntensity={0.3} />
            </mesh>
            <mesh position={[0, 5.2, -0.1]} rotation={[-Math.PI / 4, 0, 0]}>
               <planeGeometry args={[18, 8]} />
               <meshBasicMaterial color="#2563eb" transparent opacity={0.3} />
            </mesh>
         </group>

         <group position={[0, 4.5, -18]}>
            <mesh>
               <boxGeometry args={[80, 0.2, 0.2]} />
               <meshStandardMaterial color="#ffffff" metalness={0.9} />
            </mesh>
            <mesh position={[0, -1.5, 0]}>
               <boxGeometry args={[80, 3, 0.1]} />
               <meshBasicMaterial color="#e0f2fe" transparent opacity={0.08} />
            </mesh>
         </group>
      </group>

      {/* SERVER FIELD */}
      <group position={[0, 0, 0]}>
         {Array.from({ length: 5 }).map((_, row) => (
           <group key={`row-${row}`}>
             {Array.from({ length: 5 }).map((_, col) => {
               const x = col * 32 - 64; // Spaced out
               const z = row * 40 - 80;
               const serverId = row * 5 + col;
               return <ServerModule key={`server-${serverId}`} serverId={serverId} position={[x, 0, z]} />;
             })}
             {/* Aisle LED strip */}
             <mesh position={[0, 0.05, row * 40 - 60]}>
               <boxGeometry args={[160, 0.1, 0.4]} />
               <meshStandardMaterial color="#ffffff" emissive="#38bdf8" emissiveIntensity={3} />
             </mesh>
           </group>
         ))}
      </group>

      <MITRCoreSystem />

      {/* DATA STREAMS */}
      <group position={[0, 40, -40]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <DataStream key={`stream-${i}`} index={i} />
        ))}
      </group>
    </group>
  );
}

function DataStream({ index }: { index: number }) {
  return (
    <mesh position={[(index % 4) * 40 - 60, 0, (index / 4) * 40 - 60]}>
       <cylinderGeometry args={[0.05, 0.05, 100, 8]} />
       <meshBasicMaterial color="#38bdf8" transparent opacity={0.04} />
    </mesh>
  );
}
