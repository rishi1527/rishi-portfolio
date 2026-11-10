import ScrollReveal from "@/components/ScrollReveal";

const PRINCIPLES = [
  {
    number: "01",
    title: "Learn by Building",
    description:
      "I understand technologies better by turning ideas into working projects.",
  },
  {
    number: "02",
    title: "Keep Improving",
    description:
      "I continuously experiment with better tools, cleaner architecture, and better user experiences.",
  },
  {
    number: "03",
    title: "Explore What's Next",
    description:
      "I'm interested in AI/ML and how intelligent technology can become part of useful software.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full pt-4 sm:pt-12 pb-6 sm:pb-20 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Decorative Ambient Glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.08)_0%,rgba(111,78,55,0.04)_60%,transparent_75%)] pointer-events-none blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-4 sm:mb-10 space-y-1.5 sm:space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/70 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
              About SolankiSoftware
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-xl sm:text-5xl font-bold tracking-tight text-[#FFF8F0] leading-tight"
          >
            Building with curiosity.{" "}
            <span className="text-gradient-title">Creating with purpose.</span>
          </h2>

          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-[#D4A574] to-transparent rounded-full" />
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start">
          {/* Left Column: Personal Narrative & Mindset */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-8">
            <div className="glass-card rounded-2xl p-4 sm:p-9 border border-[rgba(212,165,116,0.2)] relative overflow-hidden">
              {/* Subtle top card glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574]/30 to-transparent"
                aria-hidden="true"
              />

              <div className="space-y-3.5 sm:space-y-6">
                <ScrollReveal delay={0}>
                  <div>
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D4A574]">
                      The Developer
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold text-[#FFF8F0] mt-1">
                      Rishi Solanki
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#B8A99A] mt-0.5 sm:mt-1">
                      Developer • Full-Stack Builder • AI/ML Enthusiast
                    </p>
                  </div>

                  {/* Responsive Narrative: Concise on mobile, full on desktop */}
                  <div className="text-sm sm:text-lg text-[#B8A99A] leading-relaxed font-normal mt-2.5 sm:mt-4">
                    {/* Mobile summary */}
                    <div className="sm:hidden space-y-2 text-xs sm:text-sm text-[#B8A99A] leading-relaxed">
                      <p>
                        Full-stack builder crafting fast, responsive web applications and digital products with clean architecture and refined user experience.
                      </p>
                      <p>
                        Hands-on with <span className="text-[#F5E6D3] font-medium">React</span>, <span className="text-[#F5E6D3] font-medium">Next.js</span>, <span className="text-[#F5E6D3] font-medium">TypeScript</span>, and <span className="text-[#F5E6D3] font-medium">Python</span>, backed by <span className="text-[#F5E6D3] font-medium">Firebase</span> and <span className="text-[#F5E6D3] font-medium">Supabase</span>. Actively integrating <span className="text-[#F5E6D3] font-medium">AI &amp; Machine Learning</span> models into practical web software.
                      </p>
                    </div>

                    {/* Desktop full narrative */}
                    <div className="hidden sm:block space-y-4">
                      <p>
                        I enjoy building modern software products from scratch. For me, software development is not just about writing code—it is about understanding how individual components fit together to create reliable, fast, and satisfying digital experiences.
                      </p>
                      <p>
                        I learn by actually building projects. Rather than staying purely theoretical, I dive directly into practical implementations using <span className="text-[#F5E6D3] font-medium">JavaScript</span>, <span className="text-[#F5E6D3] font-medium">TypeScript</span>, <span className="text-[#F5E6D3] font-medium">React</span>, and <span className="text-[#F5E6D3] font-medium">Next.js</span>. On the backend and scripting side, I work with <span className="text-[#F5E6D3] font-medium">Python</span>, and leverage cloud platforms like <span className="text-[#F5E6D3] font-medium">Firebase</span> and <span className="text-[#F5E6D3] font-medium">Supabase</span> to back applications with resilient data stores and authentication.
                      </p>
                      <p>
                        At the same time, I am deeply intrigued by <span className="text-[#F5E6D3] font-medium">Artificial Intelligence &amp; Machine Learning</span>. I am actively exploring how intelligent models can be integrated into web software to solve real problems and create genuinely helpful tools.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Developer Focus Badges */}
                <div className="pt-3 sm:pt-6 border-t border-[rgba(212,165,116,0.14)] grid grid-cols-3 gap-1.5 sm:gap-4 text-xs font-mono">
                  <ScrollReveal delay={0}>
                    <div className="p-2 sm:p-3 rounded-xl bg-[#17110D]/60 border border-[rgba(212,165,116,0.12)]">
                      <span className="text-[#8B6B52] block text-[10px] sm:text-xs">Current Focus</span>
                      <span className="text-[#F5E6D3] font-medium mt-0.5 block text-[11px] sm:text-sm">
                        Next.js &amp; Web
                      </span>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={100}>
                    <div className="p-2 sm:p-3 rounded-xl bg-[#17110D]/60 border border-[rgba(212,165,116,0.12)]">
                      <span className="text-[#8B6B52] block text-[10px] sm:text-xs">Exploration</span>
                      <span className="text-[#F5E6D3] font-medium mt-0.5 block text-[11px] sm:text-sm">
                        AI/ML Models
                      </span>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <div className="p-2 sm:p-3 rounded-xl bg-[#17110D]/60 border border-[rgba(212,165,116,0.12)]">
                      <span className="text-[#8B6B52] block text-[10px] sm:text-xs">Approach</span>
                      <span className="text-[#F5E6D3] font-medium mt-0.5 block text-[11px] sm:text-sm">
                        Learn by Build
                      </span>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Resume Actions */}
                <ScrollReveal delay={250}>
                  <div className="pt-3 sm:pt-6 border-t border-[rgba(212,165,116,0.14)] flex flex-wrap items-center gap-2 sm:gap-3.5">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#17110D] bg-gradient-to-r from-[#D4A574] via-[#E6C29D] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] transition-all duration-300 shadow-[0_2px_12px_rgba(212,165,116,0.22)] hover:shadow-[0_4px_18px_rgba(212,165,116,0.35)] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
                      aria-label="View Rishi Solanki's resume in a new tab"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                      <span>View Resume</span>
                    </a>

                    <a
                      href="/resume.pdf"
                      download="Rishi Solanki.pdf"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#F5E6D3] bg-[#17110D]/70 hover:bg-[#241A14] border border-[rgba(212,165,116,0.22)] hover:border-[rgba(212,165,116,0.38)] transition-all duration-200 shadow-[0_2px_10px_rgba(15,11,8,0.3)] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
                      aria-label="Download Rishi Solanki's resume PDF"
                    >
                      <svg
                        className="w-4 h-4 text-[#D4A574]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      <span>Download Resume</span>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Right Column: SolankiSoftware Brand Card & How I Build Philosophy */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-8">
            {/* SolankiSoftware Identity Card */}
            <ScrollReveal delay={100}>
              <div className="glass-card rounded-2xl p-4 sm:p-8 border border-[rgba(212,165,116,0.2)] relative overflow-hidden">
                <div className="space-y-2.5 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#D4A574]" />
                      <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#D4A574]">
                        Brand Identity
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#8B6B52] px-2 py-0.5 rounded bg-[#17110D] border border-[rgba(212,165,116,0.12)]">
                      Digital Studio
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-[#FFF8F0]">
                    Solanki<span className="text-[#D4A574]">Software</span>
                  </h3>

                  <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed">
                    <span className="sm:hidden">
                      Rishi&apos;s personal software brand focused on building modern web applications, practical engineering, and AI tools.
                    </span>
                    <span className="hidden sm:inline">
                      SolankiSoftware is Rishi&apos;s personal software identity focused on building modern web applications, experimenting with new technologies, and turning ideas into useful digital products.
                    </span>
                  </p>

                  <div className="pt-0.5 sm:pt-2 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-[#17110D]/80 border border-[rgba(212,165,116,0.15)] text-[#F5E6D3]">
                      Personal Software Brand
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#17110D]/80 border border-[rgba(212,165,116,0.15)] text-[#F5E6D3]">
                      Practical Engineering
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* How I Build Philosophy Card */}
            <div className="glass-card rounded-2xl p-4 sm:p-8 border border-[rgba(212,165,116,0.2)] relative overflow-hidden">
              <ScrollReveal delay={0}>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-[rgba(212,165,116,0.14)]">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <svg
                      className="w-4 h-4 text-[#D4A574]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                    <h3 className="text-sm sm:text-lg font-bold text-[#FFF8F0] tracking-tight">
                      How I Build
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#8B6B52]">Principles</span>
                </div>
              </ScrollReveal>

              <div className="space-y-2 sm:space-y-4 mt-3 sm:mt-6">
                {PRINCIPLES.map((principle, index) => (
                  <ScrollReveal
                    key={principle.number}
                    delay={index * 100}
                  >
                    <div className="p-2.5 sm:p-4 rounded-xl bg-[#17110D]/50 border border-[rgba(212,165,116,0.12)] hover:border-[rgba(212,165,116,0.25)] transition-colors duration-200">
                      <div className="flex items-baseline gap-2 sm:gap-2.5">
                        <span className="text-xs font-mono font-semibold text-[#D4A574]">
                          {principle.number}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#F5E6D3]">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#B8A99A] mt-0.5 sm:mt-1.5 leading-relaxed pl-4 sm:pl-6">
                        {principle.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

