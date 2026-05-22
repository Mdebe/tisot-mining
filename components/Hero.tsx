// src/components/Hero.tsx

'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
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

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        {/* BOTTOM SHADOW */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            max-w-4xl
            rounded-[2rem]
            bg-black/10
            p-5
            backdrop-blur-[2px]
            sm:p-8
          "
        >
          {/* SMALL LABEL */}
          <p className="
            mb-4
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-amber-400
            sm:text-sm
            sm:tracking-[0.4em]
          ">
            Building Infrastructure
          </p>

          {/* HEADING */}
          <h1
            className="
              text-4xl
              font-black
              leading-[1.1]
              text-white
              drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)]

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Supporting Mining.
            <br />
            Delivering
            <span className="text-amber-400"> Excellence.</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-zinc-200
              drop-shadow-lg

              sm:text-base
              md:text-lg
              md:leading-8
            "
          >
            TISOT Mining delivers mining, earthworks and civil
            engineering solutions across South Africa with a
            commitment to safety, quality and reliability.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            
            <button
              className="
                flex items-center justify-center gap-2
                rounded-2xl
                bg-amber-500
                px-6
                py-4
                text-sm
                font-semibold
                text-black
                shadow-2xl
                transition
                hover:bg-amber-400

                sm:px-8
                sm:text-base
              "
            >
              Our Services
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              className="
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-6
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/20

                sm:px-8
                sm:text-base
              "
            >
              View Projects
            </button>
          </div>
        </motion.div>
      </div>

      {/* SLIDER CONTROLS */}
      <div className="absolute bottom-8 right-4 z-20 flex items-center gap-3 sm:bottom-10 sm:right-10 sm:gap-4">
        
        <button
          onClick={prevSlide}
          className="
            rounded-full
            border
            border-white/20
            bg-black/20
            p-3
            text-white
            backdrop-blur-xl
            transition
            hover:bg-amber-500
            hover:text-black

            sm:p-4
          "
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="
            rounded-full
            border
            border-white/20
            bg-black/20
            p-3
            text-white
            backdrop-blur-xl
            transition
            hover:bg-amber-500
            hover:text-black

            sm:p-4
          "
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-12 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              rounded-full transition-all duration-300
              ${
                current === index
                  ? 'h-2 w-8 bg-amber-400 sm:h-3 sm:w-10'
                  : 'h-2 w-2 bg-white/50 sm:h-3 sm:w-3'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}