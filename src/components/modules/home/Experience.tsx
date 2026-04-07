"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE } from "@/data/public/data";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // GSAP Cyberpunk Timeline line drawing
            gsap.fromTo(".timeline-line",
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    transformOrigin: "top",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 70%",
                        end: "bottom 30%",
                        scrub: 1
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="experience"
            ref={containerRef}
            className="relative py-24 lg:py-32 bg-background"
        >
            <div className="container mx-auto px-6 lg:px-10 max-w-4xl relative z-10">
                {/* Minimal Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 lg:mb-28"
                >
                    <span className="text-secondary-foreground font-mono text-sm tracking-widest uppercase mb-4 block">
                        // 03 Qualification
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                        Career & Experience
                    </h2>
                </motion.div>

                {/* Left-Aligned Minimal Timeline Layout */}
                <div className="relative pl-6 sm:pl-12" ref={timelineRef}>
                    {/* Ghost Line (Background) */}
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-primary/5" />

                    {/* Active Drawn Line */}
                    <div className="timeline-path absolute left-0 top-2 bottom-0 w-px bg-primary" />

                    <div className="space-y-16 lg:space-y-24">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20, y: 10 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="relative group"
                            >
                                {/* Minimal Marker */}
                                <div className="absolute -left-[29px] sm:-left-[53px] top-1.5 w-2 h-2 rounded-full bg-background border border-primary transition-colors duration-500 group-hover:bg-primary shadow-[0_0_0_4px_var(--background)] z-10" />

                                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8 mb-4">
                                    <h3 className="text-2xl font-medium tracking-tight text-foreground">
                                        {exp.title}
                                    </h3>
                                    <div className="text-sm font-mono text-muted-foreground mt-1 md:mt-0 opacity-70">
                                        {exp.duration}
                                    </div>
                                </div>

                                <div className="text-lg text-foreground/80 mb-4 font-inter">
                                    {exp.company}
                                </div>

                                <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-2xl font-inter">
                                    {exp.description}
                                </p>

                                {/* Clean Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs font-inter font-medium text-muted-foreground bg-secondary/30 rounded-md transition-colors hover:text-foreground hover:bg-secondary/60"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
