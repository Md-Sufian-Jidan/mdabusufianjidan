"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TECH_STACK } from "@/data/public/data";
import { getIconComponent } from "@/components/shared/iconMapper";

export default function Technologies() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section id="tech" className="relative py-24 bg-background overflow-hidden">
            {/* Architectural Blueprint Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={containerRef}>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 tracking-[0.3em] font-black">
                        ENGINEERING / 02
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
                        The Tech <span className="text-primary italic">Foundation</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
                        A curated stack designed for structural integrity, performance, and scalability.
                    </p>
                </motion.div>

                {/* Tech Grid Categorized */}
                <div className="space-y-20">
                    {Object.entries(TECH_STACK).map(([category, items], catIdx) => {
                        const Icon = getIconComponent(items.icon);
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: catIdx % 2 === 0 ? -20 : 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: catIdx * 0.2 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-sm font-black uppercase tracking-widest text-primary/50">0{catIdx + 1}</span>
                                    <h3 className="text-2xl font-serif font-bold">{category}</h3>
                                    <div className="h-[1px] flex-1 bg-primary/10" />
                                </div>

                                <HoverEffect items={items} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

// Internal Icon Utility
function Globe({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    );
}