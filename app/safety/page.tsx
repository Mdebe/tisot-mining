// src/app/safety/page.tsx

import Footer from '@/components/Footer';

const safetyItems = [
  'PPE Compliance',
  'Risk Management',
  'Safety Training',
  'Operational Audits',
  'Site Inspections',
  'Emergency Response',
];

export default function SafetyPage() {
  return (
    <>
      <section className="min-h-screen bg-[#070707] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#ed7004]">
            Safety & Compliance
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Safety Is Our
            <span className="text-[#6bcf37]"> Highest Priority</span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-300">
            TISOT Mining is committed to maintaining the highest standards of
            safety, environmental protection and operational compliance across
            every project site.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {safetyItems.map((item, index) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
              >
                <div
                  className="h-3 w-20 rounded-full"
                  style={{
                    background:
                      index % 3 === 0
                        ? '#ed7004'
                        : index % 3 === 1
                        ? '#6bcf37'
                        : '#05abf7',
                  }}
                />

                <h2 className="mt-8 text-3xl font-black">
                  {item}
                </h2>

                <p className="mt-5 leading-8 text-zinc-400">
                  Strict procedures and compliance systems designed to protect
                  workers, equipment and operational sites.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}