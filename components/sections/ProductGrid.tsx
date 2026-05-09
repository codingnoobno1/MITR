"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Cpu, Shield, ArrowRight } from "lucide-react";
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
        <Link 
          key={product.id} 
          href={`/divisions/${division.slug}/${product.slug}`}
          className="group"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col"
          >
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform"
              style={{ backgroundColor: `${division.color}10`, color: division.color }}
            >
              {product.name.toLowerCase().includes('agent') ? <Cpu className="w-6 h-6" /> : 
               product.name.toLowerCase().includes('vendor') ? <Globe className="w-6 h-6" /> :
               product.name.toLowerCase().includes('connect') ? <Zap className="w-6 h-6" /> :
               <Shield className="w-6 h-6" />}
            </div>

            <h3 className="text-2xl font-heading font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <div className="flex gap-2 mb-4">
              <span className="text-[10px] font-black px-2 py-1 rounded-md bg-slate-50 text-slate-400 uppercase tracking-widest border border-slate-100">
                {product.status || 'Active'}
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
              {product.description}
            </p>

            <div className="pt-6 border-t border-slate-50 mt-auto flex items-center justify-between">
              <span className="text-xs font-black tracking-widest text-slate-400 uppercase">View Product</span>
              <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
