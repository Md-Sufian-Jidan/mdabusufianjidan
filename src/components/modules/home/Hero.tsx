"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const parallaxTextRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth Parallax for text and image
            gsap.to(parallaxTextRef.current, {
                y: -50,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(imageRef.current, {
                y: 60,
                scale: 1.02,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative w-full min-h-screen flex flex-col justify-center items-center py-10 md:py-20 px-0 md:px-12 overflow-hidden"
        >
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

            {/* Subtle Neon Orbs */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none animate-pulse [contain:strict] will-change-[transform,opacity]" />
            <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[60px] pointer-events-none [contain:strict] will-change-[transform,opacity]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[60px] rounded-xl pointer-events-none [contain:strict] will-change-[transform,opacity]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">

                    {/* Left: Text Content */}
                    <div ref={parallaxTextRef} className="w-full lg:w-3/5">
                        <motion.div
                            ref={textRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-3 mb-8 px-2 md:px-5 py-2 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-xl text-primary text-xs font-bold uppercase tracking-[0.3em] min-h-[40px]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            <Sparkles size={12} className="opacity-70" />
                            Open for Collaborations
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.05] tracking-tight mb-8">
                            <span className="text-2xl md:text-4xl block font-sans font-light text-muted-foreground italic mb-2">Hello, I&apos;m</span>
                            <div className="min-h-[1.2em] italic overflow-hidden">
                                <Typewriter
                                    options={{
                                        strings: ["Md Abu Sufian Jidan", "Full Stack Developer, MERN Stak Developer", "Junior Software Engineer"],
                                        autoStart: true,
                                        loop: true,
                                        wrapperClassName: "text-primary",
                                        cursorClassName: "text-primary/30"
                                    }}
                                />
                            </div>
                        </h1>

                        <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                            <span className="text-foreground font-bold">
                                Full Stack Developer </span>building scalable and high-performance web applications.
                            Specialized in modern full-stack development with JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL, Prisma and databases like PostgreSQL & MongoDB.
                            Focused on clean architecture, performance, and real-world solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-14 px-10 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.4)]"
                                asChild
                            >
                                <a href="#projects">
                                    Browse Work <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </Button>

                            <Button
                                variant="ghost"
                                size="lg"
                                className="w-full sm:w-auto h-14 px-10 rounded-xl border border-primary/10 hover:border-primary hover:bg-primary/5 font-bold text-base"
                                asChild
                            >
                                <a href="/MDABUSUFIANJIDAN_FrontEndDeveloper_RESUME.pdf" target="_blank">
                                    Resume <Download className="ml-2 w-5 h-5 opacity-50" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                    {/* Right: Visual Element - IMPROVED RESPONSIVE IMAGE */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                        className="w-full lg:w-2/5 flex justify-center items-center relative"
                    >
                        {/* ✅ Improved responsive container with better breakpoints */}
                        <div className="relative w-full max-w-[280px] aspect-square xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[480px] group">

                            {/* Orbital Dashed Ring - scales with container */}
                            <div className="absolute inset-[-8%] rounded-full border border-primary/10 border-dashed animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-[-15%] rounded-full border border-primary/5 border-dashed animate-[spin_40s_linear_infinite_reverse]" />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-full p-2 border border-primary/20 bg-background/50 backdrop-blur-sm shadow-2xl z-10 overflow-hidden">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    {/* ✅ Optimized Next.js Image with proper sizing */}
                                    <Image
                                        src="/mdabusufianjidan-professional-image-22042026.avif"
                                        alt="Md Abu Sufian Jidan Professional Picture"
                                        fill
                                        sizes="(max-width: 380px) 280px, (max-width: 640px) 320px, (max-width: 768px) 360px, (max-width: 1024px) 400px, (max-width: 1280px) 420px, 480px"
                                        className="object-cover scale-105 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-100 transition-all duration-1000 ease-out"
                                        priority
                                    />
                                </div>
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700" />
                            </div>

                            {/* ✅ Responsive Float Badge with better positioning */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute 
                                    -bottom-2 -left-2 
                                    xs:-bottom-3 xs:-left-3
                                    sm:bottom-4 sm:-left-6
                                    md:bottom-6 md:-left-8
                                    lg:bottom-8 lg:-left-10
                                    bg-background/90 border border-primary/10 
                                    p-4 sm:p-5 md:p-6 
                                    rounded-xl shadow-2xl backdrop-blur-xl z-20
                                    scale-75 xs:scale-90 sm:scale-100"
                            >
                                <p className="text-primary font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-none">02</p>
                                <p className="text-xs uppercase tracking-widest font-black text-muted-foreground mt-1 sm:mt-2">
                                    Projects<br />Shipped
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}