"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { palette } from "../materials/palette";

export function CameraRail() {
  const targetX = useRef(0);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Horizontal traversal through the server aisle
    targetX.current = Math.sin(t * 0.05) * 50; 
    
    const mouseX = (state.mouse.x * Math.PI) / 15;
    const mouseY = (state.mouse.y * Math.PI) / 20;
    
    state.camera.position.lerp(
      new THREE.Vector3(
        targetX.current + mouseX,
        4 + mouseY, // Lower height for indoor feel
        12 + Math.cos(t * 0.05) * 2
      ),
      0.03
    );
    
    state.camera.lookAt(targetX.current, 3, -10);
  });
  
  return null;
}

export function Atmosphere() {
  return (
    <>
      <color attach="background" args={["#0f172a"]} /> {/* Darker indoor background */}
      {/* Very subtle fog for depth, but not obscuring */}
      <fog attach="fog" args={["#0f172a", 10, 80]} />
      
      <ambientLight intensity={0.2} />
      
      {/* Server Room Overhead Lights */}
      <rectAreaLight
        width={1000}
        height={2}
        intensity={5}
        color="#ffffff"
        position={[0, 10, -5]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      
      {/* Blue Floor/Aisle Accents */}
      <pointLight position={[0, 2, -10]} intensity={1} color={palette.cobalt} distance={20} />
      <pointLight position={[100, 2, -10]} intensity={1} color={palette.cobalt} distance={20} />
      <pointLight position={[-100, 2, -10]} intensity={1} color={palette.cobalt} distance={20} />
    </>
  );
}

// Server Room Enclosure (Walls & Ceiling)
export function ServerRoomEnclosure() {
  return (
    <group>
      {/* Ceiling */}
      <mesh position={[0, 10, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1000, 100]} />
        <meshStandardMaterial color="#1e293b" roughness={0.5} />
      </mesh>
      
      {/* Back Wall */}
      <mesh position={[0, 5, -30]}>
        <planeGeometry args={[1000, 20]} />
        <meshStandardMaterial color="#0f172a" roughness={0.9} />
      </mesh>
    </group>
  );
}
