"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { palette } from "../materials/palette";

export function CameraRig() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Subtle cinematic drift & mouse parallax
    const mouseX = (state.mouse.x * Math.PI) / 20;
    const mouseY = (state.mouse.y * Math.PI) / 20;
    
    state.camera.position.lerp(
      new THREE.Vector3(
        Math.sin(t * 0.1) * 2 + mouseX, 
        10 + mouseY, 
        20 + Math.cos(t * 0.1) * 2
      ), 
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.4} color={palette.substrate} />
      {/* Main Industrial Daylight */}
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={1.2} 
        color={palette.background}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      {/* Cool Rim Light */}
      <spotLight 
        position={[-15, 10, -10]} 
        intensity={0.8} 
        color={palette.cobalt} 
        angle={0.5} 
        penumbra={1} 
      />
    </>
  );
}

export function EnvironmentFog() {
  return <fog attach="fog" args={[palette.fog, 18, 45]} />;
}
