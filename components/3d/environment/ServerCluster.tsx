"use client";

import React, { useRef } from "react";
import { Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { palette } from "../materials/palette";

const CLOUD_LOGOS = [
  { name: "AWS", logo: "/tech/aws.jpeg", color: "#FF9900" },
  { name: "AZURE", logo: "/tech/azurelogo.jpg", color: "#0078D4" },
  { name: "K8S", logo: "/tech/kubernetes.png", color: "#326CE5" },
];

export function ServerCluster({ 
  position, 
  label, 
  active = false, 
  provider = 0 
}: { 
  position: [number, number, number]; 
  label: string; 
  active?: boolean; 
  provider?: number 
}) {
  const lightRef = useRef<THREE.Mesh>(null!);
  const info = CLOUD_LOGOS[provider % CLOUD_LOGOS.length];
  const logoTex = useTexture(info.logo);
  const HEIGHT = 14;

  useFrame((state) => {
    if (active && lightRef.current) {
      const mat = lightRef.current.material as THREE.MeshStandardMaterial;
      if (mat) mat.emissiveIntensity = 2 + Math.sin(state.clock.getElapsedTime() * 6) * 1.5;
    }
  });

  return (
    <group position={position}>
      {/* Heavy Industrial Rack Frame */}
      <mesh castShadow>
        <boxGeometry args={[6, HEIGHT, 4]} />
        <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.9} />
      </mesh>
      
      {/* Recessed Hardware Bay */}
      <mesh position={[0, 0, 1.8]}>
        <boxGeometry args={[5.2, HEIGHT - 1, 0.5]} />
        <meshStandardMaterial color="#020617" />
      </mesh>

      {/* Individual Blade Units */}
      {Array.from({ length: 8 }).map((_, i) => (
        <group key={`blade-${i}`} position={[0, (i - 3.5) * 1.5, 2]}>
          <mesh>
             <boxGeometry args={[5, 1, 0.2]} />
             <meshStandardMaterial color="#1e293b" metalness={0.6} />
          </mesh>
          {/* Status HUD / Telemetry */}
          <mesh position={[2, 0.2, 0.11]}>
             <planeGeometry args={[0.4, 0.2]} />
             <meshStandardMaterial color={palette.success} emissive={palette.success} emissiveIntensity={2} />
          </mesh>
        </group>
      ))}

      {/* Top Mounting / Cloud Logo */}
      <mesh position={[0, HEIGHT / 2 + 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial map={logoTex} transparent opacity={0.8} />
      </mesh>

      {/* Dynamic Status Bar */}
      <mesh position={[0, -HEIGHT / 2 + 0.5, 2.01]} ref={lightRef}>
        <planeGeometry args={[5, 0.1]} />
        <meshStandardMaterial color={info.color} emissive={info.color} emissiveIntensity={3} />
      </mesh>

      <Text position={[0, HEIGHT / 2 + 2, 0]} fontSize={0.5} color={palette.silver}>{label}</Text>
    </group>
  );
}

export function ServerCorridor() {
  return (
    <group>
      {/* Aisle One: AWS Cluster */}
      <group position={[-40, 7, -20]}>
        {[-80, -40, 0, 40, 80].map((z, i) => (
          <ServerCluster key={`aws-${i}`} position={[0, 0, z]} label={`AWS-S-${i+1}`} active={i % 2 === 0} provider={0} />
        ))}
      </group>

      {/* Aisle Two: AZURE Cluster */}
      <group position={[40, 7, -20]}>
        {[-80, -40, 0, 40, 80].map((z, i) => (
          <ServerCluster key={`az-${i}`} position={[0, 0, z]} label={`AZ-S-${i+1}`} active provider={1} />
        ))}
      </group>
    </group>
  );
}
