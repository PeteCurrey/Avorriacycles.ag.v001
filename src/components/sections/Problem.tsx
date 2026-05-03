"use client";

import { motion } from "framer-motion";

export function Problem() {
  const stats = [
    {
      value: "74%",
      label: "of cyclists research online before buying in-store",
    },
    {
      value: "Amazon",
      label: "and big chains are winning the digital battle for local customers",
    },
    {
      value: "2014",
      label: "is when most local bike shop websites were last updated",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-navy leading-none mb-4">
            The playing field <br />
            isn't level. We fix that.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-4 border-electric pl-6"
            >
              <div className="text-4xl md:text-5xl font-black text-navy mb-2 uppercase">
                {stat.value}
              </div>
              <p className="text-muted-grey text-lg font-medium leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-navy/80 font-medium leading-relaxed italic">
            "Independent shops have the service, the expertise, and the community. 
            But if you don't show up where the journey starts—online—you're 
            losing the race before it even begins. We give you the tools 
            to win on your own terms."
          </p>
        </div>
      </div>
    </section>
  );
}
