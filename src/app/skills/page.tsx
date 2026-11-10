import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: {
    absolute: "Skills & Technologies — SolankiSoftware",
  },
  description:
    "Explore the technologies and tools used across modern web development, backend services, data processing, and AI/ML exploration.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Skills & Technologies — SolankiSoftware",
    description:
      "Explore the technologies and tools used across modern web development, backend services, data processing, and AI/ML exploration.",
    url: "/skills",
    siteName: "SolankiSoftware",
    locale: "en_IN",
  },
};

export default function SkillsPage() {
  return (
    <div className="w-full flex-1">
      <Skills />
    </div>
  );
}
