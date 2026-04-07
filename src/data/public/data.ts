import { TechStack } from "@/types/commonTypes";

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