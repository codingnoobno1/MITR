"use client";

import React, { useMemo, useRef } from "react";
import { MeshReflectorMaterial, Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { palette } from "../materials/palette";

// Cloud provider config — logos from /public/tech
const CLOUD_PROVIDERS = [
  { name: "AWS", logo: "/tech/aws.jpeg", color: "#FF9900" },
  { name: "AZURE", logo: "/tech/azurelogo.jpg", color: "#0078D4" },
  { name: "K8S", logo: "/tech/kubernetes.png", color: "#326CE5" },
] as const;

// Reusable Server Rack — much bigger, more detailed, with cloud logo
export function ServerRack({ 
  position, 
  label, 
  active = false,
  provider = 0,
  height = 12 
}: { 
  position: [number, number, number], 
  label: string, 
  active?: boolean,
  provider?: number,
  height?: number 
}) {
  const lightRefs = useRef<THREE.Mesh[]>([]);
  const providerInfo = CLOUD_PROVIDERS[provider % CLOUD_PROVIDERS.length];
  
  // Load cloud provider logo as texture
  const logoTexture = useTexture(providerInfo.logo);

  useFrame((state) => {
    if (active) {
      const t = state.clock.getElapsedTime();
      lightRefs.current.forEach((ref, i) => {
        if (ref) {
          const mat = ref.material as THREE.MeshStandardMaterial;
          if (mat) mat.opacity = (Math.sin(t * 8 + i * 2) + 1) / 2;
        }
      });
    }
  });

  const slotCount = Math.floor(height / 1.2);

  return (
    <group position={position}>
      {/* Main Rack Body — metallic dark frame */}
      <mesh castShadow>
        <boxGeometry args={[5, height, 3]} />
        <meshStandardMaterial color="#1a2332" roughness={0.15} metalness={0.85} />
      </mesh>
      
      {/* Front Face Panel */}
      <mesh position={[0, 0, 1.51]}>
        <planeGeometry args={[4.6, height - 0.4]} />
        <meshStandardMaterial color="#0c1222" />
      </mesh>

      {/* Server Slots */}
      {Array.from({ length: slotCount }).map((_, i) => (
        <group key={i} position={[0, (i / (slotCount / height)) - height / 2 + 1, 1.4]}>
          {/* Slot Unit */}
          <mesh>
            <boxGeometry args={[4.2, 0.6, 0.3]} />
            <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.6} />
          </mesh>
          {/* Ventilation holes */}
          {[...Array(6)].map((_, j) => (
            <mesh key={j} position={[-1.5 + j * 0.5, 0, 0.16]}>
              <circleGeometry args={[0.04, 8]} />
              <meshStandardMaterial color="#0f172a" />
            </mesh>
          ))}
          {/* Status LEDs — multiple per slot */}
          <mesh 
            position={[1.8, 0.1, 0.16]} 
            ref={(el: THREE.Mesh | null) => { if (el) lightRefs.current[i] = el; }}
          >
            <circleGeometry args={[0.06, 8]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? palette.danger : palette.success} 
              emissive={i % 3 === 0 ? palette.danger : palette.success} 
              emissiveIntensity={3} 
              transparent
            />
          </mesh>
          <mesh position={[1.6, 0.1, 0.16]}>
            <circleGeometry args={[0.06, 8]} />
            <meshStandardMaterial 
              color={palette.cobalt}
              emissive={palette.cobalt}
              emissiveIntensity={active ? 2 : 0.5}
            />
          </mesh>
        </group>
      ))}

      {/* Cloud Provider Logo on top */}
      <mesh position={[0, height / 2 + 0.01, 0.5]} rotation={[-Math.PI / 4, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial 
          map={logoTexture} 
          transparent
          roughness={0.5}
        />
      </mesh>

      {/* Provider Accent Glow */}
      <mesh position={[0, -height / 2, 1.52]}>
        <planeGeometry args={[4.8, 0.15]} />
        <meshStandardMaterial 
          color={providerInfo.color} 
          emissive={providerInfo.color} 
          emissiveIntensity={4} 
        />
      </mesh>

      {/* Label */}
      <Text
        position={[0, height / 2 + 1.5, 0]}
        fontSize={0.4}
        color={palette.silver}
        anchorX="center"
      >
        {label}
      </Text>

      {/* Provider Name */}
      <Text
        position={[0, height / 2 + 0.8, 1]}
        fontSize={0.35}
        color={providerInfo.color}
        anchorX="center"
      >
        {providerInfo.name}
      </Text>
    </group>
  );
}

// Dynamic server generation from product data
export function DynamicInfrastructure({ products }: { products: Array<{ name: string; status: string }> }) {
  return (
    <group>
      {products.map((product, i) => (
        <ServerRack
          key={product.name}
          position={[i * 8 - (products.length * 4), 6, -20]}
          label={product.name.toUpperCase()}
          active={product.status === "active"}
          provider={i}
          height={12}
        />
      ))}
    </group>
  );
}

// Reflection floor
export function ReflectionPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -10]} receiveShadow>
      <planeGeometry args={[400, 100]} />
      <MeshReflectorMaterial
        blur={[400, 200]}
        resolution={1024}
        mixBlur={1}
        mixStrength={60}
        roughness={0.7}
        depthScale={1.5}
        minDepthThreshold={0.3}
        maxDepthThreshold={1.5}
        color="#0c1222"
        metalness={0.9}
      />
    </mesh>
  );
}
