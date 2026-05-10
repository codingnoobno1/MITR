"use client";

import dynamic from "next/dynamic";

const TestSceneContainer = dynamic(
  () => import("@/components/3d/test/TestSceneContainer"),
  { ssr: false }
);

export function HeroPhilosophy() {
  return (
    <section className="relative h-screen w-full bg-[#020617] overflow-hidden">
      <TestSceneContainer />
    </section>
  );
}
