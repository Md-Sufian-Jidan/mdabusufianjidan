import Image from "next/image";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { IBlog } from "@/types/blog";

export default function BlogHero({ blog }: { blog: IBlog }) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
            {blog.category}
          </span>
          <span className="text-sm font-medium text-muted-foreground hidden sm:block">
            {blog.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground drop-shadow-sm leading-[1.1]">
          {blog.title}
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-border/50">
          <div className="flex items-center gap-4">
            <Image 
              src={blog.author.avatar} 
              alt={blog.author.name} 
              width={48} 
              height={48} 
              className="rounded-full bg-secondary ring-2 ring-background shadow-sm"
            />
            <div>
              <p className="font-semibold text-foreground">{blog.author.name}</p>
              <p className="text-xs text-muted-foreground">{blog.author.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground bg-secondary/30 px-4 py-2 rounded-lg border border-border/50">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{blog.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
