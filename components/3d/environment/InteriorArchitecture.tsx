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
                <boxGeometry args={[6, 28, 300]} />
                <meshStandardMaterial
                  color="#0f1724"
                  roughness={0.72}
                  metalness={0.28}
                />
              </mesh>

              {/* recessed inner channel */}
              <mesh>
                <boxGeometry args={[4, 24, 280]} />
                <meshStandardMaterial
                  color="#070b14"
                  roughness={1}
                />
              </mesh>

              {/* lower reinforcement */}
              <mesh position={[0, -12, 0]}>
                <boxGeometry args={[10, 3, 310]} />
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
              <boxGeometry args={[10, 4, 300]} />
              <meshStandardMaterial
                color="#1a2233"
                roughness={0.55}
                metalness={0.35}
              />
            </mesh>

            {/* ===================================================== */}
            {/* RECESSED SHADOW POCKETS */}
            {/* ===================================================== */}

            {[-120, -40, 40, 120].map((z, j) => (
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

            {[-135, 135].map((z, j) => (
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
                <boxGeometry args={[3, 0.4, 180]} />
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
                  <boxGeometry args={[0.08, 1.2, 180]} />
                  <meshStandardMaterial
                    color="#64748b"
                  />
                </mesh>
              ))}

            </group>

            {/* ===================================================== */}
            {/* CABLE PASSAGEWAYS */}
            {/* ===================================================== */}

            {[-80, 0, 80].map((z, j) => (
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
      {/* SIDE CHAMBER CORRIDORS */}
      {/* ===================================================== */}

      {[-160, 120].map((z, i) => (
        <group key={`side-sector-${i}`} position={[0, 0, z]}>

          {Array.from({ length: 6 }).map((_, j) => {
            const x = j * 180 - 450;

            return (
              <group key={`door-sector-${j}`} position={[x, 0, 0]}>

                {/* corridor opening */}
                <mesh position={[0, 14, 0]}>
                  <boxGeometry args={[24, 30, 3]} />
                  <meshStandardMaterial
                    color="#0b1220"
                    roughness={0.95}
                  />
                </mesh>

                {/* recessed chamber depth */}
                <mesh position={[0, 10, i === 0 ? -30 : 30]}>
                  <boxGeometry args={[18, 20, 50]} />
                  <meshStandardMaterial
                    color="#05070d"
                    roughness={1}
                  />
                </mesh>

                {/* chamber support walls */}
                {[-10, 10].map((xOff, k) => (
                  <mesh
                    key={`wall-${k}`}
                    position={[xOff, 10, i === 0 ? -18 : 18]}
                  >
                    <boxGeometry args={[2, 20, 30]} />
                    <meshStandardMaterial
                      color="#111827"
                    />
                  </mesh>
                ))}

              </group>
            );
          })}

        </group>
      ))}

      {/* ===================================================== */}
      {/* FOREGROUND OCCLUSION ARCHES */}
      {/* ===================================================== */}

      {[-320, -120, 80].map((x, i) => (
        <group key={`foreground-arch-${i}`} position={[x, 0, 40]}>

          {/* dark foreground structure */}
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

      {/* ===================================================== */}
      {/* DISTANT BACKGROUND INFRASTRUCTURE */}
      {/* ===================================================== */}

      {Array.from({ length: 14 }).map((_, i) => (
        <mesh
          key={`bg-structure-${i}`}
          position={[
            i * 100 - 700,
            18 + Math.random() * 10,
            -180 - Math.random() * 80,
          ]}
        >
          <boxGeometry
            args={[
              20 + Math.random() * 20,
              30 + Math.random() * 20,
              20 + Math.random() * 20,
            ]}
          />
          <meshStandardMaterial
            color="#03050a"
            roughness={1}
          />
        </mesh>
      ))}

    </group>
  );
}