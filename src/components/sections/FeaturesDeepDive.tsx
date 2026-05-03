"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  points: string[];
  reversed?: boolean;
}

function Feature({ title, description, points, reversed }: FeatureProps) {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-12 items-center mb-24 last:mb-0",
      reversed && "md:flex-row-reverse"
    )}>
      <div className="flex-1 w-full">
        <motion.div
          initial={{ opacity: 0, x: reversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-lg border shadow-xl overflow-hidden aspect-video group"
        >
          {/* Browser Header Placeholder */}
          <div className="h-8 bg-muted flex items-center px-4 gap-2 border-b">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          {/* Content Placeholder */}
          <div className="p-8 h-full bg-secondary/20 flex flex-col gap-4">
             <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
             <div className="grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 bg-white rounded border shadow-sm p-4">
                  <div className="h-40 bg-muted/30 rounded" />
                </div>
                <div className="bg-white rounded border shadow-sm p-4 flex flex-col gap-2">
                   <div className="h-4 bg-muted rounded" />
                   <div className="h-4 bg-muted rounded" />
                   <div className="h-10 bg-electric rounded mt-auto" />
                </div>
             </div>
          </div>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/0 transition-colors pointer-events-none" />
        </motion.div>
      </div>

      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-5xl font-black text-navy uppercase mb-6 leading-tight">
            {title}
          </h3>
          <p className="text-xl text-muted-grey mb-8 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-electric shrink-0" />
                <span className="text-lg font-medium text-navy/80">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export function FeaturesDeepDive() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <Feature
          title="High-Performance Ecommerce"
          description="A storefront built for speed and conversion. We handle the technical heavy lifting so you can focus on your inventory."
          points={[
            "Seamless product listings & filters",
            "Secure integrated checkout",
            "Real-time stock management",
            "Mobile-optimized shopping experience"
          ]}
        />
        <Feature
          reversed
          title="Workshop Command Center"
          description="Ditch the paper job cards. Manage your workshop throughput from a single, intuitive interface."
          points={[
            "Digital job card creation & tracking",
            "Mechanic assignment & scheduling",
            "Automated customer SMS notifications",
            "Full service history for every bike"
          ]}
        />
        <Feature
          title="Admin Without the Headache"
          description="Everything you need to run your digital business, accessible from any device. No coding required."
          points={[
            "Simple content management",
            "Sales and workshop analytics",
            "Integrated local SEO dashboard",
            "Dedicated UK-based technical support"
          ]}
        />
      </div>
    </section>
  );
}
