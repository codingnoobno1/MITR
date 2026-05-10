"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function IntelligenceCore() {
  const groupRef = useRef<THREE.Group>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.5;
      ring1Ref.current.rotation.y = time * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = time * -0.4;
      ring2Ref.current.rotation.x = time * 0.2;
    }
  });

  return (
    <group position={[0, 25, -20]} ref={groupRef}>
      {/* 🛡️ CENTRAL AI REACTOR CORE (Visual Anchor for Dead Space) */}
      <mesh>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial 
          color="#315b9c" 
          emissive="#60a5fa" 
          emissiveIntensity={2} 
          metalness={1} 
          roughness={0} 
        />
      </mesh>

      {/* Volumetric Core Glow */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[4.5, 32, 32]} />
        <meshStandardMaterial 
          color="#60a5fa" 
          transparent 
          opacity={0.1} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>

      {/* ORBITAL RINGS */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[8, 0.1, 16, 100]} />
        <meshStandardMaterial color="#94a3b8" emissive="#60a5fa" emissiveIntensity={1} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[10, 0.05, 16, 100]} />
        <meshStandardMaterial color="#64748b" emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>

      {/* SUSPENDED ENERGY BEAMS (Connecting to floor/ceiling) */}
      {[0, Math.PI].map((rot, i) => (
        <group key={`beam-${i}`} rotation={[rot, 0, 0]}>
           <mesh position={[0, 15, 0]}>
             <cylinderGeometry args={[0.2, 0.2, 20, 8]} />
             <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={5} />
           </mesh>
           {/* Beam Volume */}
           <mesh position={[0, 15, 0]}>
             <cylinderGeometry args={[1, 1, 20, 8]} />
             <meshStandardMaterial color="#60a5fa" transparent opacity={0.05} />
           </mesh>
        </group>
      ))}

      <pointLight intensity={10} distance={100} color="#60a5fa" />
    </group>
  );
}
