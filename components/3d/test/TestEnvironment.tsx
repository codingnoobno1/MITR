"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

export function TestEnvironment() {
  const pointsRef = useRef<THREE.Points>(null!);

  const particles = useMemo(() => {
    const temp = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
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
      {/* 🌑 DARK THEME ENVIRONMENT */}
      <color attach="background" args={["#020617"]} />
      
      {/* Dense Cinematic Fog */}
      <fogExp2 attach="fog" args={["#020617", 0.0025]} />

      {/* 💡 GLOBAL ILLUMINATION BLUEPRINT */}
      {/* 1. PRIMARY LIGHT (Very Subtle Blue Rim) */}
      <directionalLight 
        position={[20, 100, 40]} 
        intensity={0.2} 
        color="#38bdf8" 
      />

      {/* 2. MINIMAL AMBIENT FILL */}
      <ambientLight intensity={0.02} color="#0f172a" />
      
      {/* 🏙️ GLOBAL REFLECTION SYSTEM */}
      <Environment preset="city" />
      
      {/* 3. SKY/GROUND BOUNCE (Subtle Deep Blue) */}
      <hemisphereLight 
        intensity={0.05} 
        color="#1e3a8a" 
        groundColor="#020617" 
      />

      {/* 4. FLUORESCENT TROUGH LIGHTS (Dimmed) */}
      {[-80, -40, 0, 40, 80].map((z, i) => (
        <rectAreaLight
          key={`ceiling-light-${i}`}
          position={[0, 88, z]}
          width={400}
          height={2}
          intensity={0.2}
          rotation={[-Math.PI / 2, 0, 0]}
          color="#1e40af"
        />
      ))}

      {/* 5. SIDE WALL BLUE ACCENT LIGHTS (Mood only) */}
      {[-200, 200].map((x, i) => (
        <group key={`side-lights-${i}`}>
          {[-120, -40, 40, 120].map((z, j) => (
            <pointLight
              key={`blue-light-${i}-${j}`}
              position={[x, 40, z]}
              intensity={1}
              distance={60}
              color="#38bdf8"
            />
          ))}
        </group>
      ))}

      {/* 🌬️ ATMOSPHERIC PARTICLES (Subtle Haze) */}
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
          size={0.08}
          color="#94a3b8"
          transparent
          opacity={0.02}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 🌬️ SELECTIVE ATMOSPHERIC SHAFTS (Center Aisle Only) */}
      {[-40, 40].map((z, i) => (
        <mesh key={`volumetric-${i}`} position={[0, 44, z]}>
           <cylinderGeometry args={[10, 30, 120, 32]} />
           <meshBasicMaterial color="#38bdf8" transparent opacity={0.005} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      ))}
    </>
  );
}
