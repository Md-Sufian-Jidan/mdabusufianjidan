"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Terminal, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const floatingRef = useRef<HTMLDivElement>(null);

    // GSAP Parallax Effect
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".floating-element", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                stagger: 0.2
            });

            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 40;
                const yPos = (clientY / window.innerHeight - 0.5) * 40;

                gsap.to(floatingRef.current, {
                    x: xPos,
                    y: yPos,
                    duration: 1,
                    ease: "power2.out",
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        });
        return () => ctx.revert();
    }, []);

    return (
        <HeroHighlight containerClassName="min-h-screen flex items-center justify-center overflow-hidden">
            <section className="relative z-20 w-full container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* LEFT: The "Architect" Message */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Terminal size={14} />
                        System Status: Ready to Deploy
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-foreground leading-[0.85] mb-6">
                        Digital <br />
                        <Highlight className="text-primary">
                            Architect
                        </Highlight>
                    </h1>

                    <div className="max-w-xl">
                        <TextGenerateEffect
                            words="Transforming complex data structures into seamless user experiences. Specializing in high-performance MERN stack development."
                            className="font-inter text-muted-foreground text-lg md:text-xl leading-relaxed"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-wrap gap-4 mt-10"
                    >
                        <Button size="lg" className="rounded-full bg-primary hover:bg-secondary h-14 px-10 group overflow-hidden relative">
                            <span className="relative z-10 flex items-center gap-2">
                                Launch Projects <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>

                        <Button variant="outline" size="lg" className="rounded-full h-14 px-10 border-primary/20 glass">
                            Architecture Docs
                        </Button>
                    </motion.div>
                </div>

                {/* RIGHT: Floating UI & Abstract Tech Stack */}
                <div className="lg:col-span-5 relative flex justify-center items-center h-[500px]" ref={floatingRef}>
                    {/* Main Visual: Glassmorphic Core */}
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="relative w-72 h-72 md:w-96 md:h-96 glass rounded-[3rem] border-white/20 shadow-2xl flex items-center justify-center p-8"
                    >
                        <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent opacity-20 absolute" />
                        <img
                            src="https://i.ibb.co.com/FLRdWSNr/profile.jpg"
                            alt="Abu Sufian"
                            className="w-full h-full object-cover rounded-[2rem] shadow-inner grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>

                    {/* Floating Data Nodes (GSAP controlled) */}
                    <div className="absolute inset-0 floating-element pointer-events-none">
                        <Node icon={<Cpu size={20} />} label="Node.js" pos="top-10 left-10" />
                        <Node icon={<Globe size={20} />} label="Next.js" pos="bottom-20 -left-10" />
                        <Node icon={<Terminal size={20} />} label="React" pos="top-20 -right-5" />
                    </div>
                </div>
            </section>

            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-30" />
        </HeroHighlight>
    );
}

function Node({ icon, label, pos }: { icon: React.ReactNode, label: string, pos: string }) {
    return (
        <motion.div
            className={cn("absolute glass p-4 rounded-2xl flex items-center gap-3 shadow-xl border-white/10", pos)}
            whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
        >
            <div className="p-2 bg-primary/20 rounded-lg">{icon}</div>
            <span className="text-xs font-bold uppercase tracking-tighter">{label}</span>
        </motion.div>
    );
}