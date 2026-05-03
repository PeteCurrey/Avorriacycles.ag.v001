"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { ShoppingBag, Wrench, BarChart3, Search, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function FeaturesPage() {
  const deepFeatures = [
    {
      icon: ShoppingBag,
      title: "Omnichannel Ecommerce",
      description: "Sell anywhere, manage everywhere. Your online store and physical shop inventory stay perfectly synced in real-time.",
      details: [
        "Automated stock level updates",
        "Click-and-collect integration",
        "Mobile-first responsive checkout",
        "Multiple payment gateway support"
      ]
    },
    {
      icon: Wrench,
      title: "Digital Workshop Management",
      description: "Eliminate the paper trail. Our workshop system is built for mechanics, by people who understand the daily grind.",
      details: [
        "Online service booking calendar",
        "Digital job cards with photo attachments",
        "Automated status updates via SMS/Email",
        "Technician efficiency tracking"
      ]
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description: "Stop guessing. Get clear data on what's selling, what's not, and where your workshop is losing money.",
      details: [
        "Real-time sales performance",
        "Workshop throughput reports",
        "Customer lifetime value tracking",
        "Inventory turnover analysis"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        accent="Powerful Features"
        title="Everything you need to dominate locally."
        subtitle="We've built a specialized toolkit designed specifically for the unique needs of independent bike shops. No fluff, just performance."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {deepFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 bg-navy flex items-center justify-center rounded-sm mb-8 group-hover:bg-electric transition-colors">
                  <f.icon className="text-electric w-8 h-8 group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 text-navy">{f.title}</h3>
                <p className="text-lg text-muted-grey mb-6 leading-relaxed">{f.description}</p>
                <ul className="space-y-3">
                  {f.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-navy/70 font-medium">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                 <h2 className="text-4xl md:text-6xl font-black text-navy uppercase leading-none mb-8">
                    Built for speed. <br />
                    Optimized for SEO.
                 </h2>
                 <p className="text-xl text-muted-grey mb-8 leading-relaxed">
                    A beautiful website is useless if nobody sees it. Every Avorria Cycle site comes pre-configured with industry-leading SEO and performance optimizations.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                       <Zap className="text-electric w-6 h-6" />
                       <div className="font-black uppercase text-navy">99+ PageSpeed</div>
                    </div>
                    <div className="flex flex-col gap-2">
                       <Search className="text-electric w-6 h-6" />
                       <div className="font-black uppercase text-navy">Local SEO Mastery</div>
                    </div>
                    <div className="flex flex-col gap-2">
                       <ShieldCheck className="text-electric w-6 h-6" />
                       <div className="font-black uppercase text-navy">Secure Hosting</div>
                    </div>
                    <div className="flex flex-col gap-2">
                       <ShieldCheck className="text-electric w-6 h-6" />
                       <div className="font-black uppercase text-navy">Daily Backups</div>
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full">
                 <div className="relative rounded-lg border-2 border-navy/10 shadow-2xl overflow-hidden aspect-video">
                    {/* Placeholder for the generated image if I were to use it here */}
                    <div className="absolute inset-0 bg-navy flex items-center justify-center">
                       <div className="text-electric font-black italic text-2xl uppercase tracking-tighter">Avorria Dashboard</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
