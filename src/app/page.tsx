import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import BrandSignature from "@/components/BrandSignature";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "SolankiSoftware — Modern Software, Web & AI Solutions",
  description:
    "SolankiSoftware is the independent software development brand of Rishi Solanki, focused on modern web applications, digital products, and AI-powered software exploration.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="relative w-full pt-4 sm:pt-12 pb-5 sm:pb-20 px-4 sm:px-6 border-t border-[rgba(212,165,116,0.12)]">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-[rgba(212,165,116,0.2)] relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574]/35 to-transparent"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              <div className="lg:col-span-8 space-y-2.5 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17110D] border border-[rgba(212,165,116,0.2)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
                    About The Builder
                  </span>
                </div>
                <h2 className="text-lg sm:text-4xl font-bold text-[#FFF8F0] tracking-tight">
                  Building with curiosity.{" "}
                  <span className="text-gradient-title">Creating with purpose.</span>
                </h2>
                <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed max-w-2xl font-normal">
                  <span className="sm:hidden">
                    Independent software brand by Rishi Solanki crafting responsive web apps, digital products, and AI exploration.
                  </span>
                  <span className="hidden sm:inline">
                    SolankiSoftware is an independent software brand by Rishi Solanki focused on building responsive web applications, creating refined digital products, and experimenting with intelligent, AI-powered software solutions.
                  </span>
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5 sm:pt-2 text-[10px] sm:text-xs font-mono">
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#17110D] border border-[rgba(212,165,116,0.18)] text-[#F5E6D3]">
                    Full-Stack Web
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#17110D] border border-[rgba(212,165,116,0.18)] text-[#F5E6D3]">
                    AI/ML Exploration
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#17110D] border border-[rgba(212,165,116,0.18)] text-[#F5E6D3]">
                    Learn by Building
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#17110D] bg-gradient-to-r from-[#D4A574] via-[#E6C29D] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] transition-all duration-300 shadow-[0_2px_14px_rgba(212,165,116,0.25)] hover:shadow-[0_4px_22px_rgba(212,165,116,0.4)] active:scale-98"
                >
                  <span>Explore Story &amp; Resume</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="relative w-full pt-4 sm:pt-12 pb-5 sm:pb-20 px-4 sm:px-6 border-t border-[rgba(212,165,116,0.12)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-3 sm:mb-10 space-y-1.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/70 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
                Core Tech Stack
              </span>
            </div>
            <h2 className="text-xl sm:text-4xl font-bold tracking-tight text-[#FFF8F0] leading-tight">
              Technologies I <span className="text-gradient-title">Build With</span>
            </h2>
            <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed">
              Modern frontend frameworks, resilient backend datastores, and intelligent machine learning libraries.
            </p>
          </ScrollReveal>

          {/* Highlighted Skills Badges */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3.5 max-w-4xl mx-auto mb-4 sm:mb-8">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "TypeScript",
              "Python",
              "Firebase",
              "Supabase",
              "Tailwind CSS",
              "NumPy",
              "AI / ML",
            ].map((skill, idx) => (
              <div
                key={skill}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-xl border border-[rgba(212,165,116,0.18)] bg-[#241A14]/70 text-xs sm:text-sm font-semibold text-[#FFF8F0] shadow-[0_2px_12px_rgba(15,11,8,0.4)] hover:border-[rgba(212,165,116,0.38)] transition-all"
              >
                <span className="text-[#D4A574] font-mono text-[10px] sm:text-xs">
                  0{idx + 1}
                </span>
                <span>{skill}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium text-[#F5E6D3] bg-[#241A14]/70 hover:bg-[#241A14] border border-[rgba(212,165,116,0.22)] hover:border-[rgba(212,165,116,0.38)] transition-all duration-200 active:scale-98"
            >
              <span>View Full Interactive Stack &amp; Marquee</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview Section */}
      <section className="relative w-full pt-4 sm:pt-12 pb-5 sm:pb-20 px-4 sm:px-6 border-t border-[rgba(212,165,116,0.12)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="max-w-3xl mb-4 sm:mb-12 space-y-1.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/80 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
                Featured Products
              </span>
            </div>
            <h2 className="text-xl sm:text-5xl font-bold tracking-tight text-[#FFF8F0] leading-tight">
              Selected <span className="text-gradient-title">Work</span>
            </h2>
            <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed max-w-2xl">
              Curated software products demonstrating responsive user experiences, backend architecture, and predictive neural modeling.
            </p>
          </ScrollReveal>

          {/* 2 Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-8 mb-4 sm:mb-10">
            {/* Project 1: Movie Hub */}
            <article className="glass-card rounded-2xl p-3.5 sm:p-7 border border-[rgba(212,165,116,0.22)] hover:border-[rgba(212,165,116,0.4)] flex flex-col justify-between">
              <div>
                <a
                  href="https://movie-good.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[rgba(212,165,116,0.2)] mb-2.5 sm:mb-5 group/img"
                >
                  <Image
                    src="/projects/movie-hub.png"
                    alt="Movie Hub website interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F0B08]/85 border border-[rgba(212,165,116,0.25)] text-[10px] font-mono text-[#F5E6D3] uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
                    <span>Live App</span>
                  </div>
                </a>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4A574] mb-1 sm:mb-2">
                  <span>01</span>
                  <span>/</span>
                  <span className="uppercase">Featured Project</span>
                </div>
                <h3 className="text-base sm:text-2xl font-bold text-[#FFF8F0] mb-1 sm:mb-2">
                  Movie Hub
                </h3>
                <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed mb-2.5 sm:mb-4">
                  <span className="sm:hidden">
                    Modern movie discovery platform with curated releases, smart search, and streaming previews.
                  </span>
                  <span className="hidden sm:inline">
                    A modern movie discovery platform featuring curated releases, intelligent search, detailed media overviews, and responsive streaming previews.
                  </span>
                </p>
              </div>
              <div className="pt-2.5 sm:pt-4 border-t border-[rgba(212,165,116,0.12)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#F5E6D3]">
                  <span>React</span> • <span>Tailwind CSS</span> • <span>TMDB API</span>
                </div>
                <a
                  href="https://movie-good.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#D4A574] hover:text-[#FFF8F0] transition-colors"
                >
                  Live Preview ↗
                </a>
              </div>
            </article>

            {/* Project 2: Color Fusion AI */}
            <article className="glass-card rounded-2xl p-3.5 sm:p-7 border border-[rgba(212,165,116,0.22)] hover:border-[rgba(212,165,116,0.4)] flex flex-col justify-between">
              <div>
                <a
                  href="https://color-fusion-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[rgba(212,165,116,0.2)] mb-2.5 sm:mb-5 group/img"
                >
                  <Image
                    src="/projects/color-fusion-ai.png"
                    alt="Color Fusion AI website interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F0B08]/85 border border-[rgba(212,165,116,0.25)] text-[10px] font-mono text-[#F5E6D3] uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
                    <span>Live App</span>
                  </div>
                </a>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4A574] mb-1 sm:mb-2">
                  <span>02</span>
                  <span>/</span>
                  <span className="uppercase">AI / ML</span>
                </div>
                <h3 className="text-base sm:text-2xl font-bold text-[#FFF8F0] mb-1 sm:mb-2">
                  Color Fusion AI
                </h3>
                <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed mb-2.5 sm:mb-4">
                  <span className="sm:hidden">
                    Deep-learning image colorization turning monochrome photos into vibrant imagery with neural contrast modeling.
                  </span>
                  <span className="hidden sm:inline">
                    Intelligent deep-learning image colorization application transforming monochrome imagery through predictive neural tinting and contrast modeling.
                  </span>
                </p>
              </div>
              <div className="pt-2.5 sm:pt-4 border-t border-[rgba(212,165,116,0.12)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#F5E6D3]">
                  <span>Python</span> • <span>AI / ML</span> • <span>Scikit-learn</span>
                </div>
                <a
                  href="https://color-fusion-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#D4A574] hover:text-[#FFF8F0] transition-colors"
                >
                  Live Preview ↗
                </a>
              </div>
            </article>
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#17110D] bg-gradient-to-r from-[#D4A574] via-[#E6C29D] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] transition-all duration-300 shadow-[0_2px_14px_rgba(212,165,116,0.25)] active:scale-98"
            >
              <span>Explore All Projects &amp; Stacked Deck</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="relative w-full pt-4 sm:pt-12 pb-5 sm:pb-20 px-4 sm:px-6 border-t border-[rgba(212,165,116,0.12)]">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-12 border border-[rgba(212,165,116,0.22)] text-center space-y-2.5 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#17110D] border border-[rgba(212,165,116,0.2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
                Available For Work
              </span>
            </div>
            <h2 className="text-lg sm:text-4xl font-bold text-[#FFF8F0] tracking-tight">
              Have a project idea or inquiry?{" "}
              <span className="text-gradient-title">Let&apos;s build it.</span>
            </h2>
            <p className="text-xs sm:text-base text-[#B8A99A] max-w-xl mx-auto leading-relaxed">
              Whether you need modern web development, a custom digital product, or wish to discuss an opportunity, send a message.
            </p>
            <div className="pt-1 sm:pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#17110D] bg-gradient-to-r from-[#D4A574] via-[#E6C29D] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] transition-all duration-300 shadow-[0_4px_18px_rgba(212,165,116,0.25)] active:scale-98"
              >
                <span>Get In Touch</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Brand Signature */}
      <BrandSignature />
    </div>
  );
}
