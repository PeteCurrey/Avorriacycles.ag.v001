"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (

    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        accent="Contact Us"
        title="Let's build your <br/> digital ecosystem."
        subtitle="Ready to transform your shop? Book a discovery call or send us a message to start the conversation."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                 <h2 className="text-4xl font-black text-navy uppercase mb-8">Get in touch</h2>
                 <p className="text-xl text-muted-grey mb-12 leading-relaxed">
                    We're usually in the workshop or at our desks in the UK. We respond to all inquiries within 24 hours.
                 </p>

                 <div className="space-y-8 mb-12">
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center shrink-0">
                          <Phone className="text-navy w-6 h-6" />
                       </div>
                       <div>
                          <div className="font-black uppercase text-navy text-sm tracking-widest mb-1">Call Us</div>
                          <div className="text-xl font-bold text-navy/70">+44 (0) 123 456 789</div>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center shrink-0">
                          <Mail className="text-navy w-6 h-6" />
                       </div>
                       <div>
                          <div className="font-black uppercase text-navy text-sm tracking-widest mb-1">Email</div>
                          <div className="text-xl font-bold text-navy/70">hello@avorria.com</div>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center shrink-0">
                          <Globe className="text-navy w-6 h-6" />
                       </div>
                       <div>
                          <div className="font-black uppercase text-navy text-sm tracking-widest mb-1">HQ</div>
                          <div className="text-xl font-bold text-navy/70">London, United Kingdom</div>
                       </div>
                    </div>
                 </div>

                 <div className="p-8 bg-navy text-white rounded-lg">
                    <Calendar className="text-electric w-10 h-10 mb-6" />
                    <h4 className="text-2xl font-black uppercase mb-4">Book a Discovery Call</h4>
                    <p className="text-white/60 mb-6 font-medium">A free, no-pressure 30-minute chat about your shop's goals and how we can help you reach them.</p>
                    <Button className="w-full bg-electric text-navy font-black py-7 uppercase tracking-widest hover:bg-electric/90">
                       Schedule via Calendly
                    </Button>
                 </div>
              </div>

              <div>
                 <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-10 rounded-lg border border-navy/5 shadow-sm">
                    <h3 className="text-2xl font-black text-navy uppercase mb-6">Send a Message</h3>
                    
                    {status === 'success' && (
                      <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-md mb-6">
                        <p className="font-bold">Message sent successfully!</p>
                        <p className="text-sm">We'll be in touch with you shortly.</p>
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md mb-6">
                        <p className="font-bold">Error sending message.</p>
                        <p className="text-sm">Please try again or email us directly.</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-black uppercase text-navy/50 tracking-widest ml-1">First Name</label>
                          <Input name="firstName" placeholder="John" required disabled={status === 'loading'} className="bg-white border-navy/10 py-6" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-black uppercase text-navy/50 tracking-widest ml-1">Last Name</label>
                          <Input name="lastName" placeholder="Doe" required disabled={status === 'loading'} className="bg-white border-navy/10 py-6" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase text-navy/50 tracking-widest ml-1">Email Address</label>
                       <Input name="email" placeholder="john@cycles.avorria.com" type="email" required disabled={status === 'loading'} className="bg-white border-navy/10 py-6" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase text-navy/50 tracking-widest ml-1">Shop Name</label>
                       <Input name="shopName" placeholder="Ridgeline Cycles" disabled={status === 'loading'} className="bg-white border-navy/10 py-6" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase text-navy/50 tracking-widest ml-1">Message</label>
                       <Textarea name="message" placeholder="How can we help?" required disabled={status === 'loading'} className="bg-white border-navy/10 min-h-[150px]" />
                    </div>
                    <Button type="submit" disabled={status === 'loading'} className="w-full bg-navy text-white font-black py-8 uppercase tracking-widest hover:bg-navy/90 text-lg">
                       {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                 </form>
              </div>

           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
