"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  accent?: string;
}

export function PageHero({ title, subtitle, accent }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {accent && (
              <span className="inline-block text-electric font-black uppercase tracking-widest text-sm mb-4">
                {accent}
              </span>
            )}
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
