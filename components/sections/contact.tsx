"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <MessageSquare className="w-5 h-5" />, href: "#", label: "Discord" },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden bg-black/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-black mb-6"
            >
              LET&apos;S BUILD THE <br />
              <span className="text-primary">FUTURE</span> TOGETHER
            </motion.h2>
            <p className="text-white/60 text-lg mb-10 max-w-md">
              Have a project in mind or want to join the MITR ecosystem? 
              Reach out and let&apos;s engineer something intelligent.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {socialLinks.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href}
                  className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/10 max-w-sm">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Email Us</div>
                <div className="text-sm font-bold">hello@mitr.ecosystem</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border border-white/10 relative overflow-hidden"
          >
            {/* Form Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
            
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1">Department</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                  <option className="bg-[#050816]">KARYA (Construction)</option>
                  <option className="bg-[#050816]">BuildLink (Marketplace)</option>
                  <option className="bg-[#050816]">AI Labs (Research)</option>
                  <option className="bg-[#050816]">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <Button size="lg" className="w-full rounded-xl py-6 bg-primary text-background hover:bg-primary/90 glow-primary font-bold group">
                Send Transmission
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
              <Image 
                src="/MITR.png" 
                alt="MITR Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tighter">MITR</span>
          </div>
          
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            © 2024 MITR ECOSYSTEM. ALL SYSTEMS OPERATIONAL.
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Nodes</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
