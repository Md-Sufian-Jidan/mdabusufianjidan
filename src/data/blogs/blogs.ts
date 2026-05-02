import { IBlog } from "@/types/blog";

export const blogsData: IBlog[] = [
  {
    id: "1",
    slug: "implementing-google-analytics-vercel",
    title: "Implementing Google Analytics & Vercel Analytics in a Next.js Portfolio",
    excerpt: "Learn how curiosity led me to implement advanced user tracking in my Next.js portfolio using Google Analytics and Vercel Analytics.",
    image: "/blogs/googleanalyticsandvercelanalytics.avif",
    category: "Analytics",
    tags: ["Next.js", "Google Analytics", "Vercel", "Web Development"],
    readTime: "6 min read",
    publishDate: "April 30, 2026",
    author: {
      name: "Md Abu Sufian Jidan",
      avatar: "/mdabusufianjidan-professional-image-22042026.avif",
      role: "Full Stack Developer"
    },
    featured: true,
    relatedPosts: ["mastering-framer-motion"],
    videos: [
      {
        id: "v1",
        title: "How i implemented Google Analytics in my portfolio",
        thumbnail: "/blogs/howtoimplementgoogleandvercelanalytics.avif",
        url: "https://drive.google.com/file/d/1fqUAcVBBzcmU-hE_-nIMnY9fP8QzW7zE/preview",
        language: "English",
        description: "How to implement Google Analytics in my portfolio using Next.js App Router."
      },
      {
        id: "v2",
        title: "Google Analytics Next.js Setup",
        thumbnail: "https://img.youtube.com/vi/C6MnZyGCisY/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/C6MnZyGCisY",
        language: "Hindi",
        description: "Official implementation guide for Google Analytics in Next.js App Router."
      },
      {
        id: "v3",
        title: "Next.js Google Analytics Bangla Tutorial",
        thumbnail: "https://img.youtube.com/vi/zVbX5QBMtDY/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/zVbX5QBMtDY",
        language: "Hindi",
        description: "Step-by-step guide to adding Google Analytics to your Next.js project."
      }
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'Building a portfolio is one thing, but tracking how users interact with it takes the learning to another level. Today I successfully implemented Vercel Analytics and Google Analytics in my portfolio, and honestly, the entire learning process was very interesting.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'How Curiosity Led to Learning'
      },
      {
        type: 'paragraph',
        text: 'While scrolling through LinkedIn, I came across a post where a developer explained how he tracks users on his portfolio website. Out of curiosity, I commented: "How do you track users on your portfolio site?" After he replied, I started thinking: "I already have a portfolio too. Why not implement this feature myself?" That is where the research journey started.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Research Process'
      },
      {
        type: 'paragraph',
        text: 'First, I searched on Google: "how to implement google analytics in next js". Right after searching, I found the official Next.js documentation along with some Gemini-generated code suggestions. Then I discussed the topic with ChatGPT to understand the implementation process more clearly. It explained the workflow step by step. After that, I watched a couple of YouTube tutorials and started implementing the feature in my own portfolio.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Implementation: Vercel Analytics'
      },
      {
        type: 'paragraph',
        text: 'Vercel Analytics is extremely easy to set up. First, install the package:'
      },
      {
        type: 'code',
        language: 'bash',
        code: 'npm i @vercel/analytics'
      },
      {
        type: 'paragraph',
        text: 'Then, add it to your root layout:'
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'app/layout.tsx',
        code: `import { Analytics } from "@vercel/analytics/react"\n\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode\n}) {\n  return (\n    <html lang="en">\n      <body>\n        {children}\n        <Analytics />\n      </body>\n    </html>\n  )\n}`
      },
      {
        type: 'heading',
        level: 2,
        text: 'Implementation: Google Analytics'
      },
      {
        type: 'paragraph',
        text: 'To connect Google Analytics with my Next.js portfolio, I first imported the Script component from next/script. This component helps load external scripts in a more optimized and performance-friendly way inside Next.js applications. Instead of adding normal script tags manually, Next.js manages when and how the scripts load, which improves page performance and avoids hydration issues.'
      },
      {
        type: 'code',
        language: 'bash',
        code: 'import Script from "next/script";'
      },
      {
        type: 'paragraph',
        text: 'The first Script loads the official Google Analytics tracking library directly from Google Tag Manager using my Google Analytics Measurement ID stored inside an environment variable called NEXT_PUBLIC_GA_ID. I used strategy="afterInteractive" so the analytics script loads only after the page becomes interactive. This keeps the initial page load faster and prevents analytics from blocking important UI rendering.'
      },
      {
        type: 'code',
        language: '.env.local',
        code: 'NEXT_PUBLIC_GA_ID= Your google analytics measurement id'
      },
      {
        type: 'paragraph',
        text: 'After loading the Google Analytics library, I added another Script with the id "google-analytics". Inside this script, I initialized Google Analytics using the global dataLayer array. The gtag() function pushes tracking events into dataLayer, and then Google Analytics starts tracking user activity when gtag("config", process.env.NEXT_PUBLIC_GA_ID) runs.'
      },
      {
        type: 'paragraph',
        text: 'Using this setup, my portfolio can now track real user interactions such as page visits, traffic sources, user sessions, engagement time, and overall visitor behavior. One thing I really liked about this implementation is that it works smoothly with the Next.js App Router and keeps the analytics setup clean, scalable, and production-ready.'
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'app/layout.tsx',
        code: `
      export default function RootLayout({
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>) {
        return (
          <html lang="en" suppressHydrationWarning>
            <body
              className={\`\${jakarta.variable} \${inter.variable} font-sans antialiased selection:bg-primary selection:text-primary-foreground\`}
              suppressHydrationWarning
            >
              <Script
                src={\`https://www.googletagmanager.com/gtag/js?id=\${process.env.NEXT_PUBLIC_GA_ID}\`}
                strategy="afterInteractive"
              />
      
              <Script id="google-analytics" strategy="afterInteractive">
                {\`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
      
                  gtag('config', '\${process.env.NEXT_PUBLIC_GA_ID}');
                \`}
              </Script>
                    <main className="flex-1">
                      {children}
                    </main>
            </body>
          </html>
        );
      }`
      },
      {
        type: 'heading',
        level: 2,
        text: 'What I Track Now'
      },
      {
        type: 'list',
        items: [
          'How many users are visiting the portfolio',
          'Which pages are getting the most views',
          'Where users are coming from',
          'How long they stay on the site'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Lessons Learned'
      },
      {
        type: 'paragraph',
        text: 'Alhamdulillah, the implementation was successful. One important thing I learned from this experience: A developer’s growth often starts with curiosity. A simple LinkedIn post inspired me to learn and implement an entirely new feature.'
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "I hope you found this blog helpful. If you have any questions, please feel free to contact me. If you didn't understand the implementation, you can watch the video tutorials below."
      }
    ]
  },
  {
    id: "2",
    slug: "mastering-framer-motion",
    title: "Mastering Framer Motion in Next.js",
    excerpt: "Learn how to create fluid, cinematic animations for your Next.js application using Framer Motion.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
    category: "Design",
    tags: ["React", "Framer Motion", "Animation"],
    readTime: "4 min read",
    publishDate: "April 28, 2026",
    author: {
      name: "Md Abu Sufian Jidan",
      avatar: "/mdabusufianjidan-professional-image-22042026.avif",
      role: "Frontend Developer"
    },
    featured: false,
    relatedPosts: ["implementing-google-analytics-vercel"],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'Framer Motion is an incredible animation library for React that makes creating complex animations simple and declarative.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Getting Started'
      },
      {
        type: 'paragraph',
        text: 'First, install the package:'
      },
      {
        type: 'code',
        language: 'bash',
        code: 'npm install framer-motion'
      }
    ]
  }
];
