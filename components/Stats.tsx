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
    <section className="relative z-20 mx-auto -mt-24 max-w-7xl px-4 sm:px-6 py-16">
      
      {/* BLACK CONTAINER */}
      <div
        className="
          rounded-[2.5rem]
          bg-black
          border border-white/10
          p-6
          shadow-2xl

          sm:p-10
        "
      >
        {/* GRID */}
        <div
          className="
            grid gap-5
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
                  p-6
                  shadow-lg
                  transition duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
                style={{
                  backgroundColor: item.color,
                }}
              >
                {/* SUBTLE DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/10" />

                {/* ICON */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* CONTENT */}
                <div className="relative mt-6 text-white">
                  <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/90">
                    {item.label}
                  </p>
                </div>

                {/* BOTTOM GLOW LINE */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-white/30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}