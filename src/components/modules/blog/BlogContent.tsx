"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { IBlog } from "@/types/blog";

export default function BlogContent({ blog }: { blog: IBlog }) {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    // Implement actual sharing logic here based on platform
    window.open(url, '_blank');
  };

  return (
    <article className="container mx-auto px-4 md:px-6 max-w-4xl pb-24">
      {/* Featured Image */}
      <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-2xl overflow-hidden mb-16 shadow-2xl border border-border/50">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Social Share (Sticky on Desktop) */}
        <div className="hidden lg:flex flex-col gap-4 sticky top-32 h-fit shrink-0">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">Share</p>
          <button onClick={() => handleShare('twitter')} className="p-3 bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border/50 rounded-full transition-colors text-muted-foreground">
            <Twitter className="w-5 h-5" />
          </button>
          <button onClick={() => handleShare('linkedin')} className="p-3 bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border/50 rounded-full transition-colors text-muted-foreground">
            <Linkedin className="w-5 h-5" />
          </button>
          <button onClick={() => handleShare('facebook')} className="p-3 bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border/50 rounded-full transition-colors text-muted-foreground">
            <Facebook className="w-5 h-5" />
          </button>
          <button onClick={() => handleShare('copy')} className="p-3 bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border/50 rounded-full transition-colors text-muted-foreground">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side: Article Body */}
        <div className="flex-1 w-full max-w-none">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
            {blog.contentBlocks.map((block, idx) => {
              switch (block.type) {
                case 'paragraph':
                  return <p key={idx} className="leading-relaxed text-muted-foreground mb-6 text-lg">{block.text}</p>;
                case 'heading':
                  if (block.level === 3) return <h3 key={idx} className="mt-12 mb-4 text-foreground text-2xl font-bold">{block.text}</h3>;
                  if (block.level === 4) return <h4 key={idx} className="mt-8 mb-3 text-foreground text-xl font-bold">{block.text}</h4>;
                  return <h2 key={idx} className="mt-16 mb-6 text-foreground text-3xl font-bold">{block.text}</h2>;
                case 'list':
                  return (
                    <ul key={idx} className="space-y-2 mb-8 text-muted-foreground list-disc pl-6 text-lg">
                      {block.items.map((item, i) => <li key={i} className="pl-2">{item}</li>)}
                    </ul>
                  );
                case 'code':
                  return (
                    <div key={idx} className="my-10 rounded-xl overflow-hidden bg-[#0d1117] border border-border/30 shadow-2xl group relative">
                      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-border/30 text-xs text-muted-foreground font-medium">
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
                      <div className="p-5 overflow-x-auto text-sm md:text-base font-mono text-gray-300">
                        <pre><code>{block.code}</code></pre>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Videos Section */}
          {blog.videos && blog.videos.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border/50">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-foreground">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Video Tutorials
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blog.videos.map((video) => (
                  <div key={video.id} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden group shadow-lg">
                    <div className="relative aspect-video w-full bg-black">
                      <iframe
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-bold text-lg text-foreground leading-tight line-clamp-2">{video.title}</h3>
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-md border border-primary/20 shrink-0">
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

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-foreground mr-2">Tags:</span>
            {blog.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground hover:bg-secondary text-sm rounded-lg font-medium transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Mobile Social Share */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-12 pt-8 border-t border-border/50">
            <span className="text-sm font-semibold text-foreground">Share:</span>
            <button onClick={() => handleShare('twitter')} className="p-2.5 bg-secondary hover:bg-primary/10 hover:text-primary rounded-full transition-colors text-muted-foreground">
              <Twitter className="w-4 h-4" />
            </button>
            <button onClick={() => handleShare('linkedin')} className="p-2.5 bg-secondary hover:bg-primary/10 hover:text-primary rounded-full transition-colors text-muted-foreground">
              <Linkedin className="w-4 h-4" />
            </button>
            <button onClick={() => handleShare('facebook')} className="p-2.5 bg-secondary hover:bg-primary/10 hover:text-primary rounded-full transition-colors text-muted-foreground">
              <Facebook className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </article>
  );
}
