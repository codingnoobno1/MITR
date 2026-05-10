"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AIOrchestratorChamber() {
  const coreRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group position={[0, 0, -180]}>
      {/* 9. AI CORE HERO LIGHTING */}
      <spotLight
        position={[0, 60, 0]}
        intensity={2.2}
        color="#dbeafe"
        distance={150}
        angle={0.4}
        penumbra={1}
      />
      <pointLight position={[0, -20, 0]} intensity={2} color="#315b9c" distance={60} />

      {/* Massive Spherical Containment Structure */}
      <mesh>
        <sphereGeometry args={[40, 32, 32]} />
        <meshStandardMaterial color="#0f1724" transparent opacity={0.4} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Internal Orchestration Core */}
      <group ref={coreRef}>
        <mesh>
           <octahedronGeometry args={[15, 0]} />
           <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={3} />
        </mesh>
        {/* Orbital Data Rings - opacity rule applied */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={`ring-${i}`} rotation={[i * Math.PI / 3, 0, 0]}>
             <torusGeometry args={[25, 0.2, 16, 100]} />
             <meshStandardMaterial 
              color="#315b9c" 
              emissive="#315b9c" 
              emissiveIntensity={1.5} 
              transparent 
              opacity={0.35} 
            />
          </mesh>
        ))}
      </group>

      {/* Volumetric Light Beam */}
      <mesh position={[0, 50, 0]}>
         <cylinderGeometry args={[5, 10, 100, 32]} />
         <meshStandardMaterial color="#60a5fa" transparent opacity={0.1} emissive="#60a5fa" emissiveIntensity={1} />
      </mesh>

      {/* Support Bracing - Value separation */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`brace-${i}`} rotation={[0, i * Math.PI / 4, 0]} position={[0, 0, 0]}>
           <boxGeometry args={[1, 100, 100]} />
           <meshStandardMaterial color="#1e293b" transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}
