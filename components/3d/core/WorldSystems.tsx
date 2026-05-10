"use client";

import React from "react";
import { palette } from "../materials/palette";

export function Atmosphere() {
  return (
    <>
      <color attach="background" args={["#0c1222"]} />
      <fog attach="fog" args={["#0c1222", 120, 350]} />
      <ambientLight intensity={0.6} />
      
      {/* Dynamic Lighting Highlights */}
      {[-100, -50, 0, 50, 100, 150].map((x, i) => (
        <group key={`light-${i}`}>
          <pointLight position={[x, 12, -10]} intensity={2.5} color="#e2e8f0" distance={60} />
          <pointLight position={[x, 2, -30]} intensity={1.5} color="#315b9c" distance={40} />
        </group>
      ))}
      
      {/* Accent volumetric light simulation */}
      <spotLight 
        position={[0, 20, 0]} 
        angle={0.15} 
        penumbra={1} 
        intensity={2} 
        color="#315b9c" 
        castShadow 
      />
    </>
  );
}

export function ServerRoomEnclosure() {
  return (
    <group>
      {/* Ceiling with depth */}
      <mesh position={[0, 14, -10]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[800, 200]} />
        <meshStandardMaterial color="#1a2332" roughness={0.4} metalness={0.3} />
      </mesh>
      
      {/* Structural Ceiling Beams */}
      {Array.from({ length: 40 }).map((_, i) => (
        <mesh key={`beam-${i}`} position={[i * 20 - 400, 13.8, -10]}>
          <boxGeometry args={[0.5, 0.4, 200]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
      ))}
      
      {/* Floor — Deep dark with grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -10]} receiveShadow>
        <planeGeometry args={[800, 200]} />
        <meshStandardMaterial color="#0b0f1a" roughness={0.1} metalness={0.6} />
      </mesh>

      {/* Support Pillars for Depth */}
      {[-80, -40, 0, 40, 80, 120].map((x, i) => (
        <group key={`pillar-${i}`} position={[x, 7, -25]}>
          <mesh castShadow>
            <boxGeometry args={[1, 15, 1]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Pillar accent light */}
          <mesh position={[0, -2, 0.51]}>
             <planeGeometry args={[0.2, 8]} />
             <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={2} transparent opacity={0.5} />
          </mesh>
        </group>
      ))}
      
      {/* Back Wall with Panels */}
      <group position={[0, 7, -70]}>
        <mesh>
          <planeGeometry args={[800, 40]} />
          <meshStandardMaterial color="#0f172a" roughness={0.9} />
        </mesh>
        {/* Wall Detail Panels */}
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh key={`panel-${i}`} position={[i * 40 - 400, 0, 0.1]}>
            <boxGeometry args={[38, 30, 0.5]} />
            <meshStandardMaterial color="#161e2e" />
          </mesh>
        ))}
      </group>

      {/* Cable Conduits running along the room */}
      {[-15, 15].map((z, i) => (
        <mesh key={`conduit-${i}`} position={[0, 13, z]}>
          <boxGeometry args={[800, 0.2, 0.2]} />
          <meshStandardMaterial color="#334155" metalness={0.9} />
        </mesh>
      ))}
    </group>
  );
}
