"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ServerModule({ position }: { position: [number, number, number] }) {
  const SERVER_WIDTH = 10;
  const SERVER_HEIGHT = 14;
  const SERVER_DEPTH = 8;

  return (
    <group position={position}>
      {/* 🛡️ LAYER 1: OUTER REINFORCED SHELL */}
      <mesh position={[0, SERVER_HEIGHT / 2, 0]} castShadow>
        <boxGeometry args={[SERVER_WIDTH, SERVER_HEIGHT, SERVER_DEPTH]} />
        <meshStandardMaterial color="#111827" roughness={0.7} metalness={0.4} />
      </mesh>

      {/* Side Handles */}
      {[-1, 1].map((side) => (
        <group key={`handle-${side}`} position={[side * (SERVER_WIDTH / 2 + 0.2), SERVER_HEIGHT / 2, 0]}>
           <mesh>
              <boxGeometry args={[0.2, 4, 1]} />
              <meshStandardMaterial color="#334155" />
           </mesh>
           <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 3.8, 8]} />
              <meshStandardMaterial color="#475569" metalness={0.8} />
           </mesh>
        </group>
      ))}

      {/* 🛡️ LAYER 2: INNER CHASSIS */}
      <mesh position={[0, SERVER_HEIGHT / 2, 0.4]}>
        <boxGeometry args={[SERVER_WIDTH - 0.8, SERVER_HEIGHT - 1.2, SERVER_DEPTH]} />
        <meshStandardMaterial color="#0f172a" roughness={1} />
      </mesh>

      {/* 🛡️ LAYER 3: SERVER BLADE UNITS */}
      {Array.from({ length: 8 }).map((_, i) => (
        <group key={`blade-${i}`} position={[0, i * 1.4 + 2, 4.2]}>
          <mesh>
            <boxGeometry args={[SERVER_WIDTH - 1.2, 0.9, 0.8]} />
            <meshStandardMaterial color="#1e293b" metalness={0.6} />
          </mesh>
          
          {/* 🛡️ LAYER 4: COOLING VENTS */}
          <mesh position={[0, 0, 0.41]}>
             <planeGeometry args={[7, 0.6]} />
             <meshStandardMaterial color="#020617" roughness={1} />
          </mesh>
          {Array.from({ length: 12 }).map((_, j) => (
            <mesh key={`vent-${j}`} position={[j * 0.5 - 2.75, 0, 0.42]}>
               <boxGeometry args={[0.05, 0.5, 0.05]} />
               <meshBasicMaterial color="#111827" />
            </mesh>
          ))}

          {/* 🛡️ LAYER 5: TELEMETRY & LED STRIPS */}
          <group position={[3.5, 0, 0.45]}>
             <mesh>
                <planeGeometry args={[0.8, 0.2]} />
                <meshStandardMaterial 
                  color={i % 3 === 0 ? "#1e3a8a" : "#0f172a"} 
                  emissive={i % 3 === 0 ? "#22d3ee" : "#3b82f6"}
                  emissiveIntensity={0.2}
                />
             </mesh>
             {/* 💡 ANIMATED STATUS LEDS */}
             <StatusLED index={i} />
          </group>
        </group>
      ))}

      {/* 🛡️ LAYER 6: POWER MODULE */}
      <mesh position={[0, 0.8, 4.1]}>
         <boxGeometry args={[SERVER_WIDTH - 2, 1, 0.5]} />
         <meshStandardMaterial color="#334155" metalness={0.8} />
      </mesh>
      
      {/* 🛡️ LAYER 7: CABLE PORTS */}
      {[-3, -1, 1, 3].map((x, i) => (
        <mesh key={`port-${i}`} position={[x, 0.8, 4.35]} rotation={[Math.PI / 2, 0, 0]}>
           <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
           <meshStandardMaterial color="#020617" />
        </mesh>
      ))}
    </group>
  );
}

function StatusLED({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  const config = useMemo(() => ({
    rate: 3 + (index % 4) * 2, // Faster rates
    phase: (index * 1.5) % (Math.PI * 2),
    color: index % 4 === 0 ? "#ef4444" : index % 3 === 0 ? "#22c55e" : "#60a5fa"
  }), [index]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      const pulse = Math.sin(time * config.rate + config.phase);
      
      // Much more dramatic blinking
      if (index % 2 === 0) {
        // Binary blink
        mat.emissiveIntensity = pulse > 0.5 ? 5 : 0.1;
      } else {
        // Smooth fast pulse
        mat.emissiveIntensity = 0.5 + (pulse * 0.5 + 0.5) * 4;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0.6, 0, 0.1]}>
      <planeGeometry args={[0.2, 0.2]} />
      <meshStandardMaterial 
        color={config.color} 
        emissive={config.color}
        emissiveIntensity={1}
        transparent
      />
    </mesh>
  );
}
