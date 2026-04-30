import { Metadata } from "next";
import Blogs from "@/components/modules/blog/Blogs";

export const metadata: Metadata = {
  title: "Blog | Md Abu Sufian Jidan",
  description: "Read my latest articles about web development, engineering, and tutorials.",
  openGraph: {
    title: "Blog | Md Abu Sufian Jidan",
    description: "Read my latest articles about web development, engineering, and tutorials.",
    url: "https://jidan.dev/blogs",
    siteName: "Md Abu Sufian Jidan Portfolio",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Blogs />
    </main>
  );
}
