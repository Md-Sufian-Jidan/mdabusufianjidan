"use client";

import { useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(formRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1]}
        }
    };

    return (
        <section
            id="contact"
            ref={containerRef}
            className="relative py-10 md:py-20 px-0 md:px-12 bg-background overflow-hidden"
        >
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

            {/* Glowing orb */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col space-y-8"
                    >
                        <div>
                            <motion.span variants={itemVariants} className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                                Contact
                            </motion.span>
                            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
                                Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">extraordinary.</span>
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed font-inter max-w-md">
                                Whether you have a project in mind, want to collaborate, or just want to say hi, my inbox is always open.
                            </motion.p>
                        </div>

                        <motion.div variants={itemVariants} className="flex flex-col space-y-6 pt-4">
                            <Link href="mailto:jidanjiyaj03@gmail.com" className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 w-fit">
                                <span className="p-3 bg-secondary/20 rounded-xl group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                                    <Mail className="w-6 h-6" />
                                </span>
                                <span className="text-lg font-medium font-inter">jidanjiyaj03@gmail.com</span>
                            </Link>

                            <Link href="https://www.linkedin.com/in/md-abu-sufian-jidan" target="_blank" className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 w-fit">
                                <span className="p-3 bg-secondary/20 rounded-xl group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </span>
                                <span className="text-lg font-medium font-inter">LinkedIn</span>
                            </Link>

                            <Link href="https://github.com/Md-Sufian-Jidan" target="_blank" className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 w-fit">
                                <span className="p-3 bg-secondary/20 rounded-xl group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                                    <Github className="w-6 h-6" />
                                </span>
                                <span className="text-lg font-medium font-inter">GitHub</span>
                            </Link>
                            <Link href="https://wa.me/8801906844598" target="_blank" className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 w-fit">
                                <span className="p-3 bg-secondary/20 rounded-xl group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                                    <FaWhatsapp className="w-6 h-6" />
                                </span>
                                <span className="text-lg font-medium font-inter">Whatsapp</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <div className="relative">
                        {/* Decorative borders for that sci-fi/aceternity feel */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-primary/0 rounded-3xl blur opacity-30 z-0" />

                        <form
                            ref={formRef}
                            className="relative bg-background/40 backdrop-blur-xl border border-primary/10 p-4 sm:p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-6 z-10"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name" className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full bg-secondary/5 border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-muted-foreground/30 font-inter"
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email" className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-secondary/5 border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-muted-foreground/30 font-inter"
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="message" className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-secondary/5 border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all overflow-hidden resize-none placeholder:text-muted-foreground/30 font-inter"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full overflow-hidden rounded-xl bg-primary px-6 py-4 mt-2 transition-transform hover:scale-[1.02] active:scale-95"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <div className="relative flex items-center justify-center gap-2 text-primary-foreground font-semibold tracking-wide">
                                    <span>Send Message</span>
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
