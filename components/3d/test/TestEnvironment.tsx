"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
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
      {/* 🌤️ HIGH-KEY CLINICAL ENVIRONMENT */}
      <color attach="background" args={["#f8fafc"]} />
      
      {/* Clearer White Fog */}
      <fogExp2 attach="fog" args={["#f1f5f9", 0.0004]} />

      {/* 💡 GLOBAL ILLUMINATION BLUEPRINT */}
      {/* 1. PRIMARY LIGHT (Strong Sunlight Feel) */}
      <directionalLight 
        position={[20, 100, 40]} 
        intensity={3.5} 
        color="#ffffff" 
        castShadow 
        shadow-mapSize={[2048, 2048]}
      />

      {/* 2. HIGH AMBIENT FILL */}
      <ambientLight intensity={0.35} color="#f8fafc" />
      
      {/* 🏙️ GLOBAL REFLECTION SYSTEM */}
      <Environment preset="city" />
      
      {/* 3. SKY/GROUND BOUNCE */}
      <hemisphereLight 
        intensity={0.6} 
        color="#e0f2fe" 
        groundColor="#f1f5f9" 
      />

      {/* 4. FLUORESCENT TROUGH LIGHTS */}
      {[-80, -40, 0, 40, 80].map((z, i) => (
        <rectAreaLight
          key={`ceiling-light-${i}`}
          position={[0, 88, z]}
          width={400}
          height={2}
          intensity={2.5}
          rotation={[-Math.PI / 2, 0, 0]}
          color="#ffffff"
        />
      ))}

      {/* 5. SIDE WALL BLUE ACCENT LIGHTS */}
      {[-200, 200].map((x, i) => (
        <group key={`side-lights-${i}`}>
          {[-120, -40, 40, 120].map((z, j) => (
            <pointLight
              key={`blue-light-${i}-${j}`}
              position={[x, 40, z]}
              intensity={10}
              distance={100}
              color="#38bdf8"
            />
          ))}
        </group>
      ))}

      {/* 🌬️ ATMOSPHERIC PARTICLES (Subtle white dust) */}
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
          size={0.12}
          color="#ffffff"
          transparent
          opacity={0.03}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 🌬️ VOLUMETRIC LIGHT SHAFTS */}
      {[-80, -40, 0, 40, 80].map((z, i) => (
        <mesh key={`volumetric-${i}`} position={[0, 44, z]}>
           <boxGeometry args={[400, 88, 4]} />
           <meshBasicMaterial color="#e0f2fe" transparent opacity={0.015} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      ))}
    </>
  );
}
