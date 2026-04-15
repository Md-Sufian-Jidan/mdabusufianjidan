import { IconType } from "react-icons/lib";

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
    Databases: {
        title: string;
        description: string;
        link: string;
        icon: string;
    }[];
    CloudDevOps: {
        title: string;
        description: string;
        link: string;
        icon: string;
    }[];
    Tools: {
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
    responsibilities: string[];
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
    title: string;
    description: string;
    image: string;
    features: string[];
    tech: string[];
    live: string;
    client: string;
    server: string;
    category: string;
}

export interface NavLink {
    title: string;
    href: string;
    icon: string;
}

export interface SocialLink {
    title: string;
    href: string;
    icon: IconType;
}

export default interface Education {
    id: number;
    degree: string;
    institution: string;
    duration: string;
    description: string;
    skills: string[];
}