"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ServerModule } from "./ServerModule";

export function TestHardware() {
  const scanLightRef = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    if (scanLightRef.current) {
      const time = state.clock.getElapsedTime();
      // Sweeps from z = -120 to z = 120
      scanLightRef.current.position.z = Math.sin(time * 0.2) * 120;
    }
  });

  return (
    <group>
      {/* 🛡️ MAIN CENTER AISLE ILLUMINATION (Hierarchy Anchor) */}
      <spotLight 
        position={[0, 80, 0]} 
        angle={0.15} 
        penumbra={1} 
        intensity={20} 
        distance={200} 
        color="#e0f2fe" 
        castShadow
      />

      {/* FOREGROUND COMMAND PLATFORM - Industrial Slate */}
      <group position={[0, 0, 120]}>
         <mesh position={[0, 1, 0]}>
            <boxGeometry args={[80, 2, 40]} />
            <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
         </mesh>
         <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[100, 0.8, 60]} />
            <meshStandardMaterial color="#1e293b" metalness={0.4} />
         </mesh>
         <mesh position={[0, 2.05, 0]}>
            <boxGeometry args={[80.4, 0.1, 40.4]} />
            <meshStandardMaterial color="#64748b" emissive="#38bdf8" emissiveIntensity={0.2} />
         </mesh>

         {/* 🛡️ SINGLE CENTRAL COMMAND TERMINAL */}
         <group position={[0, 2, -10]}>
            <mesh position={[0, 2, 0]}>
               <boxGeometry args={[4, 4, 2]} />
               <meshStandardMaterial color="#1e293b" metalness={0.7} />
            </mesh>
            <mesh position={[0, 4.5, 0]} rotation={[-Math.PI / 4, 0, 0]}>
               <boxGeometry args={[20, 1, 10]} />
               <meshStandardMaterial color="#334155" emissive="#2563eb" emissiveIntensity={0.1} />
            </mesh>
         </group>
      </group>

      {/* SERVER FIELD - With Asymmetry */}
      <group position={[0, 0, 0]}>
         {Array.from({ length: 5 }).map((_, row) => (
           <group key={`row-${row}`}>
             {Array.from({ length: 5 }).map((_, col) => {
               // Slight random nudge for asymmetry
               const x = col * 34 - 68 + (Math.sin(row * 1.5 + col) * 1.5); 
               const z = row * 45 - 90 + (Math.cos(col * 2.1 + row) * 2.5);
               const serverId = row * 5 + col;
               return <ServerModule key={`server-${serverId}`} serverId={serverId} position={[x, 0, z]} />;
             })}
             {/* Aisle LED strip - Dimmed */}
             <mesh position={[0, 0.05, row * 45 - 70]}>
               <boxGeometry args={[160, 0.1, 0.2]} />
               <meshStandardMaterial color="#020617" emissive="#38bdf8" emissiveIntensity={0.4} />
             </mesh>
           </group>
         ))}
      </group>

      {/* 💡 ACCENT LIGHTS (Very Selective) */}
      <pointLight position={[0, 20, -100]} intensity={2} distance={150} color="#38bdf8" />
      <pointLight position={[-60, 15, 20]} intensity={1} distance={100} color="#1e40af" />
      <pointLight position={[60, 15, 20]} intensity={1} distance={100} color="#1e40af" />

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
  const streamRef = useRef<THREE.Mesh>(null!);
  const matRef = useRef<THREE.MeshBasicMaterial>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (matRef.current && streamRef.current) {
      matRef.current.opacity = 0.02 + Math.sin(time * 3 + index) * 0.02;
      streamRef.current.position.y = Math.sin(time + index) * 2;
    }
  });

  return (
    <mesh ref={streamRef} position={[(index % 4) * 40 - 60, 0, (index / 4) * 40 - 60]}>
       <cylinderGeometry args={[0.05, 0.05, 100, 8]} />
       <meshBasicMaterial ref={matRef} color="#38bdf8" transparent opacity={0.04} />
    </mesh>
  );
}
