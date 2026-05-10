"use client";

import React from "react";

export function InteriorArchitecture() {
  return (
    <group>

      {/* ===================================================== */}
      {/* PRIMARY STRUCTURAL RIBS */}
      {/* ===================================================== */}

      {Array.from({ length: 10 }).map((_, i) => {
        const x = i * 120 - 540;

        return (
          <group key={`rib-${i}`} position={[x, 0, 0]}>

            {/* ===================================================== */}
            {/* MAIN ARCHITECTURAL FRAME */}
            {/* ===================================================== */}

            <group position={[0, 14, -20]}>

              {/* outer support */}
              <mesh castShadow>
                <boxGeometry args={[6, 28, 240]} />
                <meshStandardMaterial
                  color="#0f1724"
                  roughness={0.72}
                  metalness={0.28}
                />
              </mesh>

              {/* recessed inner channel */}
              <mesh>
                <boxGeometry args={[4, 24, 220]} />
                <meshStandardMaterial
                  color="#070b14"
                  roughness={1}
                />
              </mesh>

              {/* lower reinforcement */}
              <mesh position={[0, -12, 0]}>
                <boxGeometry args={[10, 3, 250]} />
                <meshStandardMaterial
                  color="#111827"
                  roughness={0.95}
                />
              </mesh>

            </group>

            {/* ===================================================== */}
            {/* OVERHEAD STRUCTURAL CONNECTOR */}
            {/* ===================================================== */}

            <mesh position={[0, 28, -20]}>
              <boxGeometry args={[10, 4, 240]} />
              <meshStandardMaterial
                color="#1a2233"
                roughness={0.55}
                metalness={0.35}
              />
            </mesh>

            {/* ===================================================== */}
            {/* RECESSED SHADOW POCKETS */}
            {/* ===================================================== */}

            {[-80, -20, 20, 60].map((z, j) => (
              <mesh
                key={`shadow-pocket-${j}`}
                position={[0, 10, z]}
              >
                <boxGeometry args={[8, 18, 18]} />
                <meshStandardMaterial
                  color="#05070d"
                  roughness={1}
                />
              </mesh>
            ))}

            {/* ===================================================== */}
            {/* SIDE SUPPORT STRUTS */}
            {/* ===================================================== */}

            {[-120, 80].map((z, j) => (
              <group
                key={`strut-${j}`}
                position={[0, 8, z]}
              >

                {/* angled support */}
                <mesh rotation={[0, 0, Math.PI / 8]}>
                  <boxGeometry args={[2, 18, 2]} />
                  <meshStandardMaterial
                    color="#1e293b"
                    roughness={0.7}
                    metalness={0.3}
                  />
                </mesh>

                {/* support base */}
                <mesh position={[0, -10, 0]}>
                  <boxGeometry args={[6, 2, 6]} />
                  <meshStandardMaterial
                    color="#0b1120"
                    roughness={1}
                  />
                </mesh>

              </group>
            ))}

            {/* ===================================================== */}
            {/* MID-LEVEL TRANSITION BRIDGE */}
            {/* ===================================================== */}

            <group position={[0, 12, 0]}>

              {/* bridge */}
              <mesh>
                <boxGeometry args={[3, 0.4, 160]} />
                <meshStandardMaterial
                  color="#1f2937"
                  roughness={0.8}
                  metalness={0.2}
                />
              </mesh>

              {/* rails */}
              {[-1.2, 1.2].map((xPos, j) => (
                <mesh
                  key={`rail-${j}`}
                  position={[xPos, 0.7, 0]}
                >
                  <boxGeometry args={[0.08, 1.2, 160]} />
                  <meshStandardMaterial
                    color="#64748b"
                  />
                </mesh>
              ))}

            </group>

            {/* ===================================================== */}
            {/* CABLE PASSAGEWAYS */}
            {/* ===================================================== */}

            {[-60, 0, 60].map((z, j) => (
              <mesh
                key={`cable-route-${j}`}
                position={[0, 24, z]}
              >
                <boxGeometry args={[2, 2, 24]} />
                <meshStandardMaterial
                  color="#020617"
                  roughness={1}
                />
              </mesh>
            ))}

          </group>
        );
      })}

      {/* ===================================================== */}
      {/* WALL-FLUSH CORRIDOR ALCOVES (Replaces side chambers) */}
      {/* These now sit AGAINST the wall plane, not beyond it  */}
      {/* ===================================================== */}

      {[-145, 105].map((z, i) => (
        <group key={`side-sector-${i}`} position={[0, 0, z]}>

          {Array.from({ length: 6 }).map((_, j) => {
            const x = j * 180 - 450;

            return (
              <group key={`door-sector-${j}`} position={[x, 0, 0]}>

                {/* corridor alcove flush against wall */}
                <mesh position={[0, 14, 0]}>
                  <boxGeometry args={[24, 30, 3]} />
                  <meshStandardMaterial
                    color="#0b1220"
                    roughness={0.95}
                  />
                </mesh>

                {/* shallow recess (stays within wall plane) */}
                <mesh position={[0, 10, i === 0 ? 2 : -2]}>
                  <boxGeometry args={[18, 20, 4]} />
                  <meshStandardMaterial
                    color="#05070d"
                    roughness={1}
                  />
                </mesh>

              </group>
            );
          })}

        </group>
      ))}

      {/* ===================================================== */}
      {/* FOREGROUND OCCLUSION ARCHES (Constrained to interior) */}
      {/* ===================================================== */}

      {[-320, -120, 80].map((x, i) => (
        <group key={`foreground-arch-${i}`} position={[x, 0, 40]}>
          <mesh position={[0, 16, 0]}>
            <boxGeometry args={[8, 32, 40]} />
            <meshStandardMaterial
              color="#02040a"
              roughness={1}
              transparent
              opacity={0.96}
            />
          </mesh>
        </group>
      ))}

    </group>
  );
}