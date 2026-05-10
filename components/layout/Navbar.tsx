"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Building2, Zap, Globe, Github, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Our Products", href: "/products", icon: <Cpu className="w-4 h-4" /> },
  { name: "Karya", href: "/divisions/karya", icon: <Building2 className="w-4 h-4" /> },
  { name: "Sankalap", href: "/divisions/sankalap-community", icon: <Zap className="w-4 h-4" /> },
  { name: "Ecosystem", href: "/#ecosystem", icon: <Globe className="w-4 h-4" /> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-sans",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between p-2 rounded-xl transition-all duration-500 border border-transparent",
          isScrolled ? "bg-white/80 backdrop-blur-xl border-slate-200 shadow-lg" : "bg-transparent"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 px-3 group">
            <div className="relative w-10 h-10 overflow-hidden">
               <Image 
                 src="/MITR.png" 
                 alt="MITR" 
                 fill 
                 className={cn(
                   "object-contain transition-all duration-500",
                   isScrolled ? "" : "invert grayscale brightness-200"
                 )}
               />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg font-bold tracking-tight leading-none transition-colors",
                isScrolled ? "text-slate-900" : "text-white"
              )}>
                MITR
              </span>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest mt-0.5 transition-colors",
                isScrolled ? "text-blue-600" : "text-blue-400"
              )}>
                Enterprise
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all",
                  isScrolled 
                    ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50" 
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 pr-2">
            <Link 
              href="https://github.com/codingnoobno1" 
              target="_blank" 
              className={cn(
                "p-2.5 rounded-lg transition-all border border-transparent",
                isScrolled 
                  ? "text-slate-400 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-200" 
                  : "text-slate-400 hover:text-white hover:bg-white/10"
              )}
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link href="/#team">
               <button className="bg-slate-900 text-white text-xs font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-all shadow-md active:scale-95">
                 Initialize Core
               </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-3 rounded-lg transition-all",
              isScrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl overflow-hidden px-6 pb-8 pt-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl text-lg font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                    {link.icon}
                  </div>
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3">
                  Initialize Core <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
