// src/app/page.tsx

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-[#070707] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Footer />
    </main>
  );
}