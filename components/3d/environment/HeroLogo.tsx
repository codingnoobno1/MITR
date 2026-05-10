"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function HeroLogo() {
  const texture = useTexture("/MITR.png");
  const ringRef = useRef<THREE.Mesh>(null!);
  const ghostRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotating industrial infrastructure ring
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.15;
    }

    // Subtle holographic pulse
    if (ghostRef.current) {
      ghostRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
      (ghostRef.current.material as THREE.MeshBasicMaterial).opacity = 0.05 + Math.sin(time) * 0.03;
    }
  });

  return (
    <group position={[120, 18, -160]}>
      {/* 1. PRIMARY HOLOGRAPHIC LOGO - Atmospheric & Integrated */}
      <mesh>
        <planeGeometry args={[16, 16]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.16}
          color="#dbeafe"
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          alphaTest={0.08}
        />
      </mesh>

      {/* 2. GHOST LAYER - Volumetric Depth */}
      <mesh ref={ghostRef} position={[0, 0, 0.5]}>
        <planeGeometry args={[16.5, 16.5]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.05}
          color="#60a5fa"
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. ROTATING INFRASTRUCTURE RING - Load-bearing context */}
      <mesh ref={ringRef} position={[0, 0, -1]}>
        <ringGeometry args={[10, 11, 64]} />
        <meshBasicMaterial
          color="#315b9c"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 4. SCAN LINE - Operational complexity indicator */}
      <mesh position={[0, 0, 0.2]}>
        <planeGeometry args={[18, 0.05]} />
        <meshBasicMaterial 
          color="#93c5fd" 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>

      {/* 5. AMBIENT GLOW - Subtle integration lighting */}
      <pointLight
        intensity={2.2}
        distance={45}
        color="#60a5fa"
        decay={2}
      />
    </group>
  );
}
