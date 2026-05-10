"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Individual Pulse Component
function ElectricPulse({ path, delay = 0 }: { path: THREE.Vector3[], delay?: number }) {
  const pulseRef = useRef<THREE.Mesh>(null!);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(path), [path]);

  useFrame((state) => {
    const t = ((state.clock.getElapsedTime() + delay) * 0.2) % 1;
    const position = curve.getPointAt(t);
    pulseRef.current.position.copy(position);
  });

  return (
    <mesh ref={pulseRef}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshBasicMaterial color="#2563eb" />
      <pointLight color="#2563eb" intensity={0.5} distance={1} />
    </mesh>
  );
}

// Circuit Layer Component
function CircuitLayer({ depth, count = 10, color = "#2563eb" }: { depth: number, count?: number, color?: string }) {
  const groupRef = useRef<THREE.Group>(null!);

  const paths = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        depth
      );
      
      const mid1 = start.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 2,
        0
      ));

      const mid2 = mid1.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 5,
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
    <group ref={groupRef}>
      {paths.map((path, i) => (
        <React.Fragment key={i}>
          <Line
            points={path}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0.1}
          />
          <ElectricPulse path={path} delay={i * 0.5} />
        </React.Fragment>
      ))}
    </group>
  );
}

// Background Particles
function BackgroundParticles() {
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 40;
      p[i * 3 + 1] = (Math.random() - 0.5) * 40;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10;
    }
    return p;
  }, []);

  return (
    <Points positions={points}>
      <PointMaterial
        transparent
        color="#2563eb"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
    </Points>
  );
}

export function CircuitBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.5} />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          {/* Depth Layers */}
          <CircuitLayer depth={0} count={12} color="#2563eb" />
          <CircuitLayer depth={-2} count={8} color="#dc2626" />
          <CircuitLayer depth={-5} count={15} color="#2563eb" />
          <CircuitLayer depth={-8} count={10} color="#cbd5e1" />
          <CircuitLayer depth={2} count={5} color="#2563eb" />
        </Float>

        <BackgroundParticles />
      </Canvas>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
    </div>
  );
}
