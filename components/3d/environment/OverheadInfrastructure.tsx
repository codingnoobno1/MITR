"use client";

import React from "react";
import * as THREE from "three";

export function OverheadInfrastructure() {
  return (
    <group>
      {/* 5. MID-SCALE OVERHEAD SYSTEMS */}
      {Array.from({ length: 6 }).map((_, i) => {
        const x = i * 200 - 500;
        return (
          <group key={`overhead-system-${i}`} position={[x, 28, -20]}>
            {/* HVAC Turbine / Cooling Unit */}
            <group position={[0, 0, -60]}>
               <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
                  <cylinderGeometry args={[4, 4, 3, 32]} />
                  <meshStandardMaterial color="#334155" metalness={0.6} />
               </mesh>
               {/* Turbine blades / detail */}
               <mesh position={[0, 0, 1.6]}>
                  <boxGeometry args={[7, 0.2, 0.2]} />
                  <meshStandardMaterial color="#111827" />
               </mesh>
            </group>

            {/* Suspended Transformer / Power Relay Box */}
            <group position={[50, -2, 40]}>
               <mesh castShadow>
                  <boxGeometry args={[6, 4, 6]} />
                  <meshStandardMaterial color="#1e293b" metalness={0.4} />
               </mesh>
               {/* Cable Router / Junctions */}
               <mesh position={[0, 2.5, 0]}>
                  <cylinderGeometry args={[0.5, 0.5, 2, 8]} />
                  <meshStandardMaterial color="#475569" />
               </mesh>
            </group>

            {/* Maintenance Robotics Rail / Service Arm */}
            <mesh position={[0, -2, 0]}>
               <boxGeometry args={[2, 0.5, 320]} />
               <meshStandardMaterial color="#111827" />
            </mesh>
            <group position={[0, -3, (Math.sin(i) * 100)]}>
               <mesh castShadow>
                  <boxGeometry args={[3, 1.5, 3]} />
                  <meshStandardMaterial color="#315b9c" metalness={0.8} />
               </mesh>
               {/* Tiny Status LED on Robot */}
               <mesh position={[1.51, 0, 0]}>
                  <planeGeometry args={[0.2, 0.1]} />
                  <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={3} />
               </mesh>
            </group>
          </group>
        );
      })}

      {/* 9. OVERHEAD COOLING HUBS & MECHANICAL RELAYS */}
      {Array.from({ length: 4 }).map((_, i) => (
        <group key={`hub-${i}`} position={[i * 300 - 450, 26, 80]}>
           <mesh>
              <boxGeometry args={[12, 1, 12]} />
              <meshStandardMaterial color="#1e293b" />
           </mesh>
           {/* Connection Pipes */}
           {[-4, 4].map((zPos, j) => (
             <mesh key={`pipe-${j}`} position={[0, -0.5, zPos]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 20, 8]} />
                <meshStandardMaterial color="#475569" metalness={1} />
             </mesh>
           ))}
        </group>
      ))}
    </group>
  );
}
