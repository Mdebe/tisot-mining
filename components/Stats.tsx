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
  },
  {
    number: '5+',
    label: 'Years Experience',
    icon: Truck,
  },
  {
    number: '40+',
    label: 'Plant & Equipment',
    icon: Pickaxe,
  },
  {
    number: '100%',
    label: 'Safety Commitment',
    icon: Building2,
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 mx-auto -mt-24 max-w-7xl px-6">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#0E0E0E]/95 p-8 backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-5 rounded-2xl border border-white/5 bg-black/30 p-6"
            >
              <div className="rounded-2xl bg-amber-500/10 p-4 text-amber-400">
                <Icon className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-4xl font-black text-white">
                  {item.number}
                </h3>

                <p className="text-sm text-zinc-400">
                  {item.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}