// src/components/Services.tsx

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Mining Services',
    description:
      'Excavations, mining support, haul roads and site preparation.',
    image:
      "/images/en.jpg",
  },
  {
    title: 'Civil Engineering',
    description:
      'Earthworks, drainage, roads and infrastructure.',
    image:
      "/images/civl.jpg",
  },
  {
    title: 'Specialized Works',
    description:
      'MSE walls, shotcrete and slope stabilization.',
    image:
      "/images/hero2.jpg",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16">
        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-amber-400">
          Our Services
        </p>

        <h2 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
          Comprehensive Mining & Civil Engineering Solutions
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {service.description}
              </p>

              <button className="mt-6 flex items-center gap-2 font-semibold text-amber-400 transition hover:gap-3">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}