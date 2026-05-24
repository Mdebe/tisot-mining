// src/app/contact/page.tsx

import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <section className="min-h-screen bg-[#070707] px-6 py-32 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#05abf7]">
            Contact Us
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Let’s Build
            <span className="text-[#ed7004]"> Together</span>
          </h1>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-3xl font-black text-[#6bcf37]">
                Get In Touch
              </h2>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Phone
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    +27 82 123 4567
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Email
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    info@tisotmining.co.za
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Location
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    KwaZulu-Natal, South Africa
                  </p>
                </div>
              </div>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 p-5 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 p-5 outline-none"
                />

                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 p-5 outline-none"
                />

                <button
                  className="w-full rounded-2xl py-5 font-bold text-black"
                  style={{
                    background:
                      'linear-gradient(135deg,#ed7004,#6bcf37,#05abf7)',
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}