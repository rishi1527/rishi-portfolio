import type { Metadata } from "next";
import Journey from "@/components/Journey";

export const metadata: Metadata = {
  title: {
    absolute: "My Journey — SolankiSoftware",
  },
  description:
    "Explore Rishi Solanki's education, software development journey, projects, and ongoing AI/ML learning.",
  alternates: {
    canonical: "/journey",
  },
  openGraph: {
    title: "My Journey — SolankiSoftware",
    description:
      "Explore Rishi Solanki's education, software development journey, projects, and ongoing AI/ML learning.",
    url: "/journey",
    siteName: "SolankiSoftware",
    locale: "en_IN",
  },
};

export default function JourneyPage() {
  return (
    <div className="w-full flex-1">
      <Journey />
    </div>
  );
}
