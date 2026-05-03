"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { Target, Users, Zap, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        accent="About Avorria Cycle"
        title="We build digital <br/> gear for local shops."
        subtitle="Avorria Cycle is a specialized division of Avorria, a UK digital agency dedicated to leveling the playing field for independent bike shops."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-black text-navy uppercase mb-6">Our Mission</h2>
              <p className="text-xl text-muted-grey leading-relaxed italic">
                 "To ensure that independent local bike shops aren't just surviving, but thriving in a digital-first economy. We provide the tools, the tech, and the strategy to beat the chains on your own terms."
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                 <h3 className="text-3xl font-black text-navy uppercase mb-6">Part of the Avorria Family</h3>
                 <p className="text-lg text-muted-grey mb-6 leading-relaxed">
                    Avorria (avorria.com) is a leading UK digital agency that builds complete digital ecosystems. With Avorria Cycle, we've taken that high-level agency expertise and focused it entirely on the cycling industry.
                 </p>
                 <p className="text-lg text-muted-grey leading-relaxed">
                    We don't just build websites; we build business infrastructure. Our team consists of digital strategists, developers, and—most importantly—cyclists who understand the nuances of a local bike shop.
                 </p>
              </div>
              <div className="relative aspect-square bg-navy rounded-lg overflow-hidden border-8 border-secondary shadow-xl group">
                 <Image 
                   src="/images/about-hero.png" 
                   alt="Avorria HQ" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Specialized", text: "Built exclusively for the bike industry." },
                { icon: Zap, title: "Fast", text: "The highest performance metrics in the game." },
                { icon: Users, title: "Supportive", text: "UK-based team, just a phone call away." },
                { icon: Award, title: "Proven", text: "Trusted by shops across the country." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-secondary rounded-lg text-center group hover:bg-navy transition-all duration-300">
                   <item.icon className="w-10 h-10 text-navy mx-auto mb-4 group-hover:text-electric transition-colors" />
                   <h4 className="font-black uppercase text-navy group-hover:text-white transition-colors mb-2">{item.title}</h4>
                   <p className="text-sm text-muted-grey group-hover:text-white/60 transition-colors">{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
