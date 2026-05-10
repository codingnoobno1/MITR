import * as THREE from "three";

export const generatePCBPath = (start: THREE.Vector3, segments: number, stepSize = 5) => {
  const points = [start];
  let current = start.clone();
  for (let i = 0; i < segments; i++) {
    const axis = Math.random() > 0.5 ? 'x' : 'y';
    const dist = (Math.random() > 0.5 ? 1 : -1) * stepSize;
    if (axis === 'x') current.x += dist;
    else current.y += dist;
    points.push(current.clone());
  }
  return points;
};
