import { IBlog } from "@/types/blog";

export const blogsData: IBlog[] = [
  {
    id: "1",
    slug: "implementing-google-analytics-vercel",
    title: "Implementing Google Analytics & Vercel Analytics in a Next.js Portfolio",
    excerpt: "Learn how curiosity led me to implement advanced user tracking in my Next.js portfolio using Google Analytics and Vercel Analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    category: "Analytics",
    tags: ["Next.js", "Google Analytics", "Vercel", "Web Development"],
    readTime: "6 min read",
    publishDate: "April 30, 2026",
    author: {
      name: "Md Abu Sufian Jidan",
      avatar: "https://github.com/mdabusufianjidan.png",
      role: "Frontend Developer"
    },
    featured: true,
    relatedPosts: ["mastering-framer-motion"],
    videos: [
      {
        id: "v1",
        title: "Google Analytics Next.js Setup",
        thumbnail: "https://img.youtube.com/vi/C6MnZyGCisY/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/C6MnZyGCisY",
        language: "English",
        description: "Official implementation guide for Google Analytics in Next.js App Router."
      },
      {
        id: "v2",
        title: "Next.js Google Analytics Bangla Tutorial",
        thumbnail: "https://img.youtube.com/vi/zVbX5QBMtDY/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/zVbX5QBMtDY",
        language: "Bangla",
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
        text: 'For Google Analytics, you can use the official next/third-parties package.'
      },
      {
        type: 'code',
        language: 'bash',
        code: 'npm install @next/third-parties@latest'
      },
      {
        type: 'paragraph',
        text: 'Then, add the GoogleAnalytics component to your layout:'
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'app/layout.tsx',
        code: `import { GoogleAnalytics } from '@next/third-parties/google'\n\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode\n}) {\n  return (\n    <html lang="en">\n      <body>{children}</body>\n      <GoogleAnalytics gaId="G-XYZ123" />\n    </html>\n  )\n}`
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
      avatar: "https://github.com/mdabusufianjidan.png",
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
