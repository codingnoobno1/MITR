"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, Zap, Users, Sparkles, Cpu } from "lucide-react";
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
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] rounded-full blur-[120px] opacity-[0.08]"
          style={{ backgroundColor: division.color }}
        />
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full blur-[100px] opacity-[0.05]"
          style={{ backgroundColor: division.color }}
        />
        
        {/* Abstract Grid */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `radial-gradient(${division.color} 1px, transparent 1px)`,
            backgroundSize: '3rem 3rem',
          }} 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            href="/#ecosystem" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary mb-16 transition-colors group font-bold bg-slate-50 px-4 py-2 rounded-full border border-slate-100"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Ecosystem Overview
          </Link>
        </motion.div>

        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl relative group"
            style={{ backgroundColor: `${division.color}15`, color: division.color }}
          >
            <div className="absolute inset-0 rounded-[2rem] border-2 border-current opacity-20 group-hover:scale-110 transition-transform" />
            {IconMap[division.icon] || <Zap className="w-12 h-12" />}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-current animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-heading font-black mb-8 tracking-tighter text-slate-900 leading-[0.9]">
              {division.name}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-slate-200" />
            <p className="text-xl md:text-2xl font-black text-slate-400 uppercase tracking-[0.4em]">
              {division.subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-8">
              <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-medium mb-12">
                {division.description}
              </p>
              
              {division.longDescription && (
                <div className="relative p-10 rounded-[3rem] bg-slate-50/50 border border-slate-100 backdrop-blur-sm">
                   <div className="absolute top-0 left-10 w-1 h-10 bg-current" style={{ color: division.color }} />
                   <p className="text-lg text-slate-500 leading-relaxed font-sans">
                    {division.longDescription}
                   </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
               <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-150 transition-transform duration-700">
                    <Cpu className="w-24 h-24" style={{ color: division.color }} />
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Strategic Focus</div>
                  <div className="text-xl font-black text-slate-900 mb-2">{division.metadata?.focusArea}</div>
                  <div className="w-10 h-1 bg-current rounded-full" style={{ color: division.color }} />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
