import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogsData } from "@/data/blogs/blogs";
import BlogHero from "@/components/modules/blog/BlogHero";
import BlogContent from "@/components/modules/blog/BlogContent";
import RelatedPosts from "@/components/modules/blog/RelatedPosts";

// For static generation
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

// SEO Metadata
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Md Abu Sufian Jidan`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishDate,
      authors: [blog.author.name],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailsPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Reading Progress Bar placeholder - optional feature */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-secondary">
        <div className="h-full bg-primary w-[30%] shadow-[0_0_10px_rgba(var(--primary),0.5)] transition-all duration-300" id="reading-progress"></div>
      </div>

      <BlogHero blog={blog} />
      <BlogContent blog={blog} />
      <RelatedPosts slugs={blog.relatedPosts} />
      
      {/* Client-side script for progress bar (could be extracted to a separate component) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('scroll', () => {
              const element = document.documentElement;
              const scrollTop = element.scrollTop || document.body.scrollTop;
              const scrollHeight = element.scrollHeight || document.body.scrollHeight;
              const clientHeight = element.clientHeight;
              const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
              const progressBar = document.getElementById('reading-progress');
              if (progressBar) {
                progressBar.style.width = scrollPercent + '%';
              }
            });
          `,
        }}
      />
    </main>
  );
}
