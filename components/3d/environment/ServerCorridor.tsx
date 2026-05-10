"use client";

import React from "react";
import { ServerCluster } from "./ServerCluster";

export function ServerCorridor() {
  return (
    <group>
      {/* Aisle One: AWS Cluster - arranged with architectural rhythm */}
      <group position={[-40, 7, -20]}>
        {[-120, -80, -40, 0, 40, 80, 120].map((z, i) => (
          <ServerCluster 
            key={`aws-${i}`} 
            position={[0, 0, z]} 
            label={`AWS-S-${i+1}`} 
            active={i % 2 === 0} 
            provider={0} 
          />
        ))}
      </group>

      {/* Aisle Two: AZURE Cluster */}
      <group position={[40, 7, -20]}>
        {[-120, -80, -40, 0, 40, 80, 120].map((z, i) => (
          <ServerCluster 
            key={`az-${i}`} 
            position={[0, 0, z]} 
            label={`AZ-S-${i+1}`} 
            active 
            provider={1} 
          />
        ))}
      </group>

      {/* Aisle Three: K8S Cluster (Outer corridor) */}
      <group position={[120, 7, -20]}>
        {[-120, -80, -40, 0, 40, 80, 120].map((z, i) => (
          <ServerCluster 
            key={`k8s-${i}`} 
            position={[0, 0, z]} 
            label={`K8S-UNIT-${i+1}`} 
            active={i % 3 !== 0} 
            provider={2} 
          />
        ))}
      </group>
    </group>
  );
}
