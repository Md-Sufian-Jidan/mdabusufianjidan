"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TECH_STACK } from "@/data/public/data";
import { Cpu } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Technologies() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax the background glowing orbs 
            gsap.to(".tech-orb", {
                y: -150,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });

            // 3D Tilt effect on the categories wrappers as you scroll
            gsap.fromTo(".tech-category", 
                { opacity: 0, rotateX: 15, y: 50 },
                { 
                    opacity: 1, 
                    rotateX: 0, 
                    y: 0, 
                    duration: 1.2, 
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="tech" className="relative py-24 lg:py-32 bg-background overflow-hidden" ref={containerRef}>
            {/* ── Architectural Blueprint Background ── */}
            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(var(--primary) 1.5px, transparent 1.5px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                }}
            />
            {/* Vertical glowing pillars */}
            <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />
            <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center justify-center p-[1px] rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6"
                    >
                        <Badge variant="outline" className="px-5 py-1.5 border-primary/20 text-primary bg-background/50 backdrop-blur-md uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold rounded-full">
                            <Cpu size={14} className="mr-2 inline-block opacity-70" />
                            ENGINEERING / 02
                        </Badge>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground tracking-tight"
                    >
                        The Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic">Foundation</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="mt-6 text-muted-foreground text-base sm:text-lg font-inter max-w-2xl mx-auto"
                    >
                        A curated stack designed for structural integrity, blazing-fast performance, and global scalability.
                    </motion.p>
                </div>

                {/* Tech Grid Categorized */}
                <div className="space-y-20 lg:space-y-28 perspective-[2000px]">
                    {Object.entries(TECH_STACK).map(([category, items], catIdx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + (catIdx * 0.15), ease: "easeOut" }}
                            className="relative tech-category"
                        >
                            {/* Decorative Category Header */}
                            <div className="flex items-center gap-4 mb-6 sm:mb-10 px-2">
                                <div className="flex flex-col items-center justify-center">
                                     <span className="text-xs font-black uppercase tracking-widest text-primary/40 font-mono">0{catIdx + 1}</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">{category}</h3>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/20 to-transparent ml-4" />
                            </div>

                            <HoverEffect items={items} />
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="tech-orb absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </section>
    );
}