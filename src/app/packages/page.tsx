"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { Check, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function PackagesPage() {
  const comparison = [
    { feature: "Ecommerce Website", starter: true, pro: true, elite: true },
    { feature: "Product Limit", starter: "100", pro: "500", elite: "Unlimited" },
    { feature: "Local SEO Setup", starter: true, pro: true, elite: true },
    { feature: "Workshop Management", starter: false, pro: true, elite: true },
    { feature: "Staff Accounts", starter: "1", pro: "3", elite: "Unlimited" },
    { feature: "Custom Domain", starter: true, pro: true, elite: true },
    { feature: "Priority Support", starter: false, pro: false, elite: true },
    { feature: "Custom Integrations", starter: false, pro: false, elite: true },
    { feature: "Monthly Performance Review", starter: false, pro: true, elite: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        accent="Pricing & Packages"
        title="Simple plans. <br/> No hidden gear ratios."
        subtitle="Transparent pricing designed to scale with your shop. No setup fees, no lock-in contracts, just pure performance."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-left border-b-2 border-navy/10 text-navy font-black uppercase tracking-widest text-sm">Feature</th>
                  <th className="p-6 text-center border-b-2 border-navy/10 text-navy font-black uppercase tracking-widest text-sm">Starter</th>
                  <th className="p-6 text-center border-b-2 border-navy/10 text-electric bg-navy font-black uppercase tracking-widest text-sm">Pro</th>
                  <th className="p-6 text-center border-b-2 border-navy/10 text-navy font-black uppercase tracking-widest text-sm">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, i) => (
                  <tr key={i} className="hover:bg-secondary/50 transition-colors">
                    <td className="p-6 border-b border-navy/5 font-medium text-navy/80">{item.feature}</td>
                    <td className="p-6 border-b border-navy/5 text-center">
                      {typeof item.starter === "boolean" ? (item.starter ? <Check className="mx-auto text-navy w-5 h-5" /> : <X className="mx-auto text-muted-grey/30 w-5 h-5" />) : <span className="font-bold text-navy">{item.starter}</span>}
                    </td>
                    <td className="p-6 border-b border-navy/5 text-center bg-navy/5 font-bold text-navy">
                      {typeof item.pro === "boolean" ? (item.pro ? <Check className="mx-auto text-navy w-5 h-5" /> : <X className="mx-auto text-muted-grey/30 w-5 h-5" />) : <span>{item.pro}</span>}
                    </td>
                    <td className="p-6 border-b border-navy/5 text-center font-bold text-navy">
                      {typeof item.elite === "boolean" ? (item.elite ? <Check className="mx-auto text-navy w-5 h-5" /> : <X className="mx-auto text-muted-grey/30 w-5 h-5" />) : <span>{item.elite}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-secondary rounded-lg border border-navy/5">
                <h4 className="font-black uppercase text-navy mb-4">Starter</h4>
                <div className="text-3xl font-black text-navy mb-6">£79<span className="text-sm font-medium text-muted-grey">/mo</span></div>
                <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full font-bold uppercase")}>Get Started</Link>
             </div>
             <div className="p-8 bg-navy text-white rounded-lg border-2 border-electric relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric text-navy text-[10px] font-black uppercase px-3 py-1 rounded-full">Recommended</div>
                <h4 className="font-black uppercase text-electric mb-4">Pro</h4>
                <div className="text-3xl font-black text-white mb-6">£149<span className="text-sm font-medium text-white/60">/mo</span></div>
                <Link href="/contact" className={cn(buttonVariants(), "w-full bg-electric text-navy font-bold uppercase hover:bg-electric/90")}>Get Started</Link>
             </div>
             <div className="p-8 bg-secondary rounded-lg border border-navy/5">
                <h4 className="font-black uppercase text-navy mb-4">Elite</h4>
                <div className="text-3xl font-black text-navy mb-6">£249<span className="text-sm font-medium text-muted-grey">/mo</span></div>
                <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full font-bold uppercase")}>Get Started</Link>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
               <h4 className="text-xl font-black uppercase text-electric mb-4">Is there a setup fee?</h4>
               <p className="text-white/70 text-lg leading-relaxed font-medium">No. We don't believe in locking you in with high upfront costs. We earn your business every month through performance and support.</p>
            </div>
            <div>
               <h4 className="text-xl font-black uppercase text-electric mb-4">Can I switch plans later?</h4>
               <p className="text-white/70 text-lg leading-relaxed font-medium">Absolutely. You can upgrade or downgrade your plan at any time as your business needs evolve.</p>
            </div>
            <div>
               <h4 className="text-xl font-black uppercase text-electric mb-4">Who handles my data migration?</h4>
               <p className="text-white/70 text-lg leading-relaxed font-medium">Our team provides a concierge migration service. We help you move your inventory and customer data from your existing system to Avorria Cycle seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
