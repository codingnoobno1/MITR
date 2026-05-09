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
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-100" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-black mb-6 text-slate-900"
            >
              LET&apos;S ENGINEER <br />
              <span className="text-primary">THE FUTURE</span>
            </motion.h2>
            <p className="text-slate-500 text-lg mb-10 max-w-md leading-relaxed">
              Have a vision for a more intelligent ecosystem? 
              Reach out and let&apos;s build something extraordinary.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {socialLinks.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href}
                  className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-white hover:shadow-lg transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 max-w-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Direct Contact</div>
                <div className="text-sm font-black text-slate-900 tracking-tight">hello@mitr.tech</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/20 relative overflow-hidden"
          >
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-slate-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black ml-1">Department</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-slate-900 appearance-none">
                  <option>KARYA (Construction)</option>
                  <option>BuildLink (Infrastructure)</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-slate-900 resize-none"
                />
              </div>
              <Button size="lg" className="w-full rounded-xl py-7 bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 font-bold group">
                Send Message
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
              <Image 
                src="/MITR.png" 
                alt="MITR Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tighter text-slate-900">MITR</span>
          </div>
          
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 font-black">
            © 2024 MITR TECH. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors font-bold">Privacy</Link>
            <Link href="#" className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors font-bold">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
