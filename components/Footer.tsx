// src/components/Footer.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-white/10
        bg-[#050505]
        pt-20
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        
        <div
          className="absolute left-0 top-0 h-72 w-72 rounded-full blur-3xl opacity-10"
          style={{
            background: '#ed7004',
          }}
        />

        <div
          className="absolute right-0 top-20 h-72 w-72 rounded-full blur-3xl opacity-10"
          style={{
            background: '#05abf7',
          }}
        />

        <div
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-10"
          style={{
            background: '#6bcf37',
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-16 sm:px-6 lg:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <Link href="/" className="flex items-center gap-4">
            
            {/* LOGO */}
            <div
              className="
                relative h-20 w-20 overflow-hidden
                rounded-[1.5rem]
                border border-white/10
                bg-gradient-to-br from-white/10 to-white/5
                p-2
              "
            >
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-[#ed7004]/20 via-[#6bcf37]/10 to-[#05abf7]/20" />

              <Image
                src="/images/logo.jpeg"
                alt="TISOT Mining Logo"
                fill
                className="object-contain p-1"
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-black tracking-[0.15em] text-white">
                TISOT
              </h3>

              <p
                className="
                  text-sm uppercase tracking-[0.45em]
                "
                style={{
                  color: '#ed7004',
                }}
              >
                Mining
              </p>
            </div>
          </Link>

          <p className="mt-6 max-w-sm leading-8 text-zinc-400">
            Delivering reliable mining, infrastructure and civil
            engineering solutions across South Africa with
            innovation, safety and operational excellence.
          </p>

          {/* ACCENT LINE */}
          <div
            className="mt-6 h-1 w-32 rounded-full"
            style={{
              background:
                'linear-gradient(to right, #ed7004, #6bcf37, #05abf7)',
            }}
          />
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4
            className="
              mb-6 text-lg font-black uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Quick Links
          </h4>

          <div className="space-y-4">
            {[
              'About Us',
              'Projects',
              'Services',
              'Safety',
              'Equipment',
            ].map((item, index) => (
              <Link
                key={item}
                href="#"
                className="
                  group flex items-center gap-2
                  text-zinc-400 transition duration-300
                  hover:text-white
                "
              >
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  style={{
                    color:
                      index % 3 === 0
                        ? '#ed7004'
                        : index % 3 === 1
                        ? '#6bcf37'
                        : '#05abf7',
                  }}
                />

                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4
            className="
              mb-6 text-lg font-black uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Services
          </h4>

          <div className="space-y-4">
            {[
              'Earthworks',
              'Mining Support',
              'Plant Hire',
              'Road Construction',
              'Slope Stabilization',
            ].map((item, index) => (
              <div
                key={item}
                className="
                  flex items-center gap-3
                  text-zinc-400 transition
                  hover:text-white
                "
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    background:
                      index % 3 === 0
                        ? '#ed7004'
                        : index % 3 === 1
                        ? '#6bcf37'
                        : '#05abf7',
                  }}
                />

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4
            className="
              mb-6 text-lg font-black uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Contact
          </h4>

          <div className="space-y-5">
            
            {/* PHONE */}
            <div
              className="
                flex items-start gap-4
                rounded-2xl border border-white/5
                bg-white/[0.03]
                p-4
              "
            >
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-2xl
                "
                style={{
                  background: '#ed700420',
                }}
              >
                <Phone
                  className="h-5 w-5"
                  style={{
                    color: '#ed7004',
                  }}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Call Us
                </p>

                <p className="font-semibold text-white">
                  +27 82 123 4567
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div
              className="
                flex items-start gap-4
                rounded-2xl border border-white/5
                bg-white/[0.03]
                p-4
              "
            >
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-2xl
                "
                style={{
                  background: '#6bcf3720',
                }}
              >
                <Mail
                  className="h-5 w-5"
                  style={{
                    color: '#6bcf37',
                  }}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Email Address
                </p>

                <p className="font-semibold text-white break-all">
                  mqaphie@engineer.com
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div
              className="
                flex items-start gap-4
                rounded-2xl border border-white/5
                bg-white/[0.03]
                p-4
              "
            >
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-2xl
                "
                style={{
                  background: '#05abf720',
                }}
              >
                <MapPin
                  className="h-5 w-5"
                  style={{
                    color: '#05abf7',
                  }}
                />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Location
                </p>

                <p className="font-semibold text-white">
                  KwaZulu-Natal, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
          relative border-t border-white/10
          bg-black/40 py-6
        "
      >
        <div
          className="
            mx-auto flex max-w-7xl
            flex-col items-center
            justify-between gap-4
            px-4 text-center

            sm:px-6
            md:flex-row
          "
        >
          <p className="text-sm text-zinc-500">
            © 2026 TISOT Mining. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#ed7004]" />
            <div className="h-2 w-2 rounded-full bg-[#6bcf37]" />
            <div className="h-2 w-2 rounded-full bg-[#05abf7]" />
          </div>
        </div>
      </div>
    </footer>
  );
}