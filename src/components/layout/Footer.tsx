"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="container mx-auto px-4 md:px-6 py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase leading-none">
            Ready to take your <br />
            <span className="text-electric">bike shop online?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute discovery call. No hard sell. 
            Just a direct conversation about your shop's digital future.
          </p>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-electric text-navy hover:bg-electric/90 text-xl font-black px-12 py-8 h-auto uppercase tracking-tighter inline-flex"
            )}
          >
            Book Your Call
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-3xl font-heading font-black tracking-tighter uppercase mb-6">
              Avorria <span className="text-electric">/</span> Cycle
            </div>
            <p className="text-white/60 text-lg max-w-md mb-8">
              Empowering independent local bike shops with the same 
              digital firepower as the national chains.
            </p>
            <div className="flex gap-4">
               {/* Icons removed to fix build issues with lucide-react version */}
            </div>
          </div>



          <div>
            <h4 className="font-black uppercase tracking-widest text-sm text-electric mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/60 font-bold uppercase tracking-wider text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#packages" className="hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="#demo" className="hover:text-white transition-colors">Demo</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm text-electric mb-6">Legal</h4>
            <ul className="space-y-4 text-white/60 font-bold uppercase tracking-wider text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-white/40 text-sm font-bold uppercase tracking-widest gap-4">
          <div>© {new Date().getFullYear()} Avorria Cycle. All rights reserved.</div>
          <div className="flex items-center gap-2">
             Part of <Link href="https://avorria.com" className="text-white hover:text-electric transition-colors">Avorria Digital Ecosystems</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
