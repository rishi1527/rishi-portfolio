import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — SolankiSoftware",
  description: "The requested page could not be found. Return to SolankiSoftware home.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="relative w-full flex-1 flex items-center justify-center min-h-[70vh] px-4 sm:px-6 py-12 sm:py-20 overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.08)_0%,rgba(111,78,55,0.04)_50%,transparent_70%)] pointer-events-none blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto text-center space-y-4 sm:space-y-6">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241A14]/80 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
            Error 404 • Page Not Found
          </span>
        </div>

        {/* Big styled 404 text */}
        <h1 className="text-6xl sm:text-8xl font-bold font-mono tracking-tight text-gradient-title">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#FFF8F0] tracking-tight">
            Lost in the digital space.
          </h2>
          <p className="text-sm sm:text-base text-[#B8A99A] leading-relaxed max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist, was moved, or had its URL changed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#17110D] bg-gradient-to-r from-[#D4A574] via-[#E6C29D] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] transition-all duration-300 shadow-[0_4px_18px_rgba(212,165,116,0.25)] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
          >
            <span>Return to Home</span>
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-[#F5E6D3] bg-[#241A14]/70 hover:bg-[#241A14] border border-[rgba(212,165,116,0.22)] hover:border-[rgba(212,165,116,0.38)] transition-all duration-200 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
          >
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

