// src/components/Services.tsx

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Pickaxe,
  Building2,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Mining Services',
    description:
      'Excavations, mining support, haul roads and site preparation.',
    image: '/images/en.jpg',
    color: '#ed7004',
    icon: Pickaxe,
  },
  {
    title: 'Civil Engineering',
    description:
      'Earthworks, drainage, roads and infrastructure.',
    image: '/images/civl.jpg',
    color: '#6bcf37',
    icon: Building2,
  },
  {
    title: 'Specialized Works',
    description:
      'MSE walls, shotcrete and slope stabilization.',
    image: '/images/hero2.jpg',
    color: '#05abf7',
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <div className="mb-16 max-w-4xl">
        <p
          className="
            mb-4 text-xs font-semibold uppercase
            tracking-[0.45em]

            sm:text-sm
          "
          style={{
            color: '#ed7004',
          }}
        >
          Our Services
        </p>

        <h2
          className="
            text-4xl font-black leading-tight
            text-white

            sm:text-5xl
            lg:text-6xl
          "
        >
          Comprehensive Mining &
          <span
            className="block"
            style={{
              color: '#05abf7',
            }}
          >
            Civil Engineering Solutions
          </span>
        </h2>

        <div
          className="mt-6 h-1 w-32 rounded-full"
          style={{
            background:
              'linear-gradient(to right, #ed7004, #6bcf37, #05abf7)',
          }}
        />
      </div>

      {/* SERVICES GRID */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-[#0c0c0c]
                shadow-2xl
                transition duration-500
                hover:-translate-y-3
                hover:border-white/20
              "
            >
              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="
                    object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* TOP GLOW */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(to top, black, ${service.color}20, transparent)`,
                  }}
                />

                {/* ICON */}
                <div
                  className="
                    absolute left-6 top-6
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    border border-white/10
                    backdrop-blur-xl
                  "
                  style={{
                    backgroundColor: `${service.color}20`,
                  }}
                >
                  <Icon
                    className="h-8 w-8"
                    style={{
                      color: service.color,
                    }}
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-7">
                
                {/* GLOW */}
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-10"
                  style={{
                    backgroundColor: service.color,
                  }}
                />

                <h3
                  className="
                    relative text-2xl font-black
                    text-white transition
                    duration-300
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    relative mt-4
                    leading-7 text-zinc-300
                  "
                >
                  {service.description}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    relative mt-7 flex items-center gap-2
                    text-sm font-bold uppercase
                    tracking-[0.15em]
                    transition-all duration-300
                    hover:gap-4
                  "
                  style={{
                    color: service.color,
                  }}
                >
                  Learn More

                  <ArrowRight className="h-4 w-4" />
                </button>

                {/* BOTTOM ACCENT */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-full"
                  style={{
                    background: `linear-gradient(to right, ${service.color}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}