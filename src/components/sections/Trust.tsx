"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Trust() {
  const trustItems = [
    "Built on Next.js",
    "UK-based team",
    "No lock-in contracts",
    "Setup in 4 weeks",
  ];

  const testimonials = [
    {
      quote: "Finally, a system that understands how a bike shop actually works. The workshop integration has saved us hours of paperwork every week.",
      author: "Gareth J.",
      shop: "Summit Cycles",
    },
    {
      quote: "Our local SEO ranking went from page 4 to page 1 in two months. We're seeing new faces in the shop every day who found us on Google.",
      author: "Sarah L.",
      shop: "The Spoke Hub",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Trust Bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24 border-y border-border py-12">
          {trustItems.map((item, i) => (
            <div key={i} className="text-sm md:text-lg font-black uppercase tracking-widest text-navy/40">
              {item}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-lg border border-border shadow-sm relative"
            >
              <Quote className="w-10 h-10 text-electric/40 absolute top-8 right-8" />
              <p className="text-xl md:text-2xl font-medium text-navy/80 mb-8 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <div className="font-black uppercase text-navy">{t.author}</div>
                <div className="text-sm font-bold text-muted-grey uppercase tracking-wider">{t.shop}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
