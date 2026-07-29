import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(2,169,228,0.25),_transparent_35%),linear-gradient(135deg,_#0172be,_#223594)] text-white">
      {/* Background Image Layer with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/hero-bg.webp"
          alt="QRO Construction background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
        
        {/* Left Column: Headline & Calls to Action */}
        <div className="max-w-2xl">
          {/* Eyebrow / Tagline Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#02a9e4]/30 bg-[#02a9e4]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#b4f0ff]">
            <span className="h-2 w-2 rounded-full bg-[#02a9e4] animate-pulse" />
            Building with precision in Texas & Beyond
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Quality construction that turns ambitious plans into <span className="text-[#b4f0ff]">lasting spaces</span>.
          </h1>

          <p className="mt-6 text-lg text-slate-300 sm:text-xl leading-relaxed">
            From residential updates to commercial builds, our team delivers exceptional craftsmanship, clear communication, and dependable project execution every step of the way.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#02a9e4] px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-[#0172be]"
            >
              Request a Quote
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/30 bg-white/5 px-8 py-3.5 font-semibold transition hover:bg-white/10 hover:border-white/50"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Right Column: Glassmorphism Highlights Card */}
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
            
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 backdrop-blur-sm transition hover:border-[#02a9e4]/40">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#b4f0ff]">20+</p>
              <p className="mt-2 font-medium text-slate-300">Years of combined experience</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 backdrop-blur-sm transition hover:border-[#02a9e4]/40">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#b4f0ff]">100%</p>
              <p className="mt-2 font-medium text-slate-300">Transparent project updates</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 backdrop-blur-sm transition hover:border-[#02a9e4]/40 sm:col-span-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#b4f0ff]">24/7</p>
              <p className="mt-2 font-medium text-slate-300">Responsive support during every project phase</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}