// src/app/services/page.tsx

import Footer from '@/components/Footer';

const services = [
  {
    title: 'Mining Support',
    color: '#ed7004',
    description:
      'Comprehensive mining support services including excavation, haul roads and operational support.',
  },
  {
    title: 'Earthworks',
    color: '#6bcf37',
    description:
      'Bulk earthworks, site preparation and infrastructure development solutions.',
  },
  {
    title: 'Plant Hire',
    color: '#05abf7',
    description:
      'Heavy-duty plant and mining equipment available for short and long-term projects.',
  },
  {
    title: 'Road Construction',
    color: '#ed7004',
    description:
      'Construction of access roads, mine roads and civil infrastructure systems.',
  },
  {
    title: 'Slope Stabilization',
    color: '#6bcf37',
    description:
      'Specialized geotechnical and slope protection solutions for mining sites.',
  },
  {
    title: 'Civil Engineering',
    color: '#05abf7',
    description:
      'Professional civil engineering and mining infrastructure services.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="min-h-screen bg-[#070707] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#ed7004]">
            What We Do
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Professional Mining &
            <span className="text-[#6bcf37]"> Engineering Services</span>
          </h1>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2"
              >
                <div
                  className="h-3 w-20 rounded-full"
                  style={{
                    background: service.color,
                  }}
                />

                <h2 className="mt-8 text-3xl font-black">
                  {service.title}
                </h2>

                <p className="mt-5 leading-8 text-zinc-400">
                  {service.description}
                </p>

                <button
                  className="mt-8 rounded-2xl px-6 py-3 font-bold text-black"
                  style={{
                    background: service.color,
                  }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}