"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy">
      {/* Abstract Spoke/Tread Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="spokes" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="40" stroke="white" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spokes)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] mb-6">
              Your local bike shop. <br />
              <span className="relative inline-block">
                Online and unstoppable.
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-electric" />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed font-medium"
          >
            We build complete digital ecosystems for independent bike shops — 
            ecommerce website, workshop management, and local SEO. 
            Everything Chain Reaction has. Built for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#demo"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-electric text-navy hover:bg-electric/90 text-lg font-bold px-8 py-7 h-auto"
              )}
            >
              See the Demo
            </Link>
            <Link
              href="#packages"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white text-white hover:bg-white/10 text-lg font-bold px-8 py-7 h-auto"
              )}
            >
              View Packages
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
