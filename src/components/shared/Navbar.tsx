"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/public/data";
import { ModeToggle } from "./ModeToggle";
import { getIconComponent } from "./iconMapper";

const sectionIdFromHref = (href: string) => (href === "/" ? "home" : href.replace("#", ""));

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const isHomePage = pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!isHomePage) return;

        const handleSectionSpy = () => {
            const sections = navLinks.map((link) => sectionIdFromHref(link.href));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleSectionSpy);
        handleSectionSpy();
        return () => window.removeEventListener("scroll", handleSectionSpy);
    }, [isHomePage]);

    return (
        <header
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-500 px-4 flex justify-center",
                scrolled ? "top-4" : "top-0"
            )}
        >
            <nav
                className={cn(
                    "w-full container mx-auto transition-all duration-500 rounded-2xl border flex items-center justify-between px-4 md:px-6",
                    scrolled
                        ? "bg-background/80 backdrop-blur-xl border-border shadow-lg py-4"
                        : "bg-transparent border-transparent py-5"
                )}
            >
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3 relative">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:rotate-12 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                        <Code2 className="text-primary-foreground fill-current" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        Sufian<span className="text-primary">.</span>
                    </span>
                </Link>

                {/* Desktop Menu - Floating Pill Style */}
                <div className="hidden md:flex items-center gap-1 bg-muted/50 p-1 rounded-xl border border-border/50 backdrop-blur-sm">
                    {navLinks.map((item) => {
                        const sectionId = sectionIdFromHref(item.href);
                        const isActive = isHomePage && activeSection === sectionId;
                        const Icon = getIconComponent(item.icon)
                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => router.push(item.href)}
                                className={cn(
                                    "relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-background rounded-lg shadow-sm -z-10 border border-border/40"
                                        transition={{ type: "spring", duration: 0.6 }}
                                    />
                                )}
                                <Icon size={14} className={cn(isActive ? "opacity-100" : "opacity-60")} />
                                {item.title}
                            </Link>
                        );
                    })}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <ModeToggle />

                    <Button
                        asChild
                        className="hidden lg:flex rounded-xl px-6 bg-primary hover:bg-primary/90 text-primary-foreground h-10 font-bold transition-all hover:scale-105 shadow-md shadow-primary/10"
                    >
                        <Link href="#contact" onClick={() => router.push("#contact")}>Hire Me</Link>
                    </Button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 p-2 text-foreground"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-background/98 z-40 flex flex-col pt-24 px-8 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, i) => {
                                const Icon = getIconComponent(link.icon);
                                return (
                                    <motion.div
                                        key={link.title}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => { setOpen(false); router.push(link.href); }}
                                            className="flex items-center gap-4 py-4 text-2xl font-bold border-b border-border transition-colors hover:text-primary"
                                        >
                                            <Icon className="text-primary w-6 h-6" />
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                            <Button
                                onClick={() => { setOpen(false); router.push("#contact"); }}
                                className="mt-8 w-full h-14 rounded-2xl text-lg font-bold"
                                asChild
                            >
                                <Link href="#contact">Get a Quote</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;