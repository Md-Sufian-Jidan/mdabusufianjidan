"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-300">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={cn(
                    "flex items-center justify-between px-6 py-2 transition-all duration-500 rounded-full container mx-auto border",
                    scrolled
                        ? "glass shadow-lg border-border/40 py-2"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
                    >
                        <span className="text-primary-foreground font-bold text-sm">ASJ</span>
                    </motion.div>
                    <span className="font-bold tracking-tighter text-lg hidden sm:block">
                        Abu Sufian<span className="text-primary">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation - Aceternity Inspired Hover */}
                <div className="hidden md:flex items-center gap-1 relative">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                                pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <AnimatePresence>
                                {hoveredIdx === idx && (
                                    <motion.span
                                        layoutId="nav-hover-pill"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                    />
                                )}
                            </AnimatePresence>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    <ModeToggle />

                    <Button
                        asChild
                        className="hidden md:flex rounded-full bg-primary hover:bg-secondary text-primary-foreground px-6 group transition-all duration-300"
                    >
                        <a href="https://calendly.com/jidanjiyay03" target="_blank">
                            Book a Call
                            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden rounded-full hover:bg-primary/10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? <X key="x" className="w-5 h-5" /> : <Menu key="m" className="w-5 h-5" />}
                        </AnimatePresence>
                    </Button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-20 left-4 right-4 p-6 glass border-border/40 rounded-3xl md:hidden z-50 shadow-2xl"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-2xl font-semibold px-4 py-2 rounded-2xl transition-all",
                                        pathname === link.href ? "bg-primary/10 text-primary italic pl-6" : "text-muted-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="h-px bg-border/50 my-2" />
                            <Button asChild className="w-full rounded-2xl py-6 text-lg bg-primary">
                                <a href="https://calendly.com/jidanjiyay03" target="_blank">Book a Call</a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}