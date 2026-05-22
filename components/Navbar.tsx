// src/components/Navbar.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    'Home',
    'About',
    'Services',
    'Projects',
    'Equipment',
    'Safety',
    'Contact',
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
         

<Link href="/" className="flex items-center gap-4">
  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
    <Image
      src="/images/logo.png"
      alt="TISOT Mining Logo"
      fill
      priority
      className="object-contain"
    />
  </div>

  <div>
    <h1 className="text-3xl font-black tracking-wider text-white md:text-4xl">
      TISOT
    </h1>

    <p className="-mt-1 text-sm uppercase tracking-[0.3em] text-amber-400">
      Mining
    </p>
  </div>
</Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-sm uppercase tracking-wide text-zinc-300 transition hover:text-amber-400"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <button className="hidden rounded-2xl bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-400 lg:block">
          Request Quote
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5 px-6 py-6">
            {links.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-zinc-300 transition hover:text-amber-400"
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            ))}

            <button className="mt-4 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400">
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}