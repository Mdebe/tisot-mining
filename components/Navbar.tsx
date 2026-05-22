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
    <header
      className="
        fixed top-0 z-50 w-full
        border-b border-white/10
        bg-[#050505]/80
        backdrop-blur-2xl
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-4">
          
          {/* LOGO BOX */}
          <div
            className="
              relative h-20 w-20 overflow-hidden
              rounded-[1.7rem]
              border border-white/10
              bg-gradient-to-br from-white/10 to-white/5
              p-2 shadow-2xl
              transition duration-500
              group-hover:scale-105
            "
          >
            {/* BRAND GLOW */}
            <div className="absolute inset-0 rounded-[1.7rem] bg-gradient-to-br from-[#ed7004]/20 via-[#6bcf37]/10 to-[#05abf7]/20 opacity-80" />

            <Image
              src="/images/logo.jpeg"
              alt="TISOT Mining Logo"
              fill
              priority
              className="object-contain p-1"
            />
          </div>

          {/* BRAND TEXT */}
          <div>
            <h1
              className="
                text-2xl font-black tracking-[0.15em]
                text-white
                drop-shadow-lg

                sm:text-3xl
                md:text-4xl
              "
            >
              TISOT
            </h1>

            <p
              className="
                -mt-1 text-[11px]
                uppercase tracking-[0.45em]

                sm:text-sm
              "
              style={{
                color: '#ed7004',
              }}
            >
              Mining
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link, index) => (
            <Link
              key={link}
              href="#"
              className="
                relative text-sm font-medium uppercase
                tracking-[0.15em]
                text-zinc-300
                transition duration-300
                hover:text-white
              "
            >
              <span className="relative z-10">{link}</span>

              {/* HOVER UNDERLINE */}
              <span
                className="
                  absolute bottom-[-8px] left-0 h-[2px]
                  w-0 transition-all duration-300
                  group-hover:w-full
                "
              />

              <div
                className="
                  absolute bottom-[-6px] left-0 h-[2px]
                  w-0 transition-all duration-300 hover:w-full
                "
                style={{
                  background:
                    index % 3 === 0
                      ? '#ed7004'
                      : index % 3 === 1
                      ? '#6bcf37'
                      : '#05abf7',
                }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <button
          className="
            hidden overflow-hidden rounded-2xl
            px-6 py-3 text-sm font-bold text-white
            shadow-2xl transition duration-300
            hover:scale-105 lg:block
          "
          style={{
            background:
              'linear-gradient(135deg, #ed7004 0%, #6bcf37 50%, #05abf7 100%)',
          }}
        >
          Request Quote
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="
            rounded-xl border border-white/10
            bg-white/5 p-3 text-white
            backdrop-blur-xl transition
            hover:bg-white/10 lg:hidden
          "
        >
          {open ? (
            <X
              size={28}
              style={{
                color: '#ed7004',
              }}
            />
          ) : (
            <Menu
              size={28}
              style={{
                color: '#05abf7',
              }}
            />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            border-t border-white/10
            bg-[#050505]/95
            backdrop-blur-2xl lg:hidden
          "
        >
          <div className="flex flex-col gap-5 px-6 py-6">
            {links.map((link, index) => (
              <Link
                key={link}
                href="#"
                onClick={() => setOpen(false)}
                className="
                  rounded-xl border border-white/5
                  bg-white/[0.03]
                  px-4 py-4 text-sm
                  font-medium uppercase tracking-[0.15em]
                  text-zinc-200
                  transition duration-300
                  hover:bg-white/[0.06]
                "
                style={{
                  borderLeft: `4px solid ${
                    index % 3 === 0
                      ? '#ed7004'
                      : index % 3 === 1
                      ? '#6bcf37'
                      : '#05abf7'
                  }`,
                }}
              >
                {link}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <button
              className="
                mt-4 rounded-2xl px-6 py-4
                font-bold text-white shadow-2xl
                transition duration-300
              "
              style={{
                background:
                  'linear-gradient(135deg, #ed7004 0%, #6bcf37 50%, #05abf7 100%)',
              }}
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}