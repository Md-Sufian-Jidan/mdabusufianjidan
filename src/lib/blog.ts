import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readingTime: string;
    tags: string[];
    excerpt: string;
    content: string;
}

export function getAllPosts(): BlogPost[] {
    const files = fs.readdirSync(BLOG_DIR);

    const posts = files
        .filter((f) => f.endsWith(".md"))
        .map((filename) => {
            const slug = filename.replace(".md", "");
            const filePath = path.join(BLOG_DIR, filename);
            const raw = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(raw);

            return {
                slug,
                title: data.title as string,
                date: data.date as string,
                readingTime: data.readingTime as string,
                tags: (data.tags as string[]) || [],
                excerpt: data.excerpt as string,
                content,
            };
        })
        .sort((a, b) => (a.date > b.date ? -1 : 1));

    return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return undefined;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: data.title as string,
        date: data.date as string,
        readingTime: data.readingTime as string,
        tags: (data.tags as string[]) || [],
        excerpt: data.excerpt as string,
        content,
    };
}
