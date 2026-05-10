"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line, Float, PerspectiveCamera, Grid, Box, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// 1. PCB Base Plate
function PCBBoard() {
  return (
    <mesh rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial 
        color="#ffffff" 
        roughness={0.8}
        metalness={0.1}
      />
      {/* Decorative Grid on Board */}
      <Grid 
        infiniteGrid 
        fadeDistance={50} 
        fadeStrength={5} 
        cellSize={0.5} 
        sectionSize={2} 
        sectionThickness={1} 
        sectionColor="#2563eb"
        cellColor="#e2e8f0"
        cellThickness={0.5}
        position={[0, 0.01, 0]}
      />
    </mesh>
  );
}

// 2. Hardware Chips (Cubes on the board)
function HardwareChip({ position, size = [1, 0.2, 1], label = "MITR-CPU" }: { position: [number, number, number], size?: [number, number, number], label?: string }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Pin connectors */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[(i / 4 - 0.875) * size[0], -0.1, size[2] / 2 + 0.05]}>
          <boxGeometry args={[0.05, 0.1, 0.1]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// 3. PCB Trace (90-degree angled paths)
function PCBTrace({ path, color = "#2563eb" }: { path: THREE.Vector3[], color?: string }) {
  return (
    <Line
      points={path}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={0.3}
    />
  );
}

// 4. Electron Pulse (Moving along 90-degree paths)
function Electron({ path, delay = 0, color = "#2563eb" }: { path: THREE.Vector3[], delay?: number, color?: string }) {
  const electronRef = useRef<THREE.Mesh>(null!);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(path, false, 'catmullrom', 0), [path]);

  useFrame((state) => {
    const t = ((state.clock.getElapsedTime() + delay) * 0.1) % 1;
    const position = curve.getPointAt(t);
    electronRef.current.position.copy(position);
  });

  return (
    <mesh ref={electronRef}>
      <sphereGeometry args={[0.05, 12, 12]} />
      <meshBasicMaterial color={color} />
      <pointLight color={color} intensity={1} distance={3} />
    </mesh>
  );
}

// Path Generator for 90-degree PCB traces
const generatePCBPath = (start: THREE.Vector3, segments: number) => {
  const points = [start];
  let current = start.clone();
  for (let i = 0; i < segments; i++) {
    const axis = Math.random() > 0.5 ? 'x' : 'y';
    const dist = (Math.random() - 0.5) * 8;
    if (axis === 'x') current.x += dist;
    else current.y += dist;
    points.push(current.clone());
  }
  return points;
};

// 5. System Layer (Traces + Electrons)
function SystemLayer({ count = 10, depth = 0, color = "#2563eb" }: { count?: number, depth?: number, color?: string }) {
  const paths = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const start = new THREE.Vector3((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, depth);
      return generatePCBPath(start, 4);
    });
  }, [count, depth]);

  return (
    <group>
      {paths.map((path, i) => (
        <React.Fragment key={i}>
          <PCBTrace path={path} color={color} />
          <Electron path={path} delay={i * 2} color={color} />
        </React.Fragment>
      ))}
    </group>
  );
}

export function CircuitBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-white">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 20]} fov={45} />
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 20, 10]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        
        <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.1}>
          <PCBBoard />
          
          {/* DEPTH LAYERING: PCB Infrastructure */}
          <group position={[0, 0, 0]}>
             <SystemLayer count={15} depth={-5} color="#e2e8f0" />
             <SystemLayer count={10} depth={0} color="#2563eb" />
             <SystemLayer count={5} depth={5} color="#3b82f6" />
          </group>

          {/* Hardware Components on the Board */}
          <HardwareChip position={[-5, 0.1, -2]} size={[2, 0.4, 2]} />
          <HardwareChip position={[4, 0.1, 3]} size={[1.5, 0.3, 1.5]} />
          <HardwareChip position={[0, 0.1, -6]} size={[3, 0.5, 3]} />
          
          {/* Capacitors / Smaller components */}
          {[...Array(12)].map((_, i) => (
            <mesh key={i} position={[(Math.random() - 0.5) * 20, 0.1, (Math.random() - 0.5) * 20]}>
              <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#2563eb" : "#94a3b8"} />
            </mesh>
          ))}
        </Float>

        <Points positions={new Float32Array(1000).map(() => (Math.random() - 0.5) * 50)}>
          <PointMaterial transparent color="#2563eb" size={0.05} sizeAttenuation opacity={0.1} />
        </Points>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 pointer-events-none" />
    </div>
  );
}
