import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: {
    absolute: "Projects — SolankiSoftware",
  },
  description:
    "Explore Movie Hub, Color Fusion AI, Shoply, Weather App, and other software projects.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — SolankiSoftware",
    description:
      "Explore Movie Hub, Color Fusion AI, Shoply, Weather App, and other software projects.",
    url: "/projects",
    siteName: "SolankiSoftware",
    locale: "en_IN",
  },
};

export default function ProjectsPage() {
  return (
    <div className="w-full flex-1">
      <Projects />
    </div>
  );
}
