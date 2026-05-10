"use client";

import React from "react";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";

export function HeroLogo() {
  const logoTex = useTexture("/MITR.png");

  return (
    <group position={[0, 20, -100]}>
      {/* 1. MAIN HOLOGRAPHIC LOGO */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial 
            map={logoTex} 
            transparent 
            opacity={0.8} 
            emissive="#ffffff"
            emissiveIntensity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>

      {/* 2. LOGO AMBIENT GLOW */}
      <pointLight 
        position={[0, 0, 5]} 
        intensity={10} 
        color="#3b82f6" 
        distance={80} 
      />

      {/* 3. STRUCTURAL FRAME (Subtle) */}
      <mesh position={[0, 0, -2]}>
        <ringGeometry args={[22, 24, 32]} />
        <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={2} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
