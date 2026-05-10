"use client";

import React from "react";

export function StructuralColumns() {
  return (
    <group>

      {/* ===================================================== */}
      {/* PRIMARY INFRASTRUCTURE GRID */}
      {/* ===================================================== */}

      {Array.from({ length: 14 }).map((_, i) => {
        const x = i * 90 - 600;

        return (
          <group key={`column-sector-${i}`} position={[x, 0, 0]}>

            {/* ===================================================== */}
            {/* LEFT MAIN COLUMN */}
            {/* ===================================================== */}

            <group position={[0, 12, -95]}>

              {/* primary body */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[4, 24, 4]} />
                <meshStandardMaterial
                  color="#182131"
                  roughness={0.45}
                  metalness={0.65}
                />
              </mesh>

              {/* reinforced outer shell */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4.8, 25, 4.8]} />
                <meshStandardMaterial
                  color="#0f1724"
                  roughness={0.85}
                  metalness={0.15}
                />
              </mesh>

              {/* lower foundation */}
              <mesh position={[0, -12.5, 0]}>
                <boxGeometry args={[7, 1.4, 7]} />
                <meshStandardMaterial
                  color="#0b1120"
                  roughness={1}
                />
              </mesh>

              {/* upper support cap */}
              <mesh position={[0, 12.8, 0]}>
                <boxGeometry args={[6, 1.2, 6]} />
                <meshStandardMaterial
                  color="#111827"
                  metalness={0.5}
                  roughness={0.5}
                />
              </mesh>

              {/* vertical maintenance strip */}
              <mesh position={[2.45, 0, 0]}>
                <planeGeometry args={[0.18, 16]} />
                <meshStandardMaterial
                  color="#315b9c"
                  emissive="#315b9c"
                  emissiveIntensity={0.18}
                  transparent
                  opacity={0.2}
                />
              </mesh>

              {/* conduit pipes */}
              {[-1.2, 1.2].map((z, j) => (
                <mesh
                  key={`pipe-left-${j}`}
                  position={[0, 0, z]}
                  rotation={[0, 0, Math.PI / 2]}
                >
                  <cylinderGeometry args={[0.15, 0.15, 24, 8]} />
                  <meshStandardMaterial
                    color="#475569"
                    metalness={1}
                    roughness={0.25}
                  />
                </mesh>
              ))}

              {/* side utility boxes */}
              {[-6, 2, 8].map((y, j) => (
                <mesh
                  key={`util-left-${j}`}
                  position={[2.6, y, 0]}
                >
                  <boxGeometry args={[1.2, 1.4, 1]} />
                  <meshStandardMaterial
                    color="#1e293b"
                    roughness={0.8}
                    metalness={0.3}
                  />
                </mesh>
              ))}

            </group>

            {/* ===================================================== */}
            {/* RIGHT MAIN COLUMN */}
            {/* ===================================================== */}

            <group position={[0, 12, 95]}>

              {/* primary body */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[4, 24, 4]} />
                <meshStandardMaterial
                  color="#182131"
                  roughness={0.45}
                  metalness={0.65}
                />
              </mesh>

              {/* reinforced shell */}
              <mesh>
                <boxGeometry args={[4.8, 25, 4.8]} />
                <meshStandardMaterial
                  color="#0f1724"
                  roughness={0.85}
                  metalness={0.15}
                />
              </mesh>

              {/* foundation */}
              <mesh position={[0, -12.5, 0]}>
                <boxGeometry args={[7, 1.4, 7]} />
                <meshStandardMaterial
                  color="#0b1120"
                  roughness={1}
                />
              </mesh>

              {/* support cap */}
              <mesh position={[0, 12.8, 0]}>
                <boxGeometry args={[6, 1.2, 6]} />
                <meshStandardMaterial
                  color="#111827"
                  roughness={0.5}
                  metalness={0.5}
                />
              </mesh>

              {/* subtle accent */}
              <mesh position={[-2.45, 0, 0]}>
                <planeGeometry args={[0.18, 16]} />
                <meshStandardMaterial
                  color="#315b9c"
                  emissive="#315b9c"
                  emissiveIntensity={0.12}
                  transparent
                  opacity={0.16}
                />
              </mesh>

            </group>

            {/* ===================================================== */}
            {/* MASSIVE OVERHEAD CONNECTOR */}
            {/* ===================================================== */}

            <group position={[0, 20, 0]}>

              {/* main bridge */}
              <mesh castShadow>
                <boxGeometry args={[5, 2.5, 190]} />
                <meshStandardMaterial
                  color="#111827"
                  roughness={0.6}
                  metalness={0.35}
                />
              </mesh>

              {/* lower reinforcement */}
              <mesh position={[0, -1.8, 0]}>
                <boxGeometry args={[7, 0.6, 190]} />
                <meshStandardMaterial
                  color="#0b1120"
                  roughness={0.95}
                />
              </mesh>

              {/* embedded routing strip */}
              <mesh position={[0, -0.2, 0]}>
                <boxGeometry args={[0.25, 0.12, 180]} />
                <meshStandardMaterial
                  color="#315b9c"
                  emissive="#315b9c"
                  emissiveIntensity={0.25}
                />
              </mesh>

            </group>

            {/* ===================================================== */}
            {/* HANGING CABLE SYSTEMS */}
            {/* ===================================================== */}

            {[-60, -20, 20, 60].map((z, j) => (
              <mesh
                key={`hanging-${j}`}
                position={[0, 15, z]}
              >
                <cylinderGeometry args={[0.08, 0.08, 12, 6]} />
                <meshStandardMaterial
                  color="#020617"
                  roughness={1}
                />
              </mesh>
            ))}

            {/* ===================================================== */}
            {/* MID-LEVEL MAINTENANCE BRIDGE */}
            {/* ===================================================== */}

            <group position={[0, 10, 0]}>

              {/* narrow catwalk */}
              <mesh>
                <boxGeometry args={[2.2, 0.25, 160]} />
                <meshStandardMaterial
                  color="#1f2937"
                  roughness={0.8}
                  metalness={0.2}
                />
              </mesh>

              {/* railing */}
              {[-1, 1].map((xPos, k) => (
                <mesh
                  key={`rail-${k}`}
                  position={[xPos, 0.6, 0]}
                >
                  <boxGeometry args={[0.05, 1, 160]} />
                  <meshStandardMaterial
                    color="#64748b"
                  />
                </mesh>
              ))}

            </group>

            {/* ===================================================== */}
            {/* SHADOW BREAKUP PANELS */}
            {/* ===================================================== */}

            <mesh position={[0, 6, -130]}>
              <boxGeometry args={[18, 12, 2]} />
              <meshStandardMaterial
                color="#05070d"
                roughness={1}
              />
            </mesh>

          </group>
        );
      })}
    </group>
  );
}