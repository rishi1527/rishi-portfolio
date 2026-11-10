"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Journey", href: "/journey" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#17110D]/90 backdrop-blur-md border-b border-[rgba(212,165,116,0.22)] shadow-[0_8px_32px_rgba(15,11,8,0.55)]"
          : "bg-[#17110D]/65 backdrop-blur-sm border-b border-[rgba(212,165,116,0.12)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95"
          aria-label="SolankiSoftware Home"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4A574] shadow-[0_0_12px_rgba(212,165,116,0.8)] group-hover:scale-125 transition-transform duration-200" />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#FFF8F0]">
            Solanki<span className="text-[#D4A574]">Software</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-[#241A14]/40 border border-[rgba(212,165,116,0.16)] backdrop-blur-sm"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  active
                    ? "text-[#FFF8F0] bg-[#241A14] border border-[rgba(212,165,116,0.32)] shadow-[0_0_12px_rgba(212,165,116,0.18)]"
                    : "text-[#B8A99A] hover:text-[#FFF8F0] hover:bg-[#241A14]/80"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#17110D] bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,165,116,0.22)] hover:shadow-[0_0_28px_rgba(212,165,116,0.38)] active:scale-98"
          >
            <span>Let&apos;s Talk</span>
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
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center p-2.5 rounded-xl bg-[#241A14]/70 border border-[rgba(212,165,116,0.2)] text-[#F5E6D3] hover:text-[#FFF8F0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#17110D]/95 backdrop-blur-xl ${
          isOpen
            ? "max-h-96 opacity-100 py-4 sm:py-6 px-4 sm:px-6 border-b border-[rgba(212,165,116,0.18)]"
            : "max-h-0 opacity-0 py-0 px-4 sm:px-6 border-b-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
                  active
                    ? "text-[#FFF8F0] bg-[#241A14] border border-[rgba(212,165,116,0.28)] font-semibold"
                    : "text-[#B8A99A] hover:text-[#FFF8F0] hover:bg-[#241A14]/70"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 mt-1 border-t border-[rgba(212,165,116,0.14)]">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#17110D] bg-gradient-to-r from-[#D4A574] to-[#F5E6D3] rounded-xl shadow-[0_0_20px_rgba(212,165,116,0.22)] transition-all active:scale-98"
            >
              <span>Let&apos;s Talk</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
