import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import InteractiveDotGrid from "@/components/InteractiveDotGrid";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`
    ).replace(/\/$/, "")
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://solankisoftware.vercel.app";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "SolankiSoftware — Modern Software, Web & AI Solutions",
    template: "%s | SolankiSoftware",
  },
  description:
    "SolankiSoftware is the independent software development brand of Rishi Solanki, focused on modern web applications, digital products, and AI-powered software exploration.",
  applicationName: "SolankiSoftware",
  authors: [{ name: "Rishi Solanki" }],
  creator: "Rishi Solanki",
  publisher: "SolankiSoftware",
  keywords: [
    "SolankiSoftware",
    "Rishi Solanki",
    "Developer Portfolio",
    "Full-Stack Developer",
    "Web Applications",
    "AI/ML",
    "Next.js",
    "TypeScript",
    "React",
    "Python",
    "Tailwind CSS",
    "Software Solutions",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl || "/",
    siteName: "SolankiSoftware",
    title: "SolankiSoftware — Modern Software, Web & AI Solutions",
    description:
      "SolankiSoftware is the independent software development brand of Rishi Solanki, focused on modern web applications, digital products, and AI-powered software exploration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolankiSoftware — Modern Software, Web & AI Solutions",
    description:
      "SolankiSoftware is the independent software development brand of Rishi Solanki, focused on modern web applications, digital products, and AI-powered software exploration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#17110D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth js`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=window.location.search||'';if(s.indexOf('intro')===-1&&s.indexOf('preview')===-1&&s.indexOf('replay')===-1&&sessionStorage.getItem('solanki_intro_v4_seen')){document.documentElement.classList.add('intro-already-seen');}}catch(e){}`,
          }}
        />
        <noscript>
          <style>{`.scroll-reveal { opacity: 1 !important; transform: none !important; } .intro-overlay { display: none !important; }`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-[#D4A574]/25 selection:text-[#FFF8F0] flex flex-col">
        <IntroLoader />
        <InteractiveDotGrid />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


