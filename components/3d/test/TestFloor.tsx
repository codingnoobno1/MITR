"use client";

import React, { useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { DataFlowFloor } from "./DataFlowFloor";

export function TestFloor() {
  const WORLD_WIDTH = 420;
  const WORLD_DEPTH = 340;
  
  const trenchMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#0f172a",
    emissive: "#38bdf8",
    emissiveIntensity: 0.35,
    metalness: 1,
    roughness: 0.1
  }), []);

  // Removed pulsing for a more static, premium feel
  useFrame((state) => {
    // Subtle breathing only
    const time = state.clock.getElapsedTime();
    trenchMaterial.emissiveIntensity = 0.3 + Math.sin(time * 0.5) * 0.05;
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* Mirror-like Substrate (Dark Graphite) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[WORLD_WIDTH, WORLD_DEPTH]} />
        <meshStandardMaterial 
          color="#020617" 
          roughness={0.15} 
          metalness={0.9} 
        />
      </mesh>

      {/* 🧱 FLOOR SEAMS & TILES */}
      {Array.from({ length: 20 }).map((_, i) => (
        Array.from({ length: 15 }).map((_, j) => {
          const x = i * 21.6 - (20 * 21.6) / 2;
          const z = j * 21.6 - (15 * 21.6) / 2;
          
          // Only show glow in center aisle and side walkways
          const isAisle = Math.abs(x) < 20 || Math.abs(x) > 180;
          
          return (
            <group key={`floor-tile-${i}-${j}`} position={[x, 0.05, z]}>
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                 <planeGeometry args={[21.2, 21.2]} />
                 <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.9} envMapIntensity={0.5} />
              </mesh>
              
              {/* Subtle Cyan Seams (Glow) */}
              {isAisle && (
                <>
                  <mesh position={[10.8, 0, 0]} material={trenchMaterial}>
                    <boxGeometry args={[0.1, 0.05, 21.6]} />
                  </mesh>
                  <mesh position={[0, 0, 10.8]} material={trenchMaterial}>
                    <boxGeometry args={[21.6, 0.05, 0.1]} />
                  </mesh>
                </>
              )}

              {/* Industrial Cable Hatches */}
              {i % 4 === 0 && j % 4 === 0 && (
                <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[4, 4]} />
                  <meshStandardMaterial color="#cbd5e1" roughness={0.7} metalness={0.5} />
                </mesh>
              )}
            </group>
          );
        })
      ))}
    </group>
  );
}
