"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function CinematicCameraRail() {
  const { camera, mouse } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 10, 80));
  const currentPos = useRef(new THREE.Vector3(0, 10, 80));
  const lookTarget = useRef(new THREE.Vector3(0, 5, -20));

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Smoothly interpolate camera position based on mouse/time
    targetPos.current.x = THREE.MathUtils.lerp(targetPos.current.x, mouse.x * 30, 0.05);
    targetPos.current.y = 8 + Math.sin(t * 0.4) * 0.5; // Subtle floating
    
    // Zoom/Scroll effect could be added here
    
    currentPos.current.lerp(targetPos.current, 0.05);
    camera.position.copy(currentPos.current);
    
    // Look target with subtle lag/inertia
    lookTarget.current.x = THREE.MathUtils.lerp(lookTarget.current.x, mouse.x * 10, 0.02);
    camera.lookAt(lookTarget.current);
    
    // Handheld camera shake
    camera.position.x += Math.sin(t * 1.5) * 0.02;
    camera.position.y += Math.cos(t * 1.2) * 0.02;
  });

  return null;
}
