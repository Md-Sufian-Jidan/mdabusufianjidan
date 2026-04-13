import Education, { Experience, NavLink, Project, Service, SocialLink, TechStack } from "@/types/commonTypes";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const TECH_STACK: TechStack = {
    Frontend: [
        { title: "Next.js", description: "App Router, CSR, SSR, ISR, SSG, Optimization", link: "#", icon: "Layout" },
        { title: "React", description: "Hooks, Context API, Performance", link: "#", icon: "Code2" },
        { title: "Tailwind CSS", description: "v4, OKLCH, Design Systems", link: "#", icon: "Layers" },
        { title: "Shadcn/UI", description: "UI Components", link: "#", icon: "Layers" },
        { title: "Framer Motion", description: "Complex Orchestration", link: "#", icon: "Cpu" },
    ],
    Backend: [
        { title: "Node.js", description: "Event-driven Runtime", link: "#", icon: "Terminal" },
        { title: "Express", description: "Middleware & Routing", link: "#", icon: "Code2" },
        { title: "MongoDB", description: "NoSQL Database", link: "#", icon: "Database" },
        { title: "PostgreSQL", description: "Relational Database", link: "#", icon: "Database" },
        { title: "Prisma", description: "Type-safe ORM Layer", link: "#", icon: "Layers" },
    ],
    Infrastructure: [
        { title: "MERN", description: "Full-Stack Architecture", link: "#", icon: "Cpu" },
        { title: "PERN", description: "Full-Stack Architecture", link: "#", icon: "Cpu" },
        { title: "Git", description: "Version Control Systems", link: "#", icon: "Terminal" },
        { title: "Vercel", description: "CI/CD & Deployment", link: "#", icon: "Globe" },
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
        title: "Cinetube",
        description:
            "CineTube is a modern, full-featured movie and series platform built for performance, security, and a seamless user experience. Browse a rich media library, purchase content, write reviews, and manage everything through a powerful admin dashboard.",
        image: "https://i.ibb.co/fzyLjfBP/cinetube.png",
        features: [
            "Advanced authentication and authorization",
            "Rate limiting and caching",
            "Swagger API documentation"
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
        title: "Foodie",
        description:
            "FOODIE is a production-ready, multi-vendor food delivery backend — built with Express, Prisma, and PostgreSQL. Secure, scalable, and structured for real-world use.",
        image: "https://i.ibb.co/99pqNzY5/mealmate.png",
        features: [
            "Advanced authentication and authorization",
            "Rate limiting and caching",
            "Swagger API documentation"
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
        image: "https://i.ibb.co/vx9TYNmQ/luxematches.png",
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
        image: "https://i.ibb.co/0RCbGQ0H/worknest.png",
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
        image: "https://i.ibb.co/gbPCVRNN/studysync.png",
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
        image: "https://i.ibb.co/LXQHz0TZ/toponemart.png",
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
            "Real-time cryptocurrency tracking dashboard with interactive charts and portfolio management.",
        image: "https://i.ibb.co/CpvBSP1X/pixelperfect.png",
        features: [
            "Live price updates via WebSockets",
            "Interactive historical charts",
            "Personal portfolio tracking"
        ],
        tech: [
            "React", "Redux", "Chart.js", "Tailwind CSS", "CoinGecko API"
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
    { title: "Home", href: "/", icon: "Home" },
    { title: "About", href: "#about", icon: "User" },
    { title: "Technologies", href: "#technologies", icon: "Code2" },
    { title: "Experience", href: "#experience", icon: "Briefcase" },
    { title: "Projects", href: "#projects", icon: "FolderKanban" },
    { title: "Services", href: "#services", icon: "Layers" },
    { title: "Contact", href: "#contact", icon: "Mail" },
];