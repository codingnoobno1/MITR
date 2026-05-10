"use client";

import React from "react";
import { palette } from "../materials/palette";

export function Atmosphere() {
  return (
    <>
      <color attach="background" args={["#0c1222"]} />
      {/* Fog far away — keep everything crystal clear nearby */}
      <fog attach="fog" args={["#0c1222", 120, 350]} />
      
      {/* Strong even ambient */}
      <ambientLight intensity={0.8} />
      
      {/* Overhead white lights spread across room */}
      {[-80, -40, 0, 40, 80, 120].map((x, i) => (
        <group key={`light-${i}`}>
          <pointLight position={[x, 13, -15]} intensity={3} color="#e2e8f0" distance={50} />
          <pointLight position={[x, 13, 5]} intensity={2} color="#e2e8f0" distance={50} />
        </group>
      ))}
      
      {/* Blue aisle accent */}
      <pointLight position={[0, 0.5, -5]} intensity={1.5} color="#315b9c" distance={40} />
      <pointLight position={[80, 0.5, -5]} intensity={1.5} color="#315b9c" distance={40} />
    </>
  );
}

export function ServerRoomEnclosure() {
  return (
    <group>
      {/* Ceiling */}
      <mesh position={[0, 14, -10]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[600, 150]} />
        <meshStandardMaterial color="#1a2332" roughness={0.4} metalness={0.3} />
      </mesh>
      
      {/* Ceiling grid lines */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh key={`cg-${i}`} position={[i * 20 - 300, 13.95, -10]}>
          <boxGeometry args={[0.03, 0.03, 150]} />
          <meshStandardMaterial color="#2d3a4a" />
        </mesh>
      ))}
      
      {/* Floor — dark polished */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -10]} receiveShadow>
        <planeGeometry args={[600, 150]} />
        <meshStandardMaterial color="#111827" roughness={0.2} metalness={0.5} />
      </mesh>

      {/* Floor tile grid */}
      {Array.from({ length: 60 }).map((_, i) => (
        <mesh key={`fg-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[i * 10 - 300, -0.49, -10]}>
          <planeGeometry args={[0.02, 150]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      ))}
      
      {/* Back Wall */}
      <mesh position={[0, 7, -60]}>
        <planeGeometry args={[600, 30]} />
        <meshStandardMaterial color="#0f172a" roughness={0.9} />
      </mesh>

      {/* LED floor strips */}
      {[-20, 0, 20, 40, 60, 80].map((x, i) => (
        <mesh key={`strip-${i}`} position={[x, -0.45, -15]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.1, 100]} />
          <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}
