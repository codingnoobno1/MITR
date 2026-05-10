"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDownRight } from "lucide-react";

const team = [
  {
    name: "Shivam Goyal",
    role: "Chief Executive Officer",
    initials: "SG",
    bio: "Visionary leader driving the next generation of modular intelligent infrastructure."
  },
  {
    name: "Jaspreet",
    role: "Chief Technical Officer",
    initials: "J",
    bio: "Architecting scalable neural networks and decentralized operational systems."
  },
  {
    name: "Tushar",
    role: "Managing Director",
    initials: "T",
    bio: "Overseeing ecosystem growth and strategic operational coordination."
  },
  {
    name: "Anish",
    role: "Chief Marketing Officer",
    initials: "A",
    bio: "Defining the global narrative for intelligent industrial transformation."
  },
  {
    name: "Krishna",
    role: "Karya Product VP",
    initials: "K",
    bio: "Leading the digitization of fragmented construction and real estate workflows."
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-40 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Text */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none select-none overflow-hidden">
        <div className="text-[20rem] md:text-[30rem] font-black text-slate-950 -translate-x-1/4 -translate-y-1/4 uppercase">CORE</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-40 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-8"
            >
              The Human Core
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-heading font-black text-slate-950 tracking-tighter leading-[0.9] uppercase"
            >
              OPERATIONAL <br />
              <span className="text-blue-600">LEADERSHIP</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            className="w-32 h-32 rounded-full border-4 border-slate-950 flex items-center justify-center text-slate-950"
          >
             <ArrowDownRight className="w-16 h-16" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "group p-12 rounded-[4rem] bg-white border-2 border-slate-900 shadow-[15px_15px_0px_#f8fafc] hover:shadow-[15px_15px_0px_rgba(37,99,235,0.1)] transition-all duration-700 flex flex-col relative overflow-hidden",
                i % 2 !== 0 && "lg:mt-24" // Asymmetrical grid
              )}
            >
              {/* Member Initials Background */}
              <div className="absolute -top-10 -right-10 text-[15rem] font-black text-slate-900/[0.02] group-hover:text-blue-600/[0.04] transition-colors duration-700 pointer-events-none">
                {member.initials}
              </div>

              <div className="relative z-10">
                <div className="w-24 h-24 rounded-[2rem] bg-slate-50 border-2 border-slate-950 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-2xl">
                   <span className="text-4xl font-black">{member.initials}</span>
                </div>

                <h3 className="text-4xl font-heading font-black text-slate-950 mb-2 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-10 block">
                  {member.role}
                </div>
                
                <p className="text-2xl text-slate-500 leading-snug font-medium mb-12 tracking-tight">
                  {member.bio}
                </p>

                <div className="flex gap-6 pt-10 border-t-2 border-slate-100">
                  {[Linkedin, Twitter, Github].map((Icon, j) => (
                    <div key={j} className="text-slate-300 hover:text-blue-600 transition-all cursor-pointer hover:scale-125">
                      <Icon className="w-6 h-6" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-60 text-center max-w-5xl mx-auto border-y-2 border-slate-100 py-24"
        >
          <p className="text-4xl md:text-6xl text-slate-950 font-heading font-black uppercase leading-[0.9] tracking-tighter italic">
            "Engineering the foundational intelligence layer for the <span className="text-blue-600">next century</span> of industrial evolution."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Helper function since I'm in a write_to_file call
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
