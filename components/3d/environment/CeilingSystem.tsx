"use client";

import React from "react";

export function CeilingSystem() {
  return (
    <group>

      {/* ===================================================== */}
      {/* MAIN STRUCTURAL CEILING */}
      {/* ===================================================== */}

      <mesh
        position={[0, 30, -20]}
        rotation={[Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[1400, 320]} />
        <meshStandardMaterial
          color="#0a0f18"
          roughness={0.92}
          metalness={0.08}
        />
      </mesh>

      {/* ===================================================== */}
      {/* MASSIVE PRIMARY SUPPORT BEAMS */}
      {/* ===================================================== */}

      {Array.from({ length: 28 }).map((_, i) => {
        const x = i * 50 - 700;

        return (
          <group key={`primary-beam-${i}`} position={[x, 26, -20]}>

            {/* main beam */}
            <mesh castShadow>
              <boxGeometry args={[3, 6, 320]} />
              <meshStandardMaterial
                color="#111827"
                roughness={0.72}
                metalness={0.22}
              />
            </mesh>

            {/* lower reinforcement */}
            <mesh position={[0, -3.5, 0]}>
              <boxGeometry args={[4.5, 1.2, 320]} />
              <meshStandardMaterial
                color="#0b1120"
                roughness={0.95}
              />
            </mesh>

          </group>
        );
      })}

      {/* ===================================================== */}
      {/* RECESSED LIGHT CHANNELS */}
      {/* ===================================================== */}

      {[-70, 0, 70].map((z, i) => (
        <group key={`light-channel-${i}`}>

          {/* recessed cavity */}
          <mesh position={[0, 24.5, z]}>
            <boxGeometry args={[1400, 3, 10]} />
            <meshStandardMaterial
              color="#05070d"
              roughness={1}
            />
          </mesh>

          {/* lighting strips */}
          {Array.from({ length: 18 }).map((_, j) => (
            <group
              key={`light-panel-${j}`}
              position={[j * 75 - 650, 23.4, z]}
            >

              {/* fixture housing */}
              <mesh>
                <boxGeometry args={[18, 1.2, 4]} />
                <meshStandardMaterial
                  color="#1f2937"
                  metalness={0.5}
                  roughness={0.5}
                />
              </mesh>

              {/* actual light */}
              <mesh position={[0, -0.2, 0]}>
                <planeGeometry args={[14, 2]} />
                <meshStandardMaterial
                  color="#f3f4f6"
                  emissive="#f8fafc"
                  emissiveIntensity={0.35}
                />
              </mesh>

            </group>
          ))}
        </group>
      ))}

      {/* ===================================================== */}
      {/* COOLING PIPELINES */}
      {/* ===================================================== */}

      {[-90, -40, 20, 85].map((z, i) => (
        <group key={`cooling-pipe-${i}`} position={[0, 20, z]}>

          {/* main pipe */}
          <mesh>
            <cylinderGeometry args={[1.2, 1.2, 1400, 18]} />
            <meshStandardMaterial
              color="#334155"
              roughness={0.45}
              metalness={0.75}
            />
          </mesh>

          {/* pipe clamps */}
          {Array.from({ length: 20 }).map((_, j) => (
            <mesh
              key={`clamp-${j}`}
              position={[j * 70 - 650, 0, 0]}
            >
              <torusGeometry args={[1.4, 0.12, 8, 20]} />
              <meshStandardMaterial
                color="#64748b"
                metalness={1}
                roughness={0.2}
              />
            </mesh>
          ))}

        </group>
      ))}

      {/* ===================================================== */}
      {/* HANGING CABLE TRAYS */}
      {/* ===================================================== */}

      {[-50, 50].map((z, i) => (
        <group key={`tray-${i}`} position={[0, 17, z]}>

          {/* tray */}
          <mesh>
            <boxGeometry args={[1400, 0.5, 6]} />
            <meshStandardMaterial
              color="#1e293b"
              roughness={0.8}
              metalness={0.35}
            />
          </mesh>

          {/* hanging supports */}
          {Array.from({ length: 30 }).map((_, j) => (
            <mesh
              key={`hanger-${j}`}
              position={[j * 50 - 700, 5, 0]}
            >
              <boxGeometry args={[0.12, 10, 0.12]} />
              <meshStandardMaterial
                color="#475569"
              />
            </mesh>
          ))}

          {/* cable bundles */}
          {Array.from({ length: 14 }).map((_, j) => (
            <mesh
              key={`bundle-${j}`}
              position={[j * 100 - 650, -0.6, 0]}
            >
              <cylinderGeometry args={[0.8, 0.8, 120, 10]} />
              <meshStandardMaterial
                color="#020617"
                roughness={1}
              />
            </mesh>
          ))}

        </group>
      ))}

      {/* ===================================================== */}
      {/* MAINTENANCE WALKWAY */}
      {/* ===================================================== */}

      <group position={[0, 18, -120]}>

        {/* platform */}
        <mesh>
          <boxGeometry args={[400, 0.6, 10]} />
          <meshStandardMaterial
            color="#1f2937"
            roughness={0.7}
            metalness={0.3}
          />
        </mesh>

        {/* railing */}
        {[-5, 5].map((z, i) => (
          <mesh key={i} position={[0, 1, z]}>
            <boxGeometry args={[400, 0.08, 0.08]} />
            <meshStandardMaterial color="#64748b" />
          </mesh>
        ))}

      </group>

      {/* ===================================================== */}
      {/* DARK OVERHEAD SILHOUETTES */}
      {/* ===================================================== */}

      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={`silhouette-${i}`}
          position={[
            i * 120 - 700,
            34 + Math.random() * 10,
            -40 + Math.random() * 80,
          ]}
        >
          <boxGeometry
            args={[
              20 + Math.random() * 20,
              12 + Math.random() * 8,
              20 + Math.random() * 20,
            ]}
          />
          <meshStandardMaterial
            color="#02040a"
            roughness={1}
          />
        </mesh>
      ))}

    </group>
  );
}