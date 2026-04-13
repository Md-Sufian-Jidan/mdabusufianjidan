"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EDUCATION } from "@/data/public/data";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // GSAP Timeline line drawing
            gsap.fromTo(".edu-timeline-line",
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
            id="education"
            ref={containerRef}
            className="relative py-10 md:py-20 px-0 md:px-12 bg-background overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-xl pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 lg:mb-28"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                        Education & Learning
                    </h2>
                </motion.div>

                {/* Left-Aligned Timeline Layout */}
                <div className="relative pl-6 sm:pl-12" ref={timelineRef}>
                    {/* Ghost Line (Background) */}
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-primary/5" />

                    {/* Active Drawn Line */}
                    <div className="edu-timeline-line absolute left-0 top-2 bottom-0 w-px bg-primary" />

                    <div className="space-y-16 lg:space-y-24">
                        {EDUCATION.map((edu, index) => (
                            <motion.div
                                key={edu.id}
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
                                {/* Timeline Marker */}
                                <div className="absolute -left-[29px] sm:-left-[53px] top-1.5 w-2 h-2 rounded-xl bg-background border border-primary transition-colors duration-500 group-hover:bg-primary shadow-[0_0_0_4px_var(--background)] z-10" />

                                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8 mb-4">
                                    <h3 className="text-2xl font-medium tracking-tight text-foreground">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-sm font-mono text-muted-foreground mt-1 md:mt-0 opacity-70">
                                        {edu.duration}
                                    </div>
                                </div>

                                <div className="text-lg text-foreground/80 mb-4 font-inter">
                                    {edu.institution}
                                </div>

                                <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-2xl font-inter">
                                    {edu.description}
                                </p>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {edu.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs font-inter font-medium text-white bg-secondary rounded-xl transition-colors hover:text-foreground hover:bg-secondary/60"
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
