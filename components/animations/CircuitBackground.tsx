"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line, Float, PerspectiveCamera, Grid, Box } from "@react-three/drei";
import * as THREE from "three";

// 1. Static Circuit Grid (The Deepest Layer)
function CircuitGrid() {
  return (
    <group position={[0, 0, -10]}>
      <Grid 
        infiniteGrid 
        fadeDistance={50} 
        fadeStrength={5} 
        cellSize={1} 
        sectionSize={5} 
        sectionThickness={1} 
        sectionColor="#2563eb"
        cellColor="#e2e8f0"
        cellThickness={0.5}
      />
    </group>
  );
}

// 2. Individual Pulse Component
function ElectricPulse({ path, delay = 0, color = "#2563eb" }: { path: THREE.Vector3[], delay?: number, color?: string }) {
  const pulseRef = useRef<THREE.Mesh>(null!);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(path), [path]);

  useFrame((state) => {
    const t = ((state.clock.getElapsedTime() + delay) * 0.15) % 1;
    const position = curve.getPointAt(t);
    pulseRef.current.position.copy(position);
  });

  return (
    <mesh ref={pulseRef}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color={color} />
      <pointLight color={color} intensity={0.8} distance={2} />
    </mesh>
  );
}

// 3. Circuit Node (Intersections)
function CircuitNode({ position, color = "#2563eb" }: { position: THREE.Vector3, color?: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.08, 0.08, 0.08]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
}

// 4. Circuit Layer (Functional Group)
function CircuitLayer({ depth, count = 10, color = "#2563eb", speed = 0.1 }: { depth: number, count?: number, color?: string, speed?: number }) {
  const paths = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        depth
      );
      
      const mid1 = start.clone().add(new THREE.Vector3(
        Math.random() > 0.5 ? (Math.random() - 0.5) * 8 : 0,
        Math.random() > 0.5 ? 0 : (Math.random() - 0.5) * 8,
        0
      ));

      const mid2 = mid1.clone().add(new THREE.Vector3(
        Math.random() > 0.5 ? 0 : (Math.random() - 0.5) * 5,
        Math.random() > 0.5 ? (Math.random() - 0.5) * 5 : 0,
        0
      ));

      const end = mid2.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        0
      ));

      return [start, mid1, mid2, end];
    });
  }, [count, depth]);

  return (
    <group>
      {paths.map((path, i) => (
        <React.Fragment key={i}>
          <Line
            points={path}
            color={color}
            lineWidth={0.8}
            transparent
            opacity={0.15}
          />
          <ElectricPulse path={path} delay={i * 1.2} color={color} />
          {/* Add nodes at start and end */}
          <CircuitNode position={path[0]} color={color} />
          <CircuitNode position={path[path.length - 1]} color={color} />
        </React.Fragment>
      ))}
    </group>
  );
}

// 5. Floating Data Particles (Closest Layer)
function FloatingData() {
  const points = useMemo(() => {
    const p = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30;
      p[i * 3 + 1] = (Math.random() - 0.5) * 30;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10 + 5;
    }
    return p;
  }, []);

  return (
    <Points positions={points}>
      <PointMaterial
        transparent
        color="#2563eb"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

export function CircuitBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-white">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          {/* DEPTH SEPARATION: Layered Circuit Components */}
          
          {/* Deep Layer (Infrastructure) */}
          <CircuitLayer depth={-12} count={20} color="#e2e8f0" />
          
          {/* Middle Layer (Operational Systems) */}
          <CircuitLayer depth={-5} count={12} color="#2563eb" />
          
          {/* Focused Layer (Agentic Workflow) */}
          <CircuitLayer depth={0} count={8} color="#2563eb" />
          
          {/* Near Layer (Interface Nodes) */}
          <CircuitLayer depth={4} count={5} color="#3b82f6" />
          
          {/* Static Background Grid */}
          <CircuitGrid />
        </Float>

        <FloatingData />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 pointer-events-none" />
    </div>
  );
}
