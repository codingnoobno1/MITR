"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";

export function TestHardware() {
  return (
    <group>
      {/* 1. CENTRAL OPERATIONAL GRID (Floor Mounted) */}
      <group position={[0, 0, -30]}>
        {Array.from({ length: 6 }).map((_, row) => (
          <group key={`row-${row}`} position={[0, 0, row * 25 - 100]}>
            {[-35, -15, 15, 35].map((xPos, col) => (
              <OperationalNode 
                key={`node-${row}-${col}`} 
                position={[xPos, 0, 0]} 
                height={8 + (row % 2) * 4} 
              />
            ))}
          </group>
        ))}
      </group>

      {/* 2. MAIN INFRASTRUCTURE HOLO-CORE */}
      <group position={[0, 25, -160]}>
         <Float speed={3} rotationIntensity={0.2} floatIntensity={1}>
            <CloudHologram />
         </Float>
         
         {/* Hologram Base / Radar Platform */}
         <mesh position={[0, -25.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[10, 15, 64]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={5} transparent opacity={0.5} />
         </mesh>
         <mesh position={[0, -25.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[20, 64]} />
            <meshStandardMaterial color="#1e293b" metalness={1} roughness={0} />
         </mesh>
      </group>

      {/* 3. SIDE SECTOR TOWERS (Deep Background) */}
      <group position={[-120, 0, -100]}>
         {Array.from({ length: 5 }).map((_, i) => (
            <ServerTower key={`bg-l-${i}`} position={[0, 0, i * 40]} height={40} />
         ))}
      </group>
      <group position={[120, 0, -100]}>
         {Array.from({ length: 5 }).map((_, i) => (
            <ServerTower key={`bg-r-${i}`} position={[0, 0, i * 40]} height={40} />
         ))}
      </group>
    </group>
  );
}

function OperationalNode({ position, height }: { position: [number, number, number], height: number }) {
  return (
    <group position={position}>
      {/* Chassis */}
      <mesh position={[0, height / 2, 0]} castShadow>
        <boxGeometry args={[14, height, 18]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Top Cooling Vent */}
      <mesh position={[0, height + 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 16]} />
        <meshStandardMaterial color="#1e293b" emissive="#3b82f6" emissiveIntensity={0.2} />
      </mesh>

      {/* Status Indicators (Blue LED strips) */}
      {[-6.1, 6.1].map((xOff, i) => (
        <mesh key={`led-${i}`} position={[xOff, height / 2, 0]}>
          <boxGeometry args={[0.2, height - 2, 16]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

function CloudHologram() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/MITR.png"); 

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.2;
    }
  });

  return (
    <group>
      {/* Core Cloud Logo */}
      <mesh ref={meshRef}>
        <planeGeometry args={[40, 30]} />
        <meshBasicMaterial 
          map={texture} 
          transparent 
          opacity={0.6} 
          color="#93c5fd" 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Volumetric Glow Rings */}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={`ring-${i}`} rotation={[Math.PI / 2, 0, 0]} position={[0, -15 + i * 5, 0]}>
           <torusGeometry args={[10 + i * 5, 0.05, 16, 100]} />
           <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={2} transparent opacity={0.3} />
        </mesh>
      ))}

      {/* Vertical Data Streams */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = ((i * 13) % 40) - 20;
        const z = ((i * 7) % 20) - 10;
        return (
          <mesh key={`stream-${i}`} position={[x, -10, z]}>
             <cylinderGeometry args={[0.1, 0.1, 40, 8]} />
             <meshBasicMaterial color="#60a5fa" transparent opacity={0.2} />
          </mesh>
        );
      })}
    </group>
  );
}

function ServerTower({ position, height }: { position: [number, number, number], height: number }) {
  return (
    <group position={position}>
      <mesh position={[0, height / 2, 0]} castShadow>
        <boxGeometry args={[18, height, 18]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Recessed Lighting */}
      <mesh position={[0, height / 2, 9.1]}>
         <boxGeometry args={[14, height - 4, 0.2]} />
         <meshStandardMaterial color="#020617" />
      </mesh>
    </group>
  );
}
