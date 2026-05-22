// src/components/Stats.tsx

'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Truck,
  Pickaxe,
  Building2,
} from 'lucide-react';

const stats = [
  {
    number: '80+',
    label: 'Projects Completed',
    icon: ShieldCheck,
    color: '#ed7004',
  },
  {
    number: '5+',
    label: 'Years Experience',
    icon: Truck,
    color: '#6bcf37',
  },
  {
    number: '40+',
    label: 'Plant & Equipment',
    icon: Pickaxe,
    color: '#05abf7',
  },
  {
    number: '100%',
    label: 'Safety Commitment',
    icon: Building2,
    color: '#ed7004',
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 mx-auto -mt-24 max-w-7xl px-4 sm:px-6 bg-white py-16">
      
      {/* MAIN CONTAINER */}
      <div
        className="
          grid gap-5
          rounded-[2rem]
          border border-gray-200
          bg-white
          p-5
          shadow-xl

          sm:p-8
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group relative overflow-hidden
                rounded-[1.8rem]
                border border-gray-100
                bg-gray-50
                p-6
                transition duration-500
                hover:-translate-y-2
                hover:shadow-lg
                hover:border-gray-200
              "
            >
              {/* GLOW EFFECT */}
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"
                style={{
                  backgroundColor: item.color,
                }}
              />

              {/* ICON */}
              <div
                className="relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm"
                style={{
                  backgroundColor: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                }}
              >
                <Icon
                  className="h-8 w-8"
                  style={{
                    color: item.color,
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="relative mt-6">
                <h3
                  className="
                    text-4xl font-black tracking-tight sm:text-5xl
                  "
                  style={{
                    color: item.color,
                  }}
                >
                  {item.number}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.label}
                </p>
              </div>

              {/* BOTTOM LINE */}
              <div
                className="absolute bottom-0 left-0 h-1 w-full opacity-70"
                style={{
                  background: `linear-gradient(to right, ${item.color}, transparent)`,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}