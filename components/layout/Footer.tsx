"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, MessageSquare, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <MessageSquare className="w-5 h-5" />, href: "#", label: "Discord" },
  ];

  return (
    <footer id="contact" className="bg-slate-950 pt-32 pb-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-2xl group-hover:scale-110 transition-transform">
                <Image src="/MITR.png" alt="MITR Logo" fill className="object-contain" />
              </div>
              <span className="font-heading font-bold text-3xl tracking-tighter text-white">MITR</span>
            </div>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Building the next layer of intelligent infrastructure for fragmented industrial ecosystems. 
              Modular. Intelligent. Scalable.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all shadow-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8">ECOSYSTEM</h4>
                <ul className="space-y-4">
                  <li><Link href="/divisions/karya" className="text-slate-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">KARYA</Link></li>
                  <li><Link href="/divisions/sankalap-community" className="text-slate-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">SANKALAP</Link></li>
                  <li><Link href="/projects/syncro" className="text-slate-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">SYNCRO</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8">RESOURCES</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">Documentation</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">API Reference</Link></li>
                  <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">OSS Community</Link></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8">INITIATE CONTACT</h4>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <Mail className="w-5 h-5 text-primary" />
                      <div className="text-[10px] font-black text-white tracking-widest">HELLO@MITR.TECH</div>
                   </div>
                   <Button variant="outline" className="w-full rounded-xl py-6 border-white/5 bg-white/5 text-white hover:bg-white/10 font-bold uppercase tracking-widest text-[10px]">
                    Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
            &copy; {new Date().getFullYear()} MITR INTELLIGENT SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
