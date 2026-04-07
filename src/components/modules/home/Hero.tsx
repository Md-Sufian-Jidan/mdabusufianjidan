"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { ArrowRight, Download } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(textRef.current, {
                y: -50,
                opacity: 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(imageRef.current, {
                y: 50,
                scale: 1.05,
                ease: "none",
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
            className="relative w-full min-h-[90vh] flex flex-col justify-center items-center py-20 px-6 md:px-12 bg-background overflow-hidden"
        >
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-3/4 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16 xl:gap-20">
                    
                    {/* Left: Text Content */}
                    <motion.div
                        ref={textRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-8 px-4 py-2 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md shadow-[0_0_10px_rgba(var(--primary),0.1)] text-primary text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em]">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            Available for opportunities
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-foreground tracking-tight leading-[1.1] mb-6">
                            <span className="block mb-2 text-muted-foreground/80 font-normal">Hello, I'm</span>
                            <div className="min-h-[1.2em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-primary">
                                <Typewriter
                                    options={{
                                        strings: ["Md Abu Sufian", "A Web Architect", "A Problem Solver"],
                                        autoStart: true,
                                        loop: true,
                                        wrapperClassName: "",
                                        cursorClassName: "text-primary"
                                    }}
                                />
                            </div>
                        </h1>

                        <p className="font-inter text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                            Crafting high-performance digital structures where 
                            <span className="text-foreground font-semibold"> code meets architectural precision.</span>
                        </p>

                        {/* Button Group */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full sm:w-auto">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-inter font-semibold shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all hover:bg-primary/90"
                            >
                                View Projects 
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                href="/MDABUSUFIANJIDAN_RESUME.pdf"
                                target="_blank"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-border bg-secondary/10 text-foreground rounded-2xl font-inter font-semibold hover:bg-secondary/30 hover:border-primary/50 transition-all"
                            >
                                Resume 
                                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right: Image Content */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 flex justify-center pt-10 md:pt-0"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] group flex-shrink-0">
                            
                            {/* Decorative background dashed ring */}
                            <div className="absolute inset-[-10%] rounded-full border border-primary/20 border-dashed animate-[spin_30s_linear_infinite] z-0" />
                            
                            <div className="relative w-full h-full rounded-full overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(var(--primary),0.2)] bg-secondary/5 z-10">
                                <img
                                    src={"https://i.ibb.co.com/FLRdWSNr/profile.jpg"}
                                    alt="Md Abu Sufian"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                                />
                                {/* Bottom gradient for blending */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Stats Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute -bottom-2 -left-6 sm:bottom-4 sm:-left-12 bg-background/80 backdrop-blur-xl p-5 sm:p-6 rounded-3xl shadow-xl border border-primary/20 z-20"
                            >
                                <p className="text-foreground font-semibold text-3xl mb-1">
                                    5+
                                </p>
                                <p className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold">
                                    Major<br/>Projects
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}