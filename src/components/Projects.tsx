import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  liveUrl: string;
  imageSrc: string;
  imageAlt: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Movie Hub",
    category: "Featured Project",
    description:
      "A modern movie discovery platform featuring curated releases, intelligent search, detailed media overviews, and responsive streaming previews.",
    shortDescription:
      "Movie discovery platform featuring curated releases, intelligent search, media overviews, and streaming previews.",
    technologies: ["React", "Vite", "Tailwind CSS", "TMDB API"],
    liveUrl: "https://movie-good.vercel.app/",
    imageSrc: "/projects/movie-hub.png",
    imageAlt: "Movie Hub live website interface preview",
  },
  {
    number: "02",
    title: "Color Fusion AI",
    category: "AI / Image Colorization",
    description:
      "Intelligent deep-learning image colorization application transforming monochrome imagery through predictive neural tinting and contrast modeling.",
    shortDescription:
      "Deep-learning image colorization transforming monochrome photos into vibrant imagery with neural contrast modeling.",
    technologies: ["Python", "AI / ML", "Scikit-learn", "NumPy"],
    liveUrl: "https://color-fusion-ai.vercel.app/",
    imageSrc: "/projects/color-fusion-ai.png",
    imageAlt: "Color Fusion AI live website interface preview",
  },
  {
    number: "03",
    title: "Shoply",
    category: "E-commerce Web Application",
    description:
      "Modern e-commerce shopping experience engineered with real-time cart state management, structured item catalogs, and smooth checkout workflows.",
    shortDescription:
      "Modern e-commerce platform with real-time cart state management, product catalogs, and checkout workflows.",
    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://shoplyy-ecommerce.vercel.app/",
    imageSrc: "/projects/shoply.png",
    imageAlt: "Shoply e-commerce storefront live website preview",
  },
  {
    number: "04",
    title: "Weather App",
    category: "Weather Application",
    description:
      "Real-time meteorological forecast interface delivering precise atmospheric metrics, live condition indicators, and location-aware weather tracking.",
    shortDescription:
      "Real-time weather forecast interface delivering live atmospheric metrics, condition indicators, and location tracking.",
    technologies: ["JavaScript", "Weather API", "Vite", "CSS3"],
    liveUrl: "https://goodwhether.vercel.app/",
    imageSrc: "/projects/weather.png",
    imageAlt: "Weather App live dashboard preview",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full pt-4 sm:pt-12 pb-6 sm:pb-20 px-4 sm:px-6"
      aria-labelledby="projects-heading"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,rgba(111,78,55,0.03)_50%,transparent_70%)] pointer-events-none blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-4 sm:mb-12 space-y-1.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/80 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
              Selected Work
            </span>
          </div>

          <h2
            id="projects-heading"
            className="text-xl sm:text-5xl font-bold tracking-tight text-[#FFF8F0] leading-tight"
          >
            Things I&apos;ve <span className="text-gradient-title">Built</span>
          </h2>

          <p className="text-xs sm:text-lg text-[#B8A99A] leading-relaxed max-w-2xl font-normal">
            A curated showcase of full-stack web applications, AI utilities, and interactive digital experiences.
          </p>

          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-[#D4A574] to-transparent rounded-full mt-2.5 sm:mt-3.5" />
        </ScrollReveal>

        {/* Stacked Cards Container */}
        <div className="projects-stack relative flex flex-col gap-4 sm:gap-16 pb-6 sm:pb-16">
          {PROJECTS.map((project, index) => (
            <article
              key={project.number}
              id={`project-${project.number}`}
              className="project-card group relative w-full rounded-xl sm:rounded-3xl border border-[rgba(212,165,116,0.22)] hover:border-[rgba(212,165,116,0.45)] bg-[#19120D] hover:bg-[#1D150F] shadow-[0_-8px_32px_rgba(0,0,0,0.55),0_20px_50px_rgba(10,7,5,0.7)] transition-[border-color,background-color] duration-300 p-4 sm:p-8 lg:p-10"
              style={{
                zIndex: index + 10,
                ["--card-index" as string]: index,
              }}
            >
              <ScrollReveal delay={index * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-10 items-center">
                  {/* Left Column: Interactive Real Project Screenshot */}
                  <div className="lg:col-span-6 xl:col-span-7 w-full order-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live preview for ${project.title}`}
                      className="group/img block relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-[rgba(212,165,116,0.22)] group-hover:border-[rgba(212,165,116,0.45)] shadow-[0_8px_30px_rgba(0,0,0,0.6)] bg-[#0F0B08] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
                    >
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                        priority={index === 0}
                        className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover/img:scale-[1.04] group-hover:scale-[1.04]"
                      />

                      {/* Subtle warm overlay that softens on hover */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#0F0B08]/45 via-transparent to-transparent pointer-events-none transition-opacity duration-500 opacity-60 group-hover/img:opacity-20 group-hover:opacity-20"
                        aria-hidden="true"
                      />

                      {/* Subtle Live App indicator pill */}
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F0B08]/85 backdrop-blur-md border border-[rgba(212,165,116,0.25)] shadow-md pointer-events-none">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
                        <span className="text-[10px] font-mono text-[#F5E6D3] tracking-wider uppercase">
                          Live App
                        </span>
                      </div>

                      {/* Top-right subtle preview arrow badge on hover */}
                      <div
                        className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-[#0F0B08]/85 backdrop-blur-md border border-[rgba(212,165,116,0.25)] text-[#D4A574] opacity-0 group-hover/img:opacity-100 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-sm"
                        aria-hidden="true"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>

                  {/* Right Column: Project Information & Actions */}
                  <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between h-full order-2 py-0.5 sm:py-1">
                    <div>
                      {/* Eyebrow: Project Number & Category */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-3">
                        <span className="font-mono text-base sm:text-xl font-bold text-[#D4A574]/85 select-none">
                          {project.number}
                        </span>
                        <span className="text-[#8B6B52] font-mono text-xs sm:text-sm" aria-hidden="true">
                          /
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D4A574] bg-[#17110D]/90 border border-[rgba(212,165,116,0.22)] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg sm:text-3xl lg:text-4xl font-bold text-[#FFF8F0] tracking-tight leading-tight">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#F5E6D3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] rounded-lg inline-flex items-center gap-2"
                        >
                          {project.title}
                        </a>
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-base text-[#B8A99A] mt-1.5 sm:mt-3.5 leading-relaxed font-normal">
                        <span className="sm:hidden">{project.shortDescription}</span>
                        <span className="hidden sm:inline">{project.description}</span>
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2.5 sm:mt-5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium text-[#F5E6D3] bg-[#17110D] border border-[rgba(212,165,116,0.18)] hover:border-[rgba(212,165,116,0.4)] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Live Preview Link */}
                    <div className="pt-3 sm:pt-8 mt-2.5 sm:mt-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#D4A574] to-[#C4925E] hover:from-[#DFB282] hover:to-[#CD9C68] text-[#17110D] font-semibold text-xs sm:text-base shadow-[0_4px_16px_rgba(212,165,116,0.2)] hover:shadow-[0_4px_22px_rgba(212,165,116,0.35)] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
                        aria-label={`Open live preview for ${project.title}`}
                      >
                        <span>Live Preview</span>
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


