"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-3 border-border"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <span className={cn(
            "text-xl md:text-2xl font-heading font-bold tracking-tighter uppercase flex items-center transition-colors",
            isScrolled ? "text-navy" : "text-white"
          )}>
            Avorria <span className={cn(
              "transition-colors mx-1",
              isScrolled ? "text-navy/40 group-hover:text-electric" : "text-white/60 group-hover:text-electric"
            )}>/</span> Cycle
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Packages", "Demo", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors",
                isScrolled 
                  ? "text-navy hover:text-electric" 
                  : "text-electric hover:text-white"
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-electric text-navy hover:bg-electric/90 font-bold hidden sm:flex h-10 px-6"
            )}
          >
            Book a Discovery Call
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
          
          {/* Mobile menu button could go here if needed, keeping it simple for now */}
        </div>
      </div>
    </header>
  );
}
