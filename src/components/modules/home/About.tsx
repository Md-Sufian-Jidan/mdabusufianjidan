"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, MapPin, Mail, Briefcase, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Register GSAP Plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image Parallax & Entrance
            gsap.fromTo(
                imageRef.current,
                { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    scale: 1,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Floating Stat Box Animation
            gsap.to(".stat-box", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen py-24 overflow-hidden bg-background"
        >
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary bg-primary/5 mb-4 uppercase tracking-[0.3em] text-[10px] font-bold">
                            Verification / 01
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
                            Behind the <span className="text-primary italic">Architecture</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Cinematic Image Reveal */}
                    <div className="relative group" ref={imageRef}>
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-primary/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop"
                                alt="Profile Workspace"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

                            {/* Overlay Content */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border-white/10">
                                <p className="text-foreground font-serif text-xl italic font-bold italic">"Code is the foundation; Design is the facade."</p>
                            </div>
                        </div>

                        {/* Floating GSAP Stat */}
                        <div className="stat-box absolute -top-6 -right-6 w-32 h-32 glass rounded-3xl flex flex-col items-center justify-center border-primary/20 shadow-2xl z-10">
                            <Sparkles className="text-primary mb-1 h-5 w-5" />
                            <span className="text-3xl font-bold font-serif text-primary">1+</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Years Experience</span>
                        </div>
                    </div>

                    {/* RIGHT: Text Content */}
                    <div className="space-y-8" ref={contentRef}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-serif font-bold text-foreground leading-tight">
                                MERN Stack Specialist & <br />
                                <span className="text-primary">Systemic Problem Solver</span>
                            </h3>

                            <div className="mt-6 space-y-4 font-inter text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    I am <span className="text-foreground font-semibold">Md Abu Sufian Jidan</span>.
                                    My approach to development mirrors architectural design: every line of code must serve a structural purpose while maintaining aesthetic harmony.
                                </p>
                                <p>
                                    Currently refining digital landscapes at SM Technology, I specialize in building
                                    responsive systems that don't just work—they scale.
                                </p>
                            </div>
                        </motion.div>

                        <Separator className="bg-primary/10" />

                        {/* Personal Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <DetailItem icon={<MapPin size={16} />} label="Location" value="Dhaka, Bangladesh" delay={0.4} />
                            <DetailItem icon={<Mail size={16} />} label="Direct Line" value="jidanjiyaj03@gmail.com" delay={0.5} />
                            <DetailItem icon={<Briefcase size={16} />} label="Status" value="Available for Hire" delay={0.6} />
                            <DetailItem icon={<User size={16} />} label="Focus" value="Full Stack Architecture" delay={0.7} />
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="pt-4"
                        >
                            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-3 hover:bg-secondary transition-all active:scale-95 shadow-xl shadow-primary/20">
                                View Detailed Resume
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Architectural Grid */}
            <div className="absolute inset-0 z-[-1] opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`, backgroundSize: '100px 100px' }}>
            </div>
        </section>
    );
}

function DetailItem({ icon, label, value, delay }: { icon: any, label: string, value: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors group"
        >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
        </motion.div>
    );
}