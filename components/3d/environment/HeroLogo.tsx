"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function HeroLogo() {
  const texture = useTexture("/MITR.png");
  const ringRef = useRef<THREE.Mesh>(null!);
  const ghostRef = useRef<THREE.Mesh>(null!);
  const coreRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.2;
    }

    if (ghostRef.current) {
      ghostRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.08);
      const mat = ghostRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.15 + Math.sin(time) * 0.05;
    }

    if (coreRef.current) {
      coreRef.current.position.y = Math.sin(time * 0.5) * 2;
    }
  });

  return (
    <group position={[0, 20, -60]}> 
      <group ref={coreRef}>
        {/* 1. PRIMARY HOLOGRAPHIC LOGO */}
        <mesh>
          <planeGeometry args={[22, 22]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.4} 
            color="#ffffff"
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            alphaTest={0.01}
          />
        </mesh>

        {/* 2. GHOST LAYER */}
        <mesh ref={ghostRef} position={[0, 0, 0.5]}>
          <planeGeometry args={[23, 23]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.18}
            color="#60a5fa"
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* 3. 🛡️ VOLUMETRIC GLOW STACK (Breaks up flatness) */}
        {[-1.5, -0.5, 1, 2].map((z, i) => (
          <mesh key={`glow-${i}`} position={[0, 0, z]}>
            <planeGeometry args={[24 + i, 24 + i]} />
            <meshBasicMaterial
              map={texture}
              transparent
              opacity={0.03}
              color="#93c5fd"
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>

      {/* 4. ROTATING INFRASTRUCTURE RING */}
      <mesh ref={ringRef} position={[0, 0, -2]}>
        <ringGeometry args={[14, 15, 64]} />
        <meshBasicMaterial
          color="#315b9c"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 5. 🛡️ DATA CORE RING (New volumetric element) */}
      <mesh position={[0, 0, 3]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[12, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#60a5fa" 
          emissive="#60a5fa" 
          emissiveIntensity={2} 
          transparent 
          opacity={0.3} 
        />
      </mesh>

      {/* 6. SCAN LINE */}
      <mesh position={[0, 0, 0.2]}>
        <planeGeometry args={[26, 0.1]} />
        <meshBasicMaterial 
          color="#93c5fd" 
          transparent 
          opacity={0.4} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>

      {/* 7. AMBIENT GLOW */}
      <pointLight
        intensity={8}
        distance={100}
        color="#60a5fa"
        decay={2}
      />
    </group>
  );
}
