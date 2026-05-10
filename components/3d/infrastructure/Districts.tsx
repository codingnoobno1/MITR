"use client";

import React, { useMemo, useRef } from "react";
import { MeshReflectorMaterial, Float, Box, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { palette, materials } from "../materials/palette";

// Reusable Server Rack Component
function ServerRack({ position, label, active = false }: { position: [number, number, number], label: string, active?: boolean }) {
  const lightRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (active) {
      const t = state.clock.getElapsedTime();
      lightRef.current.material.opacity = (Math.sin(t * 10) + 1) / 2;
    }
  });

  return (
    <group position={position}>
      {/* Main Rack Body */}
      <mesh castShadow>
        <boxGeometry args={[4, 8, 2]} />
        <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Rack Interior / Slots */}
      {[...Array(10)].map((_, i) => (
        <group key={i} position={[0, (i / 1.25) - 3.5, 0.9]}>
           <mesh>
             <boxGeometry args={[3.6, 0.4, 0.2]} />
             <meshStandardMaterial color="#0f172a" />
           </mesh>
           {/* Status Light */}
           <mesh position={[1.5, 0, 0.1]} ref={active && i % 3 === 0 ? lightRef : null}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial 
                color={i % 4 === 0 ? palette.danger : palette.success} 
                emissive={i % 4 === 0 ? palette.danger : palette.success} 
                emissiveIntensity={2} 
                transparent
              />
           </mesh>
        </group>
      ))}

      <Text
        position={[0, 4.5, 0]}
        fontSize={0.3}
        color={palette.silver}
        anchorX="center"
      >
        {label}
      </Text>
    </group>
  );
}

export function ReflectionPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#0f172a"
        metalness={0.8}
      />
    </mesh>
  );
}

export function InfrastructureCity() {
  return (
    <group>
      {/* AISLE 01 - AI CORE */}
      <group position={[0, 3, -15]}>
        <ServerRack position={[-10, 0, 0]} label="NODE-AI-01" active />
        <ServerRack position={[-5, 0, 0]} label="NODE-AI-02" />
        <ServerRack position={[0, 0, 0]} label="NODE-AI-03" active />
        <ServerRack position={[5, 0, 0]} label="NODE-AI-04" />
        <ServerRack position={[10, 0, 0]} label="NODE-AI-05" active />
      </group>

      {/* AISLE 02 - DEVSECOPS */}
      <group position={[150, 3, -15]}>
        <ServerRack position={[-10, 0, 0]} label="SEC-CLUSTER-A" active />
        <ServerRack position={[0, 0, 0]} label="SEC-CLUSTER-B" />
        <ServerRack position={[10, 0, 0]} label="SEC-CLUSTER-C" active />
      </group>

      {/* AISLE 03 - CLOUD FABRIC */}
      <group position={[300, 3, -15]}>
        <ServerRack position={[-15, 0, 0]} label="HYBRID-CLOUD-X" active />
        <ServerRack position={[0, 0, 0]} label="HYBRID-CLOUD-Y" active />
        <ServerRack position={[15, 0, 0]} label="HYBRID-CLOUD-Z" active />
      </group>
    </group>
  );
}
