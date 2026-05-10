"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ServerMegastructure() {
  return (
    <group>
      {/* 1. LEFT SIDE - MASSIVE GPU COMPUTE WALL (AI Cluster) */}
      <group position={[-55, 0, -50]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <ComputeTower 
            key={`gpu-tower-${i}`} 
            position={[0, 0, i * 45 - 250]} 
            type="gpu" 
            height={28}
            sector="AI_CORE_CLUSTER"
          />
        ))}
      </group>

      {/* 2. RIGHT SIDE - CLOUD ORCHESTRATION NODES */}
      <group position={[-155, 0, -50]}> {/* Moved further left to create more floor space */}
        {Array.from({ length: 8 }).map((_, i) => (
          <ComputeTower 
            key={`cloud-node-${i}`} 
            position={[0, 0, i * 60 - 200]} 
            type="cloud" 
            height={24}
            sector="CLOUD_SYNC_UPLINK"
          />
        ))}
      </group>

      {/* 3. CENTER REINFORCED GATEWAY SECTOR (Security Cluster) */}
      <group position={[0, 0, 100]}>
         <ComputeTower position={[-30, 0, 0]} type="security" height={32} sector="SEC_GRID_ALPHA" />
         <ComputeTower position={[30, 0, 0]} type="security" height={32} sector="SEC_GRID_BETA" />
      </group>

      {/* 4. ASYMMETRICAL INFRASTRUCTURE BLOCKS (Deployment Nodes) */}
      <group position={[155, 0, -100]}>
        {Array.from({ length: 5 }).map((_, i) => (
           <ComputeTower key={`deploy-${i}`} position={[0, 0, i * 80]} type="deploy" height={20} sector="NODE_X_DEPLOY" />
        ))}
      </group>
    </group>
  );
}

function ComputeTower({ 
  position, 
  type, 
  height, 
  sector 
}: { 
  position: [number, number, number], 
  type: 'gpu' | 'cloud' | 'security' | 'deploy',
  height: number,
  sector: string
}) {
  const pulseRef = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame((state) => {
    if (pulseRef.current) {
      const speed = type === 'gpu' ? 4 : 2;
      pulseRef.current.emissiveIntensity = 1 + Math.sin(state.clock.getElapsedTime() * speed) * 0.8;
    }
  });

  const colors = {
    gpu: { primary: "#3b82f6", glow: "#3b82f6" }, 
    cloud: { primary: "#e2e8f0", glow: "#ffffff" }, 
    security: { primary: "#ef4444", glow: "#ef4444" }, 
    deploy: { primary: "#22c55e", glow: "#22c55e" } 
  };

  const theme = colors[type];

  return (
    <group position={position}>
      {/* 🛠️ FIX: Lift everything by height/2 so it sits on the floor */}
      <group position={[0, height / 2, 0]}>
        {/* LAYER 1: OUTER INDUSTRIAL FRAME */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[12, height, 12]} />
          <meshStandardMaterial 
            color="#1e293b" 
            roughness={0.4} 
            metalness={0.6} 
            emissive="#1e293b"
            emissiveIntensity={0.08}
          />
        </mesh>

        {/* LAYER 2: RACK GRIDS */}
        {[-1, 1].map((side) => (
          <group key={`side-${side}`} position={[side * 6.01, 0, 0]} rotation={[0, side * Math.PI / 2, 0]}>
            <mesh>
              <boxGeometry args={[10, height - 2, 0.5]} />
              <meshStandardMaterial color="#334155" metalness={0.2} roughness={0.8} />
            </mesh>

            {/* LAYER 3: BLADE STACKS */}
            {Array.from({ length: Math.floor(height / 2) }).map((_, j) => (
              <group key={`node-${j}`} position={[0, (j - height/4) * 2, 0.3]}>
                <mesh>
                  <boxGeometry args={[9, 1.2, 0.2]} />
                  <meshStandardMaterial color="#0f172a" />
                </mesh>

                {/* LAYER 4: TELEMETRY */}
                {Array.from({ length: 6 }).map((_, k) => (
                  <mesh key={`led-${k}`} position={[(k - 2.5) * 1.2, 0, 0.11]}>
                    <planeGeometry args={[0.4, 0.2]} />
                    <meshStandardMaterial 
                      color={Math.random() > 0.8 ? "#94a3b8" : theme.primary} 
                      emissive={Math.random() > 0.8 ? "#000000" : theme.glow} 
                      emissiveIntensity={isActive(j, k) ? 2 : 0.2} 
                    />
                  </mesh>
                ))}
              </group>
            ))}
          </group>
        ))}

        {/* LAYER 5: CABLE SPINE */}
        <mesh position={[0, 0, -6.1]}>
          <boxGeometry args={[4, height, 0.5]} />
          <meshStandardMaterial color="#0f1724" />
        </mesh>
        {Array.from({ length: 10 }).map((_, i) => (
          <mesh key={`clamp-${i}`} position={[0, (i - 4.5) * (height/10), -6.3]} rotation={[Math.PI/2, 0, 0]}>
             <torusGeometry args={[1.5, 0.1, 8, 16]} />
             <meshStandardMaterial color="#475569" />
          </mesh>
        ))}

        {/* LAYER 6: SECTOR IDENTIFIER PULSE */}
        <mesh position={[0, height / 2 - 2, 6.1]}>
           <planeGeometry args={[8, 1]} />
           <meshStandardMaterial 
            ref={pulseRef}
            color={theme.primary} 
            emissive={theme.glow} 
            emissiveIntensity={1.5}
            transparent
            opacity={0.8}
           />
        </mesh>

        {/* VENTILATION INTAKES */}
        <mesh position={[0, -height / 2 + 1, 6.1]}>
           <boxGeometry args={[10, 2, 0.2]} />
           <meshStandardMaterial color="#0b1120" />
        </mesh>
      </group>
    </group>
  );
}

function isActive(row: number, col: number) {
  return (row + col) % 3 !== 0;
}
