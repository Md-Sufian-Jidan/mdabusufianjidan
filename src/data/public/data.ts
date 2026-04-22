import Education, { Experience, NavLink, Project, Service, SocialLink, TechStack } from "@/types/commonTypes";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const TECH_STACK: TechStack = {
    Frontend: [
        { title: "HTML", description: "Semantic Markup Language", link: "#", icon: "Layout" },
        { title: "CSS", description: "Styling & Responsive Design", link: "#", icon: "Layout" },
        { title: "JavaScript", description: "Dynamic Client-Side Scripting", link: "#", icon: "Layout" },
        { title: "TypeScript", description: "Typed Superset of JavaScript", link: "#", icon: "Layout" },
        { title: "Next.js", description: "React Framework with App Router, SSR, ISR, SSG", link: "#", icon: "Layout" },
        { title: "React", description: "Component-Based UI Library with Hooks & Context", link: "#", icon: "Code2" },
        { title: "Tailwind CSS", description: "Utility-First CSS Framework", link: "#", icon: "Layers" },
        { title: "Shadcn/UI", description: "Accessible UI Components", link: "#", icon: "Layers" },
    ],
    Backend: [
        { title: "Node.js", description: "Event-Driven JavaScript Runtime", link: "#", icon: "Terminal" },
        { title: "Express", description: "Web Framework for Node.js", link: "#", icon: "Code2" },
        { title: "Go", description: "Concurrent Systems Programming Language", link: "#", icon: "Code2" },
        { title: "Prisma", description: "Type-Safe Database ORM", link: "#", icon: "Layers" },
    ],
    Databases: [
        { title: "MongoDB", description: "NoSQL Document Database", link: "#", icon: "Database" },
        { title: "PostgreSQL", description: "Advanced Relational Database", link: "#", icon: "Database" },
    ],
    CloudDevOps: [
        { title: "Docker", description: "Containerization Platform", link: "#", icon: "Cpu" },
    ],
    Infrastructure: [
        { title: "MERN", description: "MongoDB, Express, React, Node.js Stack", link: "#", icon: "Cpu" },
        { title: "PERN", description: "PostgreSQL, Express, React, Node.js Stack", link: "#", icon: "Cpu" },
    ],
    Tools: [
        { title: "Git", description: "Distributed Version Control System", link: "#", icon: "Terminal" },
        { title: "GitHub", description: "Code Hosting & Collaboration Platform", link: "#", icon: "Terminal" },
        { title: "VS Code", description: "Integrated Development Environment", link: "#", icon: "Terminal" },
        { title: "Vercel", description: "Frontend Deployment & Hosting", link: "#", icon: "Globe" },
    ]
};

export const SERVICES: Service[] = [
    {
        icon: "Globe",
        title: "Web Development",
        description: "Building responsive, high-performance web applications with modern frameworks and best practices.",
    },
    {
        icon: "Code2",
        title: "Frontend Development",
        description: "Crafting pixel-perfect, interactive UIs with React, Next.js, and smooth animations.",
    },
    {
        icon: "Server",
        title: "Backend Development",
        description: "Designing scalable REST APIs with Node.js, Express, and robust database architecture.",
    },
    {
        icon: "Layers",
        title: "Full Stack Development",
        description: "End-to-end application development from database design to polished frontend delivery.",
    },
];

export const EXPERIENCE: Experience[] = [
    {
        id: 1,
        title: "Junior Web Developer",
        company: "SM Technology",
        duration: "July 2025 - April 2026",
        description:
            "At SM Technology, I build scalable and high-performance web applications using modern JavaScript technologies. I focus on creating responsive, user-centered solutions that align with real business needs and deliver seamless user experiences.",

        responsibilities: [
            "Developing full-stack applications using Next.js, React, Node.js, and Express",
            "Designing responsive and user-focused interfaces with Tailwind CSS",
            "Building and integrating REST APIs for smooth frontend-backend communication",
            "Managing databases using PostgreSQL, MongoDB, and Prisma",
            "Optimizing performance and improving scalability of applications",
        ],

        skills: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
            "Tailwind CSS",
        ],
    },
];

export const EDUCATION: Education[] = [
    {
        id: 1,
        degree: "Bachelor of Business Administration",
        institution: "Govt. Tolaram College & University",
        duration: "2024 - 2029",
        description: "Specialized in Accounting. Graduated with Honors.",
        skills: ["Accounting", "Management", "Economics", "Ict"],
    },
    {
        id: 2,
        degree: "Higher Secondary Certificate",
        institution: "Govt. Tolaram College",
        duration: "2022 - 2024",
        description: "Completed Higher Secondary education with a focus on Business Studies.",
        skills: ["Accounting", "Management", "Finance", "Ict"],
    }
];

export const PROJECTS: Project[] = [
    {
        title: "CINETUBE",
        description:
            "CINETUBE is a modern, full-featured movie and series platform built for performance, security, and a seamless user experience. Browse a rich media library, purchase content, write reviews, and manage everything through a powerful admin dashboard.",
        image: "/projects/cinetube.webp",
        features: [
            "Built a full-stack media platform with secure authentication and role-based access control",
            "Developed dynamic media browsing with search, filtering, and detailed content pages",
            "Developed an admin dashboard to manage users, media, and platform analytics",
            "Implemented interactive review and rating system with moderation support",
            "Ensured data validation and security using Zod and Prisma"
        ],
        tech: [
            "Next.js", "React.js", "Tailwind CSS", "Shadcn", "PostgreSQL", "Prisma", "Node.js", "Express", "PostgreSQL", "Cors", "Dotenv"
        ],
        live: "https://cinetube-blond.vercel.app",
        client: "https://github.com/Md-Sufian-Jidan/cinetube-frontend",
        server: "https://github.com/Md-Sufian-Jidan/cinetube-backend",
        category: "Full-Stack"
    },
    {
        title: "MEALMATE",
        description:
            "MEALMATE is a production-ready, multi-vendor food delivery backend — built with Express, Prisma, and PostgreSQL. Secure, scalable, and structured for real-world use.",
        image: "/projects/mealmate.webp",
        features: [
            "Developed a scalable multi-vendor food delivery system with role-based access (Admin, Provider, Customer)",
            "Implemented full order lifecycle management with real-time status updates (Pending → Delivered)",
            "Built RESTful APIs with secure authentication, data validation, and optimized database queries using Prisma & PostgreSQL"
        ],
        tech: [
            "Next.js", "React.js", "Tailwind CSS", "Shadcn", "PostgreSQL", "Prisma", "Node.js", "Express", "PostgreSQL", "Cors", "Dotenv"
        ],
        live: "https://mealmate-lemon.vercel.app",
        client: "https://github.com/Md-Sufian-Jidan/foodie",
        server: "https://github.com/Md-Sufian-Jidan/foodie-server",
        category: "Backend"
    },
    {
        title: "LuxeMatches",
        description:
            "Premium matchmaking platform with role-based auth, Stripe payments, dynamic filtering, and admin control.",
        image: "/projects/luxematches.webp",
        features: [
            "Role-based Access & Authentication: Firebase Auth + JWT protection.",
            "Stripe Payment Integration for secure contact requests.",
            "Dynamic Filtering & Pagination: Filter biodata by age, gender, division.",
        ],
        tech: [
            "React", "Node.js", "MongoDB", "Firebase", "Tailwind", "Stripe",
            "JWT"
        ],
        live: "https://luxe-matches-client.vercel.app",
        client: "https://github.com/Md-Sufian-Jidan/luxe-matches-client",
        server: "https://github.com/Md-Sufian-Jidan/luxe-matches-server",
        category: "Full-Stack"
    },
    {
        title: "WorkNest",
        description:
            "Job management app with employee salary tracking, dashboards, and JWT-secured role-based access.",
        image: "/projects/worknest.webp",
        features: [
            "Role-based dashboards: Admin, HR, Employee.",
            "Stripe integration for salary payments.",
            "Monthly progress tracking and work submission forms.",
        ],
        tech: [
            "React", "Express", "MongoDB", "Node.js", "Tailwind", "Stripe", "JWT"
        ],
        live: "https://work-nest-client.web.app",
        client: "https://github.com/Md-Sufian-Jidan/work-nest-client",
        server: "https://github.com/Md-Sufian-Jidan/work-nest-server",
        category: "Frontend"
    },
    {
        title: "StudySync",
        description:
            "Online assessment system with role-based feedback, leaderboards, PDF previews, and dark mode.",
        image: "/projects/studysync.webp",
        features: [
            "Admins can give marks & feedback. Users can submit assignments.",
            "PDF preview & notes on submission.",
            "Pagination, difficulty filters, dark/light mode, leaderboard.",
        ],
        tech: [
            "React", "MongoDB", "Node.js", "Express", "JWT", "Tailwind CSS"
        ],
        live: "https://online-assessment-client.web.app",
        client: "https://github.com/Md-Sufian-Jidan/online-assessment-client",
        server: "https://github.com/Md-Sufian-Jidan/online-assessment-server",
        category: "Frontend"
    },
    {
        title: "TopOneMart",
        description:
            "E-commerce platform for various products with cart management and secure checkout.",
        image: "/projects/toponemart.webp",
        features: [
            "Product catalog with advanced search and filtering",
            "Shopping cart and order management",
            "Secure checkout process"
        ],
        tech: [
            "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Framer Motion"
        ],
        live: "https://toponemart.vercel.app",
        client: "https://github.com/Skshihabbd/debadada",
        server: "https://github.com/Skshihabbd/debadada",
        category: "Frontend"
    },
    {
        title: "The Pixel Verse",
        description:
            "Photography website for professional bd clients with portfolio, and contact features.",
        image: "/projects/pixelperfect.webp",
        features: [
            "Live price updates via WebSockets",
            "Interactive historical charts",
            "Personal portfolio tracking"
        ],
        tech: [
            "Next.js", "ReactJs", "TypeScript", "Tailwind CSS", "Shadcn", "Framer Motion"
        ],
        live: "https://apexstudio-hazel.vercel.app",
        client: "https://github.com/Md-Sufian-Jidan/imran-vai",
        server: "https://github.com/Md-Sufian-Jidan/imran-vai",
        category: "Frontend"
    }
];

export const socialLinks: SocialLink[] = [
    {
        title: 'WhatsApp',
        icon: FaWhatsapp,
        href: 'https://wa.me/8801906844598',
    },
    {
        title: 'Email',
        icon: FaEnvelope,
        href: 'mailto:jidanjiyaj03@gmail.com',
    },
    {
        title: 'LinkedIn',
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/md-abu-sufian-jidan/',
    },
    {
        title: 'GitHub',
        icon: FaGithub,
        href: 'https://github.com/Md-Sufian-Jidan',
    }
];

export const navLinks: NavLink[] = [
    { title: "Home", href: "#home", icon: "Home" },
    { title: "About", href: "#about", icon: "User" },
    { title: "Technologies", href: "#technologies", icon: "Code2" },
    { title: "Experience", href: "#experience", icon: "Briefcase" },
    { title: "Projects", href: "#projects", icon: "FolderKanban" },
    { title: "Services", href: "#services", icon: "Layers" },
    { title: "Contact", href: "#contact", icon: "Mail" },
];