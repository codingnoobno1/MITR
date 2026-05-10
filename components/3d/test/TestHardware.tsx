"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";

export function TestHardware() {
  return (
    <group>
      {/* 1. 🛡️ FOREGROUND COMMAND PLATFORM (z = 110) */}
      <group position={[0, 0, 110]}>
         {/* Command Bridge Base */}
         <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[60, 1, 40]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} />
         </mesh>
         {/* Railing */}
         <mesh position={[0, 3, -18]}>
            <boxGeometry args={[60, 0.2, 0.2]} />
            <meshStandardMaterial color="#475569" />
         </mesh>
         {/* Control Terminal */}
         <mesh position={[0, 6, -10]} rotation={[-Math.PI / 6, 0, 0]}>
            <boxGeometry args={[12, 1, 8]} />
            <meshStandardMaterial color="#0f172a" emissive="#3b82f6" emissiveIntensity={0.2} />
         </mesh>
      </group>

      {/* 2. 🛡️ SERVER FIELD (z = 40 → -100, 5x5 Grid) */}
      <group position={[0, 0, 0]}>
         {Array.from({ length: 5 }).map((_, row) => (
           Array.from({ length: 5 }).map((_, col) => {
             const x = col * 18 - 36; // Spacing 18, Origin -36
             const z = row * 20 - 40;  // Spacing 20, Range 40 to -100
             return <ServerUnit key={`server-${row}-${col}`} position={[x, 0, z]} />;
           })
         ))}
      </group>

      {/* 3. 🛡️ MITR CORE (0, 18, -120) */}
      <group position={[0, 18, -120]}>
         <MITRCore />
      </group>
    </group>
  );
}

function ServerUnit({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* LAYER 1: OUTER SHELL (10 x 14 x 8) */}
      <mesh position={[0, 7, 0]}>
         <boxGeometry args={[10, 14, 8]} />
         <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>

      {/* LAYER 2: INNER FRAME (Inset 0.3) */}
      <mesh position={[0, 7, 0]}>
         <boxGeometry args={[9.4, 13.4, 8.2]} />
         <meshStandardMaterial color="#1e293b" metalness={0.5} />
      </mesh>

      {/* LAYER 3: SERVER BAYS (8 horizontal slots) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <group key={`bay-${i}`} position={[0, i * 1.3 + 2, 4.2]}>
          <mesh>
             <boxGeometry args={[8, 0.8, 0.6]} />
             <meshStandardMaterial color="#0f172a" />
          </mesh>
          {/* LAYER 4: LED STRIPS (Tiny emissive nodes) */}
          {Array.from({ length: 3 }).map((_, j) => (
            <mesh key={`led-${j}`} position={[j * 2 - 2, 0, 0.35]}>
               <planeGeometry args={[0.2, 0.2]} />
               <meshBasicMaterial 
                color="#3b82f6" 
                transparent 
                opacity={Math.random() > 0.2 ? 1 : 0.2} 
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function MITRCore() {
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const logoTexture = useTexture("/MITR.png");

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ring1Ref.current) ring1Ref.current.rotation.y = time * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.x = time * -0.3;
    if (ring3Ref.current) ring3Ref.current.rotation.z = time * 0.2;
  });

  return (
    <group>
      {/* BASE PLATFORM */}
      <mesh position={[0, -18, 0]}>
         <cylinderGeometry args={[18, 18, 2, 64]} />
         <meshStandardMaterial color="#1e293b" metalness={1} roughness={0} />
      </mesh>

      {/* INNER RINGS (Sizes: 22, 28, 34) */}
      <mesh ref={ring1Ref}>
         <torusGeometry args={[11, 0.2, 16, 100]} />
         <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={2} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
         <torusGeometry args={[14, 0.15, 16, 100]} />
         <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1.5} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 2, 0]}>
         <torusGeometry args={[17, 0.1, 16, 100]} />
         <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} />
      </mesh>

      {/* 🛡️ MITR LOGO HOLOGRAM (Using additive blending and alpha) */}
      <Float speed={4} rotationIntensity={0.1} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial 
            map={logoTexture} 
            transparent 
            opacity={0.18} 
            color="#3b82f6" 
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>

      {/* Holographic Projection Base */}
      <mesh position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]}>
         <circleGeometry args={[12, 32]} />
         <meshBasicMaterial color="#3b82f6" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}
