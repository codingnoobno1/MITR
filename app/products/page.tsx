"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Shield, Zap, ArrowRight, Building2, Globe, X, CreditCard, PieChart, Truck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SaaSProducts = [
  {
    id: "syncro-desktop",
    name: "Syncro Desktop Agent",
    tagline: "Workstation Automation",
    price: "₹200",
    period: "monthly",
    desc: "Deploy intelligent background agents to orchestrate complex workstation tasks. Perfect for high-volume operational environments.",
    features: ["Process optimization", "Usage telemetry", "Multi-device sync", "Background automation"],
    icon: <Cpu />,
    color: "cyan"
  },
  {
    id: "buildlink-platform",
    name: "BuildLink Platform",
    tagline: "Construction Hub",
    price: "1-2%",
    period: "commission",
    desc: "Complete house building management. Track budgets, coordinate architects, and manage project timelines in one unified dashboard.",
    features: ["Real-time budget tracking", "Architect coordination", "Milestone management", "Procurement"],
    icon: <Building2 />,
    color: "blue"
  },
  {
    id: "vendor-connect",
    name: "Vendor Connect",
    tagline: "Construct Corridor",
    price: "Custom",
    period: "enterprise",
    desc: "The Construct Corridor for B2B supplier networking. Unify your supply chain with high-velocity procurement protocols.",
    features: ["Global supplier network", "Bidding system", "Logistics coordination", "Compliance verification"],
    icon: <Globe />,
    color: "cyan"
  }
];

export default function ProductsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProduct = SaaSProducts.find(p => p.id === selectedId);

  return (
    <main className="w-full bg-slate-50 min-h-screen font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Section (Clean & Light) */}
      <section className="relative pt-40 pb-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-600" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-cyan-600 uppercase">Product_Marketplace</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase">
            Our <span className="text-cyan-500">Solutions</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            Scalable industrial software with transparent business models. 
            Click any card to explore full deployment details.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SaaSProducts.map((product) => (
              <motion.div
                layoutId={product.id}
                key={product.id}
                onClick={() => setSelectedId(product.id)}
                className="group cursor-pointer"
              >
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
                  {/* Subtle Corner Accent */}
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-cyan-500" />
                  </div>

                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 text-cyan-600 border border-cyan-100 group-hover:scale-110 transition-transform">
                      {React.cloneElement(product.icon as React.ReactElement, { className: "w-7 h-7" })}
                    </div>
                    <div className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-1">{product.tagline}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-2">
                      {product.desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{product.period}</div>
                      <div className="text-xl font-black text-slate-900 tracking-tighter">{product.price}</div>
                    </div>
                    <Button variant="outline" className="rounded-xl border-slate-200 text-xs font-bold text-cyan-600 group-hover:bg-cyan-50 group-hover:border-cyan-200">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Overlay / Modal */}
      <AnimatePresence>
        {selectedId && selectedProduct && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={selectedId}
              className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 z-20 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Column: Visuals */}
              <div className="md:w-2/5 bg-cyan-500 p-12 md:p-20 text-white flex flex-col justify-center relative">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent)]" />
                 <div className="relative z-10 space-y-8">
                    <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-lg">
                       {React.cloneElement(selectedProduct.icon as React.ReactElement, { className: "w-10 h-10 text-white" })}
                    </div>
                    <div>
                       <div className="text-xs font-bold uppercase tracking-[0.4em] text-white/60 mb-2">{selectedProduct.tagline}</div>
                       <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{selectedProduct.name}</h2>
                    </div>
                    <div className="h-1 w-20 bg-white/40 rounded-full" />
                 </div>
              </div>

              {/* Right Column: Details */}
              <div className="md:w-3/5 p-12 md:p-20 bg-white space-y-10">
                 <div className="space-y-6">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">About the Platform</h3>
                    <p className="text-xl text-slate-600 font-normal leading-relaxed">
                       {selectedProduct.desc}
                    </p>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedProduct.features.map((feature, i) => (
                       <div key={i} className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-cyan-500" />
                          <span className="text-sm font-bold text-slate-700">{feature}</span>
                       </div>
                    ))}
                 </div>

                 <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                    <div>
                       <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Commercial Model</div>
                       <div className="text-4xl font-black text-slate-900 tracking-tighter">
                          {selectedProduct.price} <span className="text-base font-normal text-slate-400">/ {selectedProduct.period}</span>
                       </div>
                    </div>
                    <Button size="lg" className="rounded-2xl bg-cyan-500 hover:bg-cyan-600 h-16 px-10 text-xs font-black tracking-widest uppercase gap-3">
                       Initalize Deployment <ArrowRight className="w-4 h-4" />
                    </Button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
