"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "79",
    features: [
      "Ecommerce website",
      "Up to 100 products",
      "Local SEO setup",
      "Custom domain & hosting",
      "1 admin account",
    ],
  },
  {
    name: "Pro",
    price: "149",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 500 products",
      "Workshop management system",
      "3 staff accounts",
      "Monthly support",
    ],
  },
  {
    name: "Elite",
    price: "249",
    features: [
      "Everything in Pro",
      "Unlimited products",
      "Unlimited staff accounts",
      "Priority support",
      "Custom integrations on request",
    ],
  },
];

export function Pricing() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-navy leading-none mb-4 uppercase">
            Simple, transparent pricing.
          </h2>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto">
            Choose the package that fits your shop's stage. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 rounded-lg border-2 transition-all",
                plan.popular 
                  ? "border-navy bg-navy text-white shadow-2xl scale-105 z-10" 
                  : "border-border bg-white text-navy hover:border-navy/20"
              )}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric text-navy font-bold px-4 py-1">
                  MOST POPULAR
                </Badge>
              )}

              <div className="mb-8">
                <h3 className={cn(
                  "text-2xl font-black uppercase mb-2",
                  plan.popular ? "text-white" : "text-navy"
                )}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">£{plan.price}</span>
                  <span className={cn(
                    "text-sm font-medium",
                    plan.popular ? "text-white/60" : "text-muted-grey"
                  )}>/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={cn(
                      "w-5 h-5 shrink-0",
                      plan.popular ? "text-electric" : "text-navy"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      plan.popular ? "text-white/80" : "text-navy/80"
                    )}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full font-bold py-6 uppercase tracking-wider",
                  plan.popular 
                    ? "bg-electric text-navy hover:bg-electric/90" 
                    : "bg-navy text-white hover:bg-navy/90"
                )}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
