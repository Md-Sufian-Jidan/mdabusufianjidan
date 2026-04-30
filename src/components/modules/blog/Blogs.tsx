"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogsData } from "@/data/blogs/blogs";

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="blog" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium tracking-wider uppercase">Thoughts & Insights</span>
          </motion.div>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Journal</span>
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Read about my development journey, technical tutorials, and the latest things I've been learning in the tech world.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
