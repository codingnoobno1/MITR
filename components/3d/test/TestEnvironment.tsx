"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function TestEnvironment() {
  const pointsRef = useRef<THREE.Points>(null!);

  const particles = useMemo(() => {
    const temp = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 500;
      temp[i * 3 + 1] = Math.random() * 120;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 400;
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.position.y = Math.sin(time * 0.1) * 2;
    }
  });

  return (
    <>
      <color attach="background" args={["#020617"]} />
      
      {/* 🌬️ MASTER FOG BLUEPRINT */}
      <fogExp2 attach="fog" args={["#0f172a", 0.0007]} />

      {/* 🌑 MASTER BLACKOUT ENVELOPE */}
      <mesh position={[0, 60, -20]}>
        <boxGeometry args={[600, 160, 500]} />
        <meshBasicMaterial color="#000000" side={THREE.BackSide} />
      </mesh>

      {/* 💡 MASTER LIGHTING BLUEPRINT */}
      <directionalLight 
        position={[0, 80, 40]} 
        intensity={2.2} 
        color="#f8fafc" 
        castShadow 
      />

      <ambientLight intensity={0.1} color="#94a3b8" />
      <hemisphereLight intensity={0.3} color="#f1f5f9" groundColor="#0f172a" />

      {[-80, 80].map((x, i) => (
        <rectAreaLight
          key={`aisle-light-${i}`}
          position={[x, 58, -30]}
          width={10}
          height={200}
          intensity={3}
          rotation={[-Math.PI / 2, 0, 0]}
          color="#60a5fa"
        />
      ))}

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#94a3b8"
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}
