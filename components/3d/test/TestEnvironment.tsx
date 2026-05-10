"use client";

import React from "react";
import * as THREE from "three";

export function TestEnvironment() {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <fogExp2 attach="fog" args={["#020617", 0.002]} />

      {/* 1. GIANT BLACKOUT ENVELOPE (The 'Proper Fix' from lesson 1) */}
      <mesh position={[0, 100, -20]}>
        <boxGeometry args={[2500, 200, 800]} />
        <meshBasicMaterial color="#000000" side={THREE.BackSide} />
      </mesh>

      {/* 2. CINEMATIC LIGHTING HIERARCHY */}
      <ambientLight intensity={0.15} color="#94a3b8" />
      
      {/* Primary Key Light */}
      <directionalLight 
        position={[100, 150, 50]} 
        intensity={1.5} 
        color="#f8fafc" 
        castShadow 
      />

      {/* Global Bounce */}
      <hemisphereLight intensity={0.4} color="#f1f5f9" groundColor="#0f172a" />

      {/* Rhythmic Corridor Lighting */}
      {[-120, -40, 40, 120].map((x, i) => (
        <group key={`light-${i}`} position={[x, 40, -30]}>
          <pointLight 
            intensity={4} 
            distance={180} 
            decay={2} 
            color={i % 2 === 0 ? "#60a5fa" : "#e2e8f0"} 
          />
          {/* Volumetric Fake Light Beam */}
          <mesh position={[0, -20, 0]}>
            <cylinderGeometry args={[1, 15, 40, 32]} />
            <meshBasicMaterial 
              color={i % 2 === 0 ? "#60a5fa" : "#ffffff"} 
              transparent 
              opacity={0.02} 
              depthWrite={false} 
            />
          </mesh>
        </group>
      ))}

      {/* Hero Focus Light (Targeting the center) */}
      <spotLight
        position={[0, 80, -40]}
        angle={0.25}
        penumbra={1}
        intensity={12}
        distance={250}
        color="#ffffff"
        castShadow
      />
    </>
  );
}
