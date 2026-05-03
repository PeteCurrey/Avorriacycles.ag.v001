"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { PlayCircle, MousePointer2, Smartphone, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        accent="Live Showcase"
        title="Experience the <br/> Avorria standard."
        subtitle="Explore Ridgeline Cycles, our live demonstration environment. See how we combine premium design with high-conversion functionality."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
             <div className="relative group rounded-xl overflow-hidden border-4 border-navy shadow-2xl bg-navy aspect-[16/10]">
                {/* Demo Mockup Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy/90 group-hover:bg-navy transition-colors">
                   <div className="text-center">
                      <div className="text-5xl font-heading font-black text-electric mb-4 tracking-tighter italic">RIDGELINE CYCLES</div>
                      <Link 
                        href="https://ridgelinecycles.com" 
                        target="_blank"
                        className={cn(buttonVariants({ size: "lg" }), "bg-electric text-navy font-black py-8 px-12 text-xl uppercase tracking-widest")}
                      >
                        Launch Live Demo
                      </Link>
                   </div>
                </div>
                {/* Subtle browser controls */}
                <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-400/50" />
                   <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                   <div className="w-2 h-2 rounded-full bg-green-400/50" />
                </div>
             </div>

             <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                   <h3 className="text-3xl font-black text-navy uppercase mb-6 leading-tight">What to look for in the demo:</h3>
                   <ul className="space-y-6">
                      <li className="flex gap-4">
                         <MousePointer2 className="text-electric w-6 h-6 shrink-0" />
                         <div>
                            <div className="font-black uppercase text-navy mb-1">Frictionless UX</div>
                            <p className="text-muted-grey leading-relaxed">Try the 'Add to Cart' flow. Notice how fast and intuitive it feels for the customer.</p>
                         </div>
                      </li>
                      <li className="flex gap-4">
                         <Layout className="text-electric w-6 h-6 shrink-0" />
                         <div>
                            <div className="font-black uppercase text-navy mb-1">Workshop Booking</div>
                            <p className="text-muted-grey leading-relaxed">Navigate to the workshop page. See how customers can select services and book slots in seconds.</p>
                         </div>
                      </li>
                      <li className="flex gap-4">
                         <Smartphone className="text-electric w-6 h-6 shrink-0" />
                         <div>
                            <div className="font-black uppercase text-navy mb-1">Mobile Performance</div>
                            <p className="text-muted-grey leading-relaxed">Scan the QR code (if provided) or resize your browser. The experience is flawless on mobile.</p>
                         </div>
                      </li>
                   </ul>
                </div>
                <div className="bg-secondary p-10 rounded-lg">
                   <h3 className="text-3xl font-black text-navy uppercase mb-6">Want a custom tour?</h3>
                   <p className="text-lg text-muted-grey mb-8 leading-relaxed">
                      If you'd like a guided walkthrough of the back-end admin dashboard and workshop management system, book a discovery call today.
                   </p>
                   <Link 
                     href="/contact" 
                     className={cn(buttonVariants({ size: "lg" }), "w-full bg-navy text-white font-black py-7 uppercase tracking-widest")}
                   >
                     Book A Guided Tour
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
