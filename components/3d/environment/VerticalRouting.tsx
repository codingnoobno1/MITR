"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function VerticalRouting() {
  const pulseRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (pulseRef.current) {
      pulseRef.current.position.y = (Math.sin(state.clock.getElapsedTime() * 2) * 12) + 12;
    }
  });

  return (
    <group>
      {/* 4. VERTICAL LIGHT STRIPS & PULSE CHANNELS */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = i * 160 - 560;
        return (
          <group key={`v-route-${i}`} position={[x, 0, -144]}>
            {/* Embedded Wall Light Strip */}
            <mesh position={[0, 12, 0]}>
               <planeGeometry args={[0.2, 24]} />
               <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={1.5} transparent opacity={0.8} />
            </mesh>
            
            {/* Animated Power Pulse Channel */}
            <mesh position={[0.5, 0, 0.1]} ref={i === 0 ? pulseRef : null}>
               <sphereGeometry args={[0.2, 16, 16]} />
               <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={5} />
            </mesh>

            {/* Recessed Channel Detail */}
            <mesh position={[0, 12, -0.5]}>
               <boxGeometry args={[1.5, 24, 1]} />
               <meshStandardMaterial color="#0b1120" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
