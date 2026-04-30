"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Calendar, Clock, Share2, Copy, Check } from "lucide-react";
import { IBlog } from "@/types/blog";

interface BlogModalProps {
  blog: IBlog;
  onClose: () => void;
}

export default function BlogModal({ blog, onClose }: BlogModalProps) {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
      />

      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
      >
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-card/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
              {blog.category}
            </span>
            <span className="text-sm text-muted-foreground hidden sm:block">
              {blog.readTime}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto no-scrollbar flex-grow bg-card">
          <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto px-6 py-8 sm:px-12 sm:py-12 -mt-24 relative z-10">
            <div className="mb-10 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-foreground drop-shadow-md">
                {blog.title}
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="rounded-full bg-secondary"
                  />
                  <div className="text-left">
                    <p className="font-medium text-foreground">{blog.author.name}</p>
                    <p className="text-xs">{blog.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:ml-auto">
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

            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
              {blog.contentBlocks.map((block, idx) => {
                switch (block.type) {
                  case 'paragraph':
                    return <p key={idx} className="leading-relaxed text-muted-foreground mb-6">{block.text}</p>;
                  case 'heading':
                    if (block.level === 3) {
                      return <h3 key={idx} className="mt-8 mb-3 text-foreground text-xl font-bold">{block.text}</h3>;
                    }
                    if (block.level === 4) {
                      return <h4 key={idx} className="mt-6 mb-2 text-foreground text-lg font-bold">{block.text}</h4>;
                    }
                    return <h2 key={idx} className="mt-10 mb-4 text-foreground text-2xl font-bold">{block.text}</h2>;
                  case 'list':
                    return (
                      <ul key={idx} className="space-y-2 mb-6 text-muted-foreground list-disc pl-5">
                        {block.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    );
                  case 'code':
                    return (
                      <div key={idx} className="my-8 rounded-xl overflow-hidden bg-[#0d1117] border border-border/50 shadow-lg group relative">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-border/50 text-xs text-muted-foreground">
                          <span className="font-mono">{block.filename || block.language}</span>
                          <button
                            onClick={() => handleCopyCode(block.code, idx)}
                            className="p-1.5 hover:bg-white/10 rounded-md transition-colors flex items-center gap-1.5"
                          >
                            {copiedCodeIndex === idx ? (
                              <><Check className="w-3.5 h-3.5 text-green-500" /> <span className="text-green-500">Copied</span></>
                            ) : (
                              <><Copy className="w-3.5 h-3.5" /> <span>Copy</span></>
                            )}
                          </button>
                        </div>
                        <div className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
                          <pre><code>{block.code}</code></pre>
                        </div>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {blog.videos && blog.videos.length > 0 && (
              <div className="mt-16 pt-10 border-t border-border">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  Video Tutorials
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blog.videos.map((video) => (
                    <div key={video.id} className="bg-secondary/30 border border-border rounded-xl overflow-hidden group">
                      <div className="relative aspect-video w-full bg-black">
                        <iframe
                          src={video.url}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-0"
                        ></iframe>
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-bold text-foreground line-clamp-2">{video.title}</h3>
                          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded border border-primary/20 shrink-0">
                            {video.language}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="h-12"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
