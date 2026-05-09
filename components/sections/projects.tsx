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
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-black mb-4"
            >
              LATEST <span className="text-secondary">PROJECTS</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/50 max-w-xl"
            >
              Pushing the boundaries of what&apos;s possible with modular intelligence and futuristic software engineering.
            </motion.p>
          </div>
          <Button variant="link" className="text-primary hover:text-primary/80 flex items-center gap-2 p-0">
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
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5"
            >
              {/* Image Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                style={{ backgroundImage: `url(${project.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-primary/80 font-bold">{project.category}</div>
                    <h3 className="text-2xl font-heading font-black">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-white/60 text-sm mb-6 leading-relaxed group-hover:text-white/80 transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <Button className="flex-1 rounded-xl bg-white text-black hover:bg-white/90">
                    View Project
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-xl glass border-white/10 hover:bg-white/5">
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
