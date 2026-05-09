"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Hammer, 
  ShoppingCart, 
  Users, 
  Home, 
  Code, 
  Terminal, 
  MapPin, 
  Zap,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const departments = [
  {
    id: "karya",
    title: "KARYA",
    subtitle: "Construction Intelligence",
    description: "Digitizing and organizing the fragmented construction ecosystem using intelligent site monitoring and workflow engines.",
    icon: <Hammer className="w-6 h-6" />,
    color: "from-[#FF7A00] to-[#FF4D00]",
    accent: "#FF7A00",
    tags: ["Site Monitoring", "Workflow", "AI Insights"]
  },
  {
    id: "buildlink",
    title: "BuildLink",
    subtitle: "Infrastructure Marketplace",
    description: "Connecting customers, contractors, architects, and vendors in a modern intelligent infrastructure marketplace.",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "from-[#00F5FF] to-[#00A3FF]",
    accent: "#00F5FF",
    tags: ["B2B Marketplace", "Contractor Search", "Materials"]
  },
  {
    id: "vendor-connect",
    title: "Vendor Connect",
    subtitle: "Supplier Intelligence",
    description: "B2B ecosystem for organizing fragmented vendor communication and procurement with AI-driven quotation comparison.",
    icon: <Users className="w-6 h-6" />,
    color: "from-[#7C3AED] to-[#A855F7]",
    accent: "#7C3AED",
    tags: ["Procurement", "Analytics", "Verified Vendors"]
  },
  {
    id: "house-helper",
    title: "House Helper",
    subtitle: "Smart Home Workforce",
    description: "Intelligent support systems for household workforce management, verification, and automated hiring.",
    icon: <Home className="w-6 h-6" />,
    color: "from-[#10B981] to-[#059669]",
    accent: "#10B981",
    tags: ["Home Services", "Hiring", "Security"]
  },
  {
    id: "sankalap",
    title: "SANKALAP COMMUNITY",
    subtitle: "Open Innovation Ecosystem",
    description: "Technology and innovation backbone focusing on SaaS, Agentic AI, and student open-source collaboration.",
    icon: <Code className="w-6 h-6" />,
    color: "from-[#F43F5E] to-[#E11D48]",
    accent: "#F43F5E",
    tags: ["Open Source", "Incubator", "Research"]
  },
  {
    id: "syncro",
    title: "SYNCRO",
    subtitle: "AI Desktop Agent",
    description: "Intelligent AI-powered desktop operating workspace for developers and multi-agent orchestration.",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-[#6366F1] to-[#4F46E5]",
    accent: "#6366F1",
    tags: ["Agentic OS", "Automation", "Workstation"]
  },
  {
    id: "pg-connect",
    title: "PG CONNECT",
    subtitle: "Smart Living Infrastructure",
    description: "Accommodation and student-living ecosystem simplifying discovery and digital rental management.",
    icon: <MapPin className="w-6 h-6" />,
    color: "from-[#F59E0B] to-[#D97706]",
    accent: "#F59E0B",
    tags: ["Housing", "Community", "Rental Management"]
  },
  {
    id: "ai-labs",
    title: "AI Labs",
    subtitle: "Future Intelligence",
    description: "Core research division focused on LLM orchestration, autonomous agents, and vision systems.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-[#EC4899] to-[#DB2777]",
    accent: "#EC4899",
    tags: ["LLM", "Robotics", "Neural Nets"]
  }
];

export function DepartmentsSection() {
  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-4"
          >
            THE <span className="text-primary">ECOSYSTEM</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-white/50"
          >
            Interconnected intelligent platforms solving real-world infrastructure 
            and organizational challenges through modular architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl"
                style={{ background: `linear-gradient(to bottom right, ${dept.accent}, transparent)` }}
              />
              
              <div className="relative glass h-full p-6 rounded-2xl border border-white/5 group-hover:border-white/20 transition-all overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl transition-all group-hover:bg-primary/10" />
                
                <div className={cn(
                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg",
                  dept.color
                )}>
                  {dept.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-1 tracking-tight group-hover:text-primary transition-colors">
                  {dept.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-medium">
                  {dept.subtitle}
                </p>
                <p className="text-sm text-white/60 mb-6 leading-relaxed line-clamp-3">
                  {dept.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {dept.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/5 text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between group-hover:border-white/10 transition-colors">
                  <span className="text-xs font-bold tracking-wider text-white/30 uppercase">Department</span>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
