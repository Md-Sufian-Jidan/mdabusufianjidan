export interface Project {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
    techStack: string[];
    liveUrl: string;
    githubClient: string;
    githubServer: string;
    featured: boolean;
    problem: string;
    solution: string;
    architecture: string;
    keyFeatures: string[];
    challenges: string;
    lessonsLearned: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "luxe-matches",
        title: "LuxeMatches",
        tagline: "Premium Matrimony Full-Stack Web App",
        description:
            "A premium matchmaking platform where users explore biodata profiles, request contact access through payments, and interact through a secure responsive interface.",
        image: "/projects/luxematches.jpg",
        techStack: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "Tailwind CSS",
            "Firebase Auth",
            "Stripe",
            "React Query",
            "Framer Motion",
            "Axios",
        ],
        liveUrl: "https://luxe-matches.vercel.app",
        githubClient: "https://github.com/Md-Sufian-Jidan/luxe-matches-client",
        githubServer: "https://github.com/Md-Sufian-Jidan/luxe-matches-server",
        featured: true,
        problem:
            "Traditional matrimony platforms lack modern UX, secure payment flows, and role-based access controls, leading to poor user experience and trust issues.",
        solution:
            "Built a full-stack MERN application with Firebase Auth for secure identity management, Stripe for payment-gated contact requests, and an admin panel for profile verification.",
        architecture:
            "The frontend is a React SPA communicating with an Express REST API. MongoDB Atlas stores user profiles and payment records. Firebase handles authentication tokens verified on the server using JWT middleware. Stripe webhooks update payment status in real-time.",
        keyFeatures: [
            "Role-based authentication using Firebase Auth and JWT",
            "Stripe payment integration for contact access requests",
            "Dynamic filtering by age, division, and gender",
            "Pagination and fully responsive UI",
            "Admin approval system for biodata moderation",
            "Real-time status updates via React Query",
        ],
        challenges:
            "Synchronizing Stripe payment webhooks with MongoDB state updates while maintaining consistency was challenging. Also implementing complex MongoDB aggregation pipelines for filtering with pagination required careful query optimization.",
        lessonsLearned:
            "Gained deep understanding of webhook event handling, idempotency in payment systems, and MongoDB aggregation framework. Learned how to structure role-based access control at both API and UI levels.",
    },
    {
        id: "2",
        slug: "worknest",
        title: "WorkNest",
        tagline: "Job Management Web Application",
        description:
            "A modern web app that helps users track and manage job applications with role-based dashboards and work progress tracking.",
        image: "/projects/worknest.jpg",
        techStack: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "Stripe",
            "JWT",
            "Firebase",
            "Tailwind CSS",
            "React Query",
            "Framer Motion",
        ],
        liveUrl: "https://worknest-app.vercel.app",
        githubClient: "https://github.com/Md-Sufian-Jidan/worknest-client",
        githubServer: "https://github.com/Md-Sufian-Jidan/worknest-server",
        featured: true,
        problem:
            "Companies needed a unified platform for tracking employee work submissions, managing HR workflows, and processing payroll — all in one place with clear role separation.",
        solution:
            "Developed a multi-role dashboard system where Admins, HR, and Employees each have distinct views and capabilities. Integrated Stripe for secure salary payments and JWT for protected route access.",
        architecture:
            "Three-tier role architecture: Admin oversees everything, HR manages employees and approvals, Employees submit work logs. The React frontend consumes a Node/Express REST API with JWT middleware. MongoDB stores all records with Stripe handling payment processing.",
        keyFeatures: [
            "Admin, HR, and Employee role-based dashboards",
            "JWT protected routes for all sensitive endpoints",
            "Stripe integration for salary payment processing",
            "Work submission and monthly progress tracking",
            "Real-time data fetching with React Query",
            "Responsive design for all screen sizes",
        ],
        challenges:
            "Designing a permissions system where three roles had overlapping but distinct capabilities required careful middleware design. Ensuring Stripe payout flows were secure and auditable was another key challenge.",
        lessonsLearned:
            "Deepened understanding of JWT-based authentication flows, designing clean REST API architectures, and building scalable multi-role permission systems in React applications.",
    },
];
