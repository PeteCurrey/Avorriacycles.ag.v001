import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { FeaturesDeepDive } from "@/components/sections/FeaturesDeepDive";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { Pricing } from "@/components/sections/Pricing";
import { Trust } from "@/components/sections/Trust";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <FeaturesDeepDive />
      <LiveDemo />
      <Pricing />
      <Trust />
      <Footer />
    </main>
  );
}

