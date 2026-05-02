import { Metadata } from "next";
import Blogs from "@/components/modules/blog/Blogs";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdabusufianjidan.vercel.app"),
  title: {
    default: "Blogs | Md Abu Sufian Jidan",
    template: "%s | Blogs | Abu Sufian Jidan",
  },
  description:
    "Explore blogs by Md Abu Sufian Jidan about Next.js, React, TypeScript, Full Stack Development, Google Analytics, Vercel Analytics, UI/UX, performance optimization, and modern web development.",
  keywords: [
    "Next.js Blog",
    "React Blog",
    "Full Stack Development",
    "Web Development Blog",
    "Google Analytics Next.js",
    "Vercel Analytics",
    "JavaScript Tutorials",
    "TypeScript Tutorials",
    "Portfolio Development",
    "Frontend Development",
    "Backend Development",
    "Software Engineering",
  ],

  authors: [
    {
      name: "Md Abu Sufian Jidan",
      url: "https://mdabusufianjidan.vercel.app"
    },
  ],
  creator: "Md Abu Sufian Jidan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdabusufianjidan.vercel.app/blogs",
    siteName: "Md Abu Sufian Jidan Portfolio",
    title: "Blogs | Md Abu Sufian Jidan",
    description:
      "Read modern web development blogs about Next.js, React, analytics integration, scalable applications, animations, and full stack engineering by Md Abu Sufian Jidan.",
    images: [
      {
        url: "/mdabusufianjidan-professional-image-22042026.avif",
        width: 1200,
        height: 630,
        alt: "Md Abu Sufian Jidan Blogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Md Abu Sufian Jidan",
    description:
      "Read modern web development blogs about Next.js, React, analytics integration, scalable applications, animations, and full stack engineering.",
    images: ["/mdabusufianjidan-professional-image-22042026.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://mdabusufianjidan.vercel.app/blogs",
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen lg:pt-20 pt-10">
      <Blogs />
    </main>
  );
}
