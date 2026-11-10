"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client runtime errors for diagnostics
    console.error("[Application Error Boundary caught error]:", error);
  }, [error]);

  return (
    <div className="relative w-full flex-1 flex items-center justify-center min-h-[70vh] px-4 sm:px-6 py-12 sm:py-20 overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.08)_0%,rgba(111,78,55,0.04)_50%,transparent_70%)] pointer-events-none blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241A14]/80 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
            System Notice • Runtime Error
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFF8F0]">
          Something went wrong.
        </h1>

        <p className="text-sm sm:text-base text-[#B8A99A] leading-relaxed max-w-md mx-auto">
          An unexpected error occurred while rendering this page. You can try recovering or return to the home page.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#17110D] bg-gradient-to-r from-[#D4A574] via-[#E6C29D] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] transition-all duration-300 shadow-[0_4px_18px_rgba(212,165,116,0.25)] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
          >
            <span>Try Again ↻</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-[#F5E6D3] bg-[#241A14]/70 hover:bg-[#241A14] border border-[rgba(212,165,116,0.22)] hover:border-[rgba(212,165,116,0.38)] transition-all duration-200 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

