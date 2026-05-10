"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDownRight, Mail } from "lucide-react";

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
    <section id="team" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-blue-600" />
              Human Intelligence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-black text-slate-950 tracking-tighter uppercase leading-[0.9]"
            >
              CORE <br />
              <span className="text-blue-600">LEADERSHIP</span>
            </motion.h2>
          </div>
          <p className="max-w-md text-sm text-slate-500 font-medium leading-relaxed text-left lg:text-right">
            Our leadership team combines deep industrial domain expertise with 
            advanced systems engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:border-blue-500/30 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Member Initials Circle */}
              <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                 <span className="text-lg font-black">{member.initials}</span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-heading font-black text-slate-950 uppercase tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest block mb-4">
                  {member.role}
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>

              <div className="mt-auto flex gap-3 pt-6 border-t border-slate-200/50 w-full justify-center">
                {[Linkedin, Twitter, Github, Mail].map((Icon, j) => (
                  <div key={j} className="text-slate-300 hover:text-blue-600 transition-all cursor-pointer">
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
