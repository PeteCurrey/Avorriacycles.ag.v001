"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Calendar, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Solution() {
  const pillars = [
    {
      icon: ShoppingCart,
      title: "Ecommerce Website",
      description: "A fast, beautiful online shop. Sell bikes, parts and accessories 24/7. Integrated with your in-store stock.",
    },
    {
      icon: Calendar,
      title: "Workshop Management",
      description: "Job cards, service bookings, customer history. Run your workshop without the chaos.",
    },
    {
      icon: Search,
      title: "Local SEO & Google",
      description: "Dominate local search. Show up when someone searches 'bike shop near me' in your town.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-navy leading-none mb-4">
            Everything you need. <br />
            Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-navy flex items-center justify-center rounded-sm mb-4">
                    <pillar.icon className="text-electric w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-black text-navy uppercase">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-grey text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
