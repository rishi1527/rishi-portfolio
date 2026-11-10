import ScrollReveal from "@/components/ScrollReveal";

interface TimelineStage {
  number: string;
  category: string;
  title: string;
  institution?: string;
  university?: string;
  description: string;
  shortDescription: string;
  tags: string[];
}

const TIMELINE_STAGES: TimelineStage[] = [
  {
    number: "01",
    category: "Education",
    title: "B.Voc (Information Technology)",
    institution: "Kalyan Polytechnic, Sekhpat, Jamnagar",
    university: "Gujarat Technological University",
    description:
      "Current academic journey focused on software development, web technologies, databases, and modern application development.",
    shortDescription:
      "Pursuing B.Voc in IT at Kalyan Polytechnic (GTU), focused on web development, databases, and software engineering.",
    tags: [
      "Information Technology",
      "Web Technologies",
      "Databases",
      "Software Development",
    ],
  },
  {
    number: "02",
    category: "Development",
    title: "Full-Stack Web Development",
    description:
      "Built and deployed responsive applications using: JavaScript, React, Next.js, TypeScript, Firebase, Supabase, and modern frontend tooling.",
    shortDescription:
      "Building responsive web apps with React, Next.js, TypeScript, and modern backend services.",
    tags: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Supabase",
    ],
  },
  {
    number: "03",
    category: "Projects",
    title: "Building Real Products",
    description:
      "Developed projects including: Movie Hub, Color Fusion AI, Shoply, and Weather App. Focus on learning by building, deploying, testing, and continuously improving real applications.",
    shortDescription:
      "Built real products including Movie Hub, Color Fusion AI, Shoply, and Weather App with continuous iteration.",
    tags: [
      "Movie Hub",
      "Color Fusion AI",
      "Shoply",
      "Weather App",
    ],
  },
  {
    number: "04",
    category: "Exploration",
    title: "AI / Machine Learning",
    description:
      "Exploring Python, NumPy, Pandas, Scikit-learn, and AI/ML concepts with the goal of integrating intelligent features into software products.",
    shortDescription:
      "Exploring Python, NumPy, Pandas, and Scikit-learn to integrate intelligent features into web software.",
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "AI / ML",
    ],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative w-full pt-4 sm:pt-12 pb-6 sm:pb-16 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="journey-heading"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,rgba(111,78,55,0.03)_50%,transparent_70%)] pointer-events-none blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-4 sm:mb-8 space-y-1.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/70 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
              MY JOURNEY
            </span>
          </div>

          <h2
            id="journey-heading"
            className="text-xl sm:text-5xl font-bold tracking-tight text-[#FFF8F0] leading-tight"
          >
            Learning. Building. <span className="text-gradient-title">Evolving.</span>
          </h2>

          <p className="text-xs sm:text-lg text-[#B8A99A] leading-relaxed font-normal">
            <span className="sm:hidden">
              From learning software development to building real products and exploring AI.
            </span>
            <span className="hidden sm:inline">
              A continuous journey from learning software development to building real-world digital products and exploring AI-powered solutions.
            </span>
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto mt-2 sm:mt-3 rounded-full" />
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-12 md:pl-14">
          {/* Subtle Vertical Spine Line */}
          <div
            className="absolute left-3 sm:left-6 md:left-7 top-3 bottom-3 w-px bg-gradient-to-b from-[#D4A574]/60 via-[rgba(212,165,116,0.25)] to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-3 sm:space-y-8">
            {TIMELINE_STAGES.map((stage, index) => (
              <ScrollReveal
                key={stage.number}
                delay={index * 100}
                className="relative group"
              >
                {/* Timeline Node on Spine */}
                <div
                  className="absolute -left-3 sm:-left-6 md:-left-7 top-4 sm:top-7 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-4 h-4 sm:w-7 sm:h-7 rounded-full bg-[#17110D] border-2 border-[#D4A574] flex items-center justify-center shadow-[0_0_10px_rgba(212,165,116,0.3)] transition-transform duration-300 group-hover:scale-115">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4A574]" />
                  </div>
                </div>

                {/* Stage Card */}
                <div className="glass-card rounded-xl sm:rounded-2xl p-3.5 sm:p-7 md:p-8 border border-[rgba(212,165,116,0.2)] hover:border-[rgba(212,165,116,0.38)] transition-all duration-300 relative overflow-hidden">
                  {/* Subtle top card glow line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574]/25 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Stage Eyebrow Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 sm:pb-3 mb-1.5 sm:mb-3 border-b border-[rgba(212,165,116,0.12)]">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#D4A574] px-2 py-0.5 sm:px-2.5 rounded-md bg-[#17110D] border border-[rgba(212,165,116,0.2)]">
                        {stage.number}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#B8A99A]">
                        {stage.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-2xl font-bold text-[#FFF8F0] tracking-tight">
                    {stage.title}
                  </h3>

                  {/* Institution details for Education stage */}
                  {stage.institution && (
                    <div className="text-xs sm:text-sm text-[#D4A574] mt-0.5 sm:mt-1.5 space-y-0.5">
                      <p className="font-medium text-[#F5E6D3] text-xs sm:text-sm">{stage.institution}</p>
                      <p className="text-[#8B6B52] font-mono text-[10px] sm:text-xs">{stage.university}</p>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-base text-[#B8A99A] mt-1.5 sm:mt-3 leading-relaxed font-normal">
                    <span className="sm:hidden">{stage.shortDescription}</span>
                    <span className="hidden sm:inline">{stage.description}</span>
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2.5 sm:mt-4 pt-1 sm:pt-2">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-mono text-[#F5E6D3] bg-[#17110D]/70 border border-[rgba(212,165,116,0.14)] hover:border-[rgba(212,165,116,0.3)] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={300} className="mt-5 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#241A14]/70 border border-[rgba(212,165,116,0.22)] shadow-[0_4px_24px_rgba(15,11,8,0.45)] w-full max-w-xl mx-auto">
            <div className="flex items-center gap-2.5 sm:gap-3.5 text-left">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#17110D] border border-[rgba(212,165,116,0.22)] flex items-center justify-center text-[#D4A574] shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#FFF8F0]">
                  Follow my latest code &amp; experiments
                </p>
                <p className="text-[10px] sm:text-xs text-[#B8A99A]">
                  Active repositories and continuous builds
                </p>
              </div>
            </div>

            <a
              href="https://github.com/rishi1527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#17110D] bg-gradient-to-r from-[#D4A574] via-[#E6C29D] to-[#F5E6D3] hover:from-[#F5E6D3] hover:to-[#D4A574] transition-all duration-300 shadow-[0_2px_12px_rgba(212,165,116,0.22)] hover:shadow-[0_4px_18px_rgba(212,165,116,0.35)] active:scale-98 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              aria-label="Explore Rishi Solanki's GitHub profile in a new tab"
            >
              <span>Explore GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
