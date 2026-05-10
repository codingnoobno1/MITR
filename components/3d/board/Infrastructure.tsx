"use client";

import React from "react";
import { Grid } from "@react-three/drei";
import { boardColors } from "../materials/palette";

export function PCBBoard() {
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      {/* Substrate Base */}
      <mesh receiveShadow>
        <boxGeometry args={[100, 100, 0.4]} />
        <meshStandardMaterial 
          color={boardColors.base} 
          roughness={0.92} 
          metalness={0.12} 
        />
      </mesh>
      
      {/* Beveled Edge Illusion */}
      <mesh position={[0, 0, 0.21]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color={boardColors.base} 
          roughness={0.8} 
          transparent 
          opacity={0.5} 
        />
      </mesh>
    </group>
  );
}

export function PCBGrid() {
  return (
    <group position={[0, -0.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <Grid 
        infiniteGrid 
        fadeDistance={40} 
        fadeStrength={5} 
        cellSize={0.5} 
        sectionSize={2.5} 
        sectionThickness={1.2} 
        sectionColor={boardColors.gridSection}
        cellColor={boardColors.gridCell}
        cellThickness={0.6}
      />
    </group>
  );
}
