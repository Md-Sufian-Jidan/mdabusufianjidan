"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Code2, ArrowUpRight, ChevronUp } from "lucide-react";
import { navLinks, socialLinks } from "@/data/public/data";
import { getIconComponent } from "./iconMapper";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".footer-content",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 95%",
                    },
                }
            );

            gsap.fromTo(
                ".footer-glow",
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top bottom",
                    },
                }
            );
        }, footerRef);

        // Show/hide scroll to top button based on scroll position
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            ctx.revert();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <footer
            ref={footerRef}
            className="relative border-t border-primary/20 bg-background overflow-hidden pt-16 pb-8"
        >
            {/* Ambient Backlight */}
            <div className="footer-glow absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] pointer-events-none rounded-t-full" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-10 relative z-10 footer-content">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Details */}
                    <div className="md:col-span-5 flex flex-col items-start">
                        <Link href="/" className="group flex items-center gap-3 mb-6 relative">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:rotate-12 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                <Code2 className="text-primary-foreground fill-current" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                Sufian<span className="text-primary">.</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed font-inter max-w-sm mb-6">
                            Architecting digital experiences. Specialized in building seamless, responsive, and performance-driven applications using the modern web stack.
                        </p>

                        {/* Interactive Availability Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm shadow-[0_0_10px_rgba(var(--primary),0.1)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-mono text-primary font-medium tracking-wide">
                                Available for opportunities
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3 md:col-start-7 text-left">
                        <h3 className="font-mono text-foreground font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-primary/50 block"></span>
                            Explore
                        </h3>
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col space-y-4 font-inter"
                        >
                            {navLinks.map((link) => (
                                <motion.li key={link.href} variants={itemVariants}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <span className="relative overflow-hidden">
                                            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                                {link.title}
                                            </span>
                                            <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-primary">
                                                {link.title}
                                            </span>
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Connect */}
                    <div className="md:col-span-3 text-left">
                        <h3 className="font-mono text-foreground font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-primary/50 block"></span>
                            Connect
                        </h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 font-inter"
                        >
                            {socialLinks.map((link) => {
                                return (
                                    <motion.a
                                        variants={itemVariants}
                                        key={link.href}
                                        href={link.href}
                                        target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors p-3 -mx-3 rounded-lg hover:bg-secondary/10"
                                    >
                                        <div className="flex items-center gap-3">
                                            <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                                            <span>{link.title}</span>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
                                    </motion.a>
                                )
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-inter">
                    <p className="flex items-center gap-1">
                        © {new Date().getFullYear()} Md Abu Sufian Jidan <span className="hidden sm:inline">· Crafted in Bangladesh.</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                        Built with
                        <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-default">Love</span>,
                        <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-default">Care</span>, and
                        <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-default">Happiness</span>
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: showScrollTop ? 1 : 0, 
                    scale: showScrollTop ? 1 : 0.8,
                    y: showScrollTop ? 0 : 20
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    showScrollTop ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <ChevronUp className="w-6 h-6 mx-auto" />
            </motion.button>
        </footer>
    );
}
