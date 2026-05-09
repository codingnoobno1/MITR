"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

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
    <section id="team" className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4"
          >
            Core Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none uppercase"
          >
            THE MINDS BEHIND <br />
            <span className="text-slate-300">THE INFRASTRUCTURE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-500/30 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden"
            >
              <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500 shadow-sm">
                 <span className="text-3xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">{member.initials}</span>
                 <div className="absolute inset-0 bg-blue-500/[0.05] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              </div>

              <h3 className="text-xl font-heading font-black text-slate-900 mb-1 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">
                {member.role}
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {member.bio}
              </p>

              <div className="flex gap-4 pt-6 border-t border-slate-100">
                {[Linkedin, Twitter, Github].map((Icon, j) => (
                  <div key={j} className="text-slate-300 hover:text-blue-600 transition-colors cursor-pointer">
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>

              {/* Decorative Number */}
              <div className="absolute top-6 right-8 text-4xl font-black text-slate-900/[0.03] select-none uppercase">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center max-w-4xl mx-auto"
        >
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-2xl md:text-3xl text-slate-500 font-medium italic leading-relaxed">
            "We are not just building software; we are engineering the foundational 
            intelligence layer for the next century of industrial evolution."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
