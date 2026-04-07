export interface TechStack {
    Frontend: {
        title: string;
        description: string;
        link: string;
        icon: string;
    }[];
    Backend: {
        title: string;
        description: string;
        link: string;
        icon: string;
    }[];
    Infrastructure: {
        title: string;
        description: string;
        link: string;
        icon: string;
    }[];
}

export interface Service {
    icon: string;
    title: string;
    description: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string;
    skills: string[];
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readingTime: string;
    tags: string[];
    excerpt: string;
    content: string;
}

export interface Project {
    slug: string;
    title: string;
    date: string;
    readingTime: string;
    tags: string[];
    excerpt: string;
    content: string;
}