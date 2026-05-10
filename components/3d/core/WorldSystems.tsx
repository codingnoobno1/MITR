"use client";

import React from "react";
import * as THREE from "three";

export function Atmosphere() {
  return (
    <>
      {/* Cinematic dark background - avoiding crushed blacks */}
      <color attach="background" args={["#111827"]} />

      {/* Exponential fog for ATMOSPHERIC depth (not invisibility) */}
      <fogExp2 attach="fog" args={["#111827", 0.002]} />

      {/* 1. PRIMARY READABILITY LIGHT (Global Form Illumination) */}
      <directionalLight
        position={[80, 120, 40]}
        intensity={0.8}
        color="#dbe4f0"
        castShadow
      />

      {/* 5. INDIRECT BOUNCE LIGHT (Edge Visibility) */}
      <hemisphereLight
        intensity={0.35}
        color="#cbd5e1"
        groundColor="#0f172a"
      />

      {/* LOW ambient fill */}
      <ambientLight intensity={0.12} color="#94a3b8" />

      {/* 6. MAIN corridor lights — broader area lighting feel */}
      {[
        { x: -140, y: 18, z: -25, intensity: 3.2 },
        { x: -40, y: 16, z: -35, intensity: 2.4 },
        { x: 60, y: 20, z: -20, intensity: 3.6 },
        { x: 180, y: 17, z: -40, intensity: 2.8 },
      ].map((l, i) => (
        <group key={i}>
          {/* overhead industrial fill */}
          <pointLight
            position={[l.x, l.y, l.z]}
            intensity={l.intensity}
            color="#e5e7eb"
            distance={120}
            decay={1.5}
          />

          {/* lower blue accent */}
          <pointLight
            position={[l.x + 10, 4, l.z + 5]}
            intensity={1.0}
            color="#315b9c"
            distance={60}
            decay={1.5}
          />
        </group>
      ))}

      {/* 9. AI CORE hero lighting */}
      <spotLight
        position={[0, 40, -60]}
        angle={0.22}
        penumbra={1}
        intensity={2.2}
        distance={180}
        color="#dbeafe"
        castShadow
      />

      {/* Maintenance lights */}
      <pointLight position={[120, 8, -20]} intensity={1.5} color="#f59e0b" distance={50} />
      <pointLight position={[-180, 6, -50]} intensity={1.0} color="#ef4444" distance={40} />
    </>
  );
}

export function ServerRoomEnclosure() {
  return (
    <group>
      {/* FLOOR - Industrial dark gray */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -20]} receiveShadow>
        <planeGeometry args={[1200, 260]} />
        <meshStandardMaterial color="#111827" roughness={0.72} metalness={0.18} />
      </mesh>

      {/* Floor tiles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <mesh key={`floor-x-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[i * 15 - 600, -0.49, -20]}>
          <planeGeometry args={[0.04, 260]} />
          <meshStandardMaterial color="#1e293b" transparent opacity={0.3} />
        </mesh>
      ))}

      {/* CEILING - Material variation */}
      <mesh position={[0, 22, -20]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1200, 260]} />
        <meshStandardMaterial color="#0f1724" roughness={0.8} />
      </mesh>

      {/* BEAMS - Value separation */}
      {Array.from({ length: 40 }).map((_, i) => (
        <mesh key={`beam-${i}`} position={[i * 30 - 600, 21.2, -20]}>
          <boxGeometry args={[1.5, 1, 260]} />
          <meshStandardMaterial color="#1e293b" roughness={0.6} />
        </mesh>
      ))}

      {/* PILLARS */}
      {Array.from({ length: 14 }).map((_, i) => (
        <group key={`pillar-${i}`} position={[i * 80 - 520, 10, -35]}>
          <mesh castShadow>
            <boxGeometry args={[2.2, 22, 2.2]} />
            <meshStandardMaterial color="#182131" roughness={0.5} metalness={0.4} />
          </mesh>
          <mesh position={[0, -2, 1.12]}>
            <planeGeometry args={[0.15, 8]} />
            <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={0.8} transparent opacity={0.4} />
          </mesh>
        </group>
      ))}

      {/* 8. FOREGROUND OCCLUSION - Lower opacity for readability */}
      {[-80, -20, 40].map((x, i) => (
        <mesh key={`foreground-${i}`} position={[x, 8, 25]}>
          <boxGeometry args={[6, 18, 6]} />
          <meshStandardMaterial color="#0f1724" roughness={1} transparent opacity={0.45} />
        </mesh>
      ))}

      {/* AI CORE CHAMBER - Hero Visibility */}
      <group position={[0, 0, -70]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[16, 0.4, 24, 100]} />
          <meshStandardMaterial color="#1d4ed8" emissive="#1d4ed8" emissiveIntensity={1} metalness={1} transparent opacity={0.35} />
        </mesh>
        <mesh position={[0, 10, 0]}>
          <cylinderGeometry args={[3, 4, 20, 16]} />
          <meshStandardMaterial color="#111827" metalness={0.8} />
        </mesh>
        {/* Core glow */}
        <pointLight intensity={3.5} color="#315b9c" distance={30} />
      </group>
    </group>
  );
}