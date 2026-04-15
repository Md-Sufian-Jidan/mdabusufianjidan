import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Transition from "@/components/shared/Transition";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Md Abu Sufian Jidan | Full Stack Developer",
    template: "%s | Abu Sufian Jidan",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  },
  description:
    "Junior Full Stack Developer specializing in React, Next.js, JavaScript, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma and more. Building scalable web applications and open to remote roles in the US and Europe.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "FrontEnd Developer",
    "BackEnd Developer",
    "React Developer",
    "Next.js Developer",
    "Remote Software Engineer",
    "Node.js Developer",
  ],
  authors: [{
    name: "Md Abu Sufian Jidan",
    url: "https://mdabusufianjidan.vercel.app",
  }],
  creator: "Md Abu Sufian Jidan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdabusufianjidan.vercel.app",
    siteName: "Md Abu Sufian Jidan Portfolio",
    title: "Md Abu Sufian Jidan | Full Stack Developer",
    description:
      "Junior Full Stack Developer specializing in React, Next.js, JavaScript, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma and more. Building scalable web applications and open to remote roles in the US and Europe.",
    images: [
      {
        url: "https://i.ibb.co/FqLTCxSR/current-linkedin.png",
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
      "Junior Full Stack Developer specializing in React, Next.js, JavaScript, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma and more. Building scalable web applications and open to remote roles in the US and Europe.",
    images: ["https://i.ibb.co/FqLTCxSR/current-linkedin.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} font-sans antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Abu Sufian Jidan",
              url: "https://mdabusufianjidan.vercel.app",
              image: "https://i.ibb.co/FqLTCxSR/current-linkedin.png",
              sameAs: [
                "https://github.com/Md-Sufian-Jidan",
                "https://www.linkedin.com/in/md-sufian-jidan/"
              ],
              jobTitle: "Full Stack Developer",
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Navbar />
            <Transition>
              <main className="flex-1">
                {children}
              </main>
            </Transition>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}