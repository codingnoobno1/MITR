"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { palette } from "../materials/palette";

export function Atmosphere() {
  return (
    <>
      <color attach="background" args={["#0c1222"]} />
      {/* Fog pushed way back — clear visibility, depth at distance */}
      <fog attach="fog" args={["#0c1222", 60, 200]} />
      
      {/* Strong ambient so nothing is pitch black */}
      <ambientLight intensity={0.6} />
      
      {/* Overhead fluorescent strips along the aisle */}
      {[-60, -30, 0, 30, 60, 90].map((x, i) => (
        <rectAreaLight
          key={i}
          width={20}
          height={1}
          intensity={8}
          color="#e2e8f0"
          position={[x, 14, -8]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      ))}
      
      {/* Cool blue floor glow strips */}
      {[-40, -10, 20, 50, 80].map((x, i) => (
        <pointLight key={`bl-${i}`} position={[x, 0.2, -8]} intensity={2} color="#315b9c" distance={30} />
      ))}

      {/* Warm accent near camera */}
      <pointLight position={[0, 8, 15]} intensity={1} color="#f1f5f9" distance={40} />
    </>
  );
}

// Server Room Enclosure — bigger, taller, deeper
export function ServerRoomEnclosure() {
  return (
    <group>
      {/* Ceiling with panel texture */}
      <mesh position={[0, 15, -10]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[400, 100]} />
        <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.4} />
      </mesh>
      
      {/* Ceiling panel grid lines */}
      {Array.from({ length: 40 }).map((_, i) => (
        <mesh key={`cg-${i}`} position={[i * 10 - 200, 14.95, -10]}>
          <boxGeometry args={[0.05, 0.05, 100]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
      ))}
      
      {/* Floor — dark polished concrete */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -10]} receiveShadow>
        <planeGeometry args={[400, 100]} />
        <meshStandardMaterial color="#0f172a" roughness={0.15} metalness={0.6} />
      </mesh>

      {/* Floor grid tiles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <mesh key={`fg-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[i * 5 - 200, -0.49, -10]}>
          <planeGeometry args={[0.02, 100]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      ))}
      
      {/* Back Wall */}
      <mesh position={[0, 7, -50]}>
        <planeGeometry args={[400, 30]} />
        <meshStandardMaterial color="#0f172a" roughness={0.9} />
      </mesh>

      {/* Blue floor aisle glow strips (LED) */}
      {[-30, -10, 10, 30, 50, 70].map((x, i) => (
        <mesh key={`strip-${i}`} position={[x, -0.45, -8]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.15, 80]} />
          <meshStandardMaterial color="#315b9c" emissive="#315b9c" emissiveIntensity={3} />
        </mesh>
      ))}
    </group>
  );
}
