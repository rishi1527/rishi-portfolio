import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-2 sm:pt-16 pb-5 sm:pb-20 px-4 sm:px-6">
      {/* Background Decorative Ambient Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.12)_0%,rgba(111,78,55,0.06)_50%,transparent_70%)] pointer-events-none blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Column: SolankiSoftware Brand Focus */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-3 sm:space-y-8">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/70 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
              <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-[#D4A574] animate-pulse-warm shadow-[0_0_8px_rgba(212,165,116,0.8)]" />
              <span className="text-[10px] sm:text-sm font-mono tracking-wide text-[#F5E6D3]">
                SOLANKISOFTWARE • DIGITAL DEVELOPMENT
              </span>
            </div>

            {/* Brand Title & Attribution */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFF8F0]">
                Solanki<span className="text-[#D4A574]">Software</span>
              </h1>
              <div className="flex items-center gap-2 text-[11px] sm:text-sm font-mono text-[#8B6B52]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]/60" />
                <span>Independent software brand by Rishi Solanki</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-lg sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5E6D3] leading-snug sm:leading-tight">
              Building modern digital experiences with technology that{" "}
              <span className="text-gradient-title">moves ideas forward.</span>
            </h2>

            {/* Concise Brand Description (1-2 sentences) */}
            <p className="text-xs sm:text-lg text-[#B8A99A] leading-relaxed max-w-2xl font-normal">
              <span className="sm:hidden">
                Crafting responsive web applications, refined digital tools, and intelligent software solutions.
              </span>
              <span className="hidden sm:inline">
                SolankiSoftware is an independent development brand focused on building responsive web applications, creating refined digital products, and experimenting with intelligent, AI-powered software solutions.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-0.5 sm:pt-1 w-full sm:w-auto">
              <Link
                href="/projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-[#17110D] bg-gradient-to-r from-[#D4A574] via-[#E6C29D] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] transition-all duration-300 shadow-[0_4px_20px_rgba(212,165,116,0.25)] hover:shadow-[0_4px_28px_rgba(212,165,116,0.4)] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              >
                <span>View My Work</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[#F5E6D3] bg-[#241A14]/70 hover:bg-[#241A14] border border-[rgba(212,165,116,0.22)] hover:border-[rgba(212,165,116,0.38)] transition-all duration-200 shadow-[0_2px_12px_rgba(15,11,8,0.4)] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              >
                <span>Let&apos;s Talk</span>
              </Link>
            </div>
          </div>

          {/* Right Column: SolankiSoftware Brand Directory Terminal */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            {/* Ambient Card Glow */}
            <div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4A574]/20 via-[#6F4E37]/15 to-transparent blur-xl opacity-60 -z-10"
              aria-hidden="true"
            />

            <div className="w-full max-w-lg glass-card rounded-2xl p-3.5 sm:p-7 relative border border-[rgba(212,165,116,0.22)] shadow-[0_16px_40px_rgba(15,11,8,0.65)] animate-float-slow">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-4 mb-2.5 sm:mb-4 border-b border-[rgba(212,165,116,0.14)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#6F4E37]/70 border border-[rgba(212,165,116,0.2)]" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#8B6B52]/70 border border-[rgba(212,165,116,0.2)]" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#D4A574]/70 border border-[rgba(212,165,116,0.2)]" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#8B6B52] tracking-wide">
                  solankisoftware/workspace
                </div>
                <div className="w-6 sm:w-8" aria-hidden="true" />
              </div>

              {/* Terminal Brand Architecture Tree */}
              <div className="font-mono text-[11px] sm:text-sm leading-relaxed sm:leading-loose text-[#B8A99A] space-y-0.5 sm:space-y-1">
                <div className="text-[#D4A574] font-semibold flex items-center gap-1.5">
                  <span>solankisoftware/</span>
                </div>
                <div className="pl-3 sm:pl-4 flex items-center justify-between">
                  <div>
                    <span className="text-[#8B6B52]">├── </span>
                    <span className="text-[#FFF8F0] font-medium">web/</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#8B6B52]">modern applications</span>
                </div>
                <div className="pl-3 sm:pl-4 flex items-center justify-between">
                  <div>
                    <span className="text-[#8B6B52]">├── </span>
                    <span className="text-[#FFF8F0] font-medium">products/</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#8B6B52]">digital tools</span>
                </div>
                <div className="pl-3 sm:pl-4 flex items-center justify-between">
                  <div>
                    <span className="text-[#8B6B52]">├── </span>
                    <span className="text-[#FFF8F0] font-medium">ai/</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#8B6B52]">intelligent systems</span>
                </div>
                <div className="pl-3 sm:pl-4 flex items-center justify-between">
                  <div>
                    <span className="text-[#8B6B52]">└── </span>
                    <span className="text-[#FFF8F0] font-medium">ideas/</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#8B6B52]">research &amp; prototypes</span>
                </div>
              </div>

              {/* Status Badge Box */}
              <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-[rgba(212,165,116,0.14)] flex items-center justify-between text-[10px] sm:text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D4A574] animate-pulse-warm" />
                  <span className="text-[#F5E6D3]">Domain: Software &amp; Web</span>
                </div>
                <span className="text-[#8B6B52]">ready to build</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
