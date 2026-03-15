export interface SkillCategory {
    category: string;
    icon: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend",
        icon: "Monitor",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React.js",
            "Next.js",
            "Shadcn UI",
            "Zustand",
            "React Router",
            "Responsive Design",
            "DOM Manipulation",
            "Socket.io",
        ],
    },
    {
        category: "Backend",
        icon: "Server",
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "Middleware",
            "Authentication (JWT, Sessions, Better Auth)",
            "Error Handling",
            "Input Validation",
            "Zod",
        ],
    },
    {
        category: "Database",
        icon: "Database",
        skills: [
            "MongoDB",
            "PostgreSQL",
            "Prisma",
            "CRUD Operations",
            "MongoDB Atlas",
            "Aggregation Framework",
        ],
    },
    {
        category: "Tools",
        icon: "Wrench",
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "NPM",
            "Chrome DevTools",
            "Vercel",
            "Firebase",
        ],
    },
];
