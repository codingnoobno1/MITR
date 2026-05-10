"use client";

import React from "react";
import * as THREE from "three";

export function Atmosphere() {
  return (
    <>
      {/* Cinematic dark background */}
      <color attach="background" args={["#070b14"]} />

      {/* Exponential fog for REAL depth */}
      <fogExp2 attach="fog" args={["#070b14", 0.003]} />

      {/* LOW ambient only */}
      <ambientLight intensity={0.12} color="#94a3b8" />

      {/* MAIN corridor lights — sparse + asymmetrical */}
      {[
        { x: -140, y: 18, z: -25, intensity: 3.2 },
        { x: -40, y: 16, z: -35, intensity: 2.4 },
        { x: 60, y: 20, z: -20, intensity: 3.6 },
        { x: 180, y: 17, z: -40, intensity: 2.8 },
      ].map((l, i) => (
        <group key={i}>
          {/* overhead white industrial */}
          <pointLight
            position={[l.x, l.y, l.z]}
            intensity={l.intensity}
            color="#e5e7eb"
            distance={90}
            decay={2}
          />

          {/* lower cold fill */}
          <pointLight
            position={[l.x + 10, 4, l.z + 5]}
            intensity={0.8}
            color="#315b9c"
            distance={45}
            decay={2}
          />
        </group>
      ))}

      {/* AI CORE shaft */}
      <spotLight
        position={[0, 35, -60]}
        angle={0.18}
        penumbra={1}
        intensity={2.5}
        distance={160}
        color="#dbeafe"
        castShadow
      />

      {/* subtle warm maintenance zone */}
      <pointLight
        position={[120, 8, -20]}
        intensity={1.2}
        color="#f59e0b"
        distance={40}
      />

      {/* red security anomaly */}
      <pointLight
        position={[-180, 6, -50]}
        intensity={0.7}
        color="#ef4444"
        distance={30}
      />
    </>
  );
}

export function ServerRoomEnclosure() {
  return (
    <group>
      {/* ===================================================== */}
      {/* FLOOR */}
      {/* ===================================================== */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, -20]}
        receiveShadow
      >
        <planeGeometry args={[1200, 260]} />
        <meshStandardMaterial
          color="#0a0f1b"
          roughness={0.72}
          metalness={0.18}
        />
      </mesh>

      {/* floor segmentation */}
      {Array.from({ length: 80 }).map((_, i) => (
        <mesh
          key={`floor-line-x-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[i * 15 - 600, -0.49, -20]}
        >
          <planeGeometry args={[0.04, 260]} />
          <meshStandardMaterial
            color="#111827"
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}

      {Array.from({ length: 24 }).map((_, i) => (
        <mesh
          key={`floor-line-z-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.49, i * 12 - 140]}
        >
          <planeGeometry args={[1200, 0.04]} />
          <meshStandardMaterial
            color="#111827"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* ===================================================== */}
      {/* CEILING */}
      {/* ===================================================== */}

      <mesh
        position={[0, 22, -20]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[1200, 260]} />
        <meshStandardMaterial
          color="#111827"
          roughness={0.82}
          metalness={0.15}
        />
      </mesh>

      {/* large ceiling beams */}
      {Array.from({ length: 40 }).map((_, i) => (
        <mesh
          key={`beam-${i}`}
          position={[i * 30 - 600, 21.2, -20]}
        >
          <boxGeometry args={[1.5, 1, 260]} />
          <meshStandardMaterial
            color="#0b1120"
            roughness={0.7}
            metalness={0.3}
          />
        </mesh>
      ))}

      {/* ===================================================== */}
      {/* UPPER INFRASTRUCTURE */}
      {/* ===================================================== */}

      {/* suspended cable trays */}
      {[-40, 0, 40].map((z, i) => (
        <group key={`tray-${i}`}>
          <mesh position={[0, 18, z]}>
            <boxGeometry args={[1200, 0.25, 1]} />
            <meshStandardMaterial
              color="#1e293b"
              metalness={0.9}
              roughness={0.25}
            />
          </mesh>

          {/* hanging supports */}
          {Array.from({ length: 30 }).map((_, j) => (
            <mesh
              key={`support-${j}`}
              position={[j * 40 - 600, 20, z]}
            >
              <boxGeometry args={[0.1, 4, 0.1]} />
              <meshStandardMaterial color="#334155" />
            </mesh>
          ))}
        </group>
      ))}

      {/* ===================================================== */}
      {/* SIDE WALLS */}
      {/* ===================================================== */}

      {/* left wall */}
      <mesh position={[0, 10, -145]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1200, 40]} />
        <meshStandardMaterial
          color="#0b1220"
          roughness={0.95}
        />
      </mesh>

      {/* right wall */}
      <mesh position={[0, 10, 105]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1200, 40]} />
        <meshStandardMaterial
          color="#0b1220"
          roughness={0.95}
        />
      </mesh>

      {/* ===================================================== */}
      {/* MASSIVE BACK INFRASTRUCTURE SILHOUETTES */}
      {/* ===================================================== */}

      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={`bg-tower-${i}`}
          position={[
            i * 60 - 600,
            18 + Math.random() * 15,
            -110 - Math.random() * 20,
          ]}
        >
          <boxGeometry
            args={[
              12 + Math.random() * 8,
              30 + Math.random() * 20,
              10 + Math.random() * 5,
            ]}
          />
          <meshStandardMaterial
            color="#05070d"
            roughness={1}
            metalness={0}
          />
        </mesh>
      ))}

      {/* ===================================================== */}
      {/* SUPPORT PILLARS */}
      {/* ===================================================== */}

      {Array.from({ length: 14 }).map((_, i) => {
        const x = i * 80 - 520;

        return (
          <group key={`pillar-${i}`} position={[x, 10, -35]}>
            {/* pillar */}
            <mesh castShadow>
              <boxGeometry args={[2.2, 22, 2.2]} />
              <meshStandardMaterial
                color="#1a2233"
                roughness={0.5}
                metalness={0.55}
              />
            </mesh>

            {/* subtle vertical light */}
            <mesh position={[0, -2, 1.12]}>
              <planeGeometry args={[0.15, 8]} />
              <meshStandardMaterial
                color="#315b9c"
                emissive="#315b9c"
                emissiveIntensity={0.4}
                transparent
                opacity={0.25}
              />
            </mesh>
          </group>
        );
      })}

      {/* ===================================================== */}
      {/* FOREGROUND OCCLUSION LAYER */}
      {/* ===================================================== */}

      {/* near-camera dark silhouettes */}
      {[-80, -20, 40].map((x, i) => (
        <mesh
          key={`foreground-${i}`}
          position={[x, 8, 25]}
        >
          <boxGeometry args={[6, 18, 6]} />
          <meshStandardMaterial
            color="#02040a"
            roughness={1}
            metalness={0}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}

      {/* hanging foreground cables */}
      {Array.from({ length: 14 }).map((_, i) => (
        <mesh
          key={`cable-${i}`}
          position={[i * 25 - 200, 18, 20]}
        >
          <cylinderGeometry args={[0.08, 0.08, 16, 6]} />
          <meshStandardMaterial
            color="#05070d"
            roughness={1}
          />
        </mesh>
      ))}

      {/* ===================================================== */}
      {/* AISLE LIGHT STRIPS */}
      {/* ===================================================== */}

      {[-90, -20, 60, 140].map((x, i) => (
        <mesh
          key={`strip-${i}`}
          position={[x, -0.45, -20]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.12, 120]} />
          <meshStandardMaterial
            color="#315b9c"
            emissive="#315b9c"
            emissiveIntensity={0.18}
            transparent
            opacity={0.2}
          />
        </mesh>
      ))}

      {/* ===================================================== */}
      {/* AI CORE CHAMBER */}
      {/* ===================================================== */}

      <group position={[0, 0, -70]}>
        {/* outer ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[16, 0.4, 24, 100]} />
          <meshStandardMaterial
            color="#1d4ed8"
            emissive="#1d4ed8"
            emissiveIntensity={0.5}
            metalness={1}
            roughness={0.2}
          />
        </mesh>

        {/* center pillar */}
        <mesh position={[0, 10, 0]}>
          <cylinderGeometry args={[3, 4, 20, 16]} />
          <meshStandardMaterial
            color="#111827"
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>

        {/* vertical beam */}
        <mesh position={[0, 18, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 35, 12]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#60a5fa"
            emissiveIntensity={1.5}
            transparent
            opacity={0.18}
          />
        </mesh>
      </group>
    </group>
  );
}