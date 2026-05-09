"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Hammer, 
  ShoppingCart, 
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const departments = [
  {
    id: "karya",
    title: "KARYA",
    subtitle: "Construction Intelligence",
    description: "Digitizing and organizing the fragmented construction ecosystem using intelligent site monitoring and workflow engines.",
    icon: <Hammer className="w-6 h-6" />,
    color: "bg-primary/10 text-primary",
    accent: "var(--primary)",
    tags: ["Site Monitoring", "Workflow", "AI Insights"]
  },
  {
    id: "buildlink",
    title: "BuildLink",
    subtitle: "Infrastructure Marketplace",
    description: "Connecting customers, contractors, architects, and vendors in a modern intelligent infrastructure marketplace.",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "bg-accent/10 text-accent",
    accent: "var(--accent)",
    tags: ["B2B Marketplace", "Contractor Search", "Materials"]
  }
];

export function DepartmentsSection() {
  return (
    <section id="ecosystem" className="py-24 relative bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-4 text-slate-900"
          >
            OUR <span className="text-primary">DEPARTMENTS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-500"
          >
            Focused intelligent platforms solving real-world infrastructure 
            and organizational challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {departments.map((dept, index) => (
            <Link key={dept.id} href={`/departments/${dept.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative bg-white h-full p-8 rounded-3xl border border-slate-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all overflow-hidden">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform",
                    dept.color
                  )}>
                    {dept.icon}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-1 tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold">
                    {dept.subtitle}
                  </p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {dept.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {dept.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:border-primary/10 transition-colors">
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Explore Product</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
