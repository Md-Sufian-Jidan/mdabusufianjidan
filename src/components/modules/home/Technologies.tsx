"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TECH_STACK } from "@/data/public/data";
import { cn } from "@/lib/utils";

export default function Technologies() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="technologies"
            ref={ref}
            className="relative py-10 md:py-20 px-0 md:px-12 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* HEADER */}
                <div className="text-center mb-16 sm:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
                    >
                        Tech Stack
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight"
                    >
                        Technologies I <span className="italic text-primary">Work With</span>
                    </motion.h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(TECH_STACK).map(([category, items], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative rounded-xl border border-white/10 bg-background/60 backdrop-blur-xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

                            {/* Category Title */}
                            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-foreground">
                                {category}
                            </h3>

                            {/* ITEMS */}
                            <div className="flex flex-wrap gap-2">
                                {items.map((tech: any, i: number) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -4 }}
                                        className={cn(
                                            "px-3 py-1.5 text-xs sm:text-sm rounded-xl border border-primary/10 bg-primary/5 text-muted-foreground",
                                            "hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                                        )}
                                    >
                                        {tech.title || tech.name}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative Line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}