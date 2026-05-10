"use client";

import React, { useMemo } from "react";
import { MeshReflectorMaterial, Float, Box, Text } from "@react-three/drei";
import * as THREE from "three";
import { palette, materials } from "../materials/palette";

// Base Reflection Plane
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
        color="#e2e8f0"
        metalness={0.5}
      />
    </mesh>
  );
}

// Reusable Infrastructure Tower
function NetworkTower({ position, label }: { position: [number, number, number], label: string }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[1, 12, 1]} />
        <meshStandardMaterial {...materials.infrastructure.tower} />
      </mesh>
      <mesh position={[0, 6, 0]}>
        <boxGeometry args={[1.2, 0.2, 1.2]} />
        <meshStandardMaterial color={palette.cobalt} emissive={palette.cobalt} emissiveIntensity={2} />
      </mesh>
      <Text
        position={[0, 7, 0]}
        fontSize={0.5}
        color={palette.slate}
        anchorX="center"
      >
        {label}
      </Text>
    </group>
  );
}

export function InfrastructureCity() {
  return (
    <group>
      {/* AI CORE DISTRICT */}
      <group position={[0, 0, 0]}>
        <NetworkTower position={[-10, 0, -20]} label="AI-ORCHESTRATOR" />
        <NetworkTower position={[10, 0, -15]} label="NEURAL-ROUTING" />
        {/* Foundation Grid */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
           <planeGeometry args={[100, 100]} />
           <meshStandardMaterial color={palette.substrate} opacity={0.5} transparent />
        </mesh>
      </group>

      {/* DEVSECOPS SECTOR */}
      <group position={[150, 0, 0]}>
        <NetworkTower position={[0, 0, -25]} label="SECURITY-SCANNER" />
        <NetworkTower position={[20, 0, -10]} label="CI-CD-PIPELINE" />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
           <planeGeometry args={[100, 100]} />
           <meshStandardMaterial color={palette.substrate} opacity={0.3} transparent />
        </mesh>
      </group>

      {/* CLOUD FABRIC */}
      <group position={[300, 0, 0]}>
        <NetworkTower position={[-15, 0, -30]} label="HYBRID-CLOUD" />
        <NetworkTower position={[15, 0, -20]} label="EDGE-COMPUTE" />
      </group>
    </group>
  );
}
