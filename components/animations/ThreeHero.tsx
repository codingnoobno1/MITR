"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#2563eb"
          speed={4}
          distort={0.4}
          radius={1}
        />
      </Sphere>
    </Float>
  );
}

function DataLines() {
  const points = useMemo(() => {
    return Array.from({ length: 20 }).map(() => {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      const end = start.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ));
      return [start, end];
    });
  }, []);

  return (
    <group>
      {points.map((line, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry" onUpdate={self => self.setFromPoints(line)} />
          <lineBasicMaterial attach="material" color="#dc2626" opacity={0.2} transparent />
        </line>
      ))}
    </group>
  );
}

export function ThreeHero() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        {/* <DataLines /> */}
      </Canvas>
    </div>
  );
}
