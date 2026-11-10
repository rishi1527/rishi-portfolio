import ScrollReveal from "@/components/ScrollReveal";

interface Skill {
  id: string;
  name: string;
}

const SKILLS: Skill[] = [
  { id: "01", name: "JavaScript" },
  { id: "02", name: "React" },
  { id: "03", name: "Next.js" },
  { id: "04", name: "TypeScript" },
  { id: "05", name: "Python" },
  { id: "06", name: "Firebase" },
  { id: "07", name: "Supabase" },
  { id: "08", name: "Tailwind CSS" },
  { id: "09", name: "Node.js" },
  { id: "10", name: "Git" },
  { id: "11", name: "GitHub" },
  { id: "12", name: "Vite" },
  { id: "13", name: "NumPy" },
  { id: "14", name: "Pandas" },
  { id: "15", name: "Scikit-learn" },
  { id: "16", name: "AI / ML" },
];

// Staggered sequence for complementary dual-direction motion
const SKILLS_ROW_TWO: Skill[] = [
  ...SKILLS.slice(8),
  ...SKILLS.slice(0, 8),
];

function SkillChip({ id, name }: Skill) {
  return (
    <div className="flex items-center gap-2 sm:gap-3.5 px-3 sm:px-5 py-2 sm:py-3.5 rounded-lg sm:rounded-2xl border border-[rgba(212,165,116,0.18)] hover:border-[rgba(212,165,116,0.42)] bg-[#241A14]/65 hover:bg-[#241A14]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(15,11,8,0.45)] hover:shadow-[0_0_20px_rgba(212,165,116,0.18)] whitespace-nowrap cursor-default group transition-[border-color,background-color,box-shadow] duration-200 shrink-0">
      <span className="font-mono text-[11px] sm:text-sm font-semibold text-[#D4A574]/80 group-hover:text-[#D4A574] transition-colors">
        {id}
      </span>
      <span className="text-[#8B6B52] font-mono text-[11px] sm:text-xs" aria-hidden="true">
        /
      </span>
      <span className="text-xs sm:text-base font-semibold tracking-tight text-[#FFF8F0] group-hover:text-[#F5E6D3] transition-colors">
        {name}
      </span>
    </div>
  );
}

interface SkillCardData {
  name: string;
  description: string;
  shortDescription?: string;
  icon: React.ReactNode;
}

interface CategoryGroup {
  title: string;
  badge: string;
  skills: SkillCardData[];
}

const CATEGORIES: CategoryGroup[] = [
  {
    title: "Frontend",
    badge: "01",
    skills: [
      {
        name: "JavaScript",
        description: "Interactive web applications",
        shortDescription: "Interactive web apps",
        icon: (
          <span className="font-mono font-bold text-xs text-[#D4A574]">JS</span>
        ),
      },
      {
        name: "React",
        description: "Component-based user interfaces",
        shortDescription: "Component-based UIs",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "Next.js",
        description: "Modern full-stack web applications",
        shortDescription: "Full-stack web framework",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.8 14.5-4.9-6.9v6.9H9.3V7.5h1.6l4.9 6.9V7.5h1.6v9.2z" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        description: "Type-safe scalable development",
        shortDescription: "Type-safe scalable development",
        icon: (
          <span className="font-mono font-bold text-xs text-[#D4A574]">TS</span>
        ),
      },
      {
        name: "Tailwind CSS",
        description: "Responsive utility-first styling",
        shortDescription: "Responsive utility styling",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
          </svg>
        ),
      },
      {
        name: "Vite",
        description: "Fast frontend build tooling & bundling",
        shortDescription: "Fast build tooling",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Backend & Database",
    badge: "02",
    skills: [
      {
        name: "Node.js",
        description: "Scalable JavaScript runtime environment",
        shortDescription: "JavaScript runtime environment",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2l8 4.6v9.2L12 22l-8-4.6V6.6L12 2z" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "Firebase",
        description: "Authentication and backend services",
        shortDescription: "Auth & backend services",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.5 17.5L8.5 2.5l3.5 6.5-7.5 8.5zm9 0l-4-7.5 1.5-3 5.5 10.5h-3zm-9 0l7 4 8-4-3.5-12.5-11.5 12.5z" />
          </svg>
        ),
      },
      {
        name: "Supabase",
        description: "Backend and database services",
        shortDescription: "Postgres & backend services",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.4 2.1a1 1 0 0 0-1.6.8v8.6H3.3a1 1 0 0 0-.8 1.6l8.5 8.8a1 1 0 0 0 1.6-.8v-8.6h8.5a1 1 0 0 0 .8-1.6L13.4 2.1z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Data & AI",
    badge: "03",
    skills: [
      {
        name: "Python",
        description: "Data and AI/ML experimentation",
        shortDescription: "Data & AI/ML experimentation",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.9 2c-3.1 0-5 1.4-5 3.5v2.5h5v.8H4.4C2.5 8.8 1 10.4 1 12.5c0 2.2 1.5 3.5 3.8 3.5h1.6v-2.3c0-2.3 2-4.2 4.5-4.2h5V7C15.9 4 14.5 2 11.9 2zm-1.8 1.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm2 18.2c3.1 0 5-1.4 5-3.5V16h-5v-.8h7.5c1.9 0 3.5-1.5 3.5-3.7 0-2.2-1.5-3.5-3.8-3.5h-1.6v2.3c0 2.3-2 4.2-4.5 4.2h-5V17c0 3 1.4 5 4 5zm1.8-1.8a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
          </svg>
        ),
      },
      {
        name: "NumPy",
        description: "High-performance numerical computing",
        shortDescription: "Numerical computing",
        icon: (
          <span className="font-mono font-bold text-xs text-[#D4A574]">NP</span>
        ),
      },
      {
        name: "Pandas",
        description: "Structured data analysis & manipulation",
        shortDescription: "Data analysis & manipulation",
        icon: (
          <span className="font-mono font-bold text-xs text-[#D4A574]">PD</span>
        ),
      },
      {
        name: "Scikit-learn",
        description: "Predictive machine learning algorithms",
        shortDescription: "Predictive ML algorithms",
        icon: (
          <span className="font-mono font-bold text-xs text-[#D4A574]">SK</span>
        ),
      },
      {
        name: "AI / ML",
        description: "Intelligent systems & neural models",
        shortDescription: "Intelligent systems & models",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Tools",
    badge: "04",
    skills: [
      {
        name: "Git",
        description: "Version control and collaboration",
        shortDescription: "Version control & collaboration",
        icon: (
          <svg className="w-5 h-5 text-[#D4A574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="12" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <path d="M6 12h6a6 6 0 0 0 6-6" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        description: "Code hosting and project collaboration",
        shortDescription: "Code hosting & collaboration",
        icon: (
          <svg className="w-5 h-5 fill-current text-[#D4A574]" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        ),
      },
    ],
  },
];

const WORKFLOW_MAPPINGS = [
  {
    tool: "Next.js",
    role: "Modern full-stack web applications",
    detail: "Server components, optimized routing, and API endpoints",
  },
  {
    tool: "React",
    role: "Interactive user interfaces",
    detail: "Declarative component trees and fluid reactive states",
  },
  {
    tool: "Python",
    role: "Data and AI/ML experimentation",
    detail: "Model prototyping, automated scripting, and data pipelines",
  },
  {
    tool: "Firebase",
    role: "Authentication and backend services",
    detail: "Real-time user state and resilient document stores",
  },
  {
    tool: "Supabase",
    role: "Backend and database services",
    detail: "Postgres infrastructure, auth policies, and relational data",
  },
  {
    tool: "Tailwind CSS",
    role: "Responsive interface development",
    detail: "Consistent design tokens and micro-animated UI systems",
  },
];

export default function Skills() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. SKILLS PAGE HERO */}
      <section className="relative w-full pt-4 sm:pt-12 pb-4 sm:pb-14 px-4 sm:px-6">
        {/* Background Decorative Ambient Radial Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.08)_0%,rgba(111,78,55,0.04)_50%,transparent_70%)] pointer-events-none blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/70 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)] mb-2.5 sm:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
                MY TOOLKIT
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFF8F0] leading-tight max-w-4xl mx-auto">
              Technologies I use to turn ideas into{" "}
              <span className="text-gradient-title">working digital products.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-xs sm:text-lg text-[#B8A99A] leading-relaxed max-w-2xl mx-auto mt-2 sm:mt-4 font-normal">
              <span className="sm:hidden">
                Practical stack across modern web development, backend services, data tools, and AI/ML.
              </span>
              <span className="hidden sm:inline">
                A practical stack built around modern web development, backend services, data tools, and AI/ML exploration.
              </span>
            </p>

            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto mt-2.5 sm:mt-5 rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* 2. EXISTING ANIMATED TECH MARQUEE (Visual Strip) */}
      <section className="relative w-full py-3 sm:py-10 overflow-hidden border-y border-[rgba(212,165,116,0.12)] bg-[#120D09]/50">
        <ScrollReveal className="relative w-full overflow-hidden">
          {/* Section Indicator */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-2 sm:mb-4 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#8B6B52]">
            <span className="uppercase tracking-wider">Tech Stack Stream</span>
            <span className="hidden sm:inline">Dual Direction • Hover to Pause</span>
          </div>

          {/* Left Fade Mask */}
          <div
            className="absolute left-0 top-0 bottom-0 w-14 sm:w-44 bg-gradient-to-r from-[#17110D] via-[#17110D]/90 to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Right Fade Mask */}
          <div
            className="absolute right-0 top-0 bottom-0 w-14 sm:w-44 bg-gradient-to-l from-[#17110D] via-[#17110D]/90 to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Motion Track: Dual Infinite Sliding Rows */}
          <div className="hidden motion-safe:flex flex-col gap-2.5 sm:gap-4">
            {/* Row 1: Sliding Left ← */}
            <div className="skills-marquee-row w-full overflow-hidden">
              <div className="skills-marquee-track flex w-fit animate-marquee-left">
                {/* Set A */}
                <div className="flex shrink-0 items-center gap-2.5 sm:gap-4 pr-2.5 sm:pr-4">
                  {SKILLS.map((skill) => (
                    <SkillChip key={`r1-a-${skill.id}`} {...skill} />
                  ))}
                </div>

                {/* Set B (Seamless loop duplicate) */}
                <div className="flex shrink-0 items-center gap-2.5 sm:gap-4 pr-2.5 sm:pr-4" aria-hidden="true">
                  {SKILLS.map((skill) => (
                    <SkillChip key={`r1-b-${skill.id}`} {...skill} />
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Sliding Right → */}
            <div className="skills-marquee-row w-full overflow-hidden">
              <div className="skills-marquee-track flex w-fit animate-marquee-right">
                {/* Set A */}
                <div className="flex shrink-0 items-center gap-2.5 sm:gap-4 pr-2.5 sm:pr-4">
                  {SKILLS_ROW_TWO.map((skill) => (
                    <SkillChip key={`r2-a-${skill.id}`} {...skill} />
                  ))}
                </div>

                {/* Set B (Seamless loop duplicate) */}
                <div className="flex shrink-0 items-center gap-2.5 sm:gap-4 pr-2.5 sm:pr-4" aria-hidden="true">
                  {SKILLS_ROW_TWO.map((skill) => (
                    <SkillChip key={`r2-b-${skill.id}`} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reduced Motion Fallback */}
          <div className="hidden motion-reduce:flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-6 max-w-5xl mx-auto">
            {SKILLS.map((skill) => (
              <SkillChip key={`static-${skill.id}`} {...skill} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. CATEGORY SECTIONS & INTERACTIVE SKILL CARDS */}
      <section className="relative w-full pt-4 sm:pt-16 pb-6 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-16">
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241A14]/70 border border-[rgba(212,165,116,0.2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
                Domain Disciplines
              </span>
            </div>
            <h2 className="text-xl sm:text-4xl font-bold tracking-tight text-[#FFF8F0]">
              Skill <span className="text-gradient-title">Categories</span>
            </h2>
            <p className="text-xs sm:text-base text-[#B8A99A]">
              Interactive view of frontend, backend, data, and developer tooling.
            </p>
          </ScrollReveal>

          {CATEGORIES.map((category, catIdx) => (
            <ScrollReveal key={category.title} delay={catIdx * 80} className="space-y-2.5 sm:space-y-5">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-1.5 sm:pb-3 border-b border-[rgba(212,165,116,0.14)]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="font-mono text-xs font-bold text-[#D4A574] px-2 py-0.5 rounded-md bg-[#17110D] border border-[rgba(212,165,116,0.2)]">
                    {category.badge}
                  </span>
                  <h3 className="text-sm sm:text-xl font-bold text-[#FFF8F0] tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-[#8B6B52]">
                  {category.skills.length} technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group glass-card rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-[rgba(212,165,116,0.18)] hover:border-[rgba(212,165,116,0.45)] bg-[#241A14]/60 hover:bg-[#241A14]/90 transition-all duration-300 relative overflow-hidden shadow-[0_4px_20px_rgba(15,11,8,0.45)] hover:shadow-[0_4px_24px_rgba(212,165,116,0.14)] cursor-default"
                  >
                    {/* Top ambient card shine */}
                    <div
                      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574]/25 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="flex items-start justify-between gap-3">
                      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#17110D] border border-[rgba(212,165,116,0.22)] flex items-center justify-center text-[#D4A574] group-hover:scale-105 group-hover:border-[rgba(212,165,116,0.42)] transition-transform duration-300 shrink-0">
                        {skill.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#8B6B52] group-hover:text-[#D4A574] transition-colors uppercase px-2 py-0.5 rounded bg-[#17110D]/70 border border-[rgba(212,165,116,0.1)]">
                        {category.title}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-lg font-bold text-[#FFF8F0] group-hover:text-[#F5E6D3] transition-colors mt-1.5 sm:mt-3.5">
                      {skill.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#B8A99A] mt-0.5 sm:mt-1.5 leading-snug sm:leading-relaxed font-normal">
                      <span className="sm:hidden">{skill.shortDescription || skill.description}</span>
                      <span className="hidden sm:inline">{skill.description}</span>
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. HOW I USE MY STACK */}
      <section className="relative w-full pt-4 sm:pt-12 pb-5 sm:pb-20 px-4 sm:px-6 border-t border-[rgba(212,165,116,0.12)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-4 sm:mb-12 space-y-1.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/70 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
                HOW I USE MY STACK
              </span>
            </div>

            <h2 className="text-xl sm:text-4xl font-bold tracking-tight text-[#FFF8F0] leading-tight">
              Practical Roles &amp; <span className="text-gradient-title">Application</span>
            </h2>

            <p className="text-xs sm:text-base text-[#B8A99A] leading-relaxed">
              How individual technologies connect to solve real problems and deliver production web software.
            </p>
          </ScrollReveal>

          {/* Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5">
            {WORKFLOW_MAPPINGS.map((item, index) => (
              <ScrollReveal
                key={item.tool}
                delay={index * 60}
                className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-[rgba(212,165,116,0.2)] hover:border-[rgba(212,165,116,0.38)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-1.5 sm:pb-3 mb-1.5 sm:mb-3 border-b border-[rgba(212,165,116,0.12)]">
                    <span className="text-sm sm:text-lg font-bold text-[#FFF8F0]">
                      {item.tool}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#D4A574]" aria-hidden="true">
                      →
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-base font-semibold text-[#F5E6D3] leading-snug">
                    {item.role}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#B8A99A] mt-0.5 sm:mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-2 sm:mt-4 pt-1.5 sm:pt-3 border-t border-[rgba(212,165,116,0.08)] flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#8B6B52]">
                  <span className="h-1 w-1 rounded-full bg-[#D4A574]" />
                  <span>Production Ready</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CURRENTLY EXPLORING */}
      <section className="relative w-full pt-4 sm:pt-10 pb-6 sm:pb-24 px-4 sm:px-6 border-t border-[rgba(212,165,116,0.12)]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl sm:rounded-3xl border border-[rgba(212,165,116,0.32)] hover:border-[rgba(212,165,116,0.48)] bg-gradient-to-br from-[#241A14]/90 via-[#1D150F]/85 to-[#0F0B08]/90 p-4 sm:p-12 shadow-[0_12px_40px_rgba(15,11,8,0.65),0_0_24px_rgba(212,165,116,0.08)] transition-all duration-300 relative overflow-hidden">
              {/* Subtle top warm shimmer line */}
              <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574]/50 to-transparent"
                aria-hidden="true"
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-2.5 sm:pb-6 mb-2.5 sm:mb-6 border-b border-[rgba(212,165,116,0.16)]">
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#17110D] border border-[rgba(212,165,116,0.25)] shadow-sm">
                  <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-[#D4A574] animate-pulse-warm shadow-[0_0_8px_rgba(212,165,116,0.8)]" />
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
                    CURRENTLY EXPLORING
                  </span>
                </div>

                <span className="text-[10px] sm:text-xs font-mono text-[#8B6B52]">
                  Focus Area • 2026
                </span>
              </div>

              <h2 className="text-lg sm:text-4xl font-bold tracking-tight text-[#FFF8F0] leading-tight">
                AI / Machine <span className="text-gradient-title">Learning</span>
              </h2>

              <p className="text-xs sm:text-lg text-[#B8A99A] leading-relaxed mt-1.5 sm:mt-4 max-w-2xl font-normal">
                Exploring Python-based machine learning workflows, data processing, model experimentation, and intelligent features for software products.
              </p>

              {/* Research Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 pt-2.5 sm:pt-6 mt-2.5 sm:mt-6 border-t border-[rgba(212,165,116,0.12)] text-[10px] sm:text-xs font-mono">
                <div className="p-2 sm:p-3.5 rounded-xl bg-[#17110D]/70 border border-[rgba(212,165,116,0.14)] flex items-center gap-2 sm:gap-2.5">
                  <span className="text-[#D4A574]">01</span>
                  <span className="text-[#F5E6D3]">Python ML Workflows &amp; Pipelines</span>
                </div>
                <div className="p-2 sm:p-3.5 rounded-xl bg-[#17110D]/70 border border-[rgba(212,165,116,0.14)] flex items-center gap-2 sm:gap-2.5">
                  <span className="text-[#D4A574]">02</span>
                  <span className="text-[#F5E6D3]">NumPy &amp; Pandas Data Processing</span>
                </div>
                <div className="p-2 sm:p-3.5 rounded-xl bg-[#17110D]/70 border border-[rgba(212,165,116,0.14)] flex items-center gap-2 sm:gap-2.5">
                  <span className="text-[#D4A574]">03</span>
                  <span className="text-[#F5E6D3]">Scikit-learn Model Experimentation</span>
                </div>
                <div className="p-2 sm:p-3.5 rounded-xl bg-[#17110D]/70 border border-[rgba(212,165,116,0.14)] flex items-center gap-2 sm:gap-2.5">
                  <span className="text-[#D4A574]">04</span>
                  <span className="text-[#F5E6D3]">Intelligent Software Feature Integration</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
