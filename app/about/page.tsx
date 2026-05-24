// src/app/about/page.tsx

import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <section className="min-h-screen bg-[#070707] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#ed7004]">
            About TISOT Mining
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Building Reliable Mining &
            <span className="text-[#6bcf37]"> Infrastructure Solutions</span>
          </h1>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-3xl font-black text-[#ed7004]">
                Who We Are
              </h2>

              <p className="mt-6 leading-8 text-zinc-300">
                TISOT Mining is a South African mining and civil engineering
                company delivering high-quality infrastructure, earthworks,
                mining support, and plant hire solutions across the country.
              </p>

              <p className="mt-6 leading-8 text-zinc-400">
                Our team focuses on safety, innovation, operational excellence,
                and long-term project sustainability for mining operations and
                civil engineering developments.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-3xl font-black text-[#05abf7]">
                Our Mission
              </h2>

              <p className="mt-6 leading-8 text-zinc-300">
                To provide safe, reliable and efficient mining and construction
                services while building lasting partnerships with clients and
                communities.
              </p>

              <div className="mt-10 space-y-5">
                <div className="rounded-2xl bg-black/40 p-5">
                  <h3 className="font-bold text-[#6bcf37]">
                    Safety First
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Zero compromise on worker and operational safety.
                  </p>
                </div>

                <div className="rounded-2xl bg-black/40 p-5">
                  <h3 className="font-bold text-[#ed7004]">
                    Quality Delivery
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Professional workmanship and project execution.
                  </p>
                </div>

                <div className="rounded-2xl bg-black/40 p-5">
                  <h3 className="font-bold text-[#05abf7]">
                    Modern Equipment
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    High-performance machinery and mining equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}