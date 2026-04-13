"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, MapPin, Mail, Briefcase, Sparkles, Layers, Fingerprint } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// Register GSAP Plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax image reveal
            gsap.fromTo(
                ".about-image-reveal",
                { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 50 },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    y: 0,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: imageContainerRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Floating elements animation
            gsap.to(".about-float", {
                y: -15,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.2,
                    from: "random",
                }
            });

            // Slow horizontal drift for background elements
            gsap.to(".bg-drift", {
                x: 30,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen py-10 md:py-20 px-0 md:px-12 overflow-hidden"
        >
            {/* ── Background Elements ── */}
            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
                    }}
                />
            </div>

            {/* Ambient Glowing Orbs */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-xl blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-drift" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-xl blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none about-float" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center justify-center p-[1px] rounded-xl bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6"
                    >
                        <Badge variant="outline" className="px-5 py-1.5 border-primary/20 text-primary bg-background/50 backdrop-blur-md uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold rounded-xl">
                            <Fingerprint size={14} className="mr-2 inline-block opacity-70" />
                            Identity
                        </Badge>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground tracking-tight"
                    >
                        Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic">Architecture</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* LEFT: Cinematic Image Reveal - ✅ OPTIMIZED WITH NEXT.JS IMAGE */}
                    <div className="lg:col-span-5 relative group" ref={imageContainerRef}>
                        <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/5] rounded-xl lg:rounded-xl overflow-hidden border border-white/10 shadow-2xl about-card-glow about-image-reveal">
                            {/* Inner gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10 opacity-70 mix-blend-overlay" />

                            {/* ✅ Next.js Optimized Image with fill */}
                            <Image
                                src="https://i.ibb.co/FqLTCxSR/current-linkedin.png"
                                alt="Md Abu Sufian Jidan Professional Picture"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                className="object-cover scale-105 group-hover:scale-100 grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                                priority
                            />

                            {/* Overlay Gradient at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />

                            {/* Floating Quote inside image layer */}
                            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 p-4 sm:p-6 glass rounded-xl border-white/10 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <p className="text-foreground font-serif text-lg sm:text-xl font-bold italic leading-snug">&ldquo;Code is the foundation; Design is the facade.&rdquo;</p>
                            </div>
                        </div>

                        {/* Floating Interaction Elements */}
                        <div className="about-float absolute -top-8 -right-4 sm:-right-8 w-28 h-28 sm:w-32 sm:h-32 glass rounded-xl sm:rounded-xl flex flex-col items-center justify-center border-primary/20 shadow-2xl z-30 about-card-glow backdrop-blur-xl">
                            <Sparkles className="text-primary mb-1 h-5 w-5 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                            <span className="text-3xl sm:text-4xl font-bold font-serif text-primary drop-shadow-sm">1+</span>
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1 px-2 text-center">Years Exp</span>
                        </div>

                        <div className="about-float absolute -bottom-6 -left-4 sm:-left-6 p-4 glass rounded-xl border-primary/10 shadow-xl z-30 backdrop-blur-xl hidden sm:flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Layers className="text-primary h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Tech Stack</p>
                                <p className="text-sm font-bold text-foreground">MERN Focused</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Text Content */}
                    <div className="lg:col-span-7 space-y-8 sm:space-y-10 relative" ref={contentRef}>
                        {/* Decorative line */}
                        <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight tracking-tight">
                                Full Stack Specialist & <br />
                                <span className="text-primary relative inline-block mt-2">
                                    Systemic Problem Solver
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 opacity-30 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                            </h3>
                            <div className="mt-6 sm:mt-8 space-y-5 font-inter text-muted-foreground text-base sm:text-lg leading-relaxed">
                                <p>
                                    I’m <span className="text-foreground font-semibold">Md Abu Sufian Jidan</span>, a Junior Web Developer at
                                    <span className="text-foreground font-medium"> SM Technology</span>, focused on building scalable and
                                    high-performance web applications using modern technologies like
                                    <span className="text-foreground font-medium"> JavaScript, TypeScript, React, Next.js, Node.js</span>,
                                    and databases such as
                                    <span className="text-foreground font-medium"> PostgreSQL</span> and
                                    <span className="text-foreground font-medium"> MongoDB</span>.
                                </p>

                                <p>
                                    I specialize in developing clean, maintainable full-stack applications, designing efficient database
                                    structures, and building structured REST APIs — always keeping scalability and real-world business needs in mind.
                                </p>

                                <p>
                                    Beyond development, I enjoy <span className="text-foreground font-medium">cricket</span> and
                                    <span className="text-foreground font-medium"> football</span>, which strengthen my teamwork, discipline,
                                    and resilience — qualities I bring into every project I work on.
                                </p>

                                <p>
                                    I’m currently open to <span className="text-foreground font-medium">remote</span> and
                                    <span className="text-foreground font-medium"> collaborative opportunities</span> where I can contribute
                                    to impactful projects and continue growing as a software engineer.
                                </p>
                            </div>
                        </motion.div>

                        <Separator className="bg-primary/50 w-full sm:w-3/4" />

                        {/* Personal Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <DetailItem icon={<MapPin size={18} />} label="Location" value="Dhaka, Bangladesh" delay={0.1} />
                            <DetailItem icon={<Mail size={18} />} label="Direct Line" value="jidanjiyaj03@gmail.com" delay={0.2} />
                            <DetailItem icon={<Briefcase size={18} />} label="Status" value="Available for Hire" delay={0.3} />
                            <DetailItem icon={<User size={18} />} label="Focus" value="Software Architecture" delay={0.4} />
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="pt-3 sm:pt-6"
                        >
                            <a href="/MDABUSUFIANJIDAN_FrontEndDeveloper_RESUME.pdf" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 about-btn-glow relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">
                                    View Detailed Resume
                                    <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Hover Gradient Sweep */}
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DetailItem({ icon, label, value, delay }: { icon: React.ReactNode, label: string, value: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all group cursor-default"
        >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] transition-all duration-300">
                {icon}
            </div>
            <div className="flex flex-col justify-center h-full">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
                <p className="text-sm font-semibold text-foreground truncate">{value}</p>
            </div>
        </motion.div>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
        </svg>
    )
}