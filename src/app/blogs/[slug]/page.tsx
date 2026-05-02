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
      <BlogHero blog={blog} />
      <BlogContent blog={blog} />
      <RelatedPosts slugs={blog.relatedPosts} />
    </main>
  );
}
