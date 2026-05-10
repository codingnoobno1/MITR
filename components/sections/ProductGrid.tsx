"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Cpu, Shield, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Product, Division } from "@/data/types";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  division: Division;
}

export function ProductGrid({ products, division }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <Link 
            href={product.details?.cta?.href?.startsWith('http') ? product.details.cta.href : `/divisions/${division.slug}/${product.slug}`}
            target={product.details?.cta?.href?.startsWith('http') ? "_blank" : undefined}
            rel={product.details?.cta?.href?.startsWith('http') ? "noopener noreferrer" : undefined}
            className="group block h-full"
          >
            <div className="relative h-full bg-white p-10 rounded-[3rem] border border-slate-200 group-hover:border-transparent group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col overflow-hidden">
              {/* Hover Background Accent */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: division.color }}
              />
              
              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  style={{ backgroundColor: `${division.color}10`, color: division.color }}
                >
                  {product.slug.includes('agent') ? <Cpu className="w-8 h-8" /> : 
                   product.slug.includes('vendor') ? <Globe className="w-8 h-8" /> :
                   product.slug.includes('connect') ? <Zap className="w-8 h-8" /> :
                   <Shield className="w-8 h-8" />}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-heading font-black text-slate-900 group-hover:text-primary transition-colors tracking-tighter">
                    {product.name}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-slate-300" />
                  </div>
                </div>
                
                <div className="flex gap-2 mb-6">
                  <span className={cn(
                    "text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-widest",
                    product.status === 'active' ? "bg-green-50 text-green-600 border-green-100" :
                    product.status === 'beta' ? "bg-blue-50 text-blue-600 border-blue-100" :
                    "bg-orange-50 text-orange-600 border-orange-100"
                  )}>
                    {product.status || 'Active'}
                  </span>
                </div>

                <p className="text-slate-500 leading-relaxed mb-8 font-medium text-lg">
                  {product.description}
                </p>

                {product.features && (
                  <div className="space-y-2 mb-10">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-slate-50 mt-auto flex items-center justify-between group-hover:border-primary/10 transition-colors">
                <span className="text-xs font-black tracking-[0.2em] text-slate-300 uppercase group-hover:text-primary transition-colors">Initialize Access</span>
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:translate-x-2 shadow-sm"
                  style={{ color: division.color }}
                >
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
