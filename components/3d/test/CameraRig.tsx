"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export function CameraRig() {
  const scroll = useScroll();
  const cameraGroup = useRef<THREE.Group>(null!);

  const WAYPOINTS = [
    { pos: new THREE.Vector3(17, 16, 75), target: new THREE.Vector3(-10, 8, -80) }, // Intro (Diagonal Slice)
    { pos: new THREE.Vector3(0, 12, 35), target: new THREE.Vector3(0, 8, -60) },    // Server Aisle
    { pos: new THREE.Vector3(0, 15, -10), target: new THREE.Vector3(0, 12, -50) },   // MLOps
    { pos: new THREE.Vector3(-15, 8, 20), target: new THREE.Vector3(5, 5, -30) },   // Security
    { pos: new THREE.Vector3(0, 45, 120), target: new THREE.Vector3(0, 0, -80) },    // Cloud View
  ];

  const currentLookAt = useRef(new THREE.Vector3(-10, 8, -80));

  useFrame((state, delta) => {
    // Scroll progress from 0 to 1
    const t = scroll.offset; 
    
    // Smooth scroll offset with damping
    const segment = t * (WAYPOINTS.length - 1);
    const index = Math.floor(segment);
    const fraction = segment - index;

    const start = WAYPOINTS[Math.min(index, WAYPOINTS.length - 1)];
    const end = WAYPOINTS[Math.min(index + 1, WAYPOINTS.length - 1)];

    // Base position
    const targetPos = new THREE.Vector3().lerpVectors(start.pos, end.pos, fraction);
    
    // Drift overlay (sin waves for natural floating)
    const time = state.clock.getElapsedTime();
    targetPos.x += Math.sin(time * 0.4) * 0.4; // Reduced drift for premium feel
    targetPos.y += Math.cos(time * 0.3) * 0.4;

    // Apply damped movement to camera group
    cameraGroup.current.position.lerp(targetPos, delta * 2.5);

    // LookAt Target
    const lookAtTarget = new THREE.Vector3().lerpVectors(start.target, end.target, fraction);
    currentLookAt.current.lerp(lookAtTarget, delta * 3);
    
    state.camera.lookAt(currentLookAt.current);
  });

  return (
    <group ref={cameraGroup} position={[0, 18, 70]}>
      <PerspectiveCamera makeDefault fov={32} />
    </group>
  );
}
