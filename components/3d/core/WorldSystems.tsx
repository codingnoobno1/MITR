"use client";

import React from "react";
import * as THREE from "three";

export function Atmosphere() {
  return (
    <>
      {/* Less dark background - shifted from #111827 to #1e293b */}
      <color attach="background" args={["#1e293b"]} />

      {/* Brighter fog for better readability and atmosphere */}
      <fogExp2 attach="fog" args={["#1e293b", 0.0015]} />

      {/* 1. PRIMARY READABILITY LIGHT (Increased Intensity) */}
      <directionalLight
        position={[80, 120, 40]}
        intensity={1.2}
        color="#e5e7eb"
        castShadow
      />

      {/* 6. GIANT LIGHT SOURCE */}
      <pointLight
        position={[0, 40, 0]}
        intensity={5}
        color="#cbd5e1"
        distance={400}
        decay={1}
      />

      {/* 5. INDIRECT BOUNCE LIGHT */}
      <hemisphereLight
        intensity={0.6}
        color="#f1f5f9"
        groundColor="#334155"
      />

      {/* Increased ambient fill for 'less darker' feel */}
      <ambientLight intensity={0.3} color="#94a3b8" />

      {/* Main corridor lights */}
      {[
        { x: -140, y: 18, z: -25, intensity: 3.5, color: "#e5e7eb" },
        { x: -40, y: 16, z: -35, intensity: 2.5, color: "#cbd5e1" },
        { x: 60, y: 20, z: -20, intensity: 3.8, color: "#e5e7eb" },
        { x: 180, y: 17, z: -40, intensity: 2.8, color: "#cbd5e1" },
      ].map((l, i) => (
        <group key={i}>
          <pointLight
            position={[l.x, l.y, l.z]}
            intensity={l.intensity}
            color={l.color}
            distance={150}
            decay={2}
          />

          {/* Cobalt Accents */}
          {i % 2 === 0 && (
            <pointLight
              position={[l.x + 15, 4, l.z + 10]}
              intensity={1.2}
              color="#60a5fa"
              distance={60}
              decay={2}
            />
          )}
        </group>
      ))}

      {/* HERO LIGHTING */}
      <spotLight
        position={[0, 60, -80]}
        angle={0.4}
        penumbra={1}
        intensity={5}
        distance={300}
        color="#f8fafc"
        castShadow
      />
      
      <pointLight position={[-180, 12, -50]} intensity={2.5} color="#ef4444" distance={100} />
      <pointLight position={[120, 20, -20]} intensity={3.5} color="#60a5fa" distance={120} />
    </>
  );
}