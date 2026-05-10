"use client";

import React from "react";
import * as THREE from "three";
import { Text, useTexture } from "@react-three/drei";

export function BrandSignage() {
  const mitrTexture = useTexture("/MITR.png");

  return (
    <group>
  return (
    <group>
      {/* 🛡️ LEFT WALL: KARYA BUILDING SOLUTIONS */}
      <group position={[-205, 60, -40]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0, -0.5]}>
          <boxGeometry args={[120, 30, 0.5]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        
        {/* KARYA Logo Outline */}
        <mesh position={[-40, 0, 0.1]}>
          <boxGeometry args={[12, 14, 0.1]} />
          <meshStandardMaterial color="#1e3a8a" emissive="#3b82f6" emissiveIntensity={0.5} />
        </mesh>

        <Text
          position={[-25, 2, 0.1]}
          fontSize={14}
          color="#3b82f6"
          anchorX="left"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff"
        >
          KARYA
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.4} />
        </Text>
      </group>

      {/* 🛡️ RIGHT WALL: SANKALAP IGNITING POSSIBILITIES */}
      <group position={[205, 60, -40]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0, -0.5]}>
          <boxGeometry args={[120, 30, 0.5]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        
        {/* SANKALAP Logo Outline */}
        <mesh position={[-50, 0, 0.1]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[10, 10, 0.1]} />
          <meshStandardMaterial color="#166534" emissive="#22c55e" emissiveIntensity={0.5} />
        </mesh>

        <Text
          position={[-35, 2, 0.1]}
          fontSize={12}
          color="#22c55e"
          anchorX="left"
          anchorY="middle"
        >
          SANKALAP
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.4} />
        </Text>
      </group>

      {/* 🛡️ BACK WALL: MITR CENTRAL CORE */}
      <group position={[0, 60, -169]}>
        <mesh position={[0, 0, -0.5]}>
          <boxGeometry args={[200, 40, 1]} />
          <meshStandardMaterial color="#020617" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* MITR Glowing Hexagon Details */}
        <mesh position={[-70, 0, 0.1]} rotation={[0, 0, Math.PI / 2]}>
           <cylinderGeometry args={[12, 12, 0.5, 6]} />
           <meshStandardMaterial color="#0f172a" emissive="#38bdf8" emissiveIntensity={0.6} />
        </mesh>

        {/* MITR Logo Image */}
        <mesh position={[-70, 0, 0.6]}>
           <planeGeometry args={[14, 14]} />
           <meshBasicMaterial map={mitrTexture} transparent opacity={0.6} color="#38bdf8" />
        </mesh>

        <Text
          position={[-50, 4, 0.1]}
          fontSize={16}
          color="#38bdf8"
          anchorX="left"
          anchorY="middle"
        >
          MITR
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
        </Text>
        <Text
          position={[-48, -6, 0.1]}
          fontSize={5}
          color="#64748b"
          anchorX="left"
          anchorY="middle"
        >
          CENTRAL ORCHESTRATION ENGINE
        </Text>

        {/* Technical Data Stream Details */}
        <group position={[20, 0, 0]}>
          {Array.from({length: 6}).map((_, i) => (
             <mesh key={`data-panel-${i}`} position={[i * 12, 0, 0.1]}>
                <boxGeometry args={[10, 20, 0.1]} />
                <meshStandardMaterial color="#0f172a" emissive="#0ea5e9" emissiveIntensity={0.1} />
             </mesh>
          ))}
          <mesh position={[30, -12, 0.2]}>
             <boxGeometry args={[70, 0.2, 0.1]} />
             <meshStandardMaterial color="#1e293b" emissive="#38bdf8" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
    </group>
  );
}
