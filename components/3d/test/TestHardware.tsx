"use client";

import React from "react";
import * as THREE from "three";
import { ServerModule } from "./ServerModule";
import { MITRCoreSystem } from "./MITRCoreSystem";

export function TestHardware() {
  return (
    <group>
      {/* 🛡️ FOREGROUND COMMAND PLATFORM (z = 120) */}
      <group position={[0, 0, 120]}>
         {/* Command Bridge Base (Layered) */}
         <mesh position={[0, 1, 0]}>
            <boxGeometry args={[80, 2, 40]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
         </mesh>
         <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[100, 0.8, 60]} />
            <meshStandardMaterial color="#111827" />
         </mesh>

         {/* 🛡️ COMMAND TERMINALS (Detailed) */}
         {[-15, 0, 15].map((x, i) => (
           <group key={`terminal-${i}`} position={[x, 2, -10]}>
              <mesh position={[0, 2, 0]}>
                 <boxGeometry args={[1, 4, 1]} />
                 <meshStandardMaterial color="#334155" />
              </mesh>
              <mesh position={[0, 4, 0]} rotation={[-Math.PI / 4, 0, 0]}>
                 <boxGeometry args={[12, 1, 8]} />
                 <meshStandardMaterial color="#0b1120" emissive="#3b82f6" emissiveIntensity={0.5} />
              </mesh>
              <mesh position={[0, 4.6, -0.1]} rotation={[-Math.PI / 4, 0, 0]}>
                 <planeGeometry args={[10, 6]} />
                 <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} />
              </mesh>
           </group>
         ))}

         {/* 🛡️ PLATFORM RAILINGS */}
         <group position={[0, 4.5, -18]}>
            <mesh>
               <boxGeometry args={[80, 0.2, 0.2]} />
               <meshStandardMaterial color="#475569" />
            </mesh>
            <mesh position={[0, -1.5, 0]}>
               <boxGeometry args={[80, 3, 0.1]} />
               <meshStandardMaterial color="#60a5fa" transparent opacity={0.1} />
            </mesh>
         </group>
      </group>

      {/* 🛡️ MASSIVE SERVER FIELD (z = 40 → -100) */}
      <group position={[0, 0, 0]}>
         {Array.from({ length: 5 }).map((_, row) => (
           Array.from({ length: 5 }).map((_, col) => {
             const x = col * 24 - 48; 
             const z = row * 30 - 60;  
             const serverId = row * 5 + col; // Unique ID per server
             return <ServerModule key={`server-${serverId}`} serverId={serverId} position={[x, 0, z]} />;
           })
         ))}
      </group>

      {/* 🛡️ CENTRAL INFRASTRUCTURE MONUMENT */}
      <MITRCoreSystem />
      
      {/* 🛡️ DATA STREAM OVERLAYS */}
      <group position={[0, 40, -40]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <DataStream key={`stream-${i}`} index={i} />
        ))}
      </group>
    </group>
  );
}

function DataStream({ index }: { index: number }) {
  const meshRef = React.useRef<THREE.Mesh>(null!);
  
  return (
    <mesh 
      ref={meshRef} 
      position={[(index % 4) * 40 - 60, 0, (index / 4) * 40 - 60]}
    >
       <cylinderGeometry args={[0.05, 0.05, 100, 8]} />
       <meshBasicMaterial color="#60a5fa" transparent opacity={0.05} />
    </mesh>
  );
}
