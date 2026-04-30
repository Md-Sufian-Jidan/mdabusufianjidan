import { blogsData } from "@/data/blogs/blogs";
import BlogCard from "./BlogCard";

export default function RelatedPosts({ slugs }: { slugs?: string[] }) {
  if (!slugs || slugs.length === 0) return null;

  const relatedBlogs = blogsData.filter((blog) => slugs.includes(blog.slug));

  if (relatedBlogs.length === 0) return null;

  return (
    <section className="bg-secondary/20 py-20 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Related Articles
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
