"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, Zap, Users } from "lucide-react";
import Link from "next/link";
import { Division } from "@/data/types";

const IconMap: Record<string, React.ReactNode> = {
  building2: <Building2 className="w-12 h-12" />,
  zap: <Zap className="w-12 h-12" />,
  building: <Building2 className="w-12 h-12" />,
};

interface DivisionHeroProps {
  division: Division;
}

export function DivisionHero({ division }: DivisionHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, ${division.color} 0%, transparent 70%)` 
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link 
          href="/#ecosystem" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-12 transition-colors group font-bold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Ecosystem
        </Link>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-xl"
            style={{ backgroundColor: `${division.color}15`, color: division.color }}
          >
            {IconMap[division.icon] || <Zap className="w-12 h-12" />}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading font-black mb-6 tracking-tighter text-slate-900"
          >
            {division.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-[0.3em]"
          >
            {division.subtitle}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-slate-600 leading-relaxed font-medium mb-10"
          >
            {division.description}
          </motion.p>

          {division.longDescription && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-500 leading-relaxed max-w-3xl border-l-4 pl-8 border-slate-100"
            >
              {division.longDescription}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
