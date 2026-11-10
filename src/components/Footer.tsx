import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const CONNECT_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/rishi1527",
    isExternal: true,
    icon: (
      <svg
        className="w-4 h-4 fill-current shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishi-solanki-ab5538388/",
    isExternal: true,
    icon: (
      <svg
        className="w-4 h-4 fill-current shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:solankirishi1527@gmail.com",
    isExternal: false,
    icon: (
      <svg
        className="w-4 h-4 fill-none stroke-current stroke-2 shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0F0B08] border-t border-[rgba(212,165,116,0.18)] text-[#B8A99A]">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-14">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 pb-5 sm:pb-10">
          {/* Brand & Narrative Area */}
          <div className="md:col-span-6 lg:col-span-6 space-y-2.5 sm:space-y-4">
            {/* Brand Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 sm:gap-2.5 group transition-transform duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] rounded-lg"
              aria-label="SolankiSoftware Home"
            >
              <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-[#D4A574] shadow-[0_0_12px_rgba(212,165,116,0.8)] group-hover:scale-125 transition-transform duration-200" />
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#FFF8F0]">
                Solanki<span className="text-[#D4A574]">Software</span>
              </span>
            </Link>

            {/* Tagline */}
            <div className="text-xs sm:text-sm font-mono text-[#D4A574] font-medium tracking-wide">
              Modern Software, Web &amp; AI Solutions
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#B8A99A] leading-relaxed max-w-md font-normal">
              <span className="sm:hidden">
                Building modern digital experiences, practical web apps, and AI solutions.
              </span>
              <span className="hidden sm:inline">
                Building modern digital experiences, practical software, and AI-powered ideas.
              </span>
            </p>

            {/* Developer Status Pill */}
            <div className="pt-0.5 sm:pt-2">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#17110D] border border-[rgba(212,165,116,0.2)] text-[11px] sm:text-xs font-mono text-[#F5E6D3]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574] animate-pulse" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Navigation & Connect Grouped in 2-Column Grid on Mobile */}
          <div className="grid grid-cols-2 gap-4 md:col-span-6 lg:col-span-6 md:grid-cols-2">
            {/* Navigation Column */}
            <div className="space-y-2 sm:space-y-4">
              <h3 className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#F5E6D3]">
                Navigation
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-1.5 sm:space-y-2.5">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-[#B8A99A] hover:text-[#FFF8F0] transition-colors duration-200 inline-block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Connect Column */}
            <div className="space-y-2 sm:space-y-4">
              <h3 className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#F5E6D3]">
                Connect
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {CONNECT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[#B8A99A] hover:text-[#FFF8F0] transition-colors duration-200 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] rounded"
                    >
                      <span className="text-[#8B6B52] group-hover:text-[#D4A574] transition-colors">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                      <span className="text-[#D4A574] text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-[rgba(212,165,116,0.14)] pt-4 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#8B6B52]">
          <div>
            &copy; 2026 SolankiSoftware. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[#B8A99A]">
            <span>Built by Rishi Solanki</span>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}

