"use client";

import dynamic from "next/dynamic";

const TestSceneContainer = dynamic(
  () => import("@/components/3d/test/TestSceneContainer"),
  { ssr: false }
);

export default function TestPage() {
  return <TestSceneContainer />;
}
