import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: {
    absolute: "Contact — SolankiSoftware",
  },
  description:
    "Get in touch with Rishi Solanki about software development, digital products, and collaboration.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — SolankiSoftware",
    description:
      "Get in touch with Rishi Solanki about software development, digital products, and collaboration.",
    url: "/contact",
    siteName: "SolankiSoftware",
    locale: "en_IN",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full flex-1">
      <Contact />
    </div>
  );
}
