"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { 
  Shield, 
  BarChart, 
  LayoutDashboard, 
  Settings, 
  Calendar, 
  Wrench, 
  ShoppingBag, 
  Users, 
  Tag, 
  Layers,
  Rocket,
  Hammer
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  const highlightSections = [
    {
      title: "Admin Infrastructure & Auth",
      icon: Shield,
      items: [
        { label: "Next-Auth Integration", text: "Secure credential-based login at /login protecting all /admin routes." },
        { label: "Admin Dashboard", text: "Real-time metrics (Revenue, Orders, Workshop) with interactive Recharts visualizations." },
        { label: "Unified Data Layer", text: "Shared access across public and admin sites via src/lib/ for consistent inventory and order tracking." }
      ]
    },
    {
      title: "Workshop Management Core",
      icon: Hammer,
      items: [
        { label: "Interactive Kanban Board", text: "A drag-and-drop workflow for mechanics to manage bicycle repairs through 6 stages (Booked In → Collected)." },
        { label: "Bookings Calendar", text: "A monthly schedule view with daily capacity tracking and slot management." },
        { label: "Parts Inventory", text: "Dedicated tracking for workshop parts with automated reorder alerts for low stock items." }
      ]
    },
    {
      title: "Ecommerce Operations",
      icon: ShoppingBag,
      items: [
        { label: "Product & Order Management", text: "Full CRUD-ready interfaces for updating inventory and tracking customer fulfillment." },
        { label: "Customer CRM", text: "Centralized profiles with bike registration history and lifecycle metrics." },
        { label: "Marketing Tools", text: "A discount code management system with usage and expiration tracking." }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        accent="Admin Infrastructure"
        title="Your shop's <br/> digital command center."
        subtitle="Every Avorria Cycle website comes with a powerful, secure, and integrated admin dashboard. Manage your entire operation from one login."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
             {highlightSections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                   <Card className="h-full border-2 border-navy/5 hover:border-navy/10 transition-all shadow-sm">
                      <CardHeader className="bg-navy text-white rounded-t-[calc(var(--radius)-2px)]">
                         <div className="flex items-center gap-3">
                            <section.icon className="text-electric w-6 h-6" />
                            <CardTitle className="text-xl font-black uppercase tracking-tight">{section.title}</CardTitle>
                         </div>
                      </CardHeader>
                      <CardContent className="pt-8 space-y-6">
                         {section.items.map((item, idx) => (
                            <div key={idx} className="space-y-1">
                               <div className="font-black uppercase text-navy text-sm tracking-widest">{item.label}</div>
                               <p className="text-muted-grey text-sm leading-relaxed">{item.text}</p>
                            </div>
                         ))}
                      </CardContent>
                   </Card>
                </motion.div>
             ))}
          </div>

          <div className="bg-navy rounded-2xl p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <path d="M0,100 L100,0 L100,100 Z" fill="white" />
                </svg>
             </div>
             
             <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 text-electric mb-6">
                   <Rocket className="w-8 h-8" />
                   <h3 className="text-3xl font-black uppercase tracking-tighter">Technical Implementation</h3>
                </div>
                <ul className="space-y-4 mb-10">
                   <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 shrink-0" />
                      <p className="text-lg font-medium"><span className="text-electric">Framework:</span> Next.js 14 App Router for modern, server-side optimized performance.</p>
                   </li>
                   <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 shrink-0" />
                      <p className="text-lg font-medium"><span className="text-electric">Styling:</span> Tailwind CSS + shadcn/ui for high-fidelity SaaS components and consistent design.</p>
                   </li>
                   <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 shrink-0" />
                      <p className="text-lg font-medium"><span className="text-electric">State Management:</span> React Context for the public cart; local mock data for secure admin state.</p>
                   </li>
                   <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 shrink-0" />
                      <p className="text-lg font-medium"><span className="text-electric">Sync:</span> Fully committed and pushed to your remote repository for immediate deployment.</p>
                   </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                   <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest">Next-Auth</div>
                   <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest">Recharts</div>
                   <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest">Kanban</div>
                   <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest">CRM</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
