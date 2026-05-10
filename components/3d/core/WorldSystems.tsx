"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function CameraRail() {
  const targetX = useRef(0);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Horizontal traversal linked to time or scroll
    // We'll use a slow automated drift for now
    targetX.current = Math.sin(t * 0.05) * 100; // Large horizontal sweep
    
    // Cinematic orbit & mouse parallax
    const mouseX = (state.mouse.x * Math.PI) / 10;
    const mouseY = (state.mouse.y * Math.PI) / 15;
    
    state.camera.position.lerp(
      new THREE.Vector3(
        targetX.current + mouseX,
        15 + mouseY,
        40 + Math.cos(t * 0.05) * 5
      ),
      0.02
    );
    
    // The camera looks at the current sector focal point
    state.camera.lookAt(targetX.current, 0, -10);
  });
  
  return null;
}

export function Atmosphere() {
  return (
    <>
      <color attach="background" args={["#eef2f7"]} />
      <FogExp2 attach="fog" args={["#dfe6ee", 0.015]} />
      <ambientLight intensity={0.4} />
      
      {/* Volumetric Simulation Lights */}
      <directionalLight 
        position={[100, 200, 100]} 
        intensity={1} 
        color="#f8fafc" 
        castShadow 
      />
      <pointLight position={[-50, 20, -50]} intensity={0.5} color="#315b9c" />
    </>
  );
}

// Global Fog Component if needed
function FogExp2({ color, density }: { color: string, density: number }) {
  return <fogExp2 attach="fog" args={[color, density]} />;
}
