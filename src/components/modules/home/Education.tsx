"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EDUCATION } from "@/data/public/data";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    
    // For some additional Framer Motion parallax effects
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Futuristic glowing line drawing
            gsap.fromTo(".edu-timeline-line",
                { height: "0%", opacity: 0 },
                {
                    height: "100%",
                    opacity: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 75%",
                        end: "bottom 40%",
                        scrub: 1.5
                    }
                }
            );

            // Staggered reveal of timeline dots
            gsap.fromTo(".edu-dot",
                { scale: 0, opacity: 0, boxShadow: "0 0 0 rgba(var(--primary), 0)" },
                {
                    scale: 1,
                    opacity: 1,
                    boxShadow: "0 0 20px rgba(var(--primary), 0.5)",
                    duration: 0.5,
                    stagger: 0.3,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 70%",
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
            className="relative py-24 lg:py-32 bg-background overflow-hidden"
        >
            {/* Background glowing orb for futuristic feel */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-10 max-w-5xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 lg:mb-28 text-center md:text-left"
                >
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                        // 04 Academia
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                        Education & Learning
                    </h2>
                </motion.div>

                {/* Timeline Layout */}
                <div className="relative mx-auto md:mx-0 pl-10 md:pl-0" ref={timelineRef}>
                    {/* Ghost Line (Background) */}
                    <div className="absolute left-[38px] md:left-1/2 top-4 bottom-0 w-px bg-primary/10 md:-translate-x-1/2" />

                    {/* Active Drawn Line */}
                    <div className="edu-timeline-line absolute left-[38px] md:left-1/2 top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

                    <div className="space-y-20 lg:space-y-32">
                        {EDUCATION.map((edu, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={edu.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                                    
                                    {/* Timeline Dot */}
                                    <div className="edu-dot absolute left-[-8px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 md:-translate-y-1/2 z-20 group-hover:scale-125 transition-transform duration-300" />
                                    
                                    {/* Content Card container - alternating sides on desktop */}
                                    <motion.div 
                                        className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                    >
                                        <div className={`relative p-8 rounded-2xl bg-secondary/5 border border-primary/10 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_-15px_rgba(var(--primary),0.3)]`}>
                                            
                                            {/* Corner Accents */}
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
                                                {edu.duration}
                                            </div>
                                            
                                            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                                                {edu.degree}
                                            </h3>
                                            
                                            <div className="text-lg text-foreground/70 mb-4 font-medium font-inter">
                                                {edu.institution}
                                            </div>

                                            <p className="text-muted-foreground text-base leading-relaxed mb-6 font-inter">
                                                {edu.description}
                                            </p>

                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                                {edu.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1 text-xs font-inter font-medium text-foreground/80 bg-background/50 border border-border rounded-md hover:border-primary/50 transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
