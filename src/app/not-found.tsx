"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background px-4">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-2xl"
                />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="relative z-10 text-center max-w-2xl"
            >
                {/* 404 Number with Animation */}
                <div className="mb-8">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="relative inline-block"
                    >
                        <h1 className="text-8xl md:text-9xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 tracking-tight">
                            404
                        </h1>
                        {/* Animated underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-4 origin-left"
                        />
                    </motion.div>
                </div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Oops! The page you&apos;re looking for seems to have wandered off the server. 
                        Let me take you back to <span className="text-primary font-semibold">home</span>.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        asChild
                        className="rounded-xl px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground h-auto transition-all hover:scale-105 shadow-lg shadow-primary/20"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Home size={20} />
                            Back to Home
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="rounded-xl px-8 py-6 text-base font-semibold h-auto border-border/50 hover:bg-muted/50"
                    >
                        <Link href="#about" className="flex items-center gap-2">
                            View My Work
                            <ChevronRight size={20} />
                        </Link>
                    </Button>
                </motion.div>

                {/* Animated Grid Pattern */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
                >
                    <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                </motion.div>
            </motion.div>
        </div>
    );
}