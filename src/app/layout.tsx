import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Transition from "@/components/shared/Transition";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

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
  metadataBase: new URL("https://mdabusufianjidan.vercel.app"),
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
        url: "/mdabusufianjidan-professional-image-22042026.avif",
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
    images: ["/mdabusufianjidan-professional-image-22042026.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://mdabusufianjidan.vercel.app"
  }
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
        suppressHydrationWarning
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Abu Sufian Jidan",
              url: "https://mdabusufianjidan.vercel.app",
              image: "https://mdabusufianjidan.vercel.app/mdabusufianjidan-professional-image-22042026.avif",
              sameAs: [
                "https://github.com/Md-Sufian-Jidan",
                "https://www.linkedin.com/in/md-sufian-jidan/"
              ],
              jobTitle: "Full Stack Developer | Software Engineer",
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
        <Analytics />
      </body>
    </html>
  );
}