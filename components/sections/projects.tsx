"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Thunder",
    category: "Developer Tools",
    description: "Static UI Compiler for Flutter. High-performance widget generation with intelligent optimization.",
    icon: <Code2 className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    tags: ["Flutter", "Compiler", "Dart"]
  },
  {
    title: "Syncro",
    category: "AI Workspace",
    description: "AI Developer Workstation. An intelligent desktop environment for multi-agent orchestration.",
    icon: <Cpu className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Agentic", "Desktop", ".NET"]
  },
  {
    title: "MITR Core",
    category: "Architecture",
    description: "Modular intelligent architecture system for large-scale infrastructure and construction management.",
    icon: <Database className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tags: ["Modular", "Scalable", "Core"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-black mb-4 text-slate-900"
            >
              FEATURED <span className="text-accent">PROJECTS</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 max-w-xl"
            >
              Pushing the boundaries of modular intelligence and modern infrastructure engineering.
            </motion.p>
          </div>
          <Button variant="link" className="text-primary hover:text-primary/80 flex items-center gap-2 p-0 font-bold">
            View All Projects <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-black">{project.category}</div>
                    <h3 className="text-2xl font-heading font-black text-slate-900">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-white border border-slate-100 text-slate-500 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Button className="flex-1 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold">
                    Learn More
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-xl border-slate-200 hover:bg-slate-50">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
