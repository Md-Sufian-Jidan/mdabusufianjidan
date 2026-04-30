import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { IBlog } from "@/types/blog";

interface BlogCardProps {
  blog: IBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link 
      href={`/blogs/${blog.slug}`}
      className="group relative flex flex-col justify-between h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-md rounded-full border border-border/50 shadow-sm text-foreground">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 relative z-10">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{blog.publishDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
          {blog.excerpt}
        </p>

        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {blog.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-primary mt-auto group/btn w-fit">
          Read Article
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/20 transition-all duration-300 pointer-events-none" />
    </Link>
  );
}
