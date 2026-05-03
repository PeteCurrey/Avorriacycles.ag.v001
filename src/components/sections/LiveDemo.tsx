"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LiveDemo() {
  return (
    <section id="demo" className="py-24 bg-navy relative overflow-hidden text-white">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none">
                See it live. <br />
                This is what your <br />
                shop could look like.
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-lg">
                Ridgeline Cycles is our showcase demo — a fully-built, 
                realistic independent bike shop website with ecommerce 
                and workshop booking. Click through it. Imagine your 
                brand in its place.
              </p>
              <Link
                href="https://ridgelinecycles.com"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-electric text-navy hover:bg-electric/90 text-lg font-bold px-8 py-7 h-auto inline-flex"
                )}
              >
                Visit the Demo Site
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
               {/* Browser Mockup */}
               <div className="rounded-lg border border-white/10 shadow-2xl overflow-hidden bg-white aspect-[4/3]">
                  <div className="h-6 bg-muted/20 border-b border-white/5 flex items-center px-3 gap-1.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                     <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                     <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <div className="relative h-full bg-[#111]">
                    <Image 
                      src="/images/demo-site.png" 
                      alt="Ridgeline Cycles Demo" 
                      fill 
                      className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
                  </div>
               </div>
               {/* Hover Effect */}
               <div className="absolute inset-0 ring-1 ring-electric/20 group-hover:ring-electric transition-all rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

