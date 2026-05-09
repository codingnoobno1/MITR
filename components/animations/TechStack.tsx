"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "NEXT.JS 16", "TYPESCRIPT", "THREE.JS", "FRAMER MOTION", 
  "TAILWIND CSS", "NODE.JS", "POSTGRESQL", "DOCKER", 
  "KUBERNETES", "TENSORFLOW", "RUST", "GO", "AWS", "VERCEL"
];

export function TechStack() {
  return (
    <div className="py-20 bg-slate-900 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `radial-gradient(circle at center, #2563eb 0%, transparent 70%)` 
        }}
      />

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="mx-12 text-3xl md:text-5xl font-heading font-black text-slate-700 hover:text-primary transition-colors cursor-default select-none"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
