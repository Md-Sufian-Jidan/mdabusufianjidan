import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import Transition from "@/components/shared/Transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Md Abu Sufian Jidan | Full Stack Developer",
    template: "%s | Abu Sufian Jidan",
  },
  description:
    "Junior Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications and open to remote roles in the US and Europe.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Remote Software Engineer",
    "Node.js Developer",
  ],
  authors: [{ name: "Md Abu Sufian Jidan" }],
  creator: "Md Abu Sufian Jidan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abu-sufian-dev.vercel.app",
    siteName: "Md Abu Sufian Jidan Portfolio",
    title: "Md Abu Sufian Jidan | Full Stack Developer",
    description:
      "Junior Full Stack Developer specializing in React, Next.js, and Node.js. Open to remote roles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Abu Sufian Jidan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Abu Sufian Jidan | Full Stack Developer",
    description:
      "Junior Full Stack Developer specializing in React, Next.js, and Node.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Transition>
          {children}
        </Transition>
      </body>
    </html>
  );
}
