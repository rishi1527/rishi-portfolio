import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: {
    absolute: "About — SolankiSoftware",
  },
  description:
    "Learn about Rishi Solanki, his software development journey, technical interests, and approach to building digital products.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — SolankiSoftware",
    description:
      "Learn about Rishi Solanki, his software development journey, technical interests, and approach to building digital products.",
    url: "/about",
    siteName: "SolankiSoftware",
    locale: "en_IN",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full flex-1">
      <About />
    </div>
  );
}
