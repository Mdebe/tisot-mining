// src/app/equipment/page.tsx

import Footer from '@/components/Footer';

const equipment = [
  'Excavators',
  'Bulldozers',
  'Tipper Trucks',
  'Graders',
  'TLBs',
  'Water Tankers',
  'Loaders',
  'Compactors',
];

export default function EquipmentPage() {
  return (
    <>
      <section className="min-h-screen bg-[#070707] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#6bcf37]">
            Plant & Machinery
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Modern Mining &
            <span className="text-[#05abf7]"> Construction Equipment</span>
          </h1>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item, index) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center transition hover:-translate-y-2"
              >
                <div
                  className="mx-auto h-24 w-24 rounded-full"
                  style={{
                    background:
                      index % 3 === 0
                        ? '#ed7004'
                        : index % 3 === 1
                        ? '#6bcf37'
                        : '#05abf7',
                  }}
                />

                <h2 className="mt-8 text-2xl font-black">
                  {item}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Reliable heavy-duty machinery for mining and civil projects.
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