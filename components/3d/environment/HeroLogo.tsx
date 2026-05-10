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
      ringRef.current.rotation.z = time * 0.2;
    }

    // Subtle holographic pulse
    if (ghostRef.current) {
      ghostRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.08);
      const mat = ghostRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.12 + Math.sin(time) * 0.05;
    }
  });

  return (
    <group position={[80, 25, -60]}>
      {/* 1. PRIMARY HOLOGRAPHIC LOGO - Integrated into taller room */}
      <mesh>
        <planeGeometry args={[24, 24]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.3}
          color="#ffffff"
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          alphaTest={0.01}
        />
      </mesh>

      {/* 2. GHOST LAYER - Volumetric Depth */}
      <mesh ref={ghostRef} position={[0, 0, 0.5]}>
        <planeGeometry args={[25, 25]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.15}
          color="#60a5fa"
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. ROTATING INFRASTRUCTURE RING */}
      <mesh ref={ringRef} position={[0, 0, -1]}>
        <ringGeometry args={[14, 15, 64]} />
        <meshBasicMaterial
          color="#315b9c"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 4. SCAN LINE */}
      <mesh position={[0, 0, 0.2]}>
        <planeGeometry args={[28, 0.1]} />
        <meshBasicMaterial 
          color="#93c5fd" 
          transparent 
          opacity={0.4} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>

      {/* 5. AMBIENT GLOW */}
      <pointLight
        intensity={4}
        distance={80}
        color="#60a5fa"
        decay={2}
      />
    </group>
  );
}
