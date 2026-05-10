"use client";

import React from "react";
import * as THREE from "three";

export function WallMechanicalLayers({ lightTheme = false }: { lightTheme?: boolean }) {
  const WORLD_WIDTH = 420;
  const WORLD_DEPTH = 340;
  const WORLD_HEIGHT = 120;

  const colors = {
    shell: lightTheme ? "#e5e7eb" : "#020617",
    pocket: lightTheme ? "#94a3b8" : "#0b1120",
    metal: lightTheme ? "#cbd5e1" : "#334155",
    trim: lightTheme ? "#ffffff" : "#1e293b",
    glass: lightTheme ? "#e2e8f0" : "#0f172a",
  };

  return (
    <group>
      {/* 🛡️ BACK WALL (Z = -170) */}
      <group position={[0, WORLD_HEIGHT / 2, -170]}>
        {/* STRUCTURAL SHELL */}
        <mesh>
          <boxGeometry args={[WORLD_WIDTH, WORLD_HEIGHT, 16]} />
          <meshStandardMaterial color={colors.shell} roughness={0.55} metalness={0.35} envMapIntensity={1.2} />
        </mesh>

        {/* RECESSED CAVITIES */}
        {Array.from({ length: Math.floor(WORLD_WIDTH / 40) }).map((_, j) => (
          <group key={`back-segment-${j}`} position={[j * 40 - WORLD_WIDTH / 2 + 20, 0, 3]}>
             <mesh>
                <boxGeometry args={[36, WORLD_HEIGHT - 20, 2]} />
                <meshStandardMaterial color={colors.pocket} />
             </mesh>
             
             {[-12, 0, 12].map((xOff, k) => (
               <mesh key={`pipe-${k}`} position={[xOff, 0, 0.5]}>
                  <cylinderGeometry args={[0.5, 0.5, WORLD_HEIGHT - 20, 8]} />
                  <meshStandardMaterial color={colors.metal} metalness={0.8} />
               </mesh>
             ))}

             {[20, -20].map((yOff, k) => (
               <mesh key={`tray-${k}`} position={[0, yOff, 0.6]}>
                  <boxGeometry args={[34, 1.5, 0.8]} />
                  <meshStandardMaterial color={colors.trim} />
               </mesh>
             ))}
          </group>
        ))}
        {/* EDGE LIGHTING */}
        <mesh position={[0, WORLD_HEIGHT / 2 - 1, 4.2]}>
           <boxGeometry args={[WORLD_WIDTH, 0.5, 0.5]} />
           <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} />
        </mesh>
      </group>

      {/* 🛡️ SIDE WALLS (X = -210 and X = 210) */}
      {[-210, 210].map((xPos, i) => (
        <group key={`side-wall-${i}`} position={[xPos, WORLD_HEIGHT / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
          {/* STRUCTURAL SHELL */}
          <mesh>
            <boxGeometry args={[WORLD_DEPTH, WORLD_HEIGHT, 16]} />
            <meshStandardMaterial color={colors.shell} roughness={0.55} metalness={0.35} envMapIntensity={1.2} />
          </mesh>

          {/* GLASS SERVER CABINET RECESSES */}
          {Array.from({ length: Math.floor(WORLD_DEPTH / 40) }).map((_, j) => (
            <group key={`side-segment-${j}`} position={[j * 40 - WORLD_DEPTH / 2 + 20, -10, i === 0 ? 8 : -8]}>
               {/* Recess Background */}
               <mesh>
                  <boxGeometry args={[34, 80, 8]} />
                  <meshStandardMaterial color={colors.pocket} roughness={0.8} />
               </mesh>
               
               {/* Glass Panel */}
               <mesh position={[0, 0, i === 0 ? 4 : -4]}>
                  <boxGeometry args={[34, 80, 0.5]} />
                  <meshStandardMaterial color={colors.glass} transparent opacity={0.22} metalness={0.9} roughness={0.08} envMapIntensity={1.5} />
               </mesh>

               {/* Internal Server Indicators */}
               {Array.from({ length: 8 }).map((_, k) => (
                 <mesh key={`server-light-${k}`} position={[0, k * 8 - 28, i === 0 ? 1.5 : -1.5]}>
                    <boxGeometry args={[30, 1, 1]} />
                    <meshStandardMaterial color="#1e3a8a" emissive="#3b82f6" emissiveIntensity={0.8} />
                 </mesh>
               ))}

               {/* Vertical Blue LED Edge Strips */}
               <mesh position={[-18, 10, i === 0 ? 4.5 : -4.5]}>
                  <boxGeometry args={[0.5, 100, 0.5]} />
                  <meshStandardMaterial color="#ffffff" emissive="#3b82f6" emissiveIntensity={3} />
               </mesh>
            </group>
          ))}
          
          {/* EDGE LIGHTING */}
          <mesh position={[0, WORLD_HEIGHT / 2 - 1, i === 0 ? 4.2 : -4.2]}>
             <boxGeometry args={[WORLD_DEPTH, 0.5, 0.5]} />
             <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
