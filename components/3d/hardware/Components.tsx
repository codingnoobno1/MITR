"use client";

import React from "react";
import { Box, Text } from "@react-three/drei";
import { hardwareColors } from "../materials/palette";

export function CPUChip({ position, size = [3, 0.6, 3], label = "MITR-ORCHESTRATOR" }: { position: [number, number, number], size?: [number, number, number], label?: string }) {
  return (
    <group position={position}>
      {/* Main Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial 
          color={hardwareColors.chip} 
          roughness={0.55} 
          metalness={0.35} 
        />
      </mesh>
      
      {/* Emissive Border */}
      <mesh position={[0, size[1] / 2 + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[size[0] - 0.1, size[2] - 0.1]} />
        <meshStandardMaterial 
          color={hardwareColors.traceActive} 
          emissive={hardwareColors.traceActive} 
          emissiveIntensity={1.5} 
          transparent 
          opacity={0.1}
        />
      </mesh>

      {/* Label */}
      <Text
        position={[0, size[1] / 2 + 0.05, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.15}
        color={hardwareColors.tracePassive}
      >
        {label}
      </Text>

      {/* Pins */}
      {[...Array(12)].map((_, i) => (
        <React.Fragment key={i}>
          <mesh position={[(i / 6 - 0.9) * size[0], -size[1] / 2, size[2] / 2 + 0.1]}>
             <boxGeometry args={[0.1, 0.2, 0.2]} />
             <meshStandardMaterial color={hardwareColors.capacitorCap} metalness={0.8} />
          </mesh>
          <mesh position={[(i / 6 - 0.9) * size[0], -size[1] / 2, -size[2] / 2 - 0.1]}>
             <boxGeometry args={[0.1, 0.2, 0.2]} />
             <meshStandardMaterial color={hardwareColors.capacitorCap} metalness={0.8} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
}

export function Capacitor({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.8, 16]} />
        <meshStandardMaterial color={hardwareColors.capacitorBody} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.41, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.05, 16]} />
        <meshStandardMaterial color={hardwareColors.capacitorCap} metalness={0.8} />
      </mesh>
    </group>
  );
}
