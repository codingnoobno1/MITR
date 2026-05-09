"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const techLogos = [
  { name: "AWS", path: "/tech/aws.jpeg" },
  { name: "Azure", path: "/tech/azurelogo.jpg" },
  { name: "C#", path: "/tech/c-sharp-logo-250x281.png" },
  { name: "C++", path: "/tech/cplusplus.svg" },
  { name: ".NET", path: "/tech/dotnet-logo.svg" },
  { name: "Git", path: "/tech/git.svg" },
  { name: "GitHub", path: "/tech/github.svg" },
  { name: "Java", path: "/tech/java_226777.png" },
  { name: "JS", path: "/tech/js_5968292.png" },
  { name: "Kotlin", path: "/tech/kotlin.png" },
  { name: "Kubernetes", path: "/tech/kubernetes.png" },
  { name: "OpenCV", path: "/tech/opencv.png" },
  { name: "PyTorch", path: "/tech/pytorch.png" },
  { name: "Terraform", path: "/tech/terraform.png" },
  { name: "Unreal Engine", path: "/tech/ue5.png" },
];

export function TechStack() {
  return (
    <div className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-300">
          Powered by Industry Standard Technologies
        </h3>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap items-center py-8">
          {[...techLogos, ...techLogos, ...techLogos].map((tech, i) => (
            <div
              key={i}
              className="mx-16 flex flex-col items-center gap-4 group/item transition-all"
            >
              <div className="relative w-16 h-16 grayscale group-hover/item:grayscale-0 transition-all opacity-40 group-hover/item:opacity-100 group-hover/item:scale-110">
                <Image
                  src={tech.path}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-300 group-hover/item:text-primary opacity-0 group-hover/item:opacity-100 transition-all uppercase">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
