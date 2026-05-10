"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ServerModule({ position, serverId = 0 }: { position: [number, number, number], serverId?: number }) {
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
             {/* 💡 DEEPLY RANDOMIZED "SEVERE WORK" LEDS */}
             <StatusLED bladeIndex={i} serverId={serverId} />
          </group>
        </group>
      ))}

      {/* 🛡️ LAYER 6: POWER MODULE */}
      <mesh position={[0, 0.8, 4.1]}>
         <boxGeometry args={[SERVER_WIDTH - 2, 1, 0.5]} />
         <meshStandardMaterial color="#334155" metalness={0.8} />
      </mesh>
      
      {/* 🛡️ LAYER 7: CABLE PORTS */}
      {[-3, -1, 1, 3].map((x, j) => (
        <mesh key={`port-${j}`} position={[x, 0.8, 4.35]} rotation={[Math.PI / 2, 0, 0]}>
           <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
           <meshStandardMaterial color="#020617" />
        </mesh>
      ))}
    </group>
  );
}

function StatusLED({ bladeIndex, serverId }: { bladeIndex: number, serverId: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  
  // Create a deep unique seed for this specific LED
  const config = useMemo(() => {
    const seed = serverId * 100 + bladeIndex;
    return {
      baseRate: 5 + (seed % 7) * 4,
      burstRate: 20 + (seed % 13) * 15,
      pattern: seed % 4, // 0: Burst, 1: Glitch, 2: Heavy Load, 3: Sync Stutter
      color: seed % 7 === 0 ? "#ef4444" : seed % 4 === 0 ? "#f59e0b" : "#3b82f6",
      offset: seed * 0.317, // Irregular offset
      dutyCycle: 0.3 + (seed % 10) * 0.05
    };
  }, [bladeIndex, serverId]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current && glowRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      const glowMat = glowRef.current.material as THREE.MeshBasicMaterial;
      
      let intensity = 0;
      let glowScale = 1;

      // 🎭 DEEPLY RANDOMIZED BEHAVIOR
      const seedTime = t + config.offset;

      if (config.pattern === 0) {
        // Pattern 0: Irregular Data Bursts
        const cycle = seedTime % (2 + (serverId % 3));
        if (cycle < 0.5) {
           intensity = Math.sin(t * config.burstRate) > 0 ? 25 : 0;
           glowScale = 2.5;
        } else {
           intensity = 0.5;
           glowScale = 0.6;
        }
      } else if (config.pattern === 1) {
        // Pattern 1: Glitch Work (Randomized rapid flicker)
        const noise = Math.sin(t * 50) * Math.cos(t * 23);
        intensity = noise > 0 ? 15 : 0.1;
        glowScale = 1.5 + noise * 0.5;
      } else if (config.pattern === 2) {
        // Pattern 2: Heavy Compute Pulse (Exponential surge)
        const p = Math.sin(t * config.baseRate);
        intensity = 1 + Math.pow(Math.max(0, p), 3) * 35;
        glowScale = 1 + Math.max(0, p) * 2;
      } else {
        // Pattern 3: Sequential Cluster Sync (Simulates raid/parity work)
        const syncTime = (t * 8 + serverId) % 16;
        const isActive = Math.abs(syncTime - bladeIndex) < 1.5;
        intensity = isActive ? 20 : 0.5;
        glowScale = isActive ? 2.2 : 0.8;
      }

      mat.emissiveIntensity = intensity;
      glowMat.opacity = Math.min(intensity * 0.03, 0.5);
      glowRef.current.scale.setScalar(glowScale);
    }
  });

  return (
    <group position={[0.6, 0, 0.15]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[0.25, 0.25]} />
        <meshStandardMaterial 
          color={config.color} 
          emissive={config.color}
          emissiveIntensity={1}
          transparent
        />
      </mesh>
      <mesh ref={glowRef}>
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial 
          color={config.color} 
          transparent 
          opacity={0.1} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
