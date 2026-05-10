"use client";

import React from "react";
import * as THREE from "three";

export function TestArchitecture() {
  const FACILITY_LENGTH = 1600;
  const CEILING_Y = 60; // Increased height
  const WALL_Z = [-150, 110];
  const FACILITY_WIDTH = 260;

  return (
    <group>
      {/* 1. REFLECTIVE FLOOR SYSTEM */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -20]} receiveShadow>
        <planeGeometry args={[FACILITY_LENGTH, 350]} />
        <meshStandardMaterial 
          color="#0a1120" 
          roughness={0.15} 
          metalness={0.8} 
        />
      </mesh>
      
      {/* Floor Grid Lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={`floor-grid-${i}`} position={[0, -0.4, i * 20 - 200]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[FACILITY_LENGTH, 0.2]} />
          <meshBasicMaterial color="#315b9c" transparent opacity={0.2} />
        </mesh>
      ))}

      {/* 2. CEILING SYSTEM (Multi-layered & LED Integrated) */}
      <group position={[0, CEILING_Y, -20]}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[FACILITY_LENGTH, 4, 340]} />
          <meshStandardMaterial color="#0b1120" roughness={0.9} />
        </mesh>

        {/* LONGITUDINAL LED STRIPS (Blue/White) */}
        {[-40, -10, 10, 40].map((zPos, i) => (
          <mesh key={`ceiling-led-${i}`} position={[0, -2.1, zPos]}>
            <boxGeometry args={[FACILITY_LENGTH, 0.2, 0.5]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#60a5fa" : "#ffffff"} 
              emissive={i % 2 === 0 ? "#60a5fa" : "#ffffff"} 
              emissiveIntensity={2} 
            />
          </mesh>
        ))}

        {/* Structural Beams */}
        {Array.from({ length: 15 }).map((_, i) => (
          <mesh key={`ceiling-beam-${i}`} position={[i * 120 - 800, -3, 0]}>
            <boxGeometry args={[10, 2, 320]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
        ))}
      </group>

      {/* 3. DUAL-LEVEL SIDE WALLS */}
      {WALL_Z.map((z, i) => (
        <group key={`wall-${i}`} position={[0, CEILING_Y / 2, z]}>
          {/* Base Wall Hull */}
          <mesh>
            <boxGeometry args={[FACILITY_LENGTH, CEILING_Y + 10, 4]} />
            <meshStandardMaterial color="#020617" roughness={1} />
          </mesh>

          {/* LOWER LEVEL: Server Slots & Structural Support */}
          {Array.from({ length: 20 }).map((_, j) => (
            <group key={`lower-slot-${j}`} position={[j * 80 - 800, -15, i === 0 ? 2 : -2]}>
              <mesh>
                <boxGeometry args={[20, 30, 2]} />
                <meshStandardMaterial color="#111827" />
              </mesh>
              {/* Vertical Support Beam */}
              <mesh position={[30, 15, 1]}>
                 <boxGeometry args={[4, CEILING_Y, 6]} />
                 <meshStandardMaterial color="#1e293b" metalness={0.5} />
              </mesh>
            </group>
          ))}

          {/* UPPER LEVEL: Gallery / Branding Panels */}
          <group position={[0, 15, i === 0 ? 2.5 : -2.5]}>
             {/* Gallery Walkway */}
             <mesh position={[0, -2, i === 0 ? -10 : 10]}>
                <boxGeometry args={[FACILITY_LENGTH, 1, 20]} />
                <meshStandardMaterial color="#0f172a" />
             </mesh>
             {/* Railing */}
             <mesh position={[0, 2, i === 0 ? -20 : 20]}>
                <boxGeometry args={[FACILITY_LENGTH, 0.2, 0.2]} />
                <meshStandardMaterial color="#475569" />
             </mesh>

             {/* 🏢 BRANDING PANELS (KARYA / SANKALAP) */}
             <group position={[0, 0, 0]}>
                <mesh>
                   <boxGeometry args={[120, 40, 0.5]} />
                   <meshStandardMaterial color="#0b1120" metalness={0.8} />
                </mesh>
                {/* Glow Backdrop */}
                <mesh position={[0, 0, -0.1]}>
                   <planeGeometry args={[130, 50]} />
                   <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
                </mesh>
                
                {/* Brand Text Placeholder (using large letters) */}
                <group position={[0, 0, 0.6]}>
                   <mesh>
                      <planeGeometry args={[100, 20]} />
                      <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
                   </mesh>
                </group>
             </group>
          </group>

          {/* Longitudinal Accent Lights */}
          <mesh position={[0, 0, i === 0 ? 1 : -1]}>
            <boxGeometry args={[FACILITY_LENGTH, 0.4, 0.4]} />
            <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={1.5} />
          </mesh>
        </group>
      ))}

      {/* 4. DEPTH FOG PLANES (Increased Density) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`depth-fog-${i}`} position={[0, 25, i * 50 - 200]}>
          <planeGeometry args={[FACILITY_LENGTH, 80]} />
          <meshBasicMaterial 
            color="#0a1120" 
            transparent 
            opacity={0.02 + i * 0.03} 
            depthWrite={false} 
            side={THREE.DoubleSide} 
          />
        </mesh>
      ))}
    </group>
  );
}
