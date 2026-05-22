// src/components/Hero.tsx

'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  '/images/hero.jpg',
  '/images/hero1.jpg',
  '/images/hero2.jpg',
   
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current]}
              alt="Mining Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        {/* EXTRA SHADOW */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-amber-400">
            Building Infrastructure
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Supporting Mining.
            <br />
            Delivering
            <span className="text-amber-400"> Excellence.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            TISOT Mining delivers mining, earthworks and civil
            engineering solutions across South Africa with a
            commitment to safety, quality and reliability.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-2xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400">
              Our Services
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              View Projects
            </button>
          </div>
        </motion.div>
      </div>

      {/* SLIDER CONTROLS */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="rounded-full border border-white/20 bg-black/40 p-4 text-white backdrop-blur-xl transition hover:bg-amber-500 hover:text-black"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="rounded-full border border-white/20 bg-black/40 p-4 text-white backdrop-blur-xl transition hover:bg-amber-500 hover:text-black"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? 'w-10 bg-amber-400'
                : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}