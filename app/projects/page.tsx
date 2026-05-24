// src/app/projects/page.tsx

import Footer from '@/components/Footer';

const projects = [
  'Coal Mining Infrastructure',
  'Earthworks Development',
  'Road Construction',
  'Mine Site Preparation',
  'Civil Infrastructure',
  'Heavy Equipment Operations',
];

export default function ProjectsPage() {
  return (
    <>
      <section className="min-h-screen bg-[#070707] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#05abf7]">
            Recent Projects
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Mining Projects &
            <span className="text-[#ed7004]"> Infrastructure Works</span>
          </h1>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="h-64 bg-gradient-to-br from-[#ed7004]/30 via-[#6bcf37]/10 to-[#05abf7]/20" />

                <div className="p-8">
                  <h2 className="text-2xl font-black">
                    {project}
                  </h2>

                  <p className="mt-4 text-zinc-400">
                    Professional mining and engineering project execution.
                  </p>

                  <div
                    className="mt-6 h-2 w-24 rounded-full"
                    style={{
                      background:
                        index % 3 === 0
                          ? '#ed7004'
                          : index % 3 === 1
                          ? '#6bcf37'
                          : '#05abf7',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}