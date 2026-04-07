import { Service, TechStack } from "@/types/commonTypes";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const TECH_STACK: TechStack = {
    Frontend: [
        { title: "Next.js", description: "App Router, CSR, SSR, ISR, SSG, Optimization", link: "#", icon: "Layout" },
        { title: "React", description: "Hooks, Context API, Performance", link: "#", icon: "Code2" },
        { title: "Tailwind CSS", description: "v4, OKLCH, Design Systems", link: "#", icon: "Layers" },
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

export const EXPERIENCE = [
    {
        id: 1,
        title: "Full Stack Developer",
        company: "SM Technology",
        duration: "Jan 2024 - Present",
        description: "Designing and developing scalable web applications using the MERN stack. Optimizing backend performance and designing responsive frontend architectures.",
        skills: ["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    },
    {
        id: 2,
        title: "Frontend Developer Intern",
        company: "Tech Solutions Inc.",
        duration: "Jun 2023 - Dec 2023",
        description: "Assisted in building interactive user interfaces. Collaborated with designers to convert Figma designs into pixel-perfect React components.",
        skills: ["React", "JavaScript", "HTML/CSS", "Git", "Framer Motion"],
    },
    {
        id: 3,
        title: "Freelance Web Developer",
        company: "Self-Employed",
        duration: "Jan 2022 - May 2023",
        description: "Created landing pages and small business websites using modern web technologies. Configured custom headless CMS solutions for easy content management.",
        skills: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    }
];

export const EDUCATION = [
    {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        duration: "2019 - 2023",
        description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with Honors.",
        skills: ["Algorithms", "Data Structures", "AI", "Web Development"],
    },
    {
        id: 2,
        degree: "Higher Secondary Certificate",
        institution: "City College",
        duration: "2017 - 2019",
        description: "Science Major with focus on Mathematics and Physics.",
        skills: ["Physics", "Mathematics", "Computer Science"],
    }
];

export const PROJECTS = [
    {
        title: "LuxeMatches",
        description:
            "Premium matchmaking platform with role-based auth, Stripe payments, dynamic filtering, and admin control.",
        image: "https://res.cloudinary.com/dq1iagqkg/image/upload/v1771253637/screencapture-luxe-matches-client-vercel-app-2026-02-16-20_51_40_ph9ijd.png",
        features: [
            "Role-based Access & Authentication: Firebase Auth + JWT protection.",
            "Stripe Payment Integration for secure contact requests.",
            "Dynamic Filtering & Pagination: Filter biodata by age, gender, division.",
        ],
        tech: [
            "React", "Node.js", "MongoDB", "Firebase", "Tailwind", "Stripe",
            "JWT"
        ],
        live: "https://luxe-matches-client.vercel.app/",
        client: "https://github.com/Md-Sufian-Jidan/luxe-matches-client",
        server: "https://github.com/Md-Sufian-Jidan/luxe-matches-server",
        category: "Full-Stack"
    },
    {
        title: "WorkNest",
        description:
            "Job management app with employee salary tracking, dashboards, and JWT-secured role-based access.",
        image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop&crop=center",
        features: [
            "Role-based dashboards: Admin, HR, Employee.",
            "Stripe integration for salary payments.",
            "Monthly progress tracking and work submission forms.",
        ],
        tech: [
            "React", "Express", "MongoDB", "Node.js", "Tailwind", "Stripe",
            "JWT"
        ],
        live: "https://work-nest-client.web.app/",
        client: "https://github.com/Md-Sufian-Jidan/work-nest-client",
        server: "https://github.com/Md-Sufian-Jidan/work-nest-server",
        category: "Full-Stack"
    },
    {
        title: "StudySync",
        description:
            "Online assessment system with role-based feedback, leaderboards, PDF previews, and dark mode.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center",
        features: [
            "Admins can give marks & feedback. Users can submit assignments.",
            "PDF preview & notes on submission.",
            "Pagination, difficulty filters, dark/light mode, leaderboard.",
        ],
        tech: [
            "React", "MongoDB", "Node.js", "Express", "JWT",
            "Tailwind CSS"
        ],
        live: "https://online-assessment-client.web.app/",
        client: "https://github.com/Md-Sufian-Jidan/online-assessment-client",
        server: "https://github.com/Md-Sufian-Jidan/online-assessment-server",
        category: "Full-Stack"
    },
    {
        title: "EcoBazar",
        description:
            "E-commerce platform for eco-friendly products with cart management and secure checkout.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop&crop=center",
        features: [
            "Product catalog with advanced search and filtering",
            "Shopping cart and order management",
            "Secure checkout process"
        ],
        tech: [
            "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"
        ],
        live: "#",
        client: "#",
        server: "#",
        category: "Front-End"
    },
    {
        title: "CryptoTracker",
        description:
            "Real-time cryptocurrency tracking dashboard with interactive charts and portfolio management.",
        image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=600&h=400&fit=crop&crop=center",
        features: [
            "Live price updates via WebSockets",
            "Interactive historical charts",
            "Personal portfolio tracking"
        ],
        tech: [
            "React", "Redux", "Chart.js", "Tailwind CSS", "CoinGecko API"
        ],
        live: "#",
        client: "#",
        server: "#",
        category: "Front-End"
    },
    {
        title: "TaskFlow API",
        description:
            "Robust RESTful API for task management with comprehensive documentation and rate limiting.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&crop=center",
        features: [
            "Advanced authentication and authorization",
            "Rate limiting and caching",
            "Swagger API documentation"
        ],
        tech: [
            "Node.js", "Express", "PostgreSQL", "Redis", "Docker"
        ],
        live: "#",
        client: "#",
        server: "#",
        category: "Back-End"
    }
];

export const socialLinks = [
    {
        name: 'WhatsApp',
        icon: FaWhatsapp,
        href: 'https://wa.me/8801906844598',
    },
    {
        name: 'Email',
        icon: FaEnvelope,
        href: 'mailto:jidanjiyaj03@gmail.com',
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/md-abu-sufian-jidan/',
    },
    {
        name: 'GitHub',
        icon: FaGithub,
        href: 'https://github.com/Md-Sufian-Jidan',
    }
];

export const navItems = [
    { name: "Home", path: "/", icon: "FaHome" },
    { name: "About", path: "/about", icon: "FaUserAlt" },
    { name: "Resume", path: "/resume", icon: "FaFileAlt" },
    { name: "Blog", path: "/blog", icon: "FaBlog" },
    { name: "Contact", path: "/contact", icon: "FaEnvelope" },
];