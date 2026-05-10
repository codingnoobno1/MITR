"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";

export function MITRCoreSystem() {
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const particleGroupRef = useRef<THREE.Group>(null!);
  const texture = useTexture("/MITR.png");

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ring1Ref.current) ring1Ref.current.rotation.z = time * 0.2;
    if (ring2Ref.current) ring2Ref.current.rotation.z = time * -0.15;
    if (ring3Ref.current) ring3Ref.current.rotation.z = time * 0.1;
    if (particleGroupRef.current) particleGroupRef.current.rotation.y = time * 0.05;
  });

  return (
    <group position={[0, 0, -120]}>
      {/* 🛡️ MASSIVE CENTRAL PLATFORM (Concentric Layers) */}
      <group position={[0, 0, 0]}>
        {/* Layer 1: Core Base (Radius 18) */}
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[18, 20, 2, 64]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Layer 2: Mid Deck (Radius 28) */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[28, 30, 0.8, 64]} />
          <meshStandardMaterial color="#111827" metalness={0.6} />
        </mesh>
        
        {/* Layer 3: Outer Foundation (Radius 40) */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[40, 42, 0.2, 64]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>

        {/* Floor Glow Rings */}
        {[20, 32, 44].map((r, i) => (
          <mesh key={`floor-glow-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.1, 0]}>
             <ringGeometry args={[r, r + 0.5, 64]} />
             <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
          </mesh>
        ))}
      </group>

      {/* 🛡️ PROJECTION EMITTERS (Hydraulic Pillars) */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((rot, i) => (
        <group key={`emitter-${i}`} rotation={[0, rot, 0]}>
           <mesh position={[24, 6, 0]}>
              <boxGeometry args={[2, 12, 2]} />
              <meshStandardMaterial color="#334155" metalness={0.8} />
           </mesh>
           <mesh position={[24, 12, 0]}>
              <cylinderGeometry args={[0.5, 1, 1, 16]} />
              <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={5} />
           </mesh>
           {/* Vertical Energy Beam */}
           <mesh position={[24, 40, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 80, 8]} />
              <meshBasicMaterial color="#60a5fa" transparent opacity={0.15} />
           </mesh>
        </group>
      ))}

      {/* 🛡️ KINETIC ORBITAL RINGS */}
      <group position={[0, 24, 0]}>
        <mesh ref={ring1Ref}>
           <torusGeometry args={[22, 0.2, 16, 100]} />
           <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={2} />
        </mesh>
        <mesh ref={ring2Ref} rotation={[Math.PI / 2.5, 0, 0]}>
           <torusGeometry args={[28, 0.15, 16, 100]} />
           <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1.5} />
        </mesh>
        <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, 0]}>
           <torusGeometry args={[34, 0.1, 16, 100]} />
           <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* 🛡️ MITR HOLOGRAPHIC CORE */}
      <group position={[0, 24, 0]}>
        <Float speed={4} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh>
             <planeGeometry args={[32, 32]} />
             <meshBasicMaterial 
              map={texture} 
              transparent 
              opacity={0.18} 
              color="#3b82f6" 
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              side={THREE.DoubleSide}
            />
          </mesh>
        </Float>

        {/* Telemetry Orbits (Particle projection) */}
        <group ref={particleGroupRef}>
           {Array.from({ length: 40 }).map((_, i) => {
             const angle = (i / 40) * Math.PI * 2;
             const r = 20 + Math.sin(i * 1.5) * 5;
             return (
               <mesh key={`p-${i}`} position={[Math.cos(angle) * r, Math.sin(angle * 2) * 5, Math.sin(angle) * r]}>
                  <sphereGeometry args={[0.1, 8, 8]} />
                  <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
               </mesh>
             );
           })}
        </group>
      </group>

      <pointLight position={[0, 24, 0]} intensity={20} distance={150} color="#60a5fa" />
    </group>
  );
}
