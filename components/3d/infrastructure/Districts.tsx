"use client";

import React, { useRef } from "react";
import { Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { palette } from "../materials/palette";

const CLOUD_PROVIDERS = [
  { name: "AWS", logo: "/tech/aws.jpeg", color: "#FF9900" },
  { name: "AZURE", logo: "/tech/azurelogo.jpg", color: "#0078D4" },
  { name: "K8S", logo: "/tech/kubernetes.png", color: "#326CE5" },
] as const;

// Clean, clear server rack — reduced poly, bigger, readable
export function ServerRack({ 
  position, 
  label, 
  active = false,
  provider = 0,
}: { 
  position: [number, number, number]; 
  label: string; 
  active?: boolean;
  provider?: number;
}) {
  const lightRef = useRef<THREE.Mesh>(null!);
  const info = CLOUD_PROVIDERS[provider % CLOUD_PROVIDERS.length];
  const logoTex = useTexture(info.logo);
  const HEIGHT = 10;
  const SLOTS = 6; // Reduced from 10 — cleaner, less dense

  useFrame((state) => {
    if (active && lightRef.current) {
      const mat = lightRef.current.material as THREE.MeshStandardMaterial;
      if (mat) mat.emissiveIntensity = 2 + Math.sin(state.clock.getElapsedTime() * 6) * 1.5;
    }
  });

  return (
    <group position={position}>
      {/* Rack Frame */}
      <mesh castShadow>
        <boxGeometry args={[4, HEIGHT, 2.5]} />
        <meshStandardMaterial color="#1a2332" roughness={0.2} metalness={0.7} />
      </mesh>
      
      {/* Front Panel */}
      <mesh position={[0, 0, 1.26]}>
        <planeGeometry args={[3.6, HEIGHT - 0.4]} />
        <meshStandardMaterial color="#111827" roughness={0.3} />
      </mesh>

      {/* Server Units */}
      {Array.from({ length: SLOTS }).map((_, i) => {
        const y = (i - SLOTS / 2 + 0.5) * (HEIGHT / SLOTS);
        return (
          <group key={i} position={[0, y, 1.2]}>
            <mesh>
              <boxGeometry args={[3.4, 1, 0.2]} />
              <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.5} />
            </mesh>
            {/* Green LED */}
            <mesh position={[1.4, 0.2, 0.11]}>
              <circleGeometry args={[0.08, 8]} />
              <meshStandardMaterial 
                color={palette.success} 
                emissive={palette.success} 
                emissiveIntensity={active ? 3 : 0.5} 
              />
            </mesh>
            {/* Blue activity LED */}
            <mesh position={[1.4, -0.2, 0.11]}>
              <circleGeometry args={[0.06, 8]} />
              <meshStandardMaterial 
                color={palette.cobalt} 
                emissive={palette.cobalt} 
                emissiveIntensity={active ? 2 : 0.3} 
              />
            </mesh>
          </group>
        );
      })}

      {/* Cloud logo */}
      <mesh position={[0, HEIGHT / 2 + 0.01, 0.5]} rotation={[-Math.PI / 5, 0, 0]}>
        <planeGeometry args={[1.8, 1.8]} />
        <meshStandardMaterial map={logoTex} transparent roughness={0.5} />
      </mesh>

      {/* Provider accent bar */}
      <mesh position={[0, -HEIGHT / 2, 1.27]} ref={lightRef}>
        <planeGeometry args={[3.8, 0.12]} />
        <meshStandardMaterial color={info.color} emissive={info.color} emissiveIntensity={3} />
      </mesh>

      {/* Label */}
      <Text position={[0, HEIGHT / 2 + 1.2, 0]} fontSize={0.35} color={palette.silver} anchorX="center">
        {label}
      </Text>
      <Text position={[0, HEIGHT / 2 + 0.6, 1]} fontSize={0.3} color={info.color} anchorX="center">
        {info.name}
      </Text>
    </group>
  );
}

// Generate servers from product data
export function DynamicInfrastructure({ products }: { products: Array<{ name: string; status?: string }> }) {
  return (
    <group>
      {products.map((product, i) => (
        <ServerRack
          key={product.name}
          position={[i * 10 - (products.length * 5), 5, -25]}
          label={product.name.toUpperCase()}
          active={product.status === "active"}
          provider={i}
        />
      ))}
    </group>
  );
}
