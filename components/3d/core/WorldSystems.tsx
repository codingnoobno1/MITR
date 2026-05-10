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
        intensity={0.9}
        color="#e5e7eb" // 70% Neutral White
        castShadow
      />

      {/* 6. GIANT LIGHT SOURCE (Area lighting for cinematic softness) */}
      {/* We use a large spotlight or pointLight with large radius since RectAreaLight needs specific setup */}
      <pointLight
        position={[0, 40, 0]}
        intensity={4}
        color="#94a3b8" // 20% Cool Steel
        distance={300}
        decay={1}
      />

      {/* 5. INDIRECT BOUNCE LIGHT (Edge Visibility) */}
      <hemisphereLight
        intensity={0.45}
        color="#cbd5e1"
        groundColor="#1e293b"
      />

      {/* LOW ambient fill */}
      <ambientLight intensity={0.15} color="#94a3b8" />

      {/* MAIN corridor lights — rhythmic and focal */}
      {[
        { x: -140, y: 18, z: -25, intensity: 2.5, color: "#e5e7eb" },
        { x: -40, y: 16, z: -35, intensity: 2.0, color: "#94a3b8" },
        { x: 60, y: 20, z: -20, intensity: 2.8, color: "#e5e7eb" },
        { x: 180, y: 17, z: -40, intensity: 2.2, color: "#94a3b8" },
      ].map((l, i) => (
        <group key={i}>
          <pointLight
            position={[l.x, l.y, l.z]}
            intensity={l.intensity}
            color={l.color}
            distance={100}
            decay={2}
          />

          {/* 10% Cobalt Accents - very selective */}
          {i % 2 === 0 && (
            <pointLight
              position={[l.x + 15, 4, l.z + 10]}
              intensity={0.8}
              color="#315b9c"
              distance={40}
              decay={2}
            />
          )}
        </group>
      ))}

      {/* 9 & 10. HERO LIGHTING (Visual Landmarks) */}
      <spotLight
        position={[0, 45, -60]}
        angle={0.25}
        penumbra={1}
        intensity={3.5}
        distance={200}
        color="#e5e7eb"
        castShadow
      />
      
      {/* Security Red Zone */}
      <pointLight position={[-180, 8, -50]} intensity={1.5} color="#ef4444" distance={60} />
      
      {/* Cloud Uplink Beam */}
      <pointLight position={[120, 15, -20]} intensity={2} color="#60a5fa" distance={80} />
    </>
  );
}