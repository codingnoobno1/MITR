"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FileCode, FileText, FileJson, FilePlus, FileMinus } from "lucide-react";

const icons = [FileCode, FileText, FileJson, FilePlus, FileMinus];

export function FloatingFiles() {
  const files = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
      size: 10 + Math.random() * 30,
      opacity: 0.05 + Math.random() * 0.1,
      Icon: icons[i % icons.length],
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {files.map((file) => (
        <motion.div
          key={file.id}
          className="absolute text-slate-400"
          initial={{ 
            x: `${file.x}%`, 
            y: "110%", 
            opacity: 0,
            rotate: 0 
          }}
          animate={{ 
            y: "-10%", 
            opacity: file.opacity,
            rotate: 360 
          }}
          transition={{
            duration: file.duration,
            repeat: Infinity,
            delay: file.delay,
            ease: "linear",
          }}
          style={{
            width: file.size,
            height: file.size,
          }}
        >
          <file.Icon className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
}
