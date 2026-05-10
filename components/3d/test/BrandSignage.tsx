"use client";

import React from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

export function BrandSignage() {
  return (
    <group>
      {/* 🛡️ LEFT WALL: KARYA BUILDING SOLUTIONS */}
      <group position={[-205, 60, -40]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0, -0.5]}>
          <boxGeometry args={[120, 30, 1]} />
          <meshStandardMaterial color="#f8fafc" emissive="#ffffff" emissiveIntensity={0.2} roughness={0.4} />
        </mesh>
        
        {/* KARYA Logo Outline */}
        <mesh position={[-40, 0, 0.1]}>
          <boxGeometry args={[12, 14, 0.2]} />
          <meshStandardMaterial color="#2563eb" emissive="#3b82f6" emissiveIntensity={1.5} />
        </mesh>
        <mesh position={[-40, 0, 0.2]}>
          <boxGeometry args={[10, 12, 0.2]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>

        <Text
          position={[-25, 2, 0.1]}
          fontSize={14}
          color="#2563eb"
          anchorX="left"
          anchorY="middle"
          font="/fonts/Inter-Bold.ttf"
          characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"
        >
          KARYA
          <meshStandardMaterial color="#2563eb" emissive="#3b82f6" emissiveIntensity={1} />
        </Text>
        <Text
          position={[-24, -8, 0.1]}
          fontSize={4}
          color="#334155"
          anchorX="left"
          anchorY="middle"
          font="/fonts/Inter-Regular.ttf"
        >
          BUILDING SOLUTIONS
        </Text>
      </group>

      {/* 🛡️ RIGHT WALL: SANKALAP IGNITING POSSIBILITIES */}
      <group position={[205, 60, -40]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0, -0.5]}>
          <boxGeometry args={[120, 30, 1]} />
          <meshStandardMaterial color="#f8fafc" emissive="#ffffff" emissiveIntensity={0.2} roughness={0.4} />
        </mesh>
        
        {/* SANKALAP Logo Outline */}
        <mesh position={[-50, 0, 0.1]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[10, 10, 0.2]} />
          <meshStandardMaterial color="#16a34a" emissive="#22c55e" emissiveIntensity={1.5} />
        </mesh>
        <mesh position={[-50, 0, 0.2]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[8, 8, 0.2]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>

        <Text
          position={[-35, 2, 0.1]}
          fontSize={12}
          color="#16a34a"
          anchorX="left"
          anchorY="middle"
          font="/fonts/Inter-Bold.ttf"
        >
          SANKALAP
          <meshStandardMaterial color="#16a34a" emissive="#22c55e" emissiveIntensity={1} />
        </Text>
        <Text
          position={[-34, -8, 0.1]}
          fontSize={4}
          color="#334155"
          anchorX="left"
          anchorY="middle"
          font="/fonts/Inter-Regular.ttf"
        >
          IGNITING POSSIBILITIES
        </Text>
      </group>
    </group>
  );
}
